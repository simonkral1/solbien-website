"""Validate the Pages artifact from the repository root, without network access."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit

OUT = Path("out")
PRODUCTS = ("ewa", "biocon", "bios", "bewabox")
ROUTES = ("", "about", "contacts", "solutions", "products",
          *(f"products/{p}" for p in PRODUCTS), "404")
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
            product = route.removeprefix("products/")
            if not (product in PRODUCTS and url.hostname == "blobs.vusercontent.net" and
                    url.scheme == "https" and url.path.startswith(f"/blob/{product.upper()}-") and
                    url.path.endswith(".pdf")):
                errors.append(f"/{route}: unexpected external link {value}")
        if tag == "a" and url.path.lower().endswith(".pdf"):
            brochures.append(value)
    if route.startswith("products/") and (len(brochures) != 2 or len(set(brochures)) != 1):
        errors.append(f"/{route}: expected two links to the same brochure")
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
