# build environment
FROM node:13-alpine as development
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY backend/package.json /app/package.json
RUN npm install -silent
COPY backend /app
# start app
CMD ["npm", "start"]
EXPOSE 3001