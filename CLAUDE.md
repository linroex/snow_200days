# CLAUDE.md

## Project Overview

This is a static one-page anniversary website for a 200-day relationship milestone.

Context:
- Anniversary date: 2026-06-28
- First met: 2025-12-11
- Occasion: 200 days together
- Relationship details to preserve in the copy:
  - They met because of sailing.
  - They sailed together to Xiaoliuqiu.
  - They traveled to Jinshan and Europe.
  - They share everyday life and take care of cats together.
  - The tone should feel intimate, sincere, warm, and personal.

The site is intended to be viewed on mobile as well as desktop.

## Files

- `index.html`: Main page content and all visible copy.
- `styles.css`: Responsive visual design. Avoid changing unless the new copy breaks layout.
- `script.js`: Lightbox behavior for gallery photos. Avoid changing for copy edits.
- `media/`: Local photos and video used by the page. Do not rename or move these files unless updating all references.

Media folders:
- `media/金山/`
- `media/開船去小琉球/`
- `media/歐洲/`
- `media/日常/`

## Running Locally

From this directory:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Local preview:

```text
http://127.0.0.1:4173/
```

LAN preview currently used by the owner:

```text
http://10.113.18.239:4173/
```

## Copywriting Guidelines

When updating copy:
- Write in Traditional Chinese.
- Use `妳`, not `你`, when addressing the girlfriend.
- Keep the voice direct and personal, as if written by the boyfriend.
- Prefer natural, specific wording over generic romantic phrases.
- Keep references to sailing, travel, cats, and ordinary daily life.
- Keep the hero headline concise enough for mobile.
- Do not overuse emoji. The current hero title contains `❤️️`; keep or adjust only if the requested tone calls for it.
- Preserve the factual dates unless the owner explicitly changes them.
- Avoid making the copy sound like marketing or a public landing page.

## Editing Boundaries

For a copywriting pass, usually edit only text nodes in `index.html`, especially:
- `<title>` and the meta description
- Hero headline and hero paragraph
- Timeline card paragraphs
- Feature photo captions
- Place section descriptions
- Video section heading
- Final letter section

Avoid changing:
- Image paths
- `data-full` paths
- CSS class names
- Section IDs used by navigation
- JavaScript behavior

After editing, check that:
- The page still loads.
- Navigation anchors still work: `#story`, `#places`, `#letter`.
- Photo lightbox buttons still have their `data-full` values.
- Long lines of text still look reasonable on mobile.
