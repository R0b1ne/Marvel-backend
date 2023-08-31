require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Routes
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);
const clickOnCharacterRoutes = require("./routes/clickOnCharacter");
app.use(clickOnCharacterRoutes);
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);
const clickOnComicRoutes = require("./routes/clickOnComic");
app.use(clickOnComicRoutes);

app.get("/", (req, res) => {
  console.log("Bienvenue sur l'API Marvel 🔥");
  res.json("Bienvenue sur l'API Marvel 🔥");
});

app.all("*", (req, res) => {
  return res.status(404).json("Cette route n'existe pas");
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
server.timeout = Number(process.env.SERVER_TIMEOUT) || 1000000;
