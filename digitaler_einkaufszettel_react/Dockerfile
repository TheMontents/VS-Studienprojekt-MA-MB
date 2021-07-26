FROM node:alpine as build
WORKDIR /digitaler_einkaufszettel_react
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /digitaler_einkaufszettel_react/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]