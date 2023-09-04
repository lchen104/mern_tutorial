# tutorial
https://www.youtube.com/playlist?list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm

# backend

# tutorial
https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=1&t=758s

# tutorial
https://www.youtube.com/watch?v=enopDSs3DRw&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=4

npm i express dotenv mongoose colors

npm i -D nodemon

# modify package.json to include in scripts
  "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js"
  },

  npm i express-async-handler

  # may need to install mongodb

  npm install mongodb

  npm i bcryptjs

  npm i jsonwebtoken

  # to run backend server, goto dir backend
  npm run server
  ----

  # frontend

  https://www.youtube.com/watch?v=mvfsC66xqj0&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=3


  install Redux DevTools chrome extension
  https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

  https://redux-toolkit.js.org/

  npm create vite@latest frontend -- --template react

  cd frontend
  npm install
  npm run dev

  npm install @reduxjs/toolkit  
  npm install react-redux

# added client to the root package.json script
    "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm run dev --prefix frontend"
  },

  cd frontend
  npm i react-router-dom

  npm i react-icons

# to run frontend server, goto dir frontend
npm run dev

# install at root dir to run both front and backend automatically, goto root folder
npm i -D concurrently

# run in root, outside of frontend and backend folder
npm run dev

# modify package.json in root to include "dev": concurrently line so u can run npm run dev to launch both front and backend server

  "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm run dev --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },

  # frontend
  npm i axios react-toastify

  https://devcenter.heroku.com/articles/heroku-cli
  # imstall heroku cli in root dir for macOs
  brew tap heroku/brew && brew install heroku