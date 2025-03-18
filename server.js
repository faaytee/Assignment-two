const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const router = require("./route");
app.get("/", (req, res) => {
  res.send("Hi There");
});

app.use("/products", router);

app.listen(port, () => {
  console.log(`app is listening at ${port} `);
});
