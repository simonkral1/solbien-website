/* Read-only visual/content audit of public SOLBIEN pages. */
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const base="https://www.solbien.com", date="2026-11-26";
const dir=path.join("audit-results",date);
const routes=["/","/about","/contacts","/solutions","/products","/products/ewa","/products/biocon","/products/bios","/products/bewabox"];
const views=[{name:"desktop",w:1440,h:900,mobile:false},{name:"mobile",w:390,h:844,mobile:true}];
const suspicious=[
"all necessary certifications","all certifications","highest standards of safety",
"no longer require handling as waste","safe and non-infectious","completely eliminates",
"complete sanitization","free from unpleasant odors","without odor",
"within just a few hours","best on the market","guarantee","patented",
"~10,000 t/year","~16,000 t/year","~20,000 t/year",
"from 30 m³","functional internal volume 30 m³","48-72 hours",
"development-stage","prototype validation","© 2024"];
function slug(u){return u==="/"?"home":u.slice(1).replace(/\//g,"-")}
async function main(){
 fs.mkdirSync(dir,{recursive:true});
 const browser=await chromium.launch({headless:true,executablePath:process.env.AUDIT_CHROME||undefined,args:["--no-sandbox"]});
 const data=[],linkMap=new Map();
 try{
  for(const v of views){
   const context=await browser.newContext({
    viewport:{width:v.w,height:v.h},deviceScaleFactor:1,
    userAgent:v.mobile?"Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36":undefined,
    isMobile:v.mobile,hasTouch:v.mobile,locale:"en-US",
    reducedMotion:"reduce"
   });
   for(const route of routes){
    const page=await context.newPage();
    const item={route,view:v.name,url:base+route,errors:[],consoleErrors:[]};
    page.on("pageerror",e=>item.errors.push(String(e).slice(0,450)));
    page.on("console",msg=>{if(msg.type()==="error"&&item.consoleErrors.length<10)item.consoleErrors.push(msg.text().slice(0,300))});
    try{
     let response=await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:45000});
     item.httpStatus=response?.status()||0;
     await page.waitForLoadState("networkidle",{timeout:8000}).catch(()=>{});
     await page.evaluate(()=>document.fonts?.ready).catch(()=>{});
     await page.waitForTimeout(1000);
     item.audit=await page.evaluate(({host,terms})=>{
      const txt=(document.body?.innerText||"").replace(/\s+/g," ").trim();
      const all=[...document.querySelectorAll("img")];
      const images=all.map(i=>{
       const r=i.getBoundingClientRect(),p=i.parentElement?.getBoundingClientRect();
       return {alt:i.getAttribute("alt")||"",src:(i.currentSrc||i.src||"").slice(0,250),
       broken:i.complete&&i.naturalWidth===0,loaded:i.complete,natural:[i.naturalWidth,i.naturalHeight],
       displayed:[Math.round(r.width),Math.round(r.height)],
       fit:getComputedStyle(i).objectFit,
       parentRatio:p&&p.height?+(p.width/p.height).toFixed(2):null,
       fullData:i.getAttribute("src")||""}
      });
      const anchors=[...document.querySelectorAll("a[href]")].map(a=>({href:a.getAttribute("href"),text:(a.innerText||a.getAttribute("aria-label")||"").trim().slice(0,90)}));
      const buttons=[...document.querySelectorAll("button")].map(b=>({label:(b.innerText||b.getAttribute("aria-label")||"").trim().slice(0,90),hasName:!!((b.innerText||"").trim()||b.getAttribute("aria-label")||b.getAttribute("title"))}));
      const width=Math.max(document.documentElement.scrollWidth,document.body?.scrollWidth||0);
      return {
        title:document.title,description:document.querySelector('meta[name="description"]')?.content||"",
        canonical:document.querySelector('link[rel="canonical"]')?.href||null,
        lang:document.documentElement.lang||null,
        h1:[...document.querySelectorAll("h1")].map(x=>x.innerText.trim()),
        h2:[...document.querySelectorAll("h2")].map(x=>x.innerText.trim()).slice(0,18),
        textLength:txt.length,firstText:txt.slice(0,1500),fullText:txt.slice(0,40000),
        dangerousPhrases:terms.filter(s=>txt.toLowerCase().includes(s.toLowerCase())),
        horizontalOverflow:width-window.innerWidth,documentWidth:width,
        brokenImages:images.filter(i=>i.broken),
        images:images.slice(0,35),buttons,anchors:anchors.slice(0,150),
        imagesMissingAlt:images.filter(i=>!i.alt).length,
        buttonsMissingName:buttons.filter(b=>!b.hasName).length
      };
     },{host:base,terms:suspicious});
     const shot=path.join(dir,slug(route)+"-"+v.name+".jpg");
     await page.screenshot({path:shot,type:"jpeg",quality:70,fullPage:true,animations:"disabled",timeout:25000});
     item.screenshot=shot;
     if(v.name==="desktop"){
      let language={switchFound:false};
      try{
       const cs=page.getByRole("button",{name:"CS",exact:true}).first();
       if(await cs.count() && await cs.isVisible()){
         language.switchFound=true;
         const before=item.audit.h1[0]||"";
         await cs.click({timeout:5000});
         await page.waitForTimeout(900);
         language.afterH1=await page.locator("h1").first().innerText().catch(()=>"");
         language.afterLang=await page.locator("html").getAttribute("lang").catch(()=>null);
         language.changed=before!==language.afterH1;
         language.afterSample=(await page.locator("body").innerText()).replace(/\s+/g," ").slice(0,1500);
         const csp=path.join(dir,slug(route)+"-cs-desktop.jpg");
         await page.screenshot({path:csp,type:"jpeg",quality:70,fullPage:true,animations:"disabled",timeout:25000});
         language.screenshot=csp;
       } else {
         language.switchFound=false;
         language.buttonLabels=item.audit.buttons.map(b=>b.label).filter(Boolean).slice(0,15);
       }
      }catch(e){language.error=String(e).slice(0,200)}
      item.czech=language;
      for (const a of item.audit.anchors){
       const h=a.href;
       if(!h||h.startsWith("#")||h.startsWith("mailto:")||h.startsWith("tel:")||h.startsWith("javascript:"))continue;
       try{
        const u=new URL(h,base+route);
        if(u.origin===base){
         u.hash="";const normalized=u.toString();
         if(!linkMap.has(normalized))linkMap.set(normalized,{url:normalized,onRoutes:[]});
         linkMap.get(normalized).onRoutes.push(route);
        }
       }catch{}
      }
     }
    } catch(e){item.error=String(e).slice(0,1200)}
    data.push(item);await page.close();
    console.log("Audited",v.name,route,item.httpStatus||item.error,item.audit?.horizontalOverflow||0);
   }
   await context.close();
  }
  const request=await browser.newContext({ignoreHTTPSErrors:true});
  for(const target of linkMap.values()){
    try{
      const response=await request.request.get(target.url,{timeout:20000,maxRedirects:4});
      target.status=response.status();
      target.type=response.headers()["content-type"]||"";
    }catch(e){target.error=String(e).slice(0,350)}
  }
  const extra={};
  for(const url of ["/robots.txt","/sitemap.xml","/this-route-does-not-exist-20261126"]){
    try{const r=await request.request.get(base+url,{timeout:20000}); extra[url]={status:r.status(),type:r.headers()["content-type"]||"",head:(await r.text()).slice(0,550)}}
    catch(e){extra[url]={error:String(e).slice(0,250)}}
  }
  await request.close();
  const json={date,base,generatedAt:new Date().toISOString(),routes,viewports:views,
   results:data,links:[...linkMap.values()],extra};
  fs.writeFileSync(path.join(dir,"results.json"),JSON.stringify(json,null,2));
  const badLinks=json.links.filter(x=>x.status>=400||x.error);
  const problematic=data.filter(x=>x.error||x.httpStatus>=400||x.audit?.brokenImages.length||x.audit?.horizontalOverflow>5||x.errors.length);
  const lines=[
    "# SOLBIEN – automated live-site audit ("+date+")",
    "",
    "Read-only audit. Site was not modified. Screenshots show browser render on GitHub Ubuntu runner.",
    "Inspected "+routes.length+" routes, desktop 1440 × 900 and mobile 390 × 844.",
    "Results: "+data.length+" viewport page inspections; "+json.links.length+" internal linked URLs.",
    "Problematic viewports: "+problematic.length+". Broken internal URLs: "+badLinks.length+".",
    "",
    "## Page summary",
    "",
    "| Path | Desktop HTTP | Mobile HTTP | Desktop overflow px | Mobile overflow px | Broken images | Czech language control |",
    "|---|---:|---:|---:|---:|---:|---|",
  ];
  for(const route of routes){
    const d=data.find(x=>x.route===route&&x.view==="desktop"),m=data.find(x=>x.route===route&&x.view==="mobile");
    lines.push("| "+route+" | "+(d.httpStatus||"ERR")+" | "+(m.httpStatus||"ERR")+" | "+(d.audit?.horizontalOverflow??"-")+" | "+(m.audit?.horizontalOverflow??"-")+" | "+((d.audit?.brokenImages.length||0)+(m.audit?.brokenImages.length||0))+" | "+(d.czech?.switchFound?(d.czech.changed?"changes H1":"check result"):"not found")+" |");
  }
  lines.push("","## Bad internal links");
  for(const link of badLinks)lines.push("- "+link.status+" "+link.url+" (from "+link.onRoutes.join(",")+") "+(link.error||""));
  if(!badLinks.length)lines.push("No failed internal link requests in this run.");
  lines.push("","## Other endpoints",...Object.entries(extra).map(([x,v])=>"- "+x+": "+(v.status||v.error)));
  lines.push("","## Screenshots","",...data.filter(x=>x.screenshot).map(x=>"- "+x.route+" / "+x.view+": "+x.screenshot));
  fs.writeFileSync(path.join(dir,"SUMMARY.md"),lines.join("\n")+"\n");
  console.log("SUMMARY",JSON.stringify({screenshots:data.filter(x=>x.screenshot).length,brokenInternal:badLinks.length,problematic:problematic.length}));
 }finally{await browser.close()}
}
main().catch(e=>{console.error(e);process.exit(1)});
