FROM node:18.17.0
WORKDIR '/app'
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npm", "start"]