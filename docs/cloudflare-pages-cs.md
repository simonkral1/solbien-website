# SOLBIEN · Založení Cloudflare Pages a převzetí webu

Pracovní postup z 26. 11. 2026 pro správce webu a správce domény. Zdroj je v repozitáři `simonkral1/solbien-website`. Na testovací projekt patří přesně ten commit větve `migration/cloudflare-pages`, který prošel kontrolou **Cloudflare static export preflight**. Vlastník SOLBIEN schvaluje samostatně testovací zveřejnění, změnu produkce a odstavení Vercelu.

## 1. Založení testovacího projektu

1. Přihlaste se do firemního účtu na [dash.cloudflare.com](https://dash.cloudflare.com/), případně jej založte na adrese spravované SOLBIEN, potvrďte e-mail a nastavte vícefaktorové ověření a zastupitelnost správce. Pro tento projekt stačí tarif Free. Registrace domény ani změna nameserverů k testu nejsou potřeba.
2. Otevřete **Workers & Pages → Create application → Pages → Import an existing Git repository**. Zvolte GitHub, u aplikace Cloudflare povolte přístup k repozitáři **simonkral1/solbien-website**, vyberte jej a otevřete **Begin setup**.
3. Vyplňte hodnoty v tabulce. Volba *Production branch* zde určuje hlavní adresu testovacího projektu na `pages.dev`. Firemní doménu nastaví správce až ve schváleném okně přepnutí.

| Pole | Hodnota |
| --- | --- |
| Project name | `solbien-web`, je-li dostupný. Skutečný název a přidělenou adresu zapište do protokolu. |
| Production branch pro první test | `migration/cloudflare-pages` |
| Framework preset | `Next.js (Static HTML Export)` |
| Root directory | Ponechat prázdné, projekt je v kořeni repozitáře. |
| Build command | `pnpm install --frozen-lockfile && pnpm build && python3 scripts/check_static_export.py` |
| Build output directory | `out` |
| Build system | v3 |
| Build environment variables | `NODE_VERSION=22.23.4`, `PNPM_VERSION=9.15.9`, `SKIP_DEPENDENCY_INSTALL=1`. Poslední proměnná ponechá jedinou instalaci v příkazu výše. Shodně nastavit pro Production i Preview. |

4. **Save and Deploy** veřejně zpřístupní testovací kopii na přidělené adrese `*.pages.dev`. Spusťte jej až po souhlasu s tímto krokem. Po doběhnutí otevřete **Deployments → poslední nasazení → build log**, porovnejte SHA s GitHubem a ověřte výsledek kontrolního skriptu. Uložte adresu konkrétního nasazení i adresu projektu.
5. V **Settings → Builds & deployments → Branch control** nastavte pro první test automatické náhledy ostatních větví na **None**. Zvažte vypnutí automatických produkčních nasazení mezi jednotlivými schválenými testy. Výchozí náhledy mohou být veřejné. Ochranu přístupu ověřte z anonymního okna přímo na používané adrese, včetně hlavní adresy projektu.
6. Při neúspěchu ověřte nejprve SHA, připnutí nástrojů, kořen, příkaz a výstupní adresář. Současný build stahuje písmo Inter z Google Fonts a exportuje ho do místních souborů. V logu rozlište chybu stažení písma od chyby odkazu nebo chybějící HTML trasy. Pro opakování vyberte stejné nasazení a stejný commit.

[Statický export](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) · [Build environment](https://developers.cloudflare.com/pages/configuration/build-image/) · [Nastavení buildu](https://developers.cloudflare.com/pages/configuration/build-configuration/) · [Řízení větví](https://developers.cloudflare.com/pages/configuration/branch-build-controls/) · [Přístup k náhledům](https://developers.cloudflare.com/pages/configuration/preview-deployments/)

## 2. Akceptační testy

Pro každý běh zapište datum a čas, prostředí, commit, URL, prohlížeč a rozměry, jazyk, výsledek a odkaz na log nebo snímek. Každá závada má konkrétní trasu a postup zopakování. Náhled porovnávejte se současnou produkcí ve stejném jazyce a rozlišení.

| Co ověřit | Způsob ověření a podmínka přijetí |
| --- | --- |
| Reprodukovatelnost | V čistém checkoutu spusťte příkaz z tabulky se stejnými verzemi nástrojů. Zkontrolujte úspěšné sestavení i kontrolu exportu. Současná konfigurace při buildu vynechává ESLint a typovou kontrolu. |
| Rozsah exportu | Zkontrolujte `/`, `/about`, `/solutions`, `/contacts`, `/products`, `/products/ewa`, `/products/biocon`, `/products/bios`, `/products/bewabox`. Na Pages otevřete každou přímo, obnovte a přejděte na ni odkazem. Konečný stav 200 a obsah odpovídající trase. Náhodná neexistující URL musí vrátit skutečný HTTP 404. |
| Jazyky a vzhled | Devět tras × EN/CS × šířky 320, 390, 768, 1440 px. Porovnejte nadpisy, navigaci, text, patičku, ořez obrázků, čitelnost, posun mimo obrazovku a pořadí prvků. Zopakujte přepnutí a obnovení; vybraný jazyk musí zůstat. Na Pages doplňte Chromium, Firefox a mobilní Safari. |
| Navigace a kontakty | Projděte horní menu na počítači i telefonu, loga, patičku, karty a hlavní tlačítka, historii zpět/vpřed a přímé produktové odkazy. Zkontrolujte původní telefon a e-mail, na úvodu cíle odkazů tel a mailto; kontaktní stránka zobrazuje i prostý text. |
| Obrázky a výkon | Zakažte cache, projeďte každou stránku až dolů. Všech šest migrovaných WebP musí přijít ze stejného hostitele, s typem image/webp a bez chyb dekódování. Porovnejte motiv, průhlednost, rozložení a ostrost. Porovnejte součet obrazových dat na stejné trase. |
| Síť a runtime | V DevTools zapněte Preserve log. Projděte navigaci, změnu jazyka a všechny interakce. Zkontrolujte konzoli, HTML, CSS, JS, písma a požadavky včetně /_next/. Ověřte, že pro zobrazení ani přechody není potřeba Vercel, v0, serverový endpoint či služba pro optimalizaci obrázků. Uložte záznam s výpisem cizích hostitelů. |
| PDF před schválením | Na každém ze čtyř detailů porovnejte horní a spodní odkaz s původním cílem. Jsou to čtyři stávající výjimky na blobs.vusercontent.net. Zaznamenejte nedostupný dokument a produkt. |
| PDF po schválení | Převzít od vlastníka verzi a SHA-256 pro každý soubor. Do public/docs/ vložit schválené listy pod názvy ewa-datasheet-en.pdf, biocon-datasheet-en.pdf, bios-datasheet-en.pdf a bewabox-datasheet-en.pdf. Upravit obě tlačítka daného produktu. U všech osmi odkazů ověřit HTTP 200, application/pdf, platnou signaturu, shodu hash, všechny strany A4, otevření a stažení na mobilu i PC. Před doménovým přepnutím musí být počet externích cílů Vercel/v0 nulový i při kliknutí na PDF. |
| Kapacita | Ve Free plánu zkontrolujte export do 20 000 souborů a nejvýše 25 MiB na soubor; build má proběhnout do 20 minut. Při přidání PDF zopakujte kontrolu. |
| SEO, TLS a přesměrování | Před změnou uložit skutečné chování HTTP/HTTPS, www/apex, cesty včetně parametrů, meta title/description, případných canonical, robots a sitemap. Po změně porovnat. Ověřit platný certifikát obou jmen, přesměrování bez smyčky a zachování cest/parametrů. Pravidla pro náhled nesmějí blokovat indexaci produkce. |
| Obnova | Na testovacím projektu nacvičit návrat k předchozímu funkčnímu nasazení, ověřit stránky a vrátit testovaný stav. Zaznamenat funkční původní Vercel deployment, vlastníka přístupů, oba DNS cíle, TTL a stav proxy. |

[Limity Pages](https://developers.cloudflare.com/pages/platform/limits/) · [Chování při servírování stránek](https://developers.cloudflare.com/pages/configuration/serving-pages/)

## 3. Přepnutí domény, pošta a návrat

1. **Před rozhodnutím.** Vyžádejte úplný export zóny a potvrzení správce pošty včetně používaných DKIM selektorů. Uložte současné NS a DS u registrátora, DNSSEC u poskytovatele, webové A/AAAA/CNAME, priority a cíle MX, adresy jejich serverů, SPF, DKIM, DMARC, CAA, SRV, Autodiscover, ověřovací záznamy, subdomény, wildcard a TTL. Veřejný DNS dotaz ani automatický import nejsou úplným soupisem. Z obou směrů proveďte referenční test pošty s externí schránkou a uložte výsledky ověření v hlavičkách.
2. **Příprava zóny.** Pro přímé připojení apexu solbien.com vyžaduje Pages zónu ve stejném účtu Cloudflare a delegaci na její nameservery. Samotné www může používat externí DNS s CNAME. Pokud Cloudflare ještě není autoritativní, připravte identickou zónu s dosavadními cíli webu na Vercelu. Se správcem porovnejte hodnoty záznam po záznamu na přidělených NS, včetně poštovních hostitelů v režimu DNS only. Email Routing neaktivujte. Případný DNSSEC/DS přechod naplánujte podle registrátora a poskytovatelů; nesmí vzniknout stav se starým DS a novým neodpovídajícím klíčem.
3. **Schválení a pořadí.** Podmínkou je zelený test přesného commitu, přijatý náhled, čtyři schválené lokální listy, ověřený DNS inventář, funkční pošta, cesta návratu a souhlas vlastníka. Případnou změnu delegace proveďte odděleně od změny webových cílů. Po propagaci nejprve ověřte původní web a poštu přes nové autoritativní NS. Nesplněná podmínka znamená odklad změny webového směrování.
4. **Zdroj produkce.** Před schváleným sloučením do main prověřte automatická nasazení Vercelu. Dosavadní ověřený produkční deployment a doménové aliasy zachovejte pro návrat. Zabraňte automatickému přesměrování produkčního aliasu Vercelu při merge, např. předem sjednaným pozastavením automatického nasazování main. Aktuální vercel.json blokuje automatické nasazení pouze z migrační větve. Po souhlasu slučte přesný zkontrolovaný obsah, nastavte produkční větev Pages na main a sestavte ji. Znovu potvrďte commit a funkci na pages.dev.
5. **Webové domény.** Ve schváleném okně otevřete Pages → projekt → Custom domains → Set up a domain. Přidejte potřebná jména, zkontrolujte nabízené změny a teprve potom potvrďte příslušné webové záznamy. U externí DNS pro www použijte CNAME na skutečný název projektu pages.dev až po přiřazení jména v Pages. U Cloudflare může potvrzení samo změnit DNS. Vyčkejte na aktivní TLS a otestujte z nezávislých sítí. Podle zjištěného a schváleného kanonického směru nastavte trvalé přesměrování s cestou a dotazem.
6. **Převzetí produkce.** Ihned a po uplynutí původních TTL ověřte všechny trasy, PDF, certifikáty, 404 a DNS z více resolverů. Odešlete poštu oběma směry mezi firemní a externí schránkou. Porovnejte doručení a výsledky SPF/DKIM/DMARC s referencí. Při výpadku webu obnovte přesné původní webové cíle a proxy režim v aktuálně autoritativní zóně. Při chybě pošty řešte rozdíl v poštovních záznamech nebo delegaci s jejím správcem. Změna hostingu webu sama poštu neopraví.
7. **Odstavení.** Dle původního manuálu sledujte provoz 7–14 dní v délce potvrzené vlastníkem. Po stabilizaci, prokázané nezávislosti včetně PDF a samostatném schválení odpojte Vercel a jeho GitHub integraci. Opakujte produkční testy a archivujte finální DNS, build log, commit, evidenci PDF a postup návratu.

[Vlastní domény](https://developers.cloudflare.com/pages/configuration/custom-domains/) · [Poštovní záznamy](https://developers.cloudflare.com/dns/manage-dns-records/how-to/email-records/) · [Řízení nasazení Vercelu](https://vercel.com/docs/project-configuration/git-configuration)

## 4. Protokol přípravy větve z 26. 11. 2026

Referenční zdroj obrázků je commit `7d6e9dd1813cf403d2ef829d91c8d99db57b5cf7`, adresář `public/images/migrated/`. Pracovní revize zachovává motiv, ořez i barevný profil. Snímek na stránce Solutions se zmenšil z 4000 × 1848 na 1600 × 739 px. Ostatních pět si ponechává rozlišení. Obrazové dvojice byly porovnány vedle sebe a u BIOCON byla ověřena shoda průhlednosti.

| Soubor WebP | Původní bajty | Nové bajty | SHA-256 WebP |
| --- | ---: | ---: | --- |
| bewabox-product.webp | 187 679 | 20 654 | `c107fc4bb2b5594e05f27b589e08523233691800947241e9a6debafababc5eb2` |
| biocon-product.webp | 239 279 | 22 500 | `f7880ec84a14ec33f1b9e02673e56927c1eca5d4f4292dba5f3bdd4ebd0a4227` |
| biocon-solutions.webp | 2 819 797 | 391 318 | `8b02165d59ec6e4b7d9a112269bfe662ddf696ccf7c4a6a91643c556d5afd821` |
| bios-product.webp | 116 213 | 73 168 | `da393c3821c5bf9218dc606fb9f4972c92f4ccc942681287c3796551631c6f48` |
| ewa-product.webp | 1 318 716 | 105 874 | `2bd7ad0072421705c8ad1a8bbd37d8b6767bfe83af804fafb475dc5c69e82535` |
| home-meadow.webp | 726 675 | 471 818 | `59ce29345a6d67314ab47716d45c100405a749d220df2dd297edc7fd3a54a4b5` |

- Celková velikost šesti souborů klesla z 5 408 359 B na 1 085 332 B (−79,93 %). Změnilo se 14 použití na sedmi stránkách.
- Lokální sestavení s Node 22.23.4 a pnpm 9.15.9 vytvořilo 78 souborů. Automat prošel všechny interní odkazy a zdroje v exportovaném HTML devíti tras a 404. Při zkušebním odebrání obrázku EWA v oddělené kopii odmítl export a vypsal všechny tři dotčené trasy.
- V aktivních stránkách zůstávají čtyři produktové PDF na blobs.vusercontent.net. Oba odkazy u každého produktu se shodují. U všech čtyř dokumentů server při čtení začátku PDF odpověděl 206, typem application/pdf a platnou signaturou. Finální listy čekají na schválení.
- Dvě staré obrazové adresy v archivním app/_backup/implementations-page.tsx nejsou ve výstupu. Generátor v0.app v metadatech je textový údaj. Balíček @vercel/analytics byl odebrán ze závislostí i ze zámku. Jednorázové zrcadlení z Vercelu, nasazovací workflow GitHub Pages a nepoužívaná simulační serverová akce byly z migrační větve odstraněny.
- Při porovnání s referenční verzí se na anglické /solutions při šířce 320 px objevil vodorovný přesah 11 px v kartách řešení. Migrační úprava dovoluje zalomit popisek jejich tří produktových tlačítek na displeji užším než 360 px. Texty zůstávají shodné s výchozí verzí.
- Kontrolu na skutečném Pages, TLS, firemní DNS a doručování pošty provede správce při příslušné etapě. Připojení firemního účtu Cloudflare nebylo doloženo.
