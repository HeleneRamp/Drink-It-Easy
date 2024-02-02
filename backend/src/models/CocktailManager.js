const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "cocktail" as configuration
    super({ table: "cocktail" });
  }

  // The C of CRUD - Create operation

  async create(cocktail) {
    // Execute the SQL INSERT query to add a new cocktail to the "cocktail" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [cocktail.title]
    );

    // Return the ID of the newly inserted cocktail
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific cocktail by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where cocktail_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the cocktail
    return rows[0];
  }

  async readAllCocktails() {
    // Execute the SQL SELECT query to retrieve all cocktails from the "cocktail" table
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE categorie_id not in (5)`
    );

    // Return the array of cocktails
    return rows;
  }

  async readAllMocktails() {
    // Execute the SQL SELECT query to retrieve all mocktails from the "cocktail" table
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE categorie_id = 5`
    );

    // Return the array of mocktails
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing cocktail

  // async update(cocktail) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an cocktail by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ItemManager;
