# Node version
FROM node:18-alpine as build

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install all the dependencies
COPY package*.json .
COPY yarn.lock .
RUN npm  install

# Add the source code to app
COPY . .

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy the build output to replace the default nginx contents.
# COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

USER root

EXPOSE 3000

CMD ["npm", "run dev"]