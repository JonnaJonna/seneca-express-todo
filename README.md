# Seneca-express-todo
A simple Todo-backend project using Seneca microservices, Node.js, Express and PM2 process manager for running the application.

## Getting started
### Technologies
- Seneca
- Node.js
- Express.js 
- PM2
### Prerequisites
Node and NPM package manager installed. To run with pm2, also install pm2 globally
```
npm install pm2 -g
```
### Install packages
To run the app, install packages needed by the project. In project directory run
```
npm install
```
### Run the project with PM2
In project directory run
```
pm2 start ecosystem.config.js
```
- starts the app (app.js) and microservices defined in notes-pin-service.js.
To stop application run 
```
pm2 stop ecosystem.config.js
```
 More: https://pm2.keymetrics.io/docs/usage/quick-start/
 
### Testing the todo API endpoints

- GET categories: http://localhost:3000/api/categories/all
- GET notes by category: http://localhost:3000/api/categories/byId?id=1
- GET one note (by id): http://localhost:3000/api/notes/byId?id=2
- GET service info: http://localhost:3000/api/service
