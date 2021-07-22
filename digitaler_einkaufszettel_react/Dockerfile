FROM node:alpine
WORKDIR /digitaler_einkaufszettel_react
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]