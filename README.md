# INeedCoffee Archive

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
├── public/                      # Static assets copied as-is to the final build
│   ├── images/
│   │   └── posts/              # Post images copied here by scripts/copy-images.js
│   ├── md/                     # LLM-friendly Markdown mirror of site content
│   ├── llms.txt                # Machine-readable index of /public/md pages (root-served)
│   └── llms-full.txt           # Single-file, full Markdown dataset with TOC (root-served)
├── src/
│   ├── components/             # Reusable UI components
│   ├── content/                # Content collections (articles & authors)
│   │   ├── by/                 # Author profiles and metadata
│   │   └── posts/              # Coffee articles and guides (source of truth)
│   ├── layouts/                # Page layout templates
│   └── pages/                  # Route definitions
├── scripts/                    # Project utility scripts
│   └── copy-images.js          # Copies post images into /public/images/posts
├── astro.config.mjs            # Astro configuration
├── package.json                # Project dependencies & scripts
└── tsconfig.json               # TypeScript configuration
```

_archive of coffee knowledge for enthusiasts, by enthusiasts. This site is built with Astro and houses years of coffee articles, guides, and community wisdom._

## About The Site

INeedCoffee is a resource for coffee lovers of all experience levels. From beginner guides to advanced techniques, our archive covers:

- ☕ Coffee brewing tutorials
- 🔥 Home coffee roasting information
- 👨‍🍳 Recipes and coffee-based creations
- 🦸🏻‍♂️ Profiles of coffee fans
- 🌏 Coffee history

Features:

- ✅ Mobile-responsive design
- ✅ Dark/light mode toggle
- ✅ Author-focused content organization
- ✅ Section-based navigation
- ✅ High-performance static site architecture

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

The site organizes content in two main ways:

1. **Authors** (`src/content/by/`): Each author has their own page with a collection of their articles
2. **Sections** (`src/pages/section/`): Content organized by topic/category

### Public Markdown mirror for LLMs (/public/md)

This repo includes a public, read-only mirror of site content as plain Markdown in `public/md/`. The goal is to make the archive easy to ingest by LLMs, search engines, and offline tools without requiring Astro-specific processing.

- Each site route has a corresponding `.md` file under `public/md/` (e.g., `/coffee-brewing-guide/` → `public/md/coffee-brewing-guide.md`).
- Images referenced by posts resolve to stable public paths (see the copy-images script below).
- These files are deployed verbatim and are accessible in production at `/md/...` paths.

#### llms index files

`public/llms.txt` is a machine-readable index that maps canonical site routes to their Markdown counterparts under `/md/`. This makes it trivial for automated tools and LLM crawlers to discover and fetch the full Markdown dataset.

- Location: `public/llms.txt` (served at `/llms.txt`)
- Format: simple bullet list linking routes to `.md` files
- Maintenance: when adding new mirrored Markdown files to `public/md/`, ensure an entry is added to `public/llms.txt` so downstream consumers can discover the page.

Additionally, `public/llms-full.txt` provides a single-file, concatenated Markdown dataset (with a table of contents and anchor links) for bulk ingestion.

- Location: `public/llms-full.txt` (served at `/llms-full.txt`)
- Use case: convenient for one-shot downloads and offline processing

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview the build locally before deploying       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run copy-images`     | Copy post images into `public/images/posts`      |

## 🔄 Content Management

### Adding New Authors

Create a new markdown file in `src/content/by/` with the author's information:

```md
---
name: "Author Name"
bio: "Short author biography and credentials"
---

Extended author bio and information.
```

### Adding New Articles

Create a new markdown file in `src/content/posts/` with proper frontmatter:

```md
---
title: "Article Title"
description: "Brief description of the article"
pubDate: "YYYY-MM-DD"
author: "author-filename"
section: "section-name"
---

Article content goes here.
```

If the article contains images, place them in a folder alongside the post’s source (for example under `src/content/posts/<slug>/`). During the build, the `copy-images` script will copy recognized image files into `public/images/posts/<slug>/` so that:

- Markdown and MDX can reference images by a stable, public URL (`/images/posts/<slug>/<file>`), and
- the LLM-friendly Markdown mirror in `public/md/` can reference the same public paths without requiring Astro to process source files.

If you add or update mirrored Markdown under `public/md/`, also add or update the corresponding entry in `public/llms.txt` so automated consumers can discover it. If you maintain the single-file view, rebuild/update `public/llms-full.txt` as needed.

## 📝 Customization

The site uses CSS variables for theming, making it easy to customize colors, fonts, and other visual elements. Key files:

- `src/styles/global.css`: Global styles and variables
- `src/styles/theme.css`: Dark/light theme definitions

## 🔗 Deployment

The site is configured for deployment to modern hosting platforms. Simply run:

```bash
npm run build
```

And deploy the `dist` directory to your hosting provider.

## Credits

- Original template based on Astro's blog starter
- Coffee expertise from the INeedCoffee community
- Built with [Astro](https://astro.build)

## 🛠️ Scripts

- `scripts/copy-images.js`
  - What it does: Recursively scans `src/content/posts/` for post subfolders and copies image files (jpg, jpeg, png, gif, webp, avif, svg) to `public/images/posts/<post-slug>/`.
  - Why it exists: Assets inside `src/` aren’t automatically available as static files. Mirroring post images into `public/` ensures:
    - Stable, cacheable URLs for the live site (`/images/posts/...`)
    - Consistent paths that the Markdown mirror in `public/md/` can reference
    - A cleaner separation between authored content (`src/`) and deployed assets (`public/`)
  - When it runs: It’s invoked automatically as part of `npm run build` and can be run manually via `npm run copy-images`.
