FROM node as development
WORKDIR /var/x3proofer
COPY . .
RUN npm install && npm run build

FROM nginx as production
WORKDIR /usr/share/nginx/html
COPY --from=development /var/x3proofer/dist .
EXPOSE 80
