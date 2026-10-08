FROM node:22.14.0-alpine AS deps
WORKDIR /srv/billing
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/billing
COPY --from=deps /srv/billing/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
