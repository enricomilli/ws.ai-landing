# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install a simple HTTP server to serve static content
RUN npm install -g http-server

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["http-server", "--proxy", "http://0.0.0.0:3000?", "--no-dotfiles", "build/client", "-p", "3000", "-a", "0.0.0.0"]
