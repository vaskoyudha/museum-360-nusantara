# Plan: Museum 360 Tour Website for Indonesian Museums

Date: 2026-04-25
Mode: `$plan` direct planning
Requested skills: `$plan`, `$image-taste-frontend`
Workspace: `/home/vascosera/Documents/Github/Meseum`

## Grounded Facts From Local Inspection

- The workspace is not currently a Git repository: `git status` returned `fatal: not a git repository`.
- GitHub CLI is available: `gh version 2.45.0`.
- The current directory contains only `.omx/` runtime files at planning time.
- No local panorama/image/video assets were found under the current directory by this planning scan using common extensions: `*.jpg`, `*.jpeg`, `*.png`, `*.webp`, `*.avif`, `*.hdr`, `*.exr`, `*.mp4`, `*.mov`.
- `omx explore` is unavailable in this environment because its Rust/cargo harness is missing; normal shell inspection was used instead.

## Requirements Summary

Build a new modern web application for a 360° virtual museum tour focused on museums in Indonesia. The site should target public audiences such as students, tourists, culture enthusiasts, educators, and museum visitors. It should combine museum information, curated storytelling, and an interactive 360° tour experience with a cool minimalist glassmorphism UI.

The user also requested:

1. Create a new repository for the project using GitHub CLI.
2. Use a modern frontend stack.
3. Use existing 360° image assets from this directory when available.
4. Commit and push progress throughout implementation.
5. Create the plan first before implementation.
6. Apply `$image-taste-frontend`: implementation must be image-first for visual quality — generate design references, analyze them, then code from them.

## Assumptions

Because no panorama assets are currently visible in `/home/vascosera/Documents/Github/Meseum`, execution should proceed with this fallback rule:

- If assets appear before implementation, copy/import them into the new app and wire them into the 360 viewer.
- If assets are still absent, scaffold the app with a documented `public/panoramas/` folder, placeholder metadata, and a clear asset drop-in path without blocking the UI build.

## Recommended Modern Stack

### Primary choice

- **Vite + React + TypeScript** for a fast modern SPA.
- **Tailwind CSS v4 or v3** for rapid, controlled styling.
- **React Router** only if a separate tour/detail route is needed; otherwise single-page section navigation is enough.
- **Pannellum** or **Photo Sphere Viewer** for 360 panorama rendering.
- **Framer Motion** for subtle cinematic fade-through / parallax motion.
- **Lucide React** for lightweight icons.

### Preferred 360 viewer option

Use **Photo Sphere Viewer** if install size and API are acceptable because it provides a polished modern viewer, markers/plugins, and good UX for panorama exploration.

Fallback: **Pannellum** if the goal is minimal dependencies and simple static panorama display.

## RALPLAN-DR Summary

### Principles

1. **Image-first visual discipline**: generate section-specific design references before coding, then implement from the analyzed references.
2. **Minimalist but useful**: glassmorphism should support museum storytelling, not become decorative clutter.
3. **360 tour first-class**: the panorama viewer must be prominent, responsive, and usable on desktop/mobile.
4. **Asset-safe implementation**: support missing local panoramas with a clean placeholder workflow.
5. **Commit hygiene**: use small progress commits with Lore-style commit messages and push after meaningful milestones.

### Decision Drivers

1. **Visual impact**: the website should feel premium, modern, and culturally grounded.
2. **Delivery speed**: use a stack that can be scaffolded and deployed quickly.
3. **360 reliability**: avoid overbuilding; choose a stable viewer library and keep the asset pipeline simple.

### Viable Options

#### Option A — Vite React SPA + Photo Sphere Viewer + Tailwind

Pros:
- Fast to scaffold and iterate.
- Strong fit for a visually rich single-page experience.
- Photo Sphere Viewer supports modern interactive 360 features and markers.
- Easy deployment to Vercel/Netlify/GitHub Pages.

Cons:
- Not SEO-perfect compared with a framework like Next.js.
- Requires careful lazy-loading for large panorama files.

#### Option B — Next.js + React + 360 viewer

Pros:
- Better SEO and routing primitives.
- Strong production conventions.
- Easier future expansion into museum detail pages or CMS integration.

Cons:
- More framework overhead for a mostly static visual/tour site.
- 360 viewer may require client-only dynamic imports to avoid SSR problems.

#### Option C — Static HTML/CSS/JS + Pannellum

