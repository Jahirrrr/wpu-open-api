/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const MONGO_URI = "KASIH URLNYA BANG"

const login = require("./routes/login");
const signup = require("./routes/signup");
const member = require("./routes/member");
const jsonrouter = require("./routes/jsonapi");


const PORT = process.env.PORT || 3900;
mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Berhasil Masuk Ke MongoDB..."))
  .catch((err) => console.error("Gagal Masuk Ke MongoDB..."));

app.use(bodyParser.json({ limit: "500mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "500mb",
    extended: true,
    parameterLimit: 500000,
  })
);
app.use(express.json());
app.set("json spaces",2)
app.use("/api/login", login);
app.use("/api/signup", signup);
app.use("/api/member", member);
app.use("/api/json", jsonrouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Aplikasi berjalan di port ${PORT}...`));
