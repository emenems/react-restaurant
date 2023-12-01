# Use an official Node.js runtime as a base image
FROM node:16-alpine

# Set the http_proxy argument
ARG http_proxy
ENV http_proxy=$http_proxy
ENV https_proxy=$http_proxy

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# unset proxies
ENV http_proxy=""
ENV https_proxy=""

# Define the command to run your app
CMD ["npm", "start"]

