# Normal
FROM node:20.12.2-alpine as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]

# Standalone Next.js app with server.js for SSR and API routes in production environment using Docker
# FROM node:20.12.2-alpine as builder

# WORKDIR /app
# COPY . .

# RUN npm install
# RUN npm run build
# RUN cp -R public .next/standalone/
# RUN cp -R .next/static .next/standalone/.next/

# FROM node:20.12.2-alpine as deployer
# WORKDIR /app

# COPY --from=builder /app/.next/standalone/ .
# COPY --from=builder /app/public /app/public

# CMD ["node", "server.js"]