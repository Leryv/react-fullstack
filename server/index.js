const express = require("express");
const app = express();

const db = require("./models");

// Router
const postRouter = require("./routes/Posts");

app.use("/posts", postRouter);

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("Server Berjalan di port 3001");
  });
});
