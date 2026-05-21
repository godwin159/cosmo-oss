# Cosmo Playground

An interactive particle-motion playground. Pick a source (shape, text, SVG, or
image), tune count, size, speed, color, and effects, watch it render live on the
canvas, then copy the generated snippet.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

---

## Table of contents

- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Contributing](#contributing)
  - [Branching & commits](#branching--commits)
  - [Coding guidelines](#coding-guidelines)
  - [Before you open a PR](#before-you-open-a-pr)
  - [Pull request process](#pull-request-process)
- [Reporting bugs & requesting features](#reporting-bugs--requesting-features)

---

## Tech stack

| Area              | Choice                                  |
| ----------------- | --------------------------------------- |
| Framework         | Next.js 16 (App Router)                 |
| UI library        | React 19                                |
| Language          | TypeScript 5                            |
| Styling           | Tailwind CSS 4                          |
| UI primitives     | Radix UI (shadcn-style components)      |
| Animation         | `motion`                                |
| Package manager   | pnpm                                    |

---

## Getting started

### Prerequisites

- **Node.js 20+** (the project is developed on Node 22).
- **pnpm 10+** — install with `npm install -g pnpm` or `corepack enable`.

### Setup

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/<your-username>/cosmo-oss.git
cd cosmo-oss

# 2. Add the upstream remote so you can stay in sync
git remote add upstream https://github.com/godwin159/cosmo-oss.git

# 3. Install dependencies
pnpm install

# 4. Start the dev server
pnpm dev
```

The app runs at **http://localhost:3000**. Edits hot-reload automatically.

> No environment variables are required to run the app locally.

---

## Available scripts

| Command       | What it does                                          |
| ------------- | ----------------------------------------------------- |
| `pnpm dev`    | Start the dev server with hot reload.                 |
| `pnpm build`  | Create an optimized production build.                 |
| `pnpm start`  | Serve the production build (run `pnpm build` first).  |
| `pnpm lint`   | Run ESLint across the project.                        |

---

## Project structure

```
cosmo/
├── app/                      # Next.js App Router
│   ├── globals.css           # Global styles & design tokens
│   ├── layout.tsx            # Root layout + metadata
│   └── page.tsx              # Home page (hosts the playground)
├── components/
│   ├── particles/
│   │   └── playground.tsx    # The playground — the bulk of the app
│   ├── ui/                   # Reusable shadcn-style primitives
│   │   ├── input.tsx
│   │   ├── slider.tsx
│   │   ├── popover.tsx
│   │   ├── color-picker-popover.tsx
│   │   └── confirm-sheet.tsx
│   ├── icons/                # Animated icon components
│   └── theme-provider.tsx    # Light/dark theme context
├── lib/
│   └── utils.ts              # `cn()` helper and shared utilities
└── public/                   # Static assets
```

Most feature work happens in `components/particles/playground.tsx`. Shared,
reusable controls belong in `components/ui/`.

---

## Contributing

Contributions are welcome — bug fixes, new effects, UI polish, docs, and tests
all help. Please read this section before opening a pull request.

### Branching & commits

1. Sync your fork with upstream before starting:
   ```bash
   git checkout main
   git pull upstream main
   ```
2. Create a focused branch off `main`:
   ```bash
   git checkout -b feat/short-description
   # or: fix/..., docs/..., chore/...
   ```
3. Keep each PR scoped to one logical change.
4. Write clear commit messages in the imperative mood, e.g.
   `fix: clamp gradient angle to 0–359`.

### Coding guidelines

- **TypeScript everywhere** — avoid `any`; type props and component signatures.
- **Match the surrounding code.** Mirror existing naming, file layout, comment
  density, and idioms rather than introducing a new style.
- **Reuse `components/ui/` primitives** (`Slider`, `Input`, `Popover`, …)
  instead of building one-off custom controls. New shared controls go in
  `components/ui/`.
- **Styling** is Tailwind utility classes. Use the `cn()` helper from
  `lib/utils.ts` for conditional classes, and use the design tokens defined in
  `app/globals.css` (e.g. `var(--ls-border)`) rather than hard-coded colors.
- **Keep client/server boundaries correct** — files using hooks or browser APIs
  need the `"use client"` directive.
- Remove dead code (unused imports, helpers, constants) as part of your change.

### Before you open a PR

Run all of these locally and make sure they pass:

```bash
pnpm lint        # ESLint
pnpm build       # type-checks and builds (must succeed with no errors)
```

Then manually verify your change in the running app (`pnpm dev`) — the
playground is highly visual, so a quick check in the browser catches issues
that tooling won't.

### Pull request process

1. Push your branch to your fork and open a PR against `godwin159/cosmo-oss`
   `main`.
2. In the PR description, explain **what** changed and **why**, and include
   before/after screenshots or a screen recording for any UI change.
3. Make sure CI (lint + build) is green.
4. Address review feedback by pushing additional commits to the same branch.
5. A maintainer will merge once it's approved.

---

## Reporting bugs & requesting features

Open a GitHub issue and include:

- **For bugs:** steps to reproduce, what you expected, what actually happened,
  and your browser/OS. Screenshots or a recording help a lot.
- **For features:** the problem you're trying to solve and, if you have one, a
  sketch of the proposed solution.

Search existing issues first to avoid duplicates.

---

Thanks for contributing to Cosmo Playground! 🎉
