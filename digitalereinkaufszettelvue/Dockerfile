FROM node:lts-alpine as build
WORKDIR /digitalereinkaufszettelvue
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /digitalereinkaufszettelvue/dist /usr/share/nginx/html
CMD ["nginx","-g","daemon off;"]