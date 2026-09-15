# Sanatan Nepal

An interactive encyclopedia of Hindu traditions in Nepal, built with React 18, strict TypeScript and Vite. Original paraphrases distinguish scripture, tradition and historical evidence.

## Run

Node 22 or later. Run `npm ci`, then `npm run dev`.
`npm run build` produces `dist/`. Serve with `npm run preview`.
Production hosts must rewrite unknown paths to `/index.html` for React Router deep links.

## Checks

`npm test`, `npm run lint`, `npm run format:check`, `npm run build`.
Husky runs lint-staged at commit time. GitHub Actions repeats validation.

## Structure

- src/app: routing and layout
- src/components: interactive explorers and shared UI
- src/content: editor-owned structured content and citations
- src/store: local progress, bookmarks, scores and theme
- src/styles: design tokens and responsive styles
- tests: behavioral and content-integrity tests

## Git workflow

Never commit directly to main. Each major section has its own feature branch and PR into main: project-scaffold, tree-explorer, foundations-content, mahabharata-content, ramayana-content, bhagavad-gita-explorer, nepali-hinduism-section, festival-year-wheel, temple-map, quiz-mode, search, theming. Fixes use fix/<issue>. Use small conventional commits, independently validate each PR and merge only after review. Tag v0.1.0 after the core sections merge.
The initially empty repository was seeded with a deployable HTML baseline authored on feature/repository-bootstrap so GitHub could accept PRs.

## Editorial policy

Summaries and verse explanations are original paraphrases, not reproduced translations. Read the sources shown on each entry. Local ritual practices vary by community. Unverified specifics stay marked TODO: verify in content. Map coordinates identify approximate temple locations; epic routes are traditional associations, not established historical itineraries. Festival months are seasonal guides, not exact annual dates.
