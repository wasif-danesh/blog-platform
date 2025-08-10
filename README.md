# Blog Platform (Monorepo)

Next.js (web) + NestJS (API) + MUI + Prisma/Postgres + Storybook + Vitest + pnpm workspaces.

## Environments
- **dev**: PRs → CI (tests, Storybook artifact) + Vercel Preview (Next.js) + GitHub Pages (Storybook)
- **prod**: merge to `main` → Vercel Production (Next.js)

## Prerequisites
- Node 22 (use `.nvmrc`)
- pnpm 9 (Corepack enabled)
- Docker (for local Postgres)
- GitHub CLI (optional)

## Quick Start
```bash
pnpm install -w
docker compose -f infra/dev/docker-compose.yml up -d  # Postgres

# Web
pnpm -C apps/web dev      # http://localhost:3000

# API
cp apps/api/.env.example apps/api/.env 2>/dev/null || true
pnpm -C apps/api dev      # http://localhost:3001

# Storybook (UI lib)
pnpm --filter @ui/storybook storybook  # http://localhost:6006
```

## Workspace Layout
```
apps/
  web/         # Next 15 app (public + admin)
  api/         # NestJS API
packages/
  ui/          # Shared UI components (Storybook)
infra/
  dev/docker-compose.yml  # Postgres
```

## Scripts
- `pnpm -C apps/web dev|build|lint|test`
- `pnpm -C apps/api start:dev|build|lint|test`
- `pnpm --filter @ui/storybook storybook|build`

## CI/CD
- **.github/workflows/ci.yml**: PRs to `dev` run lint, tests, build, upload Storybook artifact; unique name per run.
- **storybook-pages.yml**: pushes to `dev` (or manual) publish Storybook to GitHub Pages.
- **Vercel**: connect repo, root `apps/web`, pnpm monorepo; Preview on PRs, Production on `main`.

## Coding Standards
- ESLint with `no-unused-vars` as **warning** (prefix `_` to ignore).
- Vitest + Testing Library for web unit tests.
- Storybook for UI components.

## Troubleshooting
- **Hydration mismatch** in dev: browser extensions (e.g., Grammarly) can inject attributes. Try Incognito or `suppressHydrationWarning` on `<body>`.
- **Monorepo import issues**: ensure `apps/web/next.config.ts` has:
  ```ts
  export default { transpilePackages: ['@ui/storybook'], experimental: { esmExternals: 'loose' } }
  ```
- **Two React versions**: root `package.json` uses pnpm overrides to pin React 19; UI package uses peerDeps.

## Branching
- `dev`: default branch, PR target.
- `main`: production; merging triggers Vercel Production deploy.
