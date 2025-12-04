# ------------------------------------
# STAGE 1: Build Stage (Builder)
# React 빌드 결과물 생성
# ------------------------------------
FROM node:18-alpine AS builder

WORKDIR /app

# package.json 및 잠금 파일 복사
COPY package*.json ./

# 모든 의존성 설치 (개발/프로덕션 모두)
# 'react-scripts build'를 실행하려면 모든 의존성이 필요합니다.
RUN npm install

# 애플리케이션 소스 전체 복사
COPY . .

# React 프로젝트 빌드 실행
# 빌드된 결과물은 /app/build 폴더에 저장됩니다.
RUN npm run build 

# ------------------------------------
# STAGE 2: Service Stage (Production)
# Nginx를 사용하여 정적 파일 서빙
# ------------------------------------
FROM nginx:alpine

# Builder 스테이지에서 생성된 빌드 결과물(정적 파일)을 Nginx 웹 루트로 복사
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx 기본 포트(80) 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
