# Sanatan Nepal design direction

## Purpose

Help readers explore Hindu traditions in Nepal through relationships, narratives and places. The original project brief is the design authority: terracotta, maroon and gold, a serif display face, readable body text, Devanagari support and interactive exploration.

## Composition

The homepage pairs a search form with a working four-topic Nepal diagram. Selection changes the preview and URL; the next link opens the selected topic. A ruled topic index gives the five branches room for descriptive labels. Reading pages use section navigation beside a single reading column, with interactive explorers embedded in context.

```text
Desktop                         Phone
brand / navigation / tools      brand / tools
search + title | Nepal diagram  navigation
branch intro  | ruled index     title / search
exploration routes              Nepal diagram / preview
                                branch index / routes
```

Energy 2 / Rhythm 3 / Motion 1 on a five-point scale. The palette and heading scale carry emphasis. A compact diagram, generous reading spaces and denser indexes create different rhythms for different tasks. Motion indicates a changed selection or saved state; it does not decorate every section.

## Decisions

- Maroon establishes the Nepal explorer as the starting point; parchment surfaces keep long reading comfortable. The requested Dark and Diya modes remain available.
- Cormorant Garamond supplies the editorial voice. DM Sans supports reading and controls; Noto Serif Devanagari supports the existing Nepali labels.
- The existing mandala is geometric context behind an interactive diagram. It is not presented as a map or architectural evidence.
- Topic counts come from the catalog. No invented visitor counts or promotional claims.
- Ruled rows replace identical branch cards. Input fields and action buttons remain recognizable controls.
- Icons retain one existing stroke style. Search, bookmark, graph and location symbols describe actions; arrows indicate navigation or search submission.
- Selection uses a restrained spring (stiffness 320, damping 28). Reduced-motion users receive an immediate change. The saved bookmark fills and changes scale slightly.
- Section links and a page-position line help readers navigate long articles. Position is not completion: completion remains an explicit user action.
- Filters and homepage selection live in the URL. Bookmarks and theme remain device-local.

## Implementation boundaries

Content stays in typed data files. `EntryExplorer` owns the mapping from entry IDs to lazy interactive components. `TopicIndex` owns filtering and URL state. `ReadingNavigation` owns section observation. No new runtime dependencies were added for reference-library effects.
