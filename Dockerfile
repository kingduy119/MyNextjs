FROM node:latest

# set working directory

WORKDIR /usr/src/app

ENV PORT 8080

# install and cache app dependencies
ADD package*.json ./

RUN npm install
RUN npm build

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# add app
COPY . /usr/src/app

EXPOSE 8080
CMD [ "node", "server/app.js" ]

