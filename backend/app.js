
const configFile = require("./config.json");
const express = require("express");
const http = require("http");
const https = require("https");
const cors = require("cors");

const corsOptions = {
 origin: `http://${configFile.clientHost}:${configFile.clientPort}`
}

const app = express()

app.use(cors(corsOptions))
app.use("/", (r, rs, next) => {
 rs.json({ a: "s" })
})

app.listen(configFile.serverPort, configFile.serverHost, () => {
 console.log(`now ${configFile.serverHost + ":" + configFile.serverPort}`);
})
