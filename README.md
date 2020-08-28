# nodejs-crs-shop

NodeJS (incl. MVC, REST APIs, GraphQL)

Need to run npm install inside of the extracted code attachment before you can run npm start to run the server.

## Want to quit your running Node.js server?

You can always do that by pressing CTRL + C in the terminal/ command prompt window where you started your server (i.e. where you ran node app.js).

## Work with docker

```
//run app
docker-compose up -d
//stop app
docker stop $(docker ps -a -q)
//rebuild container
docker-compose up -d --no-deps --build web
```
