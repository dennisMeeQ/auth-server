FROM node:10.13.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
RUN chmod +x wait-for-it.sh

EXPOSE 8080
CMD [ "./wait-for-it.sh", "auth-db:27017", "--", "npm", "start" ]