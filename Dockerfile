# syntax=docker/dockerfile:1

# Base image
FROM node:18-alpine AS base

# Instalar dependências do sistema operacional
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Dependências da aplicação
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
  else echo "Lockfile não encontrado." && exit 1; \
  fi

# Builder
FROM base AS builder

WORKDIR /app
COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile não encontrado." && exit 1; \
  fi

# Runner
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copiar arquivos necessários para execução
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/styles ./styles
COPY --from=builder /app/constants ./constants



EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["node", "server.js"]
