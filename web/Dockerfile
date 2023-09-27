FROM node:18.17.1

WORKDIR /web

COPY package.json ./

RUN yarn

COPY . .

CMD [ "yarn", "start" ]