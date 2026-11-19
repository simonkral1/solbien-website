# SOLBIEN web — revizní tabulka

Datum: 30. 10. 2026. Výchozí produkční revize: `102055621ceb2f896df9c228c2ddf37c33291964`.

První balík je připraven k posouzení v oddělené větvi. „Připraveno“ znamená návrh v kódu; neznamená schválení textu ani publikování na www.solbien.com. Produkční nasazení vyžaduje schválení konkrétního náhledu.

## A. První balík oprav

| ID | Stránka | Současný stav | Připravená změna | Důvod / podklad | Stav schválení |
| --- | --- | --- | --- | --- | --- |
| A01 | Všechny produktové stránky | Závěrečná výzva ke kontaktu nabízí znovu jen PDF. | Primární tlačítko `Enquire about [produkt]` / `Poptat [produkt]`; PDF zůstává jako druhé tlačítko. | Přímá návaznost produktu na poptávku, bez nového formuláře nebo serveru. | Připraveno; čeká na schválení náhledu. |
| A02 | Produktové poptávky | Není předvyplněné téma poptávky. | E-mail na dosavadní `info@solbien.com`, předmět s názvem technologie a upravitelná osnova: druh odpadu, množství, místo a kontakt. | Používá stávající veřejný e-mail. Otevření editoru e-mailu nic neodesílá. | Návrh přesného CZ/EN textu k odsouhlasení. |
| A03 | Kontakty a patička | Telefon/e-mail jsou prostý text. | Klikatelné odkazy `tel:` a `mailto:`. | Ověřené dosavadní veřejné kontakty. | Připraveno; čeká na schválení náhledu. |
| A04 | Kontakty a patička | `SOLBIEN plc`. | `SOLBIEN a.s.` z jednoho sdíleného zdroje. | Oficiální název potvrzen v zadání. | Připraveno; čeká na schválení náhledu. |
| A05 | O nás, Řešení — CZ/EN | Zbytková označení BIOKON a BEWA. | BIOCON a BEWABOX v aktuálním marketingovém textu. | Jednotné názvy současných produktových stránek. Historické dotační názvy, interní klíče ani soubory se nepřejmenovávají. | Připraveno; čeká na schválení náhledu. |
| A06 | BIOS — česká verze | Technické popisky tabulek zůstávají anglicky. | Překlad popisků; fyzikální parametry a jejich hodnoty se nemění. | Čistá lokalizace existujícího textu. | Připraveno; čeká na schválení náhledu. |
| A07 | Produktové tabulky — česká verze | `t/year`, u předehřevu `2 to 6 kW`. | `t/rok`, `2 až 6 kW`; EN hodnoty zachovány. | Lokalizace jednotek a spojení, bez změny čísel. | Připraveno; čeká na schválení náhledu. |
| A08 | Jazyk a mobilní nabídka | Po přepnutí zůstává `html lang=en`; nabídka neoznamuje stav rozbalení. | `lang=cs/en`, stav jazykových tlačítek, přeložený název a rozbalení mobilní nabídky. | Správná jazyková a přístupnostní sémantika. Neřeší samostatné jazykové URL pro SEO. | Připraveno; čeká na schválení náhledu. |
| A09 | Kontaktní jméno | `Katerina Elisova` vs. `Kateřina Elisová` na stránce týmu. | Sjednocení diakritiky jména. | Již veřejně uvedený tvar. Funkce a obsazení se bez potvrzení nemění. | Připraveno; čeká na schválení náhledu. |

### Návrh textů e-mailu

CZ tlačítko: **Poptat EWA** (analogicky BIOCON, BIOS, BEWABOX).

Předmět: **Poptávka technologie EWA**.

> Dobrý den,
>
> mám zájem o konzultaci technologie EWA pro náš projekt.
>
> Druh odpadu:
>
> Množství ke zpracování:
>
> Místo projektu:
>
> Kontaktní údaje:

EN tlačítko: **Enquire about EWA**. Předmět: **Enquiry about EWA**.

> Hello,
>
> I would like to discuss EWA for our project.
>
> Waste type:
>
> Quantity to process:
>
> Project location:
>
> Contact details:

Poptávka používá nastavený e-mailový program návštěvníka; backend ani potvrzení o odeslání se nepředstírá.

## B. Technické údaje a tvrzení k věcnému ověření

