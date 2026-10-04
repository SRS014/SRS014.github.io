"""Screenshot every page at 360/768/1280 px, check horizontal overflow and run axe-core (WCAG 2.2 AA).

    npm run build
    <python with playwright> scripts/qa_pages.py
Writes screenshots/<width>/<page>.png and screenshots/qa-report.md.
"""
from __future__ import annotations

import functools
import http.server
import json
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
DIST, OUT = ROOT / "dist", ROOT / "screenshots"
PAGES = ["/", "/about/", "/experience/", "/projects/", "/certifications/", "/writing/", "/contact/", "/resume/", "/404.html"]
WIDTHS = [360, 768, 1280]
AXE = (ROOT / "node_modules" / "axe-core" / "axe.min.js").read_text(encoding="utf-8")


def main() -> None:
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(DIST))
    handler.log_message = lambda *a: None
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{httpd.server_address[1]}"
    rows, problems = [], []
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="msedge")
        for w in WIDTHS:
            (OUT / str(w)).mkdir(parents=True, exist_ok=True)
            page = browser.new_page(viewport={"width": w, "height": 900})
            for path in PAGES:
                page.goto(base + path)
                page.wait_for_load_state("networkidle")
                name = "home" if path == "/" else path.strip("/").replace(".html", "")
                page.screenshot(path=str(OUT / str(w) / f"{name}.png"), full_page=True)
                overflow = page.evaluate("() => document.documentElement.scrollWidth - window.innerWidth")
                page.add_script_tag(content=AXE)
                res = page.evaluate("""async () => { const r = await axe.run(document, {runOnly: {type: 'tag',
                    values: ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}});
                    return r.violations.map(v => ({id: v.id, impact: v.impact, n: v.nodes.length,
                      first: v.nodes[0] && v.nodes[0].target.join(' ')})); }""")
                rows.append((w, name, overflow, res))
                if overflow > 0:
                    problems.append(f"{w}px {name}: horizontal overflow {overflow}px")
                for v in res:
                    problems.append(f"{w}px {name}: axe {v['id']} ({v['impact']}) x{v['n']} e.g. {v['first']}")
            page.close()
        browser.close()
    httpd.shutdown()
    md = ["# Portfolio page QA", "", "| Width | Page | Horizontal overflow | axe WCAG 2.2 AA violations |", "|---|---|---|---|"]
    md += [f"| {w} | {n} | {o}px | {len(r)} |" for w, n, o, r in rows]
    md += ["", "## Problems", ""] + ([f"- {x}" for x in problems] or ["None."])
    (OUT / "qa-report.md").write_text("\n".join(md) + "\n", encoding="utf-8")
    print(f"{len(rows)} page views; problems: {len(problems)}")
    for x in problems[:30]:
        print(" -", x)


if __name__ == "__main__":
    main()
