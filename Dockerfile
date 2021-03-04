FROM node:alpine

WORKDIR '/app/onboard_sample'

COPY package.json .
RUN npm install
COPY onboard_sample /app/onboard_sample

CMD ["npm", "start"]
