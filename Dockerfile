FROM node:8.16.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY app.js ./

EXPOSE 8080

CMD ["node", "app.js"]