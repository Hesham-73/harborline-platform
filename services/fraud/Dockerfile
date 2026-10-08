FROM node:22.14.0-alpine AS deps
WORKDIR /srv/fraud
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/fraud
COPY --from=deps /srv/fraud/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
