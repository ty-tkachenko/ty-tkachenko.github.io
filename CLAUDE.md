# CLAUDE.md

Tymur Tkachenko's personal site: plain HTML and one stylesheet, no JavaScript, published with GitHub Pages from this repo (`ty-tkachenko.github.io`).

## How the site is organized

- `index.html` — home: short bio, photo gallery, and contact links.
- `experience.html` — education, industry, research, and student organizations.
- `css/style.css` — the only stylesheet. Both pages link it as `css/style.css` (published path `/css/style.css`).
- `images/` — photos. Gallery thumbnails use a `-small` suffix and link to the full-size file.
- The nav is a short bracketed list in each page header. The current page is a `<span class="current">`, not a link. The same header is copied on each page.
- `.claude/launch.json` previews the site locally with `python -m http.server`.

## Lectures

Lectures live in a separate repo, `ty-tkachenko/lectures`, published as its own GitHub Pages project site at `https://ty-tkachenko.github.io/lectures/` (EE series at `/lectures/ee/`, RF series at `/lectures/rf/`). Never copy lecture content into this repo.

When the lectures site goes live, this site's nav should get a "Lectures" link to `/lectures/`. Don't add it before the lectures site is published (it would be a broken link).

The lectures repo keeps its own copy of this site's stylesheet (`/css/style.css`). When that stylesheet changes in a way the lectures should follow, note it so the copy can be updated deliberately (for example by opening an issue on `ty-tkachenko/lectures`). Don't link the lectures to this site's CSS directly.

Keep URLs lowercase. GitHub Pages paths are case-sensitive.
