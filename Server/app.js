const express = require ("express");
const app = express();
const port = 8005;
const router = require('./routes/router');
const cors = require("cors");
require("./db/conn");

app.use(router);
app.use(cors());
app.use(express.json());

app.use("/upload", express.static("./upload"));

//  app.get("/", (req, res) => {res.send("Server Start")})

app.listen(port, () =>{console.log(`Server Start at port no ${port}`)})