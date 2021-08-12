FROM node:14-alpine

WORKDIR /portfolio-frontend
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]