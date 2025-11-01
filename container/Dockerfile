ARG NODE_VERSION=25.0.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory for all build stages.
WORKDIR /usr/src/app

################################################################################
# Create a stage for installing production dependencies.
FROM base AS deps

# Download dependencies AS a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.yarn to speed up subsequent builds.
# Leverage bind mounts to package.json and yarn.lock to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
#   --mount=type=bind,source=yarn.lock,target=yarn.lock \
#   --mount=type=cache,target=/root/.yarn \
   npm install --frozen-lockfile

################################################################################
# Create a stage for building the application.
FROM deps AS build

# Copy the rest of the source files into the image.
COPY . .

# Run the build script.
RUN npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM nginx:1.29.2

# Install Node.js (LTS version)
RUN apt-get update && apt-get install -y curl ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Set working directory
WORKDIR /usr/src/app

# Copy NGINX config
COPY --from=build /usr/src/app/container/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copy built application and dependencies
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/server ./server
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

# Expose port 80 for NGINX
EXPOSE 80

# Create a startup script to run both node server and nginx
RUN echo "#!/bin/sh\n\
# Start the Node.js server in the background\n\
node server/entry.ssr.js &\n\
# Start NGINX in the foreground\n\
nginx -g 'daemon off;'\n\
" > /usr/src/app/start.sh && chmod +x /usr/src/app/start.sh

CMD ["/usr/src/app/start.sh"]

#ENV NODE_ENV production
#ENV ORIGIN https://numasai2025.nekko-lab.dev/dj

# Run the application AS a non-root user.
#USER node

# Copy package.json so that package manager commands can be used.
#COPY package.json .

# Copy the built application from the build stage into the image.
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port that the application listens on.
#EXPOSE 3000

# Run the application.
#CMD yarn serve
