FROM node:16-alpine

RUN npm install -g pnpm

USER node

WORKDIR /home/node/code

COPY --chown=node:node package.json pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY --chown=node:node . .

RUN pnpm build

CMD ["node", "./dist/index.js"]