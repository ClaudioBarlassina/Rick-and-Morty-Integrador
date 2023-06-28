// const http = require("http");
// // const characters = require("./utils/data");
// const getCharByid = require("./Controllers/getCharById");
// const { get } = require("https");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;
//     // if (url.includes("/rickandmorty/character")) {
//     //   const id = Number(url.split('/').pop());
//     //   const character = characters.find((char) => {
//     //     return char.id === id;
//     //   });

//     if (url.includes("/rickandmorty/character")) {
//       const id = url.split("/").pop();
//       getCharByid(res, id);
//     }
//     // res.writeHead(200, { "Content-type": "application/json" });
//     // return res.end(JSON.stringify(character));
//   })
//   .listen(3001, "localhost");
const router =  require('./routes/index')
const express = require("express");
const server = express();

server.use(express.json())

const PORT = 3001;

server.use('/rickandmorty', router )

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});


//4. no me la se




server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
