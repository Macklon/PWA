#FROM node:10

# Create app directory
#WORKDIR /usr/src/app

# Install app dependencies
#COPY package*.json ./

# Bundle app source
#COPY . .

#RUN npm install

#EXPOSE 8080

#CMD [ "npm", "start" ]



FROM node:10-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN export NODE_PATH='/usr/local/lib/node_modules'

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

CMD [ "npm", "start" ]
