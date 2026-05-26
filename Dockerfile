# ---------- Stage 1: Build Stage ----------
FROM node:19-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the React/Vite app
RUN npm run build


# ---------- Stage 2: Production Stage ----------
FROM nginx:alpine

# Copy build files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]



# FROM node:19-alpine as firststage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .

# FROM firststage as final
# RUN npm install --production
# COPY . .
# CMD ["node","npm run dev"]
