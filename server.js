const express = require("express");
const path = require("path");

const app = express();

app.get("*", (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "index.html"));
});
app.set("port", process.env.PORT || 8888);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});
