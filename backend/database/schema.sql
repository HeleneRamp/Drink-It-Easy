CREATE TABLE categorie (
  categorie_id int NOT NULL AUTO_INCREMENT,
  nom_categorie varchar(45) NOT NULL,
  PRIMARY KEY (categorie_id)
);

CREATE TABLE cocktail (
  cocktail_id int  NOT NULL AUTO_INCREMENT,
  categorie_id int NOT NULL,
  img varchar(255) NOT NULL,
  nom_cocktail varchar(150) NOT NULL,
  ingr_1 varchar(100) NOT NULL,
  ingr_2 varchar(100) NOT NULL,
  ingr_3 varchar(100) NOT NULL,
  ingr_4 varchar(100) DEFAULT NULL,
  ingr_5 varchar(100) DEFAULT NULL,
  materiel_1 varchar(100) NOT NULL,
  materiel_2 varchar(100) DEFAULT NULL,
  materiel_3 varchar(100) DEFAULT NULL,
  materiel_4 varchar(100) DEFAULT NULL,
  realisation TEXT NOT NULL,
  conseil TEXT NOT NULL,
  PRIMARY KEY (cocktail_id),
  FOREIGN KEY (categorie_id) REFERENCES categorie(categorie_id)
); 