Pros:
- Lowest dependency surface.
- Very simple hosting.
- Good for a lightweight demo.

Cons:
- Less maintainable for a polished multi-section UI.
- Harder to preserve high-end interaction and component structure.

### Recommended Decision

Choose **Option A: Vite React SPA + TypeScript + Tailwind + Photo Sphere Viewer**, with Pannellum as a fallback if package friction occurs.

## Visual Direction for `$image-taste-frontend`

During execution, generate separate large design references before coding. Do not compress all sections into one tiny mockup.

### Art direction choices

- Theme paradigm: **Quiet Premium Neutral** with luminous glass panels.
- Background character: **full-bleed cinematic imagery** plus subtle ambient gradient depth.
- Typography character: **refined grotesk** with editorial scale contrast.
- Hero architecture: **massive image-first hero with restrained text**.
- Section system: **gallery-led cadence** with asymmetric premium flow.

### Signature components

1. Layered image crop frames.
2. Pristine gapless bento grid.
3. Oversized metrics strip.
4. Hover-accordion slice layout.

### Motion-implied language

1. Parallax image drift energy.
2. Cinematic fade-through energy.

### Planned section reference images

Generate at least one fresh standalone image for each section:

1. Hero + glass nav + primary CTA into 360 tour.
2. Museum discovery / featured Indonesian museums.
3. 360 tour preview section with viewer frame and controls.
4. Cultural storytelling / benefits for students, tourists, educators.
5. Gallery / bento museum highlights.
6. Audience targeting / use cases.
7. Visit planning / museum information cards.
8. Final CTA + footer.

If any generated section has unreadable text/buttons/cards, regenerate that section or create a fresh detail reference image before implementation.

## Information Architecture

### Main page sections

1. **Hero**
   - Brand: working name `Museum360 Nusantara` or `NusaMuseum 360`.
   - Headline direction: short and cinematic, e.g. `Step Inside Indonesia’s Living Heritage`.
   - CTAs: `Start 360 Tour`, `Explore Museums`.
   - Visual: glass panel over panorama/museum imagery.

2. **Featured Museums**
   - Cards for Indonesian museums, for example:
     - Museum Nasional Indonesia — Jakarta.
     - Museum Sonobudoyo — Yogyakarta.
     - Museum Geologi — Bandung.
     - Museum Ullen Sentalu — Sleman.
   - Include location, short description, and highlight tags.

3. **360 Tour Experience**
   - Interactive panorama viewer.
   - Scene selector.
   - Hotspot/marker affordances if supported.
   - Fullscreen button if viewer library supports it.

4. **Why It Matters / Audience Benefits**
   - Students: learn history visually.
   - Tourists: preview destinations before visiting.
   - Educators: use as classroom material.
   - Museums: improve digital reach.

5. **Gallery / Heritage Highlights**
   - Image-led bento grid with artifacts, halls, architecture, collections.
   - If local images are absent, use generated/placeholder glass cards and documented replacement slots.

6. **Plan Your Visit**
   - Museum info cards: hours, location, category, recommended duration.
   - Add disclaimer that detailed hours should be verified with official museum sources before production.

7. **CTA / Footer**
   - Encourage virtual visit and cultural exploration.
   - Footer navigation and credits.

## Implementation Steps

### Phase 0 — Repository and baseline setup

1. Confirm or create GitHub repository via GitHub CLI, e.g.:
   - `gh repo create museum-360-nusantara --public --source=. --remote=origin --push`
   - If creating from a fresh app folder, run after scaffold and initial commit.
2. Initialize local git if needed: `git init`.
3. Scaffold the app:
   - `npm create vite@latest . -- --template react-ts` if using the current directory.
   - Or create a child folder if the user wants this directory kept as orchestration root.
4. Add baseline dependencies.
5. First progress commit and push: scaffold only.

### Phase 1 — Asset discovery and asset contract

1. Re-scan the project for panorama assets after scaffold.
2. Create `public/panoramas/`.
3. Create a metadata module, e.g. `src/data/museums.ts`, with fields:
   - `id`, `name`, `city`, `province`, `description`, `image`, `panorama`, `tags`, `visitInfo`.
4. If local panoramas exist, copy them into `public/panoramas/` and wire metadata.
5. If absent, create placeholder metadata and README instructions.
6. Commit and push asset wiring.

### Phase 2 — Image-first design references

