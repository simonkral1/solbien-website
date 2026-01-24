"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "EN" | "CS"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("EN")
  const [mounted, setMounted] = useState(false)

  // Load language preference from localStorage on client side
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "EN" || savedLanguage === "CS")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || translations["EN"][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations object
const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Header
    phone: "+420 605 902 903",
    email: "info@solbien.com",

    // Navigation
    products: "Products",
    solutions: "Solutions",
    implementations: "Implementations",
    about: "About",
    contacts: "Contacts",

    // Home page
    "hero.title": "Turning Today's Waste Into Tomorrow's Resources",
    "hero.subtitle":
      "We transform biodegradable waste into sustainable resources, contributing to soil fertility, water protection, biodiversity, and circular economy goals.",
    "hero.cta": "Discover Our Solutions",

    "core.title": "Our Core Technology",
    "core.aerobic.title": "Advanced Aerobic Fermentation",
    "core.aerobic.text1":
      "At Solbien, we specialize in developing innovative technologies to efficiently and sustainably process organic and biodegradable waste.",
    "core.aerobic.highlight": "Our state-of-the-art aerobic fermenters rapidly hygienize waste within just a few hours",
    "core.aerobic.text2":
      "Converting bio-waste into valuable substrates (soil improvers). Once processed, these materials no longer require handling as waste and become valuable products suitable for agricultural use, land reclamation, or as biofuel.",

    "core.municipal.title": "Municipal Waste Processing",
    "core.municipal.text1":
      "Our technology effectively processes the municipal waste undersize fraction from municipal waste sorting facilities.",
    "core.municipal.highlight":
      "This municipal waste undersize fraction typically contains up to 50% biodegradable waste, mixed plastics, and other combustible materials",
    "core.municipal.text2":
      "By rapidly sanitizing this fraction, we transform it into an energy-rich fuel suitable for efficient energy recovery, further enhancing waste-to-energy solutions and supporting sustainable resource management.",

    "why.title": "Why Choose Solbien Technologies?",
    "why.subtitle":
      "We turn biodegradable waste into sustainable resources, contributing to soil fertility, water protection, biodiversity, and circular economy goals.",

    "feature.eco.title": "Natural & Eco-Friendly Process",
    "feature.eco.desc":
      "Increases temperature naturally while minimizing greenhouse gas emissions and supporting climate protection",

    "feature.quality.title": "Certified Quality",
    "feature.quality.desc": "Complies with Regulation (EC) No. 1069/2009, ensuring the highest standards of safety",

    "feature.cost.title": "Cost Efficiency",
    "feature.cost.desc": "Reduces transportation and disposal costs significantly with energy-efficient operation",

    "feature.rapid.title": "Rapid Processing",
    "feature.rapid.desc":
      "Our aerobic fermentation technology drastically reduces processing time, improving efficiency and productivity.",

    "feature.sanitization.title": "Effective Sanitization",
    "feature.sanitization.desc":
      "Operating at temperatures up to 80°C through natural fermentation, our systems safely eliminate harmful pathogens, bacteria, viruses, and weed seeds, ensuring complete sanitization of all processed materials.",

    "waste.title": "Types of Waste We Can Process",

    "waste.food": "Food Waste (restaurants, canteens, catering facilities)",
    "waste.agricultural": "Agricultural Waste (crop residues, livestock manure, organic farm waste)",
    "waste.green": "Green Waste (garden waste, grass clippings, leaves, branches)",
    "waste.industrial": "Industrial Organic Waste (food processing industry waste, slaughterhouse waste)",
    "waste.municipal": "Municipal waste undersize fraction from Municipal Waste Sorting Facilities",
    "waste.biodegradable": "Biodegradable Components of Municipal Solid Waste",
    "waste.wood": "Wood and Paper Industry Waste",
    "waste.supermarket": "Organic Waste from Supermarkets and Retailers",
    "waste.compostable": "Compostable Packaging Materials and Textiles",

    "products.title": "Our Products",

    "biokon.title": "Aerobic Fermenter BIOKON",
    "biokon.subtitle":
      "Processing capacity 1000 t/year (functional internal volume 30 m³) for all biowaste including food waste. Easy transport and operational handling thanks to ABROLL solution.",
    "biokon.feature1": "Possibility of off-grid operation without connection to the power grid",
    "biokon.feature2": "The simplest, most accessible and cheapest technology for municipal and other biowaste",
    "biokon.feature3": "Simple plug and play installation",
    "biokon.feature4": "Fully automatic management of the aerobic fermentation process",
    "biokon.cta": "Learn More About BIOKON",
    "biokon.description":
      "BIOKON is our simplest fermentation technology offering an excellent price-performance ratio. It is specifically designed for ease of transportation and unloading using AB-roll trucks. Additionally, BIOKON can be equipped with photovoltaic panels, making it suitable for operation in off-grid locations.",
    "ewa.title": "Aerobic Fermenter EWA",
    "ewa.subtitle":
      "Processing capacity 1500 t/year (functional internal volume 36 m³) for all biowaste including food waste and wastewater treatment plant sludge requiring ETV.",
    "ewa.feature1": "Possibility of worldwide transport (modified ISO container 40 feet High Cube)",
    "ewa.feature2": "Simple plug and play installation",
    "ewa.feature3": "BAT technology, best on the market thanks to protected internal layering technology",
    "ewa.feature4": "All certifications for global deployment",
    "ewa.cta": "Learn More About EWA",
    "ewa.description":
      "EWA is our advanced aerobic fermenter designed for global deployment. It's built in a modified ISO container for easy worldwide transport and comes with all necessary certifications. The EWA fermenter is particularly suitable for processing food waste and wastewater treatment plant sludge.",
    "bios.title": "Aerobic Fermenter BIOS",
    "bios.subtitle":
      "Processing capacity tens of thousands of t/year, usable for large waste processors and cities. Available in 50 m³, 80 m³ or custom capacity precisely according to customer requirements.",
    "bios.feature1": "Possibility of inclusion directly after the sorting line processing municipal waste",
    "bios.feature2": "Unique patented technology for rapid hygienization of large volumes of biodegradable waste",
    "bios.feature3": "Enclosed space operation without odor",
    "bios.feature4": "Can also be operated as a hygienization device or dryer when using external heat",
    "bios.cta": "Learn More About BIOS",
    "bios.description":
      "BIOS is our high-capacity aerobic fermenter designed for large waste processors and cities. It can be integrated directly after municipal waste sorting lines and features our unique patented technology for rapid hygienization of large volumes of biodegradable waste.",

    "cta.title": "Let's Clean the Planet Together",
    "cta.subtitle":
      "Join us in our mission to create a more sustainable future through innovative ecological solutions.",
    "cta.button": "Contact Us Today",

    // Footer
    "footer.description":
      "Solutions for Bio Energy. Transforming waste into ecological solutions for a cleaner planet.",
    "footer.quicklinks": "Quick Links",
    "footer.contactus": "Contact Us",
    "footer.copyright": "© 2024 Solbien. All rights reserved.",

    // Back to home
    "back.home": "Back to Home",

    // Common buttons
    "button.learnmore": "Learn More",
    "button.contactus": "Contact Us",
    "button.exploreproducts": "Explore Our Products",

    // About page
    "about.title": "About Us",
    "about.subtitle": "Learn about our mission, vision, and commitment to sustainable waste management",
    "about.vision.title": "From Local Solutions to a Sustainable and Decarbonized Future",
    "about.team.title": "Our Team",
    "about.cta.title": "Join Us in Creating a Sustainable Future",
    "about.cta.subtitle":
      "Discover how our innovative solutions can help you transform waste into valuable resources while contributing to a cleaner planet.",
    "about.vision.paragraph1":
      "We firmly believe that addressing global environmental challenges begins at the local level. Our mission is to efficiently transform biodegradable waste into hygienically stabilized products, safely and sustainably usable in agriculture or energy production. By doing this, we directly contribute to mitigating the greenhouse effect and decarbonizing society, replacing fossil fuels and chemical fertilizers with natural alternatives.",
    "about.vision.paragraph2":
      "From the outset, our goal has been to develop technologies that are not only globally applicable but also environmentally friendly and supportive of sustainability. We specialize in designing and manufacturing innovative aerobic fermentation systems and drying technologies, emphasizing low energy consumption and renewable energy sources, such as photovoltaic systems, enabling operation even in remote, off-grid locations.",
    "about.vision.paragraph3":
      "Our patented technologies—BIOKON, EWA, BIOS, and BEWA—offer scalable solutions ranging from small local units to high-capacity facilities, flexibly meeting the diverse needs of regions and communities. Thanks to advanced control of the aerobic fermentation process, we can quickly and safely transform bio-waste into valuable compost and biofuel. This approach supports a circular economy by returning nutrients to the soil, helps municipalities, cities, and businesses effectively utilize waste materials, and positively impacts landscape biodiversity.",
    "about.vision.paragraph4":
      "Our vision is a world in which every local step leads to significant global change—toward cleaner air, healthier soil, societal decarbonization, and a sustainable future.",

    // CEO titles
    "team.ceo": "Chief Executive Officer (CEO)",
    "team.sales": "Sales Director",
    "team.technical": "Technical Director, Head of R&D",
    "team.environmental": "Environmental Project Manager",

    // Contact page
    "contact.title": "Contacts",
    "contact.subtitle": "Get in touch with our team to learn more about our products and solutions",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.person": "Contact Person",
    "contact.salesmanager": "Sales Manager",

    // Products page
    "products.page.title": "Our Products",
    "products.page.subtitle":
      "Discover our range of ecological aerobic fermenters designed for efficient biowaste processing",
    "products.cta.title": "Find the Right Solution for Your Needs",
    "products.cta.subtitle":
      "Not sure which product is right for you? Contact our team for expert advice tailored to your specific requirements.",

    // Solutions page
    "solutions.title": "Our Solutions",
    "solutions.subtitle": "Discover how our innovative aerobic fermenters can transform your waste management process",
    "solutions.intro.title": "Ecological Processing of Biodegradable Waste Using Aerobic Fermentation Technology",
    "solutions.overview.title": "Complete Waste Management Solutions",
    "solutions.overview.subtitle": "We offer comprehensive solutions for various waste management challenges",

    "solutions.municipal.title": "Municipal Waste Management",
    "solutions.municipal.desc":
      "Our solutions are ideal for municipalities looking to efficiently process biodegradable waste from residential areas, parks, and public spaces. The BIOKON and EWA fermenters can be easily integrated into existing waste management systems.",

    "solutions.highcapacity.title": "High-Capacity Solutions for Waste Processing",
    "solutions.highcapacity.desc":
      "Our BIOS fermenter is designed for industrial operations processing large volumes of biodegradable waste or the municipal waste undersize fraction from municipal waste sorting. Through rapid sanitization, we transform this material into energy-rich fuel suitable for efficient energy recovery.",

    "solutions.wastewater.title": "Wastewater Treatment Plants",
    "solutions.wastewater.desc":
      "Our EWA fermenter is specifically designed to handle sludge from wastewater treatment plants, providing an efficient and environmentally friendly solution for this challenging waste stream.",

    "solutions.agricultural.title": "Agricultural Applications",
    "solutions.agricultural.desc":
      "For farms and agricultural operations, our fermenters provide an excellent solution for managing animal waste, crop residues, and other agricultural by-products.",

    "solutions.process.title": "Our Process",
    "solutions.process.subtitle": "How our aerobic fermentation technology transforms waste into valuable resources",

    "solutions.step1.title": "Collection & Loading",
    "solutions.step1.desc":
      "Biodegradable waste is collected and loaded into the fermenter using standard equipment like front loaders.",

    "solutions.step2.title": "Aerobic Fermentation",
    "solutions.step2.desc":
      "The controlled fermentation process begins, with temperatures rising naturally to 70-80°C, eliminating pathogens.",

    "solutions.step3.title": "Monitoring & Control",
    "solutions.step3.desc":
      "Our automated systems monitor and control the process, ensuring optimal conditions for efficient fermentation.",

    "solutions.step4.title": "Unloading & Use",
    "solutions.step4.desc":
      "After 48-72 hours, the sanitized material is unloaded, ready for use as soil improver or further processing.",

    "solutions.applications.title": "Applications",
    "solutions.applications.subtitle": "Our technology can be applied to various waste streams and industries",

    "solutions.endproducts.title": "End Products",
    "solutions.endproducts.subtitle": "Our fermentation process creates valuable outputs from what was once waste",

    "solutions.soil.title": "Soil Improver",
    "solutions.biomass.title": "Biomass Fuel",

    "solutions.cta.title": "Ready to Transform Your Waste Management?",
    "solutions.cta.subtitle":
      "Contact us today to discuss how our solutions can address your specific waste management challenges.",

    // Implementations page
    "implementations.title": "Implementations",
    "implementations.subtitle": "Explore our successful projects and implementations around the world",
    "implementations.ewa.title": "EWA Aerobic Fermentor",
    "implementations.installations": "successful installations in",
    "implementations.countries": "countries",

    "implementations.waste": "Waste",
    "implementations.product": "Product",

    "implementations.cta.title": "Ready to Join Our Success Stories?",
    "implementations.cta.subtitle":
      "Contact us today to discuss how our solutions can address your specific waste management challenges.",

    // Product detail pages
    "product.advantages": "Main Advantages",
    "product.technical": "Technical Information",
    "product.optional": "Optional Features",

    // AFR page
    "afr.title": "Alternative Fuel Recovery",
    "afr.subtitle": "Coming soon - This page is under development",
    "afr.message":
      "We're currently updating our Alternative Fuel Recovery information. Please check back soon for details about our AFR solutions, or contact us directly for more information.",
    "afr.contact": "Contact Us for Information",

    // BIOKON optional features
    "biokon.optional.photovoltaic":
      "The fermenter can be equipped with a photovoltaic system for off-grid operation independent of connection to the electrical grid.",
    "biokon.optional.preheating":
      "The fermenter can be equipped with batch preheating for quick start of fermentation and certainty of sanitization.",
    "biokon.optional.biofilter":
      "The fermenter can be equipped with an integrated Biofilter for enhanced environmental performance.",
    "biokon.optional.customizable":
      "The parameters of the solution can be modified according to customer requirements for fermenter operation according to the installation location and seasons.",
    "biokon.optional.title.photovoltaic": "Photovoltaic System",
    "biokon.optional.title.preheating": "Batch Preheating",
    "biokon.optional.title.biofilter": "Integrated Biofilter",
    "biokon.optional.title.customizable": "Customizable Parameters",

    // BIOKON specifications
    "biokon.specs.capacity": "Capacity",
    "biokon.specs.weight": "Weight",
    "biokon.specs.max_batch_weight": "Maximum batch weight",
    "biokon.specs.length": "Length",
    "biokon.specs.width": "Width",
    "biokon.specs.height": "Height",
    "biokon.specs.power_supply": "Power supply",
    "biokon.specs.power_consumption_standby": "Power consumption - standby mode",
    "biokon.specs.power_consumption_aeration": "Power consumption during aeration",
    "biokon.specs.power_consumption_preheating": "Power consumption - with optional batch preheating",
    "biokon.specs.frame_hook_lift": "Frame and hook lift",
    "biokon.specs.frame_hook_lift_value": "According to DIN 30722",
    "biokon.specs.processing_capacity": "Processing capacity",

    // EWA specifications
    "ewa.specs.functional_volume": "Functional internal volume",
    "ewa.specs.processing_capacity": "Processing capacity",
    "ewa.specs.container_type": "Container type",
    "ewa.specs.container_type_value": "Modified ISO 40 feet High Cube",
    "ewa.specs.length": "Length",
    "ewa.specs.width": "Width",
    "ewa.specs.height": "Height",
    "ewa.specs.power_supply": "Power supply",
    "ewa.specs.power_consumption_standby": "Power consumption - standby mode",
    "ewa.specs.power_consumption_operation": "Power consumption during operation",
    "ewa.specs.sanitization_temperature": "Sanitization temperature",
    "ewa.specs.sanitization_temperature_value": "Up to 80°C",
    "ewa.specs.process_duration": "Process duration",
    "ewa.specs.hours": "hours",
    "ewa.specs.certifications": "Certifications",
    "ewa.specs.certifications_value": "EU Regulation No. 1069/2009",
  },
  CS: {
    // Header
    phone: "+420 605 902 903",
    email: "info@solbien.com",

    // Navigation
    products: "Produkty",
    solutions: "Řešení",
    implementations: "Realizace",
    about: "O nás",
    contacts: "Kontakty",

    // Home page
    "hero.title": "Přeměňujeme dnešní odpad na zdroje budoucnosti",
    "hero.subtitle":
      "Transformujeme biologicky rozložitelný odpad na udržitelné zdroje, přispíváme k úrodnosti půdy, ochraně vod, biodiverzitě a cílům cirkulární ekonomiky.",
    "hero.cta": "Objevte naše řešení",

    "core.title": "Naše klíčová technologie",
    "core.aerobic.title": "Pokročilá aerobní fermentace",
    "core.aerobic.text1":
      "Ve společnosti Solbien se specializujeme na vývoj inovativních technologií pro efektivní a udržitelné zpracování organického a biologicky rozložitelného odpadu.",
    "core.aerobic.highlight": "Naše špičkové aerobní fermentory rychle hygienizují odpad během pouhých několika hodin",
    "core.aerobic.text2":
      "Přeměňujeme bioodpad na hodnotné substráty (zlepšovače půdy). Po zpracování již tyto materiály nevyžadují nakládání jako s odpadem a stávají se cennými produkty vhodnými pro zemědělské využití, rekultivaci půdy nebo jako biopalivo.",

    "core.municipal.title": "Zpracování komunálního odpadu",
    "core.municipal.text1":
      "Naše technologie efektivně zpracovává podsítnou frakci komunálního odpadu z třídicích linek.",
    "core.municipal.highlight":
      "Tato podsítná frakce komunálního odpadu obvykle obsahuje až 50 % biologicky rozložitelného odpadu, směsných plastů a dalších hořlavých materiálů",
    "core.municipal.text2":
      "Rychlou hygienizací této frakce ji přeměňujeme na energeticky bohaté palivo vhodné pro efektivní energetické využití, čímž dále posilujeme řešení pro energetické využití odpadu a podporujeme udržitelné hospodaření se zdroji.",

    "why.title": "Proč zvolit technologie Solbien?",
    "why.subtitle":
      "Přeměňujeme biologicky rozložitelný odpad na udržitelné zdroje, přispíváme k úrodnosti půdy, ochraně vod, biodiverzitě a cílům cirkulární ekonomiky.",

    "feature.eco.title": "Přírodní a ekologický proces",
    "feature.eco.desc":
      "Přirozeně zvyšuje teplotu a minimalizuje emise skleníkových plynů, čímž podporuje ochranu klimatu",

    "feature.quality.title": "Certifikovaná kvalita",
    "feature.quality.desc": "Splňuje požadavky nařízení (ES) č. 1069/2009, zajišťující nejvyšší standardy bezpečnosti",

    "feature.cost.title": "Nákladová efektivita",
    "feature.cost.desc": "Výrazně snižuje náklady na přepravu a likvidaci díky energeticky účinnému provozu",

    "feature.rapid.title": "Rychlé zpracování",
    "feature.rapid.desc":
      "Naše technologie aerobní fermentace výrazně zkracuje dobu zpracování, čímž zvyšuje efektivitu a produktivitu.",

    "feature.sanitization.title": "Účinná hygienizace",
    "feature.sanitization.desc":
      "Provoz při teplotách až 80 °C prostřednictvím přirozené fermentace bezpečně eliminuje škodlivé patogeny, bakterie, viry a semena plevelů, zajišťující kompletní hygienizaci všech zpracovávaných materiálů.",

    "waste.title": "Typy odpadu, které dokážeme zpracovat",

    "waste.food": "Potravinový odpad (restaurace, jídelny, cateringová zařízení)",
    "waste.agricultural": "Zemědělský odpad (zbytky plodin, hnůj hospodářských zvířat, organický odpad z farem)",
    "waste.green": "Zelený odpad (zahradní odpad, posečená tráva, listí, větve)",
    "waste.industrial": "Průmyslový organický odpad (odpad z potravinářského průmyslu, odpad z jatek)",
    "waste.municipal": "Podsítná frakce komunálního odpadu z třídicích linek komunálního odpadu",
    "waste.biodegradable": "Biologicky rozložitelné složky komunálního pevného odpadu",
    "waste.wood": "Odpad z dřevozpracujícího a papírenského průmyslu",
    "waste.supermarket": "Organický odpad ze supermarketů a maloobchodů",
    "waste.compostable": "Kompostovatelné obalové materiály a textilie",

    "products.title": "Naše produkty",

    "biokon.title": "Aerobní fermentor BIOKON",
    "biokon.subtitle":
      "Zpracovatelská kapacita 1000 t/rok (funkční vnitřní objem 30 m³) pro veškerý bioodpad včetně potravinového odpadu. Snadná přeprava a provozní manipulace díky řešení ABROLL.",
    "biokon.feature1": "Možnost provozu off-grid bez připojení k elektrické síti",
    "biokon.feature2": "Nejjednodušší, nejdostupnější a nejlevnější technologie pro komunální a jiný bioodpad",
    "biokon.feature3": "Jednoduchá instalace plug and play",
    "biokon.feature4": "Plně automatické řízení procesu aerobní fermentace",
    "biokon.cta": "Více o BIOKONu",
    "biokon.description":
      "BIOKON je naše nejjednodušší fermentační technologie nabízející vynikající poměr ceny a výkonu. Je speciálně navržen pro snadnou přepravu a vykládku pomocí vozidel AB-roll. Navíc může být BIOKON vybaven fotovoltaickými panely, což jej činí vhodným pro provoz v místech bez připojení k elektrické síti.",
    "ewa.title": "Aerobní fermentor EWA",
    "ewa.subtitle":
      "Zpracovatelská kapacita 1500 t/rok (funkční vnitřní objem 36 m³) pro veškerý bioodpad včetně potravinového odpadu a kalů z čistíren odpadních vod vyžadujících ETV.",
    "ewa.feature1": "Možnost celosvětové přepravy (upravený ISO kontejner 40 stop High Cube)",
    "ewa.feature2": "Jednoduchá instalace plug and play",
    "ewa.feature3": "BAT technologie, nejlepší na trhu díky chráněné technologii vnitřního vrstvení",
    "ewa.feature4": "Všechny certifikace pro globální nasazení",
    "ewa.cta": "Více o EWA",
    "ewa.description":
      "EWA je náš pokročilý aerobní fermentor navržený pro globální nasazení. Je postaven v upraveném ISO kontejneru pro snadnou celosvětovou přepravu a je dodáván se všemi potřebnými certifikacemi. Fermentor EWA je zvláště vhodný pro zpracování potravinového odpadu a kalů z čistíren odpadních vod.",
    "bios.title": "Aerobní fermentor BIOS",
    "bios.subtitle":
      "Zpracovatelská kapacita desítky tisíc t/rok, použitelný pro velké zpracovatele odpadu a města. K dispozici v modelech 50 m³, 80 m³ nebo s vlastní kapacitou přesně podle požadavků zákazníka.",
    "bios.feature1": "Možnost zařazení přímo za třídicí linku zpracovávající komunální odpad",
    "bios.feature2":
      "Unikátní patentovaná technologie pro rychlou hygienizaci velkých objemů biologicky rozložitelného odpadu",
    "bios.feature3": "Provoz v uzavřeném prostoru bez zápachu",
    "bios.feature4": "Může být provozován také jako hygienizační zařízení nebo sušička při použití externího tepla",
    "bios.cta": "Více o BIOSu",
    "bios.description":
      "BIOS je náš vysokokapacitní aerobní fermentor navržený pro velké zpracovatele odpadu a města. Může být integrován přímo za třídicí linky komunálního odpadu a obsahuje naši unikátní patentovanou technologii pro rychlou hygienizaci velkých objemů biologicky rozložitelného odpadu.",

    "cta.title": "Pojďme společně čistit planetu",
    "cta.subtitle":
      "Připojte se k naší misi vytvářet udržitelnější budoucnost prostřednictvím inovativních ekologických řešení.",
    "cta.button": "Kontaktujte nás ještě dnes",

    // Footer
    "footer.description": "Řešení pro bio energii. Přeměňujeme odpad na ekologická řešení pro čistší planetu.",
    "footer.quicklinks": "Rychlé odkazy",
    "footer.contactus": "Kontaktujte nás",
    "footer.copyright": "© 2024 Solbien. Všechna práva vyhrazena.",

    // Back to home
    "back.home": "Zpět na úvodní stránku",

    // Common buttons
    "button.learnmore": "Zjistit více",
    "button.contactus": "Kontaktujte nás",
    "button.exploreproducts": "Prozkoumat naše produkty",

    // About page
    "about.title": "O nás",
    "about.subtitle": "Zjistěte více o naší misi, vizi a závazku k udržitelnému nakládání s odpady",
    "about.vision.title": "Od lokálních řešení k udržitelné a dekarbonizované budoucnosti",
    "about.team.title": "Náš tým",
    "about.cta.title": "Připojte se k nám při vytváření udržitelné budoucnosti",
    "about.cta.subtitle":
      "Zjistěte, jak vám naše inovativní řešení mohou pomoci přeměnit odpad na cenné zdroje a přispět k čistší planetě.",
    "about.vision.paragraph1":
      "Pevně věříme, že řešení globálních environmentálních výzev začíná na lokální úrovni. Naším posláním je efektivně přeměňovat biologicky rozložitelný odpad na hygienicky stabilizované produkty, bezpečně a udržitelně využitelné v zemědělství nebo při výrobě energie. Tímto přímo přispíváme ke zmírnění skleníkového efektu a dekarbonizaci společnosti, nahrazujeme fosilní paliva a chemická hnojiva přírodními alternativami.",
    "about.vision.paragraph2":
      "Od počátku bylo naším cílem vyvíjet technologie, které jsou nejen globálně aplikovatelné, ale také šetrné k životnímu prostředí a podporující udržitelnost. Specializujeme se na navrhování a výrobu inovativních systémů aerobní fermentace a sušicích technologií s důrazem na nízkou spotřebu energie a obnovitelné zdroje energie, jako jsou fotovoltaické systémy, umožňující provoz i v odlehlých lokalitách bez připojení k elektrické síti.",
    "about.vision.paragraph3":
      "Naše patentované technologie – BIOKON, EWA, BIOS a BEWA – nabízejí škálovatelná řešení od malých lokálních jednotek až po vysokokapacitní zařízení, flexibilně splňující různorodé potřeby regionů a komunit. Díky pokročilému řízení procesu aerobní fermentace můžeme rychle a bezpečně přeměnit bioodpad na hodnotný kompost a biopalivo. Tento přístup podporuje cirkulární ekonomiku návratem živin do půdy, pomáhá obcím, městům a podnikům efektivně využívat odpadní materiály a pozitivně ovlivňuje biodiverzitu krajiny.",
    "about.vision.paragraph4":
      "Naší vizí je svět, ve kterém každý lokální krok vede k významné globální změně – směrem k čistšímu ovzduší, zdravější půdě, dekarbonizaci společnosti a udržitelné budoucnosti.",

    // CEO titles - Assuming these are job titles
    "team.ceo": "Generální ředitel (CEO)",
    "team.sales": "Obchodní ředitel",
    "team.technical": "Technický ředitel, vedoucí R&D",
    "team.environmental": "Manažer environmentálních projektů",

    // Contact page
    "contact.title": "Kontakty",
    "contact.subtitle": "Spojte se s naším týmem a dozvíte se více o našich produktech a řešeních",
    "contact.address": "Adresa",
    "contact.phone": "Telefon",
    "contact.email": "E-mail",
    "contact.person": "Kontaktní osoba",
    "contact.salesmanager": "Obchodní manažer",

    // Products page
    "products.page.title": "Naše produkty",
    "products.page.subtitle":
      "Objevte naši řadu ekologických aerobních fermentorů navržených pro efektivní zpracování bioodpadu",
    "products.cta.title": "Najděte správné řešení pro vaše potřeby",
    "products.cta.subtitle":
      "Nejste si jisti, který produkt je pro vás vhodný? Kontaktujte náš tým pro odborné poradenství přizpůsobené vašim specifickým požadavkům.",

    // Solutions page
    "solutions.title": "Naše řešení",
    "solutions.subtitle": "Objevte, jak naše inovativní aerobní fermentory mohou transformovat váš proces nakládání s odpady",
    "solutions.intro.title":
      "Ekologické zpracování biologicky rozložitelného odpadu pomocí technologie aerobní fermentace",
    "solutions.overview.title": "Komplexní řešení pro nakládání s odpady",
    "solutions.overview.subtitle": "Nabízíme komplexní řešení pro různé výzvy v oblasti nakládání s odpady",

    "solutions.municipal.title": "Nakládání s komunálním odpadem",
    "solutions.municipal.desc":
      "Naše řešení jsou ideální pro obce, které chtějí efektivně zpracovávat biologicky rozložitelný odpad z obytných oblastí, parků a veřejných prostranství. Fermentory BIOKON a EWA lze snadno integrovat do stávajících systémů nakládání s odpady.",

    "solutions.highcapacity.title": "Vysokokapacitní řešení pro zpracování odpadu",
    "solutions.highcapacity.desc":
      "Náš fermentor BIOS je navržen pro průmyslové provozy zpracovávající velké objemy biologicky rozložitelného odpadu nebo podsítnou frakci komunálního odpadu z třídicích linek. Prostřednictvím rychlé hygienizace přeměňujeme tento materiál na energeticky bohaté palivo vhodné pro efektivní energetické využití.",

    "solutions.wastewater.title": "Čistírny odpadních vod",
    "solutions.wastewater.desc":
      "Náš fermentor EWA je speciálně navržen pro zpracování kalů z čistíren odpadních vod a poskytuje efektivní a ekologické řešení pro tento náročný odpadní proud.",

    "solutions.agricultural.title": "Zemědělské aplikace",
    "solutions.agricultural.desc":
      "Pro farmy a zemědělské provozy poskytují naše fermentory vynikající řešení pro nakládání se zvířecím odpadem, zbytky plodin a dalšími zemědělskými vedlejšími produkty.",

    "solutions.process.title": "Náš proces",
    "solutions.process.subtitle": "Jak naše technologie aerobní fermentace přeměňuje odpad na cenné zdroje",

    "solutions.step1.title": "Sběr a nakládka",
    "solutions.step1.desc":
      "Biologicky rozložitelný odpad je sbírán a nakládán do fermentoru pomocí standardního vybavení, jako jsou čelní nakladače.",

    "solutions.step2.title": "Aerobní fermentace",
    "solutions.step2.desc":
      "Začíná řízený proces fermentace, přičemž teploty přirozeně stoupají na 70-80 °C, což eliminuje patogeny.",

    "solutions.step3.title": "Monitorování a řízení",
    "solutions.step3.desc":
      "Naše automatizované systémy monitorují a řídí proces, zajišťují optimální podmínky pro efektivní fermentaci.",

    "solutions.step4.title": "Vykládka a využití",
    "solutions.step4.desc":
      "Po 48-72 hodinách je hygienizovaný materiál vyložen, připraven k použití jako zlepšovač půdy nebo k dalšímu zpracování.",

    "solutions.applications.title": "Aplikace",
    "solutions.applications.subtitle": "Naše technologie lze aplikovat na různé odpadní proudy a průmyslová odvětví",

    "solutions.endproducts.title": "Konečné produkty",
    "solutions.endproducts.subtitle": "Náš fermentační proces vytváří hodnotné výstupy z toho, co bylo kdysi odpadem",

    "solutions.soil.title": "Zlepšovač půdy",
    "solutions.biomass.title": "Biomasa jako palivo",

    "solutions.cta.title": "Jste připraveni transformovat své nakládání s odpady?",
    "solutions.cta.subtitle":
      "Kontaktujte nás ještě dnes a projednejte, jak naše řešení mohou řešit vaše specifické výzvy v oblasti nakládání s odpady.",

    // Implementations page
    "implementations.title": "Realizace",
    "implementations.subtitle": "Prozkoumejte naše úspěšné projekty a realizace po celém světě",
    "implementations.ewa.title": "Aerobní fermentor EWA",
    "implementations.installations": "úspěšných instalací v",
    "implementations.countries": "zemích",

    "implementations.waste": "Odpad",
    "implementations.product": "Produkt",

    "implementations.cta.title": "Jste připraveni připojit se k našim úspěšným příběhům?",
    "implementations.cta.subtitle":
      "Kontaktujte nás ještě dnes a projednejte, jak naše řešení mohou řešit vaše specifické výzvy v oblasti nakládání s odpady.",

    // Product detail pages
    "product.advantages": "Hlavní výhody",
    "product.technical": "Technické informace",
    "product.optional": "Volitelné funkce",

    // AFR page (Alternative Fuel Recovery)
    "afr.title": "Zhodnocení alternativních paliv",
    "afr.subtitle": "Již brzy - Tato stránka je ve vývoji",
    "afr.message":
      "Aktuálně aktualizujeme informace o zhodnocení alternativních paliv. Vraťte se prosím brzy pro podrobnosti o našich řešeních AFR, nebo nás kontaktujte přímo pro více informací.",
    "afr.contact": "Kontaktujte nás pro informace",

    // BIOKON optional features
    "biokon.optional.photovoltaic":
      "Fermentor může být vybaven fotovoltaickým systémem pro provoz off-grid nezávisle na připojení k elektrické síti.",
    "biokon.optional.preheating":
      "Fermentor může být vybaven předehříváním vsázky pro rychlý start fermentace a jistotu hygienizace.",
    "biokon.optional.biofilter":
      "Fermentor může být vybaven integrovaným biofiltrem pro zvýšení environmentální výkonnosti.",
    "biokon.optional.customizable":
      "Parametry řešení lze upravit podle požadavků zákazníka pro provoz fermentoru podle místa instalace a ročních období.",
    "biokon.optional.title.photovoltaic": "Fotovoltaický systém",
    "biokon.optional.title.preheating": "Předehřívání vsázky",
    "biokon.optional.title.biofilter": "Integrovaný biofiltr",
    "biokon.optional.title.customizable": "Přizpůsobitelné parametry",

    // BIOKON specifications
    "biokon.specs.capacity": "Kapacita",
    "biokon.specs.weight": "Hmotnost",
    "biokon.specs.max_batch_weight": "Maximální hmotnost vsázky",
    "biokon.specs.length": "Délka",
    "biokon.specs.width": "Šířka",
    "biokon.specs.height": "Výška",
    "biokon.specs.power_supply": "Napájení",
    "biokon.specs.power_consumption_standby": "Spotřeba energie - pohotovostní režim",
    "biokon.specs.power_consumption_aeration": "Spotřeba energie během aerace",
    "biokon.specs.power_consumption_preheating": "Spotřeba energie - s volitelným předehříváním vsázky",
    "biokon.specs.frame_hook_lift": "Rám a hákový nakladač",
    "biokon.specs.frame_hook_lift_value": "Podle DIN 30722",
    "biokon.specs.processing_capacity": "Zpracovatelská kapacita",

    // EWA specifications
    "ewa.specs.functional_volume": "Funkční vnitřní objem",
    "ewa.specs.processing_capacity": "Zpracovatelská kapacita",
    "ewa.specs.container_type": "Typ kontejneru",
    "ewa.specs.container_type_value": "Upravený ISO 40 stop High Cube",
    "ewa.specs.length": "Délka",
    "ewa.specs.width": "Šířka",
    "ewa.specs.height": "Výška",
    "ewa.specs.power_supply": "Napájení",
    "ewa.specs.power_consumption_standby": "Spotřeba energie - pohotovostní režim",
    "ewa.specs.power_consumption_operation": "Spotřeba energie během provozu",
    "ewa.specs.sanitization_temperature": "Teplota hygienizace",
    "ewa.specs.sanitization_temperature_value": "Až 80°C",
    "ewa.specs.process_duration": "Doba procesu",
    "ewa.specs.hours": "hodin",
    "ewa.specs.certifications": "Certifikace",
    "ewa.specs.certifications_value": "Nařízení EU č. 1069/2009",
  },
}
