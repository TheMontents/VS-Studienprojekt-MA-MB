FROM node:alpine as build-step
WORKDIR /DigitalerEinkaufszettelAngular
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build-step /DigitalerEinkaufszettelAngular/dist/DigitalerEinkaufszettelAngular /usr/share/nginx/html