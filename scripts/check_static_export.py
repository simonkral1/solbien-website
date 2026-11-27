"""Validate the Pages artifact from the repository root, without network access."""
from hashlib import sha256
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

OUT = Path("out")
BROCHURES = {
    "bewabox": ("/downloads/SOLBIEN_BEWABOX_R2_Web_2026-11-27.pdf",
        "24eabe733d914fb316876274a393f70688d1bcde3a39429b5b2cb13c710331c9"),
    "biocon": ("/downloads/SOLBIEN_BIOCON_R10_Web_2026-11-27.pdf",
        "6b7174e71f356be507fc6983f3cb37d73594dddf3c49585e3d6d1f5c960a808e"),
    "bios": ("/downloads/SOLBIEN_BIOS_R4_Web_2026-11-27.pdf",
        "645caa40219d1a4207c6a5f784a0fe3492f412c474718eb035c756047cdbc000"),
    "ewa": ("/downloads/SOLBIEN_EWA_R4_Web_2026-11-27.pdf",
        "81f6a1802f6ab690c596a6be61a5263ea5ca1d2fd62d060a1684bb573d54b5c5"),
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
