FROM node:18

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

# Gera o cliente Prisma
RUN npx prisma generate

COPY . .

RUN npm run build

# Adiciona o script prisma migrate ao início
CMD ["/bin/sh", "-c", "npx prisma migrate deploy && npm run start:dev"]