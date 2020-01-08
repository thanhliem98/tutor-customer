FROM node:10

MAINTAINER Thanh Liem <liemly98@gmail.com>

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4500

CMD [ "node", "server" ]