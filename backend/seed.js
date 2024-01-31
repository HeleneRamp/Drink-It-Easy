/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    await database.query("SET FOREIGN_KEY_CHECKS = 0");
    await database.query("TRUNCATE cocktail");
    await database.query("TRUNCATE categorie");

    // Insert fake data into the  table

    queries.push(
      database.query(`INSERT INTO categorie (nom_categorie) VALUES 
        ("Rhum"),
        ("Gin"),
        ("Whisky"),
        ("Vodka"),
        ("Sans Alcool");`)
    );

    queries.push(
      database.query(`INSERT INTO cocktail (categorie_id, img, nom_cocktail, ingr_1, ingr_2, ingr_3, ingr_4, ingr_5, materiel_1, materiel_2, materiel_3, materiel_4, realisation, conseil) VALUES 
        ( 2, "bramble.jpg", "Le Bramble", "4cl de Gin", "2cl de Crème de mûre", "2cl de Jus de citron pressé", "1cl de Sirop de canne", NULL, "Un shaker", "Un verre doseur", "Une passoire à cocktail", "Un verre long drink",
        "Remplissez à moitié votre shaker de glaçons.
        Versez ensuite 4 cl de gin Gibson’s.
        Ajoutez 2 cl de crème de mûre L’Héritier-Guyot.
        Mettez 1 cl de sirop de canne Canadou.
        Finissez avec 2 cl de jus de citron jaune frais.
        Fermez le shaker.
        Secouez énergiquement votre préparation.
        Versez votre Bramble dans un verre long drink, tout en retenant les glaçons avec une passoire à cocktail.", "Vous pouvez simplement décorer le verre avec une tranche de citron vert. Cependant,
         la décoration traditionnelle consiste en l’ajout d’une tranche de citron jaune et de 2 mûres.
        Pour un effet visuel élégant et marbré, vous pouvez aussi réaliser la préparation directement dans un verre Old fashioned, avec de la glace pilée, et surtout en ajoutant la crème de mûre au dernier moment avec un mouvement circulaire.
        Si vous n’avez pas de crème de mûre, vous pouvez la remplacer par de la crème de cassis. Le goût sera différent mais toujours appréciable.
        Si vous aimez la crème de mûre, vous pouvez essayer aussi le Sweety Thing, le Berry Fizz ou le Murmure et Chuchotement."),
        ( 2, "brighton.jpg", "Le Brighton", "4cl de Gin", "4cl de Jus de pomme", "2cl de Jus de citron vert pressé", "1cl de Sirop de grenadine", NULL, "Un shaker", "Un verre long drink", NULL, NULL, 
        " Dans un shaker rempli à moitié de glaçons, versez 4 cl de gin Gibson’s, 4 cl de jus de pomme et 2 cl de  jus de citron vert.
        Secouez énergiquement votre shaker jusqu’à obtenir un mélange bien homogène.
        Versez ensuite votre préparation dans un verre long drink de votre choix.
        Pour finir, ajoutez 1 cl de sirop de grenadine Sirop Sport.
        Votre Brighton est prêt : bonne dégustation !", "Pour ajouter de la couleur à votre Brighton, vous pouvez le décorer à l’aide de quelques zestes d’orange. Et pour les plus gourmands de vos invités,
         déposez une rondelle d’orange sur le rebord du verre !
        Pour mettre en valeur la belle couleur rouge du sirop de grenadine, il est important de le versez en dernier, sans le mélanger aux autres ingrédients. Plus épais, le sirop va naturellement se déposer
         au fond du verre et créer un beau dégradé de couleurs !
        Vous appréciez tout particulièrement le gin ? Laissez-vous tenter par d’autres recettes originales et savoureuses, comme le Ginpamp au jus de pamplemousse, l’Abricotier à la liqueur d’abricot ou
         encore le Blue Apple et son jus de pomme !"),
         ( 2, "negroni.jpg", "Le Negroni", "3cl de Gin", "3cl de Vermouth rouge", "3cl de Bitter orange", "1 tranche d'orange", NULL, "Un verre old fashioned/Verre à Whisky", "une cuillère à mélange", NULL, NULL, 
         "Remplissez votre verre de type old fashioned de quelques glaçons.
         Ajoutez dans le verre le vermouth rouge, le bitter orange puis le gin Gibson’s.
         Remuez doucement de haut en bas les ingrédients à l’aide d’une cuillère à cocktails pour refroidir l’ensemble.
         Rajoutez une tranche d’orange sur le rebord du verre ou directement dans le verre.", 
         "Ajustez la proportion d'ingrédients selon vos préférences personnelles. Certains aiment leur Negroni plus fort en gin. Pour un profil plus doux, équilibrez avec un peu plus de vermouth ou ajustez selon votre palais.
         Des glaçons de qualité sont essentiels pour maintenir la fraîcheur du Negroni sans diluer excessivement le mélange. Privilégiez des glaçons gros et denses pour une expérience optimale.
         Si le temps le permet, préparez votre Negroni à l'avance et laissez-le reposer au réfrigérateur pendant quelques heures. Cela permet aux saveurs de se mêler, créant une boisson encore plus riche et équilibrée."),
         ( 1, "mojito.jpg", "Le Mojito", "4cl de Rhum blanc 40°", "1/2 citron vert frais", "8 feuilles de menthe fraîche", "2cl sirop de canne", "Eau gazeuse", "Un verre à Mojito", "Un pilon", "Un doseur à bec verseur", "Une cuillère à mélange", 
         "À l’aide d’un verre doseur, versez 2 cl de sirop de canne Canadou dans votre verre à mojito.
         Écrasez délicatement avec un pilon les dés de citron, les feuilles de menthe et le sucre de canne afin d’en extraire le jus.
         À l’aide d’un verre doseur, versez 4 cl de rhum blanc 40° Saint James dans un verre à mojito.
         Préparez la glace pilée en déposant les glaçons dans un torchon.
         Refermez-le.
        À l’aide d’un pilon spécial cocktail, frappez fortement pour casser la glace.
        Ajoutez votre glace pilée dans le verre.
        Allongez votre cocktail avec de l’eau gazeuse.
      Mélangez le tout à l’aide d’une cuillère ou un touilleur à mojito avant dégustation.", 
      "Pour varier les saveurs de votre Mojito, vous pouvez remplacer le rhum blanc par du rhum ambré.
      Si vous ne disposez pas de blender pour préparer la glace pilée, utilisez un rouleau à pâtisserie.
      Découvrez toutes les variantes du mojito : Fraise, Royal, Sans Alcool, Mojito Real, Dark Mojito, Pink Mojito ...
      Nous recommandons d'utiliser SAINT JAMES qui est un Rhum à la qualité inégalée, comme en témoignent les nombreuses médailles reçues continuellement aux concours internationaux les plus prestigieux.
      A la période de Noël et du Nouvel An, ajoutez dans votre Mojito des cranberries ou des graines de grenade, ainsi qu'une petite branche de romarin."),
      ( 1, "perfect-colada.jpg", "Le perfect colada", "4cl de Rhum ambré", "6cl de jus d'ananas", "4cl de crème de coco", "5 dés d'ananas", NULL, "Un blender", "Un verre long drink", NULL, NULL,
      "Prenez un blender.
      Remplissez-le de glace à votre convenance.
      Versez-y directement 4 cl de rhum ambré des îles Old Nick, 6 cl de jus d’ananas Caraïbos, 4 cl de crème de coco et 5 dés d’ananas frais.
      Mixez le tout jusqu’à obtenir une préparation onctueuse et bien homogène.
      Versez ensuite votre cocktail dans un verre long drink.
      Servez sans attendre : bonne dégustation !",
      "Pour une décoration colorée et gourmande de votre Perfect Colada, découpez une tranche d’ananas frais en conservant l’écorce et piquez-y quelques feuilles bien vertes. Placez la tranche d’ananas sur le bord du verre, et le tour est joué !
      Si vous n’avez pas de blender à votre disposition, vous pouvez préparer le Perfect Colada au shaker. Il vous suffit d’augmenter la dose de jus d’ananas pour remplacer les dés d’ananas frais, tout simplement !
      Vous aimez les cocktails dérivés de la fameuse Piña Colada, mais les connaissez-vous tous ? Ne passez pas à côté du Mojito Colada, du Spicy Colada ou encore du Litchi Colada, vous risqueriez de le regretter !"),
      ( 1, "ti-punch.jpg", "Le Ti Punch", "6cl de Rhum blanc 55°", "2cl de sirop de canne roux", "1 quartier de citron vert frais", NULL, NULL, "Un verre à ti'punch", "Une cuillère à mélange", NULL, NULL, 
      "Coupez un quartier de citron vert.Pressez le quartier de citron vert et mettez-le dans le verre.
      Versez le sirop de sucre de canne roux Dillon puis le rhum blanc Dillon.
      Mélangez avec une cuillère à mélange ou un bois lélé.
      Votre Ti’ Punch est prêt à être dégusté !",
      "Pour réaliser ce cocktail, nous vous conseillons un rhum blanc agricole et particulièrement le rhum blanc agricole 55° Dillon qui possède une intensité et une richesse aromatique complexe. Ses arômes de canne à sucre, de banane, de miel et de cerise confèrent à ce rhum martiniquais un nez fruité et raffiné.
      Décorez le bord du verre avec une tranche de citron vert. Traditionnellement, le Ti' Punch se déguste sans glaçons. Vous pouvez toutefois ajouter, en fin de préparation, un peu de glace pilée pour obtenir un cocktail plus frais.
      On peut également remplacer le sirop de canne à sucre par une demi-cuillère à café de sucre roux.
      Les puristes écrasent directement le quartier de citron vert dans le verre. Il suffit ensuite de retirer l'écorce."),
      ( 5, "bora-bora.jpg", "Le bora bora", "10cl de Jus d'ananas", "6cl de Nectar de maracujà", "1cl de Sirop de grenadine", "1cl de jus de citron jaune pressé", NULL, "Un Tmbler/Verre long drink", "Une cuillère à mélange", NULL, NULL,
      "Munissez-vous de votre verre long drink et ajoutez quelques glaçons.
      Versez le sirop de grenadine Sirop Sport et le jus de citron jaune.
      Terminez en ajoutant le jus d’ananas et le nectar de maracuja Caraïbos.
      Mélangez très légèrement le cocktail à l’aide d’une cuillère à mélange afin de créer un dégradé de couleur.",
      "Décorez le bord du verre avec une rondelle de citron jaune ou une petite tranche d'ananas.
      Pour une version du Bora Bora avec alcool, ajoutez un peu de rhum blanc ou vodka."),
      ( 5, "cuvee-prestige-d-artigny.jpg", "La cuvée Prestige d'Artigny", "10cl de Pétillant sans alcool d'Artigny Cuvée Prestige", "2cl de sirop de pamplemousse", "3 brins de romarin frais", "1 orange sanguine", NULL, "Un shaker", "Une coupe", NULL, NULL, 
      "Pressez l’orange sanguine. Ecrasez un brin de romarin. 
      Dans un shaker versez le jus d’orange sanguine, le romarin et le sirop de pamplemousse.
      Secouez énergiquement pendant une dizaine de secondes. Dans un verre style coupe, ajoutez quelques glaçons.
      Versez-y la préparation du shaker. Ajoutez du d’Artigny Cuvée Prestige.", 
      "Pour décorer votre cocktail vous pouvez garder une tranche d'orange et un brin de romarin de côté et ajoutez les avant de servir."),
      ( 5, "pink-tonic.jpg", "Le Virgin Pink Tonic", "4cl de Jus de goyave-framboise", "4cl de Tonic", "2 cl de Nectar de litchi", "1cl de jus de citron vert pressé", NULL, "Une cuillère à mélange", "Un verre ballon/verre à vin", NULL, NULL, 
      "Dans un shaker rempli de quelques glaçons, versez le jus de citron vert pressé, le nectar de litchi Caraïbos puis le jus goyave-framboise Caraïbos.
      Shakez l’ensemble des ingrédients.
      Versez la préparation dans un grand verre à pied en retenant la glace à l’aide d’une passoire à cocktail.
      Complétez  avec le tonic La French SVP. Remuez délicatement le tout avec une cuillère à mélange. Dégustez bien frais !", 
      "Décorez le bord de votre verre avec des fruits rouges. Pour une version légèrement alcoolisée, remplacez le tonic par du cidre et le nectar de litchi par de la crème de cassis.
      Avec sa belle couleur rose acidulée, ce cocktail est le parfait allié pour une soirée romantique de la Saint-Valentin. Associez-le à du chocolat pour une dégustation encore plus gourmande !
      Que vous soyez amateurs de mocktails, que vous recherchiez de recettes de cocktails pour femme enceinte ou que vous preniez part au Dry January, découvrez nos autres recettes de cocktails sans alcool : Devil Kiss, Red Pink ou encore Fruity Jam !"),
      ( 4, "grinch.jpg", "Le Grinch cocktail", "2cl de Vodka", "1cl de Curaçao bleu", "8cl de Jus d'ananas", "1cl de Jus de citron vert pressé", NULL, "Un shaker", "Un doseur à bec verseur", "Un verre old fashioned/Verre à whisky", NULL, 
      "Trempez les rebords de votre verre type old fashioned dans du jus de citron. Trempez ensuite le verre dans du sucre coloré en rouge. Ajoutez des glaçons dans le verre.
      Dans un shaker, ajoutez des glaçons.
      Versez la vodka Poliakov, le curaçao bleu, le jus d’ananas Caraïbos et le jus de citron vert.
      Secouez énergiquement pendant une dizaine de secondes.
      Versez le mélange dans le verre en filtrant les glaçons du shaker à l’aide d’une passoire à cocktails.", 
      "Le cocktail Grinch connaît différentes variantes de recettes :
      - la vodka est souvent remplacée par de la liqueur de coco type Malibu
      - le curaçao bleu est parfois remplacé par de la liqueur de melon vert,
      - le cocktail peut être complété par de la ginger beer ou de la limonade.
      La couleur verte va différer en fonction des ingrédients et quantités choisis.
      Pour amplifier le vert, vous pouvez ajouter quelques gouttes de colorant vert.
      Une cerise confite peut être rajoutée sur le haut du cocktail."),
      ( 4, "san-francisco.jpg", "Le San Francisco", "4cl de Vodka", "2cl de Nectar de banane", "1cl de sirop de banane", "8cl de jus d'orange", NULL, "Un Tumbler/Verre long drink", "Une passoire à cocktail", "Un skaker", NULL, 
      "Munissez-vous d’un shaker et ajoutez-y quelques glaçons.
      Versez la Vodka Poliakov, le nectar de banane Caraïbos et le jus d’orange.
      Secouez énergiquement pendant une dizaine de secondes.
      Munissez-vous d’un verre long drink.
      Incorporez votre mélange en filtrant les glaçons à l’aide d’une passoire à cocktail.
      Pour finir, ajoutez délicatement le sirop de grenadine Sirop Sport à votre mélange.", 
      "Optez pour un jus d'orange fraîchement pressé à la place d'un jus d'orange en bouteille, cela intensifiera la saveur.
      Vous pouvez aussi remplacer une partie du jus d'orange par du triple sec.
      Pour une variante légèrement plus corsée, vous pouvez également remplacer le jus de banane par une liqueur de banane.
      Pour impressionner vos convives, soignez votre présentation en ajoutant une rondelle d'orange."),
      ( 4, "sea-breeze.jpg", "Le Sea Breeze", "4cl de Vodka", "12cl de JUs de cranberry", "3cl de Jus de Pamplemousse", NULL, NULL, "Un shaker", "Une passoire à cocktail", "Un Tumbler/Verre long drink", NULL,
      "Munissez-vous d’un shaker et déposez-y quelques glaçons.
      Versez la vodka Poliakov, le jus de cranberry et le jus de pamplemousse dans le verre.
      Secouez énergiquement pendant une dizaine de secondes. Munissez-vous d’un verre long drink.
      Incorporez votre mélange en filtrant les glaçons à l’aide d’une passoire à cocktail.",
      "Décorez le verre avec un zeste ou une tranche d'orange ou de pamplemousse.
      Pour un goût légèrement sucré, ajoutez une petite touche de sucre de canne liquide Canadou."),
      ( 3, "manhattan.jpg", "Le Manhattan", "4cl de Blended Scotch Whisky", "2cl de Vermouth rouge", "1 trait de Bitter", NULL, NULL, "Un verre à mélange", "Une cuillère à mélange", "Une passoire à cocktail", "Un verre à cocktail",
      "Versez sur quelques glaçons les 4 cl de scotch whisky Label 5 et les 2 cl de vermouth rouge dans un verre à mélange.
      Ajoutez le trait de bitter à votre préparation.
      Au moyen d’une cuillère à mélange, agitez avec vigueur pendant une vingtaine de secondes.
      Versez dans un verre à cocktail en retenant les glaçons grâce à une passoire à cocktail.",
      "Vous pouvez placer une cerise au marasquin dans le fond du verre en décoration. Vous pouvez aussi décorer ce cocktail avec un pic sur lequel vous aurez placé trois cerises au marasquin.
      Si vous n'avez pas de verre à mélange, vous pouvez réaliser votre Manhattan directement dans le verre. Pour le rafraîchir, faites-y tourner préalablement quelques glaçons. Retirez les glaçons avant de verser le scotch whisky et l'américano.
      Pour simplifier la recette, il est possible de remplacer le vermouth et le trait de bitter par 2 cl d'Americano.
      En ajoutant un peu de sirop de caramel et du jus d'ananas, on obtient un Caramel Manhattan. Pour une version plus sombre, il suffit de remplacer l'américano par de l'amaro, une liqueur à base de plantes."),
      ( 3, "old-fashioned.jpg", "Le Old Fashioned", "4cl de Blended Scotch Whisky", "1 trait de Bitter", "1 morceau de sucre", "Eau gazeuse", NULL, "Un verre old fashioned/Verre à Whisky", "Un doseur avec bec verseur", "Une cuillère à mélange", NULL,
      "Au fond d’un verre Old Fashioned, posez le morceau de sucre préalablement imbibé d’un trait de Bitter Angostura.
      Écrasez-le jusqu’à dissolution complète. Ajoutez des glaçons et versez le Scotch Whisky Sir Edward’s.
      Remuez avec une cuillère à mélange pendant une quinzaine de secondes. Allongez d’eau gazeuse.",
      "Vous pouvez décorer votre cocktail avec un zeste d'orange. On peut aussi ajouter 2 cerises au marasquin.
      Il est possible d'ajouter une goutte de Scotch Whisky au trait de Bitter pour écraser le sucre. On peut également remplacer le morceau de sucre par du sirop de sucre de canne.
      Les versions de ce cocktail sont nombreuses et diffèrent suivant les ingrédients utilisés. Pour préparer un Old Fashioned au rhum, remplacez le Scotch Whisky par un rhum brun cubain. Pour surprendre vos invités, n'hésitez à le préparer avec du gin ou de la tequila.
      Une autre variante qui s'appelle le Old Fashioned Coffee introduit du café. Une dose de café sera infusée à froid puis diluée avec le sucre. Pour renforcer le goût, on peut également utiliser un trait de crème de cacao."),
      ( 3, "passion-label.jpg", "Le Passion Label", "4cl de Blended Scotch Whisky", "4cl de Nectar de maracujà", "2cl de sirop de canne", "2cl de citron vert frais", NULL, "Un verre long drink", "Un pilon", NULL, NULL, 
      "Dans un verre long drink, versez 2 cl de sucre de canne.
      Pilez légèrement à l’aide d’un pilon le demi citron vert frais que vous aurez préalablement lavé et coupé en morceaux.
      Ajoutez 4 cl de scotch whisky LABEL 5.
      Remplissez ensuite la moitié du verre de glaçons.
      Terminez votre cocktail en ajoutant 4 cl de nectar de maracujà Caraïbos.",
      "Pour réaliser ce cocktail, nous vous conseillons un scotch whisky et particulièrement le LABEL 5 qui est un Scotch Whisky équilibré, mariant un caractère délicatement fruité à des notes fumées. Ces notes prononcées de fruits sont idéales pour la réalisation de cocktails et de longs drinks.
      Décorez le bord du vert avec une tranche de citron vert.
      Pour que votre cocktail soit encore plus frais, mettez tous vos ingrédients et le verre au réfrigérateur quelques heures avant la préparation.
      Vous aimez le mélange du whisky avec le citron vert ? Laissez-vous tenter par un Perfect Match qui mixe whisky, bitter, jus de citron vert, nectars de cranberry et de goyave et sucre de canne. Quant au Jock Collins, c'est l'un des cocktails incontournables à base de whisky et de citron vert.");`)
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
