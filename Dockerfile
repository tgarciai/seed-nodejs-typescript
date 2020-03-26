FROM node:lts-alpine
ENV PORT 3001
EXPOSE 3001
COPY package.json package.json
RUN npm install
COPY . .
RUN npm install -g tsc
CMD ["node", "dist/"]
