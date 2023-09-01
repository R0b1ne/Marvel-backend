const express = require("express");
const router = express.Router();
const axios = require("axios");

// Route qui permmet de récupérer les informations d'une offre en fonction de son id. Cette route necessite un params
router.get("/character/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    // console.log("Route Find a Character");
    const responseCharacters = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY}`
    );

    const comicsDetails = [];
    for (let i = 0; i < responseCharacters.data.comics.length; i++) {
      const comicId = responseCharacters.data.comics[i];
      const responseComic = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.API_KEY}`
      );
      comicsDetails.push(responseComic.data);
    }

    const characterData = {
      character: responseCharacters.data,
      comics: comicsDetails,
    };

    console.log(characterData);
    res.json(characterData);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
