FROM node:22.14.0-alpine AS deps
WORKDIR /srv/identity
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/identity
COPY --from=deps /srv/identity/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
