# Sanatan Nepal

An interactive encyclopedia of Hindu traditions in Nepal. Follow relationships through scriptures, epic families, living traditions, festivals and sacred places.

## Run locally

Use Node 22 LTS (22.13 or newer) or Node 24 LTS.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. No API keys, account or backend are required.

```sh
npm run build
npm run preview
```

The deployable output is `dist/`. Deploy that directory to a static host configured to rewrite unknown routes to `/index.html`. Deep links such as `/read/kumari` require this fallback. The default build assumes hosting at the domain root; a subdirectory deployment also needs Vite base and router basename configuration.

## Explore

| Path                                             | Experience                                                              |
| ------------------------------------------------ | ----------------------------------------------------------------------- |
| `/explore`                                       | Expandable knowledge graph with cross-branch connections                |
| `/branch/nepal`                                  | Nepal's living traditions and sacred places                             |
| `/read/mahabharata`                              | Kuru family graph, story mode and eighteen Parvas                       |
| `/read/ramayana`                                 | Ikshvaku/Raghu lineage, seven Kandas and traditional exile map          |
| `/read/bhagavad-gita?chapter=18`                 | Eighteen chapters, original explanations and two verse paraphrases each |
| `/read/shiva`, `/read/devi`, `/read/dashavatara` | Deity relationship explorers                                            |
| `/read/festivals?festival=tihar`                 | Rotating D3/SVG seasonal festival wheel                                 |
| `/temples?temple=muktinath`                      | Five temple pins with history, deity and visiting context               |
| `/search?q=Ravan`                                | Fuzzy search, transliteration aliases and Devanagari                    |
| `/saved`                                         | Bookmarks, explicit reading completion and best quiz scores             |

Every content entry has a stable `/read/:id` URL. Graphs support pan/zoom, Enter/Space activation and alternative list controls. The three themes are Light, Dark and Diya. Bookmarks, completion, quiz scores and theme are stored in this browser's localStorage; clearing browser storage removes them.

## Stack and structure

React 18, strict TypeScript, Vite, React Router v6, Tailwind CSS, Framer Motion, React Flow, D3 scales, Leaflet, Fuse.js and Zustand.

- `src/app/`: routes, homepage, reading shell, search and saved pages
- `src/components/tree/`: knowledge, family and deity graphs
- `src/components/story/`: scroll-driven epic narrative
- `src/components/map/`: Nepal temple map
- `src/components/festival-wheel/`: seasonal SVG calendar
- `src/components/gita-explorer/`: chapter explorer
- `src/components/nepal/`: cultural-context and historical timeline controls
- `src/components/quiz/`: knowledge checks
- `src/content/`: typed editorial data, relationships and source references
- `src/store/`: persisted learning state and themes
- `src/styles/`: base design system and explorer/theme styles
- `tests/`: behavioral, content-integrity and production-browser tests

Heavy explorers are lazy-loaded. The homepage pairs search with an interactive Nepal topic diagram, using the original mandala SVG. Branch indexes support URL-based filtering, and reading pages include section links and position feedback. Fonts use Google Fonts with local serif/sans fallbacks. OpenStreetMap tiles require network access; temple details remain available when tiles fail. See [design direction](DESIGN.md) and [reference applications and review](docs/DESIGN_REVIEW.md).

## Validation

```sh
npm run lint
npm run format:check
npm test
npx playwright install chromium
npm run test:e2e
npm run build
```

The browser suite builds and serves the production output on port 4173. It verifies routing, chapter selection, graph interaction, festival/map controls, search, persistent state, homepage selection, branch filtering, article anchors and mobile overflow. Automated axe checks cover seven pages in all three themes. These checks complement keyboard and visual review; they do not amount to a full accessibility certification.

Husky runs ESLint/Prettier through lint-staged. GitHub Actions validates pushes to `main` and supports manual runs.

## Git workflow — current owner instruction

Work directly on `main`. Do not create feature branches or pull requests.

The initial feature-branch history was condensed into ten commits at the owner's request, preserving the final source tree. All non-main branches were deleted locally and remotely. Five final commits complete this release, for **15 commits total on main**. The release is tagged `v0.1.0`. Preserve this history limit unless the owner changes it; do not expand it automatically.

Use clear conventional commit messages and validate changes before pushing. The earlier PR-based workflow is superseded by this main-only instruction.

## Content and editorial scope

All scripture summaries and verse explanations are original paraphrases. Entries name public-domain or scholarly reference works and link to cultural institutions where available. Interpretation, religious narrative and historical claims are distinguished. Regional practices vary; the Kathmandu Kumari institution is not treated as the model for every Kumari tradition, and Panchayatana worship is not described as unique to Nepal.

See [the content guide](docs/CONTENT_GUIDE.md) for editing instructions. Family graphs are explicitly selective. Epic map locations are traditional associations, not verified historical itineraries. Festival positions are approximate seasonal windows, not a dated annual panchang. Unverified community-specific ritual details remain marked `TODO: verify` in the content source.

### Known limitations

- Audio pronunciation is deferred pending reliable, appropriately licensed recordings.
- Summaries are introductory. Specialist and community review should precede expansion of detailed ritual procedures.
- Maps depend on third-party tiles and do not provide live travel conditions.
- At release validation, `npm audit` reports four moderate package findings: React Router/react-router-dom and Vitest/@vitest/mocker; none high or critical. The requested Router v6 is retained. This SPA has no SSR hydration and its router destinations come from bundled content IDs, but the dependency advisories remain open. See [router redirect advisory](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6), [router hydration advisory](https://github.com/advisories/GHSA-337j-9hxr-rhxg), and [Vitest mocker advisory](https://github.com/advisories/GHSA-82fw-gwwq-j7x9). Recheck dependencies before deployment or extending routing to untrusted destinations.
