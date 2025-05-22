FROM node:latest

WORKDIR /usr/src/acmwebsite

COPY acmwebsite/package.json acmwebsite/package-lock.json ./

RUN npm install

COPY acmwebsite ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
