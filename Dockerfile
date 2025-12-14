FROM node:18-alpine

WORKDIR /app

# Copy package.json first
COPY package.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Cloud Run uses port 8080
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
