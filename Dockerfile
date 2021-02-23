FROM node:alpine

# Create workspace directory
# RUN mkdir /usr/src/app -p

# Change a directory where out app wil be placed
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependecies
RUN npm install --production

# Get all the code needed to run the app
COPY . .

# Build app
# RUN npm run build

# Export the port the app runs in
# EXPOSE 8000

# CMD [ "node", "server/app" ]