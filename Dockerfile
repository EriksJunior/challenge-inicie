FROM node:16.13.1

WORKDIR /usr/src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "run", "dev"]