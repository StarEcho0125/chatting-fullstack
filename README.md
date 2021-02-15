# MERN chatting app
Realtime chat application where you can join different rooms and get connected with other users. This project was created to learn the MERN stack along with WebSockets.

## Installation Guide

- clone the repo
- install dependancies: `npm install`
- create a project in the google console to be able to use 'login with google account'(optional)
- create `.env` file in the server directory with the following:
     ```js
     CLIENT_ID=YOUR_GOOGLE_PROJECT_ID
     PRO_DB=PRODUCTION_MONGO_DB_URL
     SECRET_KEY=ANY_SECERT_KEY_TO_SIGN_TOKENS
     DEV_DB=DEVELOPMENT_MONGO_DB_URL
     ```
- create `.env` file in the client directory with the following:     
     ```js
     REACT_APP_CLIENT_ID=YOUR_GOOGLE_PROJECT_ID
     ```
- run the server `npm run server` and in another terminal `npm run client`
