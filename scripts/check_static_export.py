"""Validate the Pages artifact from the repository root, without network access."""
from hashlib import sha256
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

OUT = Path("out")
BROCHURES = {
    "bewabox": ("/downloads/SOLBIEN_BEWABOX_Web_2026-11-26.pdf",
        "f5c74dbfb9372787f24fbfc2ef5bda7c164661a6d5fba3dd867a00474c42cde9"),
    "biocon": ("/downloads/SOLBIEN_BIOCON_R9_Web_2026-11-26.pdf",
        "ae0f7f683d6b5c0266a166a7bc59e630b8c883572aac444a1e2660afc103b846"),
    "bios": ("/downloads/SOLBIEN_BIOS_R2_Web_2026-11-26.pdf",
        "097a1670dfacefbea6e13bb855f459d3a2156224fdd1e75f73d6c8dd80437775"),
    "ewa": ("/downloads/SOLBIEN_EWA_R3_Web_2026-11-26.pdf",
        "44fe9a370e30665733394f11ff93952610036df685ac0b101017e0e5548c31de"),
}
ROUTES = ("", "about", "contacts", "solutions", "products",
          *(f"products/{p}" for p in BROCHURES), "404")
ORIGIN = "https://export.invalid"


def local_file(path):
    p = OUT / unquote(path).lstrip("/")
    return any(f.is_file() for f in (p, Path(str(p) + ".html"), p / "index.html"))


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key in ("src", "href", "poster") and value:
                self.items.append((tag, value))


def check_page(route):
    html = OUT / ((route or "index") + ".html")
    if not html.is_file() or not html.stat().st_size:
        return [f"Missing or empty: {html}"]
    links = Links()
    links.feed(html.read_text(encoding="utf-8"))
    errors = []
    brochures = []
    for tag, value in links.items:
        url = urlsplit(urljoin(f"{ORIGIN}/{route}", value))
        if url.scheme not in {"http", "https"}:
            continue
        if url.hostname == "export.invalid":
            if not local_file(url.path):
                errors.append(f"/{route}: missing local target {value}")
        elif tag != "a":
            errors.append(f"/{route}: external page resource {value}")
        elif url.hostname and url.hostname.endswith((".vercel-storage.com", ".vercel.app", ".vusercontent.net")):
            errors.append(f"/{route}: unexpected external link {value}")
        if tag == "a" and url.path.lower().endswith(".pdf"):
            brochures.append(value)
    if route.startswith("products/"):
        expected, digest = BROCHURES[route.removeprefix("products/")]
        if brochures != [expected, expected]:
            errors.append(f"/{route}: both buttons must link to {expected}")
        pdf = OUT / expected.lstrip("/")
        if not pdf.is_file() or sha256(pdf.read_bytes()).hexdigest() != digest:
            errors.append(f"/{route}: missing or incorrect approved PDF at {expected}")
    return errors


def main():
    errors = [error for route in ROUTES for error in check_page(route)]
    files = [p for p in OUT.rglob("*") if p.is_file()]
    errors.extend(f"Oversize: {p}" for p in files if p.stat().st_size > 25 * 1024**2)
    if len(files) > 20000:
        errors.append(f"{len(files)} files exceed the Pages Free limit")
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"Verified 9 routes, 404, HTML links and resources, brochure pairs and Pages limits ({len(files)} files).")


if __name__ == "__main__":
    main()
