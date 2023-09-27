FROM node:18.17.1

WORKDIR /api

COPY package.json ./

RUN yarn

COPY . .

CMD [ "yarn", "start" ]