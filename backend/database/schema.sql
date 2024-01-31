CREATE TABLE `cocktail` (
  `cocktail_id` int  NOT NULL AUTO_INCREMENT,
  `categorie_id` int NOT NULL,
  `img` varchar(255) NOT NULL,
  `nom_cocktail` varchar(150) NOT NULL,
  `ing_1` varchar(45) NOT NULL,
  `ing_2` varchar(45) NOT NULL,
  `ing_3` varchar(45) NOT NULL,
  `ing_4` varchar(45) DEFAULT NULL,
  `ing_5` varchar(45) DEFAULT NULL,
  `materiel_1` varchar(45) NOT NULL,
  `materiel_2` varchar(45) DEFAULT NULL,
  `materiel_3` varchar(45) DEFAULT NULL,
  `materiel_4` varchar(45) DEFAULT NULL,
  `recette_etape_1` TEXT NOT NULL,
  `recette_etape_2` TEXT NOT NULL,
  PRIMARY KEY (`cocktail_id`),
  FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`categorie_id`)
); 

CREATE TABLE `categorie` (
  `categorie_id` int NOT NULL AUTO_INCREMENT,
  `nom_categorie` varchar(45) NOT NULL,
  PRIMARY KEY (`categorie_id`)
)
