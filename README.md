# Kat’s Corner

A personal arcade of stories, small games and family-inspired rooms, created by **Kat (LordToT-ToTIII)**.

[Play Kat’s Corner](https://kittykat6301-bit.github.io/Kat-s-Corner/)

## What you can do

- Play seven games: Choose Your Fate, Adopt a Tiny Monster, Fantasy Home Builder, Goblin Grab, Potion Problems, Mimic Hunt and Spellbook Autocorrect.
- Switch between 17 illustrated themes without losing game progress.
- Explore characters, mascots, Gerald’s outfits, local records and achievements.
- Use the interactive TV, sound switches, reduced-motion preference and save-backup controls.
- Read the update archive documenting the build, recovery and artwork overhaul.

## My contribution

Kat created the first GitHub version and continues writing and changing code, designing the themes and games, directing artwork, testing behavior and finding bugs. Gerald, her AI coding assistant, helps with implementation and repairs. The illustrated assets include AI-generated artwork selected and directed for this project.

The project demonstrates front-end interface development, stateful game flows, a shared theme system, asset management, debugging and iterative visual design.

## How it works

HTML, CSS and plain JavaScript serve a static website on GitHub Pages. Browser local storage keeps story endings, adopted monsters, cottages and scores. Records belong to the current browser; there are no accounts or shared online leaderboard. Clearing browser storage can remove progress, so use Settings to keep a backup.

All site artwork is supplied in this repository. The original ChatGPT Site is no longer used as an image fallback.

## Run locally

Serve this folder with a static web server, then open its local address. For example, if Python is installed:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. Use a web server instead of opening the HTML directly, because the update archive loads from JSON.

## Project files

- `index.html`: page sections and core story game
- `assets/theme-system.js`: theme data and room behavior
- `assets/arcade-games.js`: six additional games
- `assets/restoration-phases.js`: galleries, records, achievements and backup controls
- `assets/restoration-fixes.css`: layout and theme presentation
- `assets/updates.json`: chronological development archive
- `assets/themes`, `assets/games`, `assets/buddies`, `assets/gerald`: local artwork

## Validation and next polish

The main flows of all seven games were exercised locally. A cottage, monster adoption, story ending, potion best score, goblin best score and spell journal remained visible after reloading. All 17 theme menus and game shelves were checked on desktop. Recovered image files were verified, and referenced local image paths were checked for missing files.

Still to verify: real-phone touch/layout behavior and a complete backup export/import round trip. The automated browser viewport override did not change its actual width, and the download capture timed out, so those checks are not claimed as passed. Further family portraits can be added when approved references are available.

## Build notes

The original published site was recovered into this repository, then its artwork dependencies were brought home. Each room now has a consistent illustrated navigation system and matching game cartridges. The recovery preserved game interactions and browser saves while improving contrast, menu spacing and galleries.

Additional checks: 340 story paths were traversed in a logic audit, and all eight endings were reachable, including the unlocked secret route. Fourteen backup-validation fixtures passed; the browser also visibly rejected an unsupported monster record. Valid backup restore and real-phone behavior still need a complete manual check.

October 4 refinement: spoiler-free earned achievements, a Classic cabinet menu without cartridges, seventeen world descriptions, the approved Mini Alex, additional default mascots, and optional original Web Audio theme loops. Gerald’s contribution includes asset recovery, guided recovery steps and generated illustrations/backgrounds under Kat’s direction. Room audio starts only on user request; music volume is remembered and playback pauses in background tabs.

October 5 audio pass: Classic and Classic Game Room have original layered synthesized music and ambience, independent controls and remembered volume levels. Other themes retain their earlier melodies. Control behavior and theme transitions were checked locally; sound quality and balance still need a listening review.

Kat’s Goblin Author Den uses “Celtic Impulse” by Kevin MacLeod (incompetech.com), licensed under CC BY 4.0: https://creativecommons.org/licenses/by/4.0/. The original recording is unedited; website playback is quieter. Full credit is in Settings and assets/audio/CREDITS.txt.
