ARG NODE_VERSION=25.0.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory for all build stages.
WORKDIR /usr/src/app

################################################################################
# Create a stage for installing production dependencies.
FROM base AS deps

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

################################################################################
# Create a stage for building the application.
FROM deps AS build

# Copy the rest of the source files into the image.
COPY . .

# Run the build script.
RUN npm run build

# publicディレクトリの静的ファイルをdistにコピー
RUN cp -r public/* dist/ || true

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM nginx:1.29.2

# Set working directory
WORKDIR /usr/src/app

# Remove default nginx configs
RUN rm -rf /etc/nginx/conf.d/*

# Copy NGINX config
COPY nginx/conf.d/*.conf /etc/nginx/conf.d/

# Copy the built application from the build stage into the image.
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/server /usr/src/app/server
