const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid")

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/pessoas", (req, resp, _) => {
  resp.send(uuid.v4())
});

app.listen(9999, () => {
  console.log("Server rodando na porta 9999");
});
