# Use Node.js 18 on Alpine Linux as the base image for the build stage
FROM node:18-alpine AS build

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if present) into the container
# This helps Docker cache dependency installation when source files change
COPY package*.json ./

# Install project dependencies inside the container
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Build the production-ready static files (typically outputs to /app/build)
RUN npm run build

# Start a new stage based on Nginx on Alpine Linux for serving the built files
FROM nginx:alpine

# Copy the build output from the previous stage into Nginx's default web root
COPY --from=build /app/build /usr/share/nginx/html

# Document that the container listens on port 80 (HTTP)
EXPOSE 80
