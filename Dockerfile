# build image
FROM node as build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# deploy image
FROM nginx as release
COPY --from=build /usr/src/app/public /usr/share/nginx/html
