# ---------- Install only API deps ----------
FROM node:22-alpine AS deps
WORKDIR /repo
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

# Copy workspace manifests first (cache-friendly)
COPY pnpm-workspace.yaml ./
COPY package.json pnpm-lock.yaml ./

# Copy the full repo (needed for workspace linking)
COPY . .

# Install just the API package (includes dev deps so "nest" exists)
RUN pnpm -w --filter ./apps/api... install --frozen-lockfile

# ---------- Build API ----------
FROM node:22-alpine AS build
WORKDIR /repo
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

# Bring in sources + installed node_modules
COPY --from=deps /repo ./

# Build only the API package (runs "nest build")
RUN pnpm --filter ./apps/api... run build

# Package a pruned app (code + runtime deps) into /out
RUN pnpm --filter ./apps/api... deploy --prod /out

# ---------- Runtime ----------
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

# Copy pruned API app (contains /app/dist, /app/node_modules, package.json)
COPY --from=build /out ./

EXPOSE 3001
CMD ["node", "dist/main.js"]
