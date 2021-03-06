FROM node:alpine

WORKDIR '/app/onboard_sample'

COPY package.json .
RUN npm install
COPY onboard_sample /app/onboard_sample
COPY onboard_module /app/onboard_module
COPY onboard_module/package.json /app/onboard_module/package.json
CMD ["npm", "start"]
