FROM node:alpine

# Create workspace directory
RUN mkdir -p /usr/src/app 
# Change a directory where out app wil be placed
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./
USER node

# Install dependecies
RUN npm install --production

# Get all the code needed to run the app
COPY . .

# Build app
# RUN npm run build

# Export the port the app runs in
# EXPOSE 3000

# CMD [ "node", "server/app.js" ]