1. Generate separate section design images using `$image-taste-frontend` rules.
2. Deeply analyze each image:
   - text hierarchy,
   - spacing,
   - glassmorphism treatment,
   - colors,
   - card rhythm,
   - buttons,
   - 360 viewer frame.
3. Save analysis notes in `docs/design-analysis.md` or `.omx/plans/design-analysis-*.md`.
4. Commit and push design reference documentation if stored in repo.

### Phase 3 — Design system implementation

1. Configure global CSS variables for:
   - background palette,
   - glass surface colors,
   - borders,
   - text hierarchy,
   - accent color,
   - radii and shadow tokens.
2. Implement layout primitives:
   - `Container`, `GlassCard`, `SectionHeader`, `Button`, `MuseumCard`.
3. Implement responsive typography and spacing to match analyzed references.
4. Commit and push design system.

### Phase 4 — Page sections

Implement sections in small commits:

1. `Header` and `Hero`.
2. `FeaturedMuseums` and `HeritageGallery`.
3. `TourExperience` with the 360 viewer.
4. `AudienceBenefits` and `VisitPlanner`.
5. `Footer` and final CTA.

Commit and push after each coherent section group.

### Phase 5 — 360 viewer integration

1. Add viewer component, e.g. `src/components/TourViewer.tsx`.
2. Use dynamic/lazy loading if needed for viewer CSS and large panorama files.
3. Add scene selector and fallback empty state.
4. Ensure the viewer:
   - renders at desktop and mobile sizes,
   - has keyboard/mouse/touch support where available,
   - does not break if panorama path is missing.
5. Commit and push viewer integration.

### Phase 6 — Polish, accessibility, and performance

1. Add reduced-motion handling.
2. Ensure glass panels have sufficient contrast.
3. Add alt text and accessible labels.
4. Lazy-load heavy images and panorama viewer where practical.
5. Run lint/typecheck/build.
6. Optional: Playwright smoke test for navigation and tour viewer presence.
7. Commit and push final polish.

## Suggested File Structure

```text
.
├── public/
│   ├── panoramas/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── GlassCard.tsx
│   │   ├── FeaturedMuseums.tsx
│   │   ├── TourViewer.tsx
│   │   ├── HeritageGallery.tsx
│   │   ├── AudienceBenefits.tsx
│   │   ├── VisitPlanner.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── museums.ts
│   ├── styles/
│   │   └── tokens.css
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   ├── design-analysis.md
│   └── asset-contract.md
├── package.json
└── README.md
```

## Acceptance Criteria

### Repository and workflow

- A Git repository exists locally.
- A GitHub remote exists and is reachable through `gh`/`git remote -v`.
- Progress commits are made after scaffold, asset contract, design system, viewer integration, and final polish.
- Commits use Lore-style commit messages where practical.
- All committed work is pushed to the remote branch.

### Visual/UI

- The app presents a minimalist glassmorphism theme with readable contrast.
- Hero section is clean, cinematic, and not overpacked.
- Major sections match the generated design references in layout, spacing, palette, and component style.
- UI is responsive at mobile, tablet, and desktop widths.
- The site avoids generic AI-style purple/blue gradient clutter and repeated identical card rows.

### Content

- Website clearly communicates that it is about Indonesian museum discovery and 360 virtual tours.
- At least 4 Indonesian museum entries are represented in data/content.
- Target audiences are explicitly addressed: students, tourists, educators/culture learners.
- Visit-planning information is clearly marked as demo content unless verified from official sources.

### 360 tour

- A 360 viewer component is present and visible in the tour section.
- At least one panorama scene loads if a valid local panorama asset exists.
- If no panorama asset exists, the app displays a polished empty state explaining where to add assets.
- Viewer section remains responsive and does not crash on missing asset paths.

### Quality gates

- `npm run build` passes.
- `npm run lint` or equivalent static check passes if configured.
- TypeScript has no compile errors.
- No obvious console runtime errors during local smoke test.
- Basic keyboard navigation reaches primary CTAs and viewer controls.

