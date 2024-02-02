const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const cocktailControllers = require("./controllers/cocktailControllers");

// Route to get a list of cocktails
router.get("/cocktail", cocktailControllers.browseCocktails);
router.get("/mocktail", cocktailControllers.browseMocktails);
// Route to get a specific item by ID
router.get("/cocktail/:id", cocktailControllers.read);

/* ************************************************************************* */

module.exports = router;
