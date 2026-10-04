"""Generate the social preview image (public/og-image.png) and the resume PDF (public/resume.pdf).

Run after content changes, with a Python that has Playwright (Edge channel), for example the
Fusion Content Studio venv:

    npm run build
    ..\\Content\\Sohan\\FusionContentStudio\\.venv\\Scripts\\python.exe scripts\\make_assets.py
    npm run build      # copy the new assets into dist/

The resume PDF is printed from the built /resume/ page, so it never contains anything the site
doesn't (no phone number, no home address).
"""
from __future__ import annotations

import base64
import functools
import http.server
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
PUBLIC, DIST = ROOT / "public", ROOT / "dist"


def og_html() -> str:
    sym = base64.b64encode((PUBLIC / "images" / "symbol.svg").read_bytes()).decode()
    css = (ROOT / "src" / "styles" / "tokens.css").read_text(encoding="utf-8")
    fonts = {n: base64.b64encode((PUBLIC / "fonts" / f"{n}.woff2").read_bytes()).decode()
             for n in ("manrope-800", "manrope-700", "inter-400", "inter-600")}
    faces = "".join(
        f'@font-face{{font-family:"{fam}";font-weight:{w};src:url(data:font/woff2;base64,{fonts[n]}) format("woff2")}}'
        for n, fam, w in (("manrope-800", "Manrope", 800), ("manrope-700", "Manrope", 700),
                          ("inter-400", "Inter", 400), ("inter-600", "Inter", 600)))
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{css}{faces}
    body{{margin:0}} .og{{width:1200px;height:630px;box-sizing:border-box;background:var(--gradient-sky-wash);position:relative;
    font-family:Inter;color:var(--color-text);padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}}
    .og::before{{content:"";position:absolute;left:0;right:0;top:0;height:12px;background:var(--gradient-sky)}}
    .brand{{display:flex;align-items:center;gap:16px;font-family:Manrope;font-weight:800;font-size:44px}}
    .brand img{{width:64px;height:64px}}
    h1{{margin:0;font-family:Manrope;font-weight:800;font-size:84px;line-height:1.02;letter-spacing:-.02em}}
    .g{{background:var(--gradient-sky-fill);-webkit-background-clip:text;background-clip:text;color:transparent}}
    .d{{font-family:Manrope;font-weight:700;font-size:32px;color:var(--color-primary);margin-top:18px}}
    .u{{font-size:24px;color:var(--color-text-muted)}}</style></head><body><div class="og">
    <div class="brand"><img src="data:image/svg+xml;base64,{sym}">Sohan</div>
    <div><h1>Think deeper.<br><span class="g">Build smarter.</span></h1>
    <div class="d">Power Platform Developer &amp; Solution Builder</div></div>
    <div class="u">srs014.github.io · Sohanur Rahman Sohan · Dhaka, Bangladesh</div></div></body></html>"""


def serve(directory: Path):
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(directory))
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main() -> None:
    if not (DIST / "resume" / "index.html").is_file():
        raise SystemExit("build the site first: npm run build")
    httpd = serve(DIST)
    port = httpd.server_address[1]
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="msedge")
        page = browser.new_page(viewport={"width": 1200, "height": 630})
        page.set_content(og_html())
        page.wait_for_timeout(300)
        page.screenshot(path=str(PUBLIC / "og-image.png"))
        page = browser.new_page()
        page.goto(f"http://127.0.0.1:{port}/resume/")
        page.wait_for_load_state("networkidle")
        page.emulate_media(media="print")
        page.pdf(path=str(PUBLIC / "resume.pdf"), format="A4", print_background=True,
                 margin={"top": "14mm", "bottom": "14mm", "left": "14mm", "right": "14mm"})
        browser.close()
    httpd.shutdown()
    print("wrote public/og-image.png and public/resume.pdf")


if __name__ == "__main__":
    main()
