const express = require("express");
const router = express.Router();
const axios = require("axios");

// Route qui permmet de récupérer les informations d'une offre en fonction de son id. Cette route necessite un params
router.get("/comic/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId;
    // console.log("Route Find a Character");
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
