#!/usr/bin/env python3
"""Copy existing public SOLBIEN images into migration branch (no PDFs)."""
from pathlib import Path
from urllib.request import urlopen, Request
import os

MAX_BYTES = 25 * 1024 * 1024
ASSETS = (
 ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1688068705061-0305b5828e58.jpg-KOgNya4us51GdxXhUNwozMYl87F6YB.jpeg", "public/images/migrated/home-meadow.jpeg"),
 ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-03%20at%2019.33.18-jet3U6YJC8csj5YXVqhC1zZjReHbRg.png", "public/images/migrated/biocon-product.png"),
 ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EWA-m0wyYLNMsrnsfNkGAJbV2BNNGvBnZR.png", "public/images/migrated/ewa-product.png"),
 ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20March%2019%2C%202025%20-%2010_47AM.png-Vtx9j5mPgofXYWcDx52mlUj7kW6MCp.jpeg", "public/images/migrated/bios-product.jpeg"),
 ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-03%20at%2019.28.48-hdEcd7Ld65L45Oy8g8vN5HioTYEaQG.png", "public/images/migrated/bewabox-product.png"),
 ("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BIOKON%20web2.jpg-ahOqJnuuV4l7oHngZXSNrS1jP0CaHR.jpeg", "public/images/migrated/biocon-solutions.jpeg"),
)
SOURCES = (
 "app/page.tsx", "app/solutions/page.tsx", "app/products/page.tsx",
 "app/products/ewa/page.tsx", "app/products/biocon/page.tsx",
 "app/products/bios/page.tsx", "app/products/bewabox/page.tsx",
)

def fetch_image(url, dest):
    if not url.startswith("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/"):
        raise ValueError("Unexpected image host")
    with urlopen(Request(url, headers={"User-Agent":"SOLBIEN-site-migration/1.0"}), timeout=50) as response:
        if int(response.headers.get("Content-Length","0")) > MAX_BYTES:
            raise ValueError("Image exceeds Cloudflare Pages file limit")
        data = response.read(MAX_BYTES + 1)
        if response.status != 200:
            raise ValueError("Non-200 image response")
    if not 0 < len(data) <= MAX_BYTES:
        raise ValueError("Image size outside allowed range")
    if dest.suffix == ".png" and not data.startswith(b"\x89PNG\r\n\x1a\n"):
        raise ValueError("Unexpected PNG signature")
    if dest.suffix == ".jpeg" and not data.startswith(b"\xff\xd8\xff"):
        raise ValueError("Unexpected JPEG signature")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    print(f"Verified {dest}: {len(data)} bytes")

def main():
    if os.environ.get("GITHUB_ACTIONS") == "true" and os.environ.get("GITHUB_REF_NAME") != "migration/cloudflare-pages":
        raise RuntimeError("Refusing to alter a non-migration branch")
    root=Path.cwd()
    existing = {p:(root/p).read_text(encoding="utf-8") for p in SOURCES}
    for url,local in ASSETS:
        if not any(url in text for text in existing.values()):
            raise RuntimeError("Source URL absent from expected source pages")
    for url,local in ASSETS:
        fetch_image(url,root/local)
    for p,original in existing.items():
        updated=original
        for url,local in ASSETS:
            updated=updated.replace(url,"/"+local.removeprefix("public/"))
        if "hebbkx1anhila5yf.public.blob.vercel-storage.com" in updated:
            raise RuntimeError(f"Unmigrated Vercel image found in {p}")
        if original != updated:
            (root/p).write_text(updated,encoding="utf-8")
    print("All 6 existing images mirrored; four product PDFs remain untouched pending approval.")

if __name__ == "__main__":
    main()
