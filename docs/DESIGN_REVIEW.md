# Design improvement review

## References used

The supplied links include skills, component catalogs and design tools. They informed the changes below; they were not all installed as packages.

| Reference                                                                                    | Application                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Unslop](https://github.com/cursor/plugins/blob/main/pstack/skills/unslop/SKILL.md)          | Replaced abstract homepage, search, quiz and error copy with concrete topic names and actions.                                                                                                                              |
| [Anthropic frontend-design](https://www.skills.sh/anthropics/skills/frontend-design)         | Preserved the brief's Nepal-specific typography and warm palette; replaced the repeated homepage card layout with a working diagram and ruled index.                                                                        |
| [Anti-slop](https://github.com/miqdadbadjuber/anti-slop)                                     | Declared purpose and visual dials in DESIGN.md; removed decorative branch glyphs from the homepage; checked working actions, empty states and all themes. Changes were authored in source, not through replacement scripts. |
| [Impeccable](https://impeccable.style/)                                                      | Applied the craft floor to reading measure, focus, contrast, browser surfaces and bounded desktop/mobile visual review. The optional context launcher was unavailable, so existing project files supplied the context.      |
| [UI/UX Pro Max](https://uupm.cc/)                                                            | Applied its documented accessibility, touch-target, responsive and reduced-motion guidance. No claim of running its optional design database generator.                                                                     |
| [Boneyard](https://boneyard.vercel.app/overview)                                             | Replaced single-line lazy-loading text with a static, workspace-shaped placeholder. This is a hand-authored fallback, not a captured Boneyard skeleton.                                                                     |
| [RareUI](https://www.rareui.com/)                                                            | Its scroll-progress catalog informed article position feedback and section navigation. The implementation uses the existing Framer Motion dependency.                                                                       |
| [Heroicons Animated](https://www.heroicons-animated.com/)                                    | Applied the action-specific motion approach to saved-bookmark feedback while retaining the existing Lucide icon set. No icon source was copied.                                                                             |
| [Kinetics](https://kinetics.colorion.co/)                                                    | Used a damped spring for topic selection, with an immediate reduced-motion alternative.                                                                                                                                     |
| [Matt Pocock engineering](https://github.com/mattpocock/skills/tree/main/skills/engineering) | Applied codebase-design guidance: isolate explorer registration and navigation behavior behind small component interfaces; verify public user journeys.                                                                     |

## Functional changes

- Homepage selection persists in `?topic=kumari` and links to the chosen topic.
- Homepage search submits directly to the existing fuzzy search route.
- Branch indexes support spelling aliases, `?q=Ravan`, result counts, no-result recovery and cross-encyclopedia search.
- Reading navigation links to stable section anchors, restores anchor URLs on reload and marks the current visible section.
- A lazy-load failure has a reload action. Layout-shaped loading placeholders require no animation.
- Theme styling extends to new layouts, text selection, focus and scrollbars.

## Review evidence

The production browser suite covers homepage keyboard selection and persistence, search submission, branch filtering and recovery, article anchors and reload, plus the existing graph, map, Gita, festival and storage journeys. Responsive assertions cover 360px and 390px widths. Axe scans seven routes in Light, Dark and Diya (21 combinations).

The first batched screenshot review found a mobile header wrapping into three rows and a percentage row gap that caused the reading grid to overflow its container. Both were corrected before the confirmation review. Automated accessibility checks are evidence for the tested rules, not a full accessibility certification.
