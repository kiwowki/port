# App/Dockerfile
FROM node:18-slim
WORKDIR /app

# 의존성만 설치
COPY package*.json ./
RUN npm ci --production

# 소스 복사
COPY . .

ENV PORT=8080
EXPOSE 8080

CMD ["node", "index.js"]