# Copilot Instructions for Astro Sandoval & Bathe Main

## Overview

This workspace contains two main projects:

- **Astro Sandoval** (`sandoval/`): Static site built with Astro, TypeScript, and GraphQL for content/data fetching.
- **Bathe Main** (`bathe-main/`): WordPress theme using Tailwind CSS, Sass, Vite, TypeScript, and PostCSS.

## Architecture & Key Patterns

### Astro Sandoval

- **Pages**: Located in `src/pages/` (`index.astro`, `biografia.astro`).
- **Components**: Modular UI in `src/components/`, organized by feature (e.g., `MainMenu`, `Header`, `Carousels`).
- **GraphQL**: Data queries in `src/graphql/`, split by domain (`Home.ts`, `MainMenu.ts`, etc.).
- **Hooks**: Custom React/TS hooks in `src/hooks/` (e.g., `useDebounce.ts`).
- **Layouts**: Shared layouts in `src/layouts/`.
- **Styles**: CSS organized by type (`global.css`, `base/`, `components/`, `layout/`).
- **Assets**: Images and SVGs in `src/assets/`.
- **Services**: API/data logic in `src/services/wp-data.ts`.

### Bathe Main (WordPress Theme)

- **Templates**: PHP files for WP templates and partials in root and `template-parts/`.
- **Assets**: CSS, fonts, images, JS in `assets/` and `src/`.
- **Build Tools**: Uses Vite, Tailwind, Sass, PostCSS, ESLint, Prettier, stylelint.
- **Custom Fields**: ACF JSON export (`acf-export-2024-09-07.json`).

## Developer Workflows

### Astro Sandoval

- **Install**: `npm install`
- **Dev Server**: `npm run dev` (default port: 4321)
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **GraphQL**: Query logic in `src/graphql/`, fragments in `src/graphql/fragments/`.
- **TypeScript**: Strict typing enforced via `tsconfig.json`.

### Bathe Main

- **Install**: `npm install`
- **Build**: `npm run build` (Vite)
- **Tailwind**: Config in `tailwind.config.js`, custom styles in `src/sass/` and `assets/css/`.
- **Lint/Format**: ESLint, Prettier, stylelint configs present.
- **ACF**: Custom fields managed via JSON export/import.

## Project-Specific Conventions

- **Astro**: Use `.astro` for UI, `.ts` for logic/data. Components are feature-scoped.
- **GraphQL**: Keep fragments reusable in `fragments/`. Query files match domain (e.g., `Home.ts`).
- **CSS**: Use atomic classes for UI elements, organize by type (atoms, base, components, layout).
- **WordPress**: Template partials in `template-parts/`, main templates in root. Use ACF for custom fields.

## Integration Points

- **Astro ↔ WordPress**: Data fetched from WP via GraphQL and/or REST, logic in `wp-data.ts`.
- **Build Tools**: Vite for both projects, Tailwind for Bathe Main, Astro for Sandoval.
- **ACF**: Sync custom fields via JSON export/import.

## Examples

- To add a new menu item: Update `src/graphql/MainMenu.ts` and `src/components/MainMenu/MainMenu.astro`.
- To add a new page: Create `.astro` file in `src/pages/` and add route logic.
- To add a new WP template: Add PHP file in `template-parts/` and reference in main template.

## Key Files & Directories

- `sandoval/src/components/`, `sandoval/src/graphql/`, `sandoval/src/pages/`, `sandoval/src/services/wp-data.ts`
- `bathe-main/template-parts/`, `bathe-main/assets/`, `bathe-main/tailwind.config.js`, `bathe-main/acf-export-2024-09-07.json`

---

For questions or unclear conventions, ask for clarification or review the respective `README.md` files.
