![logo](frontend/src/assets/logo_readme.png)

## Presentation

 Argent Bank is an application for a new start-up bank. 

## Requirements

* [NodeJS (v12 to v16 for Backend)](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

## Dependencies
* "@reduxjs/toolkit": "^1.9.2",
* "prop-types": "^15.8.1",
* "react": "^18.2.0",
* "react-redux": "^8.0.5",
* "react-router-dom": "^6.7.0",
* "redux-persist": "^6.0.0",
* "sass": "^1.57.1"
* "jsdoc": "^4.0.0"

## Launching the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* Clone this project: [https://github.com/fabiendevfront/argentBank](https://github.com/fabiendevfront/argentBank)

### Backend

* Go to backend folder
* Open a terminal window
* Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

### Frontend

* Go to frontend folder
* Open a terminal window
* Install dependencies with `npm install`
* Start application with `npm start`, allow you to run at http://localhost:3000
* For generate JSDoc `npm run docs`


## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation
You can find the [Swagger documentation online](https://app.swaggerhub.com/apis/FABIENDEVFRONT_1/bank-argent_api_documentation/1.0.0).

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.