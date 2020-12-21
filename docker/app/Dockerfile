# build environment
FROM node:13-alpine 
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY frontend/event-madrid/package.json /app/package.json
RUN npm install -silent
RUN npm install react-scripts@3.0.1 -g -silent
COPY frontend/event-madrid /app
# start app
CMD ["npm", "start"]
EXPOSE 3000