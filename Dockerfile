FROM node:latest
#Create app directory
WORKDIR /usr/src/app
COPY package.json ./
# Install dependencies
RUN npm install
# Copy all files into the container
COPY . .
# Open appropriate port 
EXPOSE 3000
#Start the application
CMD [ "node", "index.js" ]