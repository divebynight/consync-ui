# Consync UI — Version 0.1.0

This is the first working proof-of-concept for the Consync Viewer — a local React/Node-based web app for previewing creative session folders.

## Features
- Displays session previews based on `project_index.json`
- Shows session name, notes, and a thumbnail image
- Static file viewer (served from `public/`)
- Manual session tracking (project_index.json is hand-managed for now)

## Project Structure
```
consync_ui_app/
├── client/                   # React app (frontend)
│   ├── public/
│   │   └── 2025_Sessions/    # Session folders live here temporarily
│   ├── src/
│   └── project_index.json    # Manually generated metadata
└── README.md
```

## Usage
1. Place `project_index.json` in `client/public/`
2. Place your session folders (with screenshots) in `client/public/2025_Sessions/`
3. Run from the `client/` directory:
```bash
npm install
npm start
```

## Limitations
- Sessions live in the `public/` directory for now
- Only shallow rendering (no folder traversal yet)
- No backend integration

## Roadmap
- Move sessions out of `public/`, use Node backend
- Add per-session view and editable metadata
- File preview + cleanup from UI
- GitHub versioning and automation
