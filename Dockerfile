FROM node:alpine

RUN mkdir /usr/nextapp
WORKDIR /usr/nextapp

COPY package*.json ./
RUN npm install

CMD [ "npm", "run", "dev" ]

