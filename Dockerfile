FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8000

ENV PORT="8000"

CMD ["yarn", "start"]
