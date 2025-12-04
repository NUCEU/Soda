# ------------------------------------
# STAGE 1: Build Stage (Builder)
# ------------------------------------
FROM node:18-alpine AS builder

# WORKDIR 설정
WORKDIR /app

# 1. package.json 및 lock 파일만 복사 (npm install 캐시를 위해)
COPY package*.json ./

# 2. 모든 의존성 설치
# build 명령어에 필요한 react-scripts는 여기서 설치됩니다.
RUN npm install

# 3. 애플리케이션 소스 전체 복사 (public, src 등)
# COPY . . 명령은 .dockerignore에 의해 node_modules를 복사하지 않습니다.
COPY . .

# 4. React 프로젝트 빌드 실행
RUN npm run build 

# ------------------------------------
# STAGE 2: Service Stage (Production)
# Nginx를 사용하여 정적 파일 서빙
# ------------------------------------
FROM nginx:alpine

# 1. Nginx 설정 파일 복사
# 리포지토리 루트에 nginx.conf가 있으므로 이를 복사합니다.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2. Builder 스테이지에서 생성된 빌드 결과물(정적 파일)을 Nginx 웹 루트로 복사
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx 기본 포트(80) 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
