# backend

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

  ----

  # frontend

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

