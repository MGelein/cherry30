FROM node:22-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./   
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:stable-alpine as deploy
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist/ .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]