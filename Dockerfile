FROM node:20-alpine3.19 as build

WORKDIR /usr/src/app

COPY ./ /usr/src/app

RUN npm install -g @angular/cli@18.0.5

RUN npm install

RUN npm run build --prod


FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d 
COPY --from=build /usr/src/app/dist/conference-attendees-ui/browser /usr/share/nginx/html/conference-attendees-ui
COPY --from=build /usr/src/app/dist/conference-attendees-ui/server/server.mjs /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]