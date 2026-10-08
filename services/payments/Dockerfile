FROM node:22.14.0-alpine AS deps
WORKDIR /srv/payments
COPY package.json ./

FROM node:22.14.0-alpine
WORKDIR /srv/payments
COPY --from=deps /srv/payments/package.json ./
COPY src ./src
USER node
EXPOSE 8080
CMD ["node", "src/server.ts"]
