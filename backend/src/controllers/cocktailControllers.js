// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browseCocktails = async (req, res, next) => {
  try {
    // Fetch all cocktails from the database
    const cocktails = await tables.cocktail.readAllCocktails();

    // Respond with the cocktails in JSON format
    res.json(cocktails);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The B of BREAD - Browse (Read All) operation
const browseMocktails = async (req, res, next) => {
  try {
    // Fetch all cocktails from the database
    const cocktails = await tables.cocktail.readAllMocktails();

    // Respond with the cocktails in JSON format
    res.json(cocktails);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific cocktail from the database based on the provided ID
    const cocktail = await tables.cocktail.read(req.params.id, 10);

    // If the cocktail is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the cocktail in JSON format
    if (cocktail == null) {
      res.sendStatus(404);
    } else {
      res.json(cocktail);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the cocktail data from the request body
  const cocktail = req.body;

  try {
    // Insert the cocktail into the database
    const insertId = await tables.cocktail.create(cocktail);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted cocktail
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browseCocktails,
  browseMocktails,
  read,
  // edit,
  add,
  // destroy,
};
