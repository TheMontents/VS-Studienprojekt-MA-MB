FROM node:lts-alpine
WORKDIR /digitalereinkauszettelvue
COPY package.json .
RUN npm install
COPY ./dist .
EXPOSE 8080
RUN npm run build