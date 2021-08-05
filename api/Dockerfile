FROM node:latest

WORKDIR /usr/app/api  

COPY package.json ./

RUN npm install

COPY . /usr/app/api  

EXPOSE 5000

CMD ["npm",  "start"]
