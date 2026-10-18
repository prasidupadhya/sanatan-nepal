# UI skills analysis

An audit of Sanatan Nepal against six agent design skills, what each one contributes, where they conflict with the project brief, and which changes were applied.

## Skills reviewed

| Skill                                          | Install                                                                        | Kind                                                                                                          | Fit for this repo                                                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **web-design-guidelines** (Vercel)             | `npx skills add vercel-labs/agent-skills --skill web-design-guidelines`        | Code review checklist, ~100 rules (a11y, focus, forms, motion, typography, touch, theming, i18n)              | **Highest.** Every rule is objective and checkable against the existing code. Used as the primary audit.                               |
| **ui-ux-pro-max** (nextlevelbuilder)           | `npx skills add nextlevelbuilder/ui-ux-pro-max-skill`                          | Prioritised rule set (10 categories) plus a Python BM25 search over styles, palettes, fonts and UX guidelines | **High** for its priority order: accessibility → touch → performance → style → layout → type/colour → motion. Database is optional.    |
| **design-system-patterns** (wshobson)          | `npx skills add wshobson/agents --skill design-system-patterns`                | Token architecture (primitive → semantic → component), theming, component API patterns                        | **High.** The three-theme setup had raw hex values that ignored the theme. Drove the token work.                                       |
| **frontend-design** (Anthropic)                | `npx skills add anthropics/skills --skill frontend-design`                     | Art direction: subject-grounded design, type, restraint, copy, self-critique with screenshots                 | **Medium.** The brief already fixes direction; useful for copy, restraint and the screenshot critique loop.                            |
| **redesign-skill** (Leonxlnx/taste-skill)      | `npx skills add Leonxlnx/taste-skill` (installs the full set)                  | Audit-then-fix for existing projects, with a fix priority list                                                | **Medium-high.** The right taste-skill entry point for an existing codebase; supplied the interaction-state and code-quality findings. |
| **taste-skill** / **minimalist-ui** (Leonxlnx) | `npx skills add https://github.com/Leonxlnx/taste-skill --skill minimalist-ui` | Art direction for new marketing pages / warm monochrome editorial UI with pastel accents                      | **Low.** Conflicts with the brief (see below). Individual rules on motion performance and borders still apply.                         |

The skills overlap heavily on a quality floor (focus, contrast, reduced motion, 44px targets, no `transition: all`). They diverge on aesthetics, so the project brief in [DESIGN.md](../DESIGN.md) decides.

## Where the skills conflict with the brief

The brief requires terracotta, maroon and gold, a serif display face, Devanagari support and three themes (Light, Dark, Diya). Recommendations that contradict it were **not** applied:

- **frontend-design** lists "cream background + serif display + terracotta accent" as the most common generated look. Its own rule settles this: "where the brief pins down a visual direction, follow it exactly". The palette comes from Nepali temple brick, sindoor and brass, which is a subject-grounded reason, not a default.
- **minimalist-ui** bans Lucide icons, requires a warm-monochrome palette with blue/green pastels, bento grids and scroll-entry animation on every block. All four conflict with DESIGN.md (one Lucide stroke style, maroon/gold palette, ruled rows instead of cards, motion only for changed state).
- **redesign-skill** and **taste-skill** recommend background photography and staggered reveals. The project has no licensed imagery and Motion 1/5 is a stated decision.
- **frontend-design** flags accenting one headline word ("_Nepal._" in gold italic). Kept: it names the subject and is the one bold moment on the page. Revisit if the hero is reworked.

## Findings and changes applied

Ordered by the ui-ux-pro-max priority scale.

### 1. Accessibility (critical)

| Finding                                                                                                               | Skill                           | Change                                                     |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------- |
| Decorative Lucide icons in header, search and theme control lacked `aria-hidden`                                      | WDG, UUPM                       | Added `aria-hidden="true"`                                 |
| Text at 11–12px (mobile nav, footer, "Stored on this device", verse credits, step labels, preview hint, topic counts) | UUPM (no body text < 12px), WDG | Raised to 13px floor                                       |
| Document titles were URL slugs (`Sanatan Nepal — kumari`)                                                             | WDG, redesign                   | Titles use the entry or branch title, page names otherwise |

### 2. Touch and interaction (critical)