| ID | Stránka | Aktuální údaj / problém | Požadované rozhodnutí nebo podklad | Stav |
| --- | --- | --- | --- | --- |
| B01 | EWA | 36 m³, ISO 40 ft HC, 1 500 t/rok. | Určit konkrétní nabízené varianty a jejich správné rozměry, objem a podmínky kapacity; nesměšovat provedení. | Čeká na technický podklad. |
| B02 | EWA | Příkon za provozu 100–150 W, standby 50 W. | Rozlišit aeraci, řízení, pohyb materiálu, celý stroj a průměrnou energii na tunu; určit režim měření. | Čeká na technický podklad. |
| B03 | EWA, homepage | 48–72 hodin vs. „během několika hodin“; plošné formulace o hygienizaci a certifikacích. | Určit vstupní materiál, procesní fázi, teplotně-časový režim a rozsah doloženého ověření. | Čeká na schválené znění a doklady. |
| B04 | BIOCON | 30 m³, 1 000 t/rok, off-grid provoz. | Potvrdit užitný/jmenovitý objem, podmínky roční kapacity a rozsah konkrétní autonomní konfigurace. | Čeká na technický podklad. |
| B05 | BIOS | Varianty 50/80/100 m³ a přibližně 10/16/20 tis. t/rok. | Ke každé variantě určit stav nabídky a validace, předpoklady výpočtu kapacity a procesní režim. | Čeká na technický podklad. |
| B06 | BIOS | Nerozlišená fermentace, hygienizace a sušení. | Popsat jednotlivé režimy a jejich podmínky; oddělit varianty bez zaměňování rozsahů. | Čeká na technický podklad. |
| B07 | BEWABOX | Přibližně 4 400 t/rok na box. | Doplnit velikost boxu, vstupní směs, hustotu, plnění, délku cyklu a provozní předpoklady. | Čeká na technický podklad. |
| B08 | Homepage, Řešení | Obecné sliby o všech odpadech, úplné hygienizaci, bezodérovosti a výsledných produktech. | Vymezit vstupy, přípravu směsi, podmínky provozu a možné výstupy; každé zásadní tvrzení přiřadit k podkladu. | Obsah zůstává do rozhodnutí beze změny. |
| B09 | O nás, Kontakty | Sales Director vs. Sales Manager. | Potvrdit aktuální osobu, funkci a kontaktní způsob. | Čeká na potvrzení. |
| B10 | O nás | Zdroj obrázku u Jaroslava Krále je pojmenován `vaclav-holusa.png`. | Obrazově ověřit správné přiřazení portrétů. Samotný název souboru není důkaz chybné fotografie. | K ověření. |

## C. Navazující rozvoj

| ID | Oblast | Další krok | Stav |
| --- | --- | --- | --- |
| C01 | SEO | Samostatné titulky a popisy devíti stránek, sitemap, rozhodnutí o jazykových URL a jejich propojení. | Návrh; mimo první balík. |
| C02 | Produktové texty | Nahradit opakované nadpisy/popisné věty skutečným vysvětlením přínosu a procesu. | Až po B01–B08. |
| C03 | Grafika a přístupnost | Kontrast stávajících tlačítek, práce s fotografiemi, mobilní rozvržení, fokus a ovládání klávesnicí. | Úplná revize připravena jako další etapa; první balík doplňuje pouze nové ovládací prvky a sémantiku. |
| C04 | PDF | Lehké webové exporty; kontrola souladu brožur s potvrzenými parametry. | Mimo první balík; stávající odkazy zachovány. |
| C05 | Důvěryhodnost | Skutečné reference, zkoušky, případové studie a vysvětlení aerobního procesu. | Návrh; pouze schválené a doložené podklady. |
| C06 | Technické kontroly | Při kontrole byly nalezeny a doplněním typů opraveny dvě původní chyby v pomocných komponentách obrázků. Následně zrušit ignorování chyb při buildu. | Typy doplněny v prvním balíku; konfigurace buildu zatím beze změny. |
| C07 | Patička | Vyřešit prázdný blok sociálních sítí a aktuální copyright. | Vyžaduje výběr skutečných profilů nebo rozhodnutí blok odstranit. |

## Rozsah a vydání

- Schválený poveletržní WETEX banner, jeho text i grafika se nemění.
- Číselné technické hodnoty se v prvním balíku nepřepisují.
- Neprobíhá změna hostingu, přístupů ani produkční větve.
- Před vydáním porovnat texty CZ/EN, zkontrolovat všechny čtyři poptávky, kontakty, PDF a zobrazení na počítači a mobilu.
- Ověření otevření e-mailového editoru není ověřením doručení zprávy. Kontrola nesmí rozesílat zkušební poptávky.
- Stav ověření je uveden v popisu návrhu změn / PR. Produkční vydání až po schválení konkrétní verze.
