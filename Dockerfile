FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN ["npm", "i"]

COPY . .

ENTRYPOINT  [ "npm", "run", "dev" ]