const app = require("./util/app.js");
const express = require("express");
const cors = require("cors");
const db = require("./models");

const libraryRoute = require("./routes/library.routes");

require("dotenv").config();

app.use(express.urlencoded({ extended: true, limit: "500mb" }));
app.use(express.json({ limit: "10gb", type: "application/json" }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

require("./models/associations.js");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db using seqeulize");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use("/api/", libraryRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