## Risks and Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Local 360 assets are missing | Viewer cannot show real tours | Build a graceful empty state and documented `public/panoramas/` drop-in workflow. |
| 360 viewer library has bundling/SSR issues | Build failure or runtime crash | Prefer Vite SPA; lazy-load viewer; fallback from Photo Sphere Viewer to Pannellum if needed. |
| Large panorama images hurt performance | Slow page load | Lazy-load viewer, compress assets when possible, keep preview images separate from full panoramas. |
| Glassmorphism reduces readability | Accessibility issue | Use strong contrast tokens, translucent surfaces with borders, and test at mobile sizes. |
| Generated design references drift from implementation | Generic final UI | Store analysis notes and implement section-by-section from references. |
| GitHub repo creation/auth fails | Cannot push progress | Continue local commits; report exact `gh auth status`/push blocker and keep repo ready for remote push. |

## Verification Steps

1. `git status --short --branch` confirms repository state.
2. `git remote -v` confirms GitHub remote.
3. `npm install` completes.
4. `npm run build` passes.
5. `npm run lint` or equivalent passes if configured.
6. Local app smoke test:
   - Header/nav visible.
   - Hero CTAs visible and clickable.
   - Museum cards render.
   - 360 tour section renders real panorama or empty state.
   - Mobile layout does not overflow.
7. Optional Playwright smoke:
   - page loads,
   - no console errors,
   - tour section exists,
   - primary CTA scrolls/navigates to tour.

## Commit and Push Milestones

1. `Scaffold the museum tour foundation`
2. `Define the panorama asset contract`
3. `Capture image-first design direction`
4. `Build the glassmorphism design system`
5. `Present Indonesian museum discovery content`
6. `Enable the 360 tour experience`
7. `Polish responsive accessibility and performance`

Each commit should include `Tested:` and `Not-tested:` trailers when meaningful.

## ADR

### Decision

Build a Vite React TypeScript single-page app with Tailwind styling and a client-side 360 panorama viewer, following an image-first design-to-code workflow.

### Drivers

- Need fast delivery and easy visual iteration.
- Need a polished interactive 360 experience.
- Need modern UI quality without overcomplicating backend/content infrastructure.

### Alternatives considered

- Next.js app: rejected for initial build because SSR adds friction for browser-only 360 libraries and is unnecessary for the first static/demo version.
- Static HTML/Pannellum-only site: rejected because it limits component structure and premium UI polish.

### Why chosen

Vite React provides the best balance of speed, simplicity, and interactive frontend capability for a visually rich museum tour prototype.

### Consequences

- SEO is adequate for a prototype but not as strong as SSR/SSG.
- Future content scaling may require adding CMS/static generation later.
- Viewer performance depends on asset optimization.

### Follow-ups

- Add real museum data from official sources if the project becomes public/production.
- Add multiple panorama scenes and hotspots once assets are available.
- Consider deployment via Vercel or GitHub Pages after the first complete build.

## Available-Agent-Types Roster

- `explore`: repository/file mapping and asset discovery.
- `researcher`: official docs for chosen 360 viewer if API details are needed.
- `dependency-expert`: compare Photo Sphere Viewer vs Pannellum if package friction occurs.
- `designer`: UX/UI architecture and section refinement.
- `executor`: implementation of app, components, and styling.
- `test-engineer`: smoke/e2e test plan and coverage.
- `verifier`: final evidence validation.
- `code-reviewer`: comprehensive code review before final handoff.

## Follow-up Staffing Guidance

### `$ralph` path

Use one persistent owner with optional targeted subagents:

- `executor` for scaffold, components, viewer integration.
- `designer` for image analysis translation and visual fidelity checks.
- `test-engineer` for smoke tests and responsive verification.
- `verifier` for final build/lint/status evidence.

### `$team` path

Recommended lanes:

1. **Visual/design lane** — `designer`: generate/analyze references and define tokens.
2. **Frontend lane** — `executor`: scaffold and build sections.
3. **360 viewer lane** — `executor` or `dependency-expert`: integrate panorama library and asset fallback.
4. **Quality lane** — `test-engineer`/`verifier`: build, lint, responsive smoke.

Suggested launch hints:

```bash
omx team --task "Implement .omx/plans/plan-museum-360-tour-2026-04-25.md with image-first design, Vite React TS, glassmorphism UI, 360 viewer, commits and pushes at milestones"
```

or user-facing:

```text
$team implement .omx/plans/plan-museum-360-tour-2026-04-25.md
```

## Team Verification Path

Before shutdown, the team should prove:

- GitHub remote exists or exact auth/blocker is documented.
- Milestone commits exist locally and pushed when possible.
- Build passes.
- 360 section renders with real panorama or polished empty state.
- Visual implementation follows generated references.
- Final `git status` is clean or only expected uncommitted files remain.

