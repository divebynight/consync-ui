# SESSION LOG – v0.1.0

## Milestones
- Designed high-level file organization structure with session folders (`0322_01_ZBrush_Tutorial`, etc.)
- Added project_index.json to describe sessions with metadata and thumbnail paths
- Created initial React app using `create-react-app`
- Set up routing and rendering of cards from JSON
- Validated with real screenshots and session files
- Fixed issues with Node version, NPM registry errors, and setup inconsistencies

## Known Issues
- Session folders live in `public/` temporarily — not scalable
- No ability to interact with real file system yet
- project_index.json must be manually edited

## Next Steps
- Clean up structure
- Create GitHub repo and initialize with this snapshot
- Add support for deeper metadata, editable UI, and dynamic project scanning
