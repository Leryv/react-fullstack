const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");

// Router
const postRouter = require("./routes/Posts");

app.use("/posts", postRouter);
// app.use("/users", userRouter);

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("Server Berjalan di port 3001");
  });
});
