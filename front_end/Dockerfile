FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

# --
FROM node:16-alpine

ENV NODE_ENV=production

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /app .

CMD ["npm", "start"]