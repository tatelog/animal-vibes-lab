# Animal Vibes Lab

A lightweight browser-only 5-animal character remix app.

- Runs as a static GitHub Pages site.
- No server-side code.
- No AI API or API keys.
- Celebrity lookup queries Wikidata from the user's browser.

This is a fan-style / playful homage tool, not an official diagnostic service.

## Event seating mock

Open `event.html`. This additional page preserves the original birthday lookup.

- Load 12 fictional attendees or import a JSON array from an external X search agent.
- Review attendance, full birth date and both source references before seating.
- Cluster by four positional animal matches, or mix different classifications; table sizes are balanced.
- Existing calculation uses approximate solar cutoffs. Hope predictions are excluded. Classification similarity is an icebreaker, not a validated compatibility score.
- Data stays in tab memory. Exports omit birth dates. No X fetching, API credentials or background persistence are included.
- WebMCP tools: `get_event_search_conditions`, `import_event_participants`, `create_event_seating`, `get_event_seating`. Requires a compatible browser agent. A URL alone does not provide a remote MCP server.
- Agent flow: open event page → obtain search conditions → search X using the agent's authorized search tool → provide evidence-backed participant JSON → organizer confirms candidates → create seating → read seating.
- Unknown birth year is left unclassified; gender is never inferred. The four scored classifications do not use gender. Original hope remains gender-dependent and is omitted here.
- GitHub Pages serves this static mock. A standalone remote MCP endpoint and server-held X credentials would need a backend, for example Cloudflare Workers.

Participant example (fictional):
```json
[{"handle":"demo_1","name":"サンプル","birthDate":"1990-01-01","birthSource":"https://example.com/birthday","attendanceSource":"https://example.com/event","confirmed":false}]
```