| Finding                                                                                                 | Skill         | Change                                                                                    |
| ------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------- |
| No `touch-action: manipulation` (double-tap zoom delay)                                                 | WDG           | Added to buttons, links, `summary`, `select`                                              |
| Default tap highlight                                                                                   | WDG           | `-webkit-tap-highlight-color: transparent` (focus ring remains)                           |
| Chips (related topics, filters, temples) were ~38px tall                                                | UUPM 44×44    | `min-height: 44px`                                                                        |
| `.button`, chips, quiz options, Gita chapters, entry tools, preview nodes had no hover or pressed state | redesign, WDG | Accent border/background on hover, `scale(0.98)` on press, explicit transition properties |

### 3. Theming and tokens (high)

| Finding                                                                                      | Skill                   | Change                                                                                      |
| -------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------- |
| Knowledge-tree nodes were hardcoded cream (`#fff9ee`) — bright boxes on the Dark/Diya canvas | design-system-patterns  | New semantic tokens `--node-bg`, `--node-line`, `--edge`, `--related-bg`, defined per theme |
| React Flow controls and attribution panel stayed white in dark themes                        | design-system-patterns  | Themed via tokens                                                                           |
| Quiz "correct" green fixed at `#46734f` (low contrast on dark surfaces)                      | UUPM, design-system     | `--success` token per theme                                                                 |
| Shell text colours (`#fff4df`, `#dfcfc6`, `#f6efdf`, `#986858`) repeated as raw hex          | design-system-patterns  | `--on-shell`, `--on-shell-muted`, `--on-shell-line`                                         |
| Dark/Diya readers saw a light flash: the theme was applied in a React effect after paint     | WDG (theming)           | Inline script in `index.html` applies the saved theme before first paint                    |
| `<meta name="theme-color">` was always maroon                                                | WDG                     | Synced to the active theme's page background                                                |
| Diya's lamp-glow gradient targeted a removed `.hero` class, so it never rendered             | redesign (code quality) | Retargeted to `.discovery-hero`                                                             |

### 4. Performance and code quality (high)

| Finding                                                                                                                                       | Skill         | Change                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------- |
| About 240 lines of CSS for the old homepage (`.hero`, `.branch-card`, `.quick-paths`, `.nepal-feature`, `.pagoda-art` …) no longer referenced | redesign      | Removed                                                  |
| No favicon                                                                                                                                    | redesign      | Added `public/favicon.svg` (mandala mark in maroon/gold) |
| Google Fonts loaded without preconnect                                                                                                        | WDG           | `preconnect` to both font origins                        |
| Number columns used proportional figures                                                                                                      | WDG, redesign | `tabular-nums` on topic counts and progress labels       |

### 5. Navigation, forms and content (follow-up)

| Finding                                                                                            | Skill                   | Change                                                                                                              |
| -------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Reading pages show the branch quiz, so the Kumari page asks about Pashupatinath without saying why | frontend-design (copy)  | Heading names the section ("Check your understanding of Nepali Hinduism") and states the scope                      |
| First visit was always Light                                                                       | design-system-patterns  | First visit follows `prefers-color-scheme`; a saved choice takes precedence, before and after first paint           |
| Phone "On this page" strip cut the second item mid-word with no sign it scrolls                    | UUPM, WDG               | Edge fade, scroll snapping, `overscroll-behavior-x: contain`; the active section scrolls into view only when hidden |
| Search page `autoFocus` opened the on-screen keyboard on phones                                    | WDG                     | Autofocus only with a fine pointer                                                                                  |
| "Nepali traditions" was not marked while reading a Nepali topic                                    | redesign (current page) | Marked active on `/read/:id` for entries in that branch                                                             |

## Optional tooling

1. **ui-ux-pro-max generator.** `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "cultural heritage encyclopedia" --design-system -p "Sanatan Nepal"` can persist a `design-system/MASTER.md` for future pages. Treat its palette as advisory; DESIGN.md wins.
2. **web-design-guidelines in review.** Run it on changed `.tsx` files; it is the most objective of the six and reports `file:line` findings.

## Verification

`npm run lint`, `npm run format:check`, `tsc -b`, `npm test` (8 unit tests) and `npm run build` pass. The Playwright suite passes 10/10, including axe scans of seven routes in Light, Dark and Diya. Screenshots of the knowledge tree in Dark confirm themed nodes, controls and attribution; phone screenshots confirm the section strip starts at its label and follows the reader.
