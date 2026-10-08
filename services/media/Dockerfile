FROM node:22.14.0-alpine AS deps
WORKDIR /srv/media
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/media
COPY --from=deps /srv/media/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
