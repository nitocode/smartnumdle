const questions = [
  {
    id: 1,
    date: "2022-2-20",
    title: "Quelle est l'année de création de twitch&nbsp;?",
    answer: 2011,
    linkForMore: "https://fr.wikipedia.org/wiki/Twitch",
    attemptLimit: 4,
  },
  {
    id: 2,
    date: "2022-2-21",
    title:
      "Combien existe-t-il de langues dans le monde&nbsp;? (en centaines ou milliers)",
    answer: 7000,
    linkForMore:
      "https://1to1progress.fr/blog/2021/04/30/combien-de-langues-dans-le-monde/",
    attemptLimit: 5,
  },
  {
    id: 3,
    date: "2022-2-22",
    title: "Quelle est l'année de fondation de la ville de New‑York&nbsp;?",
    answer: 1624,
    linkForMore: "https://fr.wikipedia.org/wiki/New_York",
    attemptLimit: 6,
  },
  {
    id: 4,
    date: "2022-2-23",
    title: "Combien existe-t-il de constellations astronomiques&nbsp;?",
    answer: 88,
    linkForMore: "https://fr.wikipedia.org/wiki/Liste_des_constellations",
    attemptLimit: 4,
  },
  {
    id: 5,
    date: "2022-2-24",
    title: "Quelle est la hauteur de la Tour Eiffel&nbsp;? (en mètres)",
    answer: 324,
    linkForMore: "https://fr.wikipedia.org/wiki/Tour_Eiffel",
    attemptLimit: 6,
  },
  {
    id: 6,
    date: "2022-2-25",
    title: "Quel est le plus gros QI du monde&nbsp;?",
    answer: 230,
    linkForMore: "https://fr.wikipedia.org/wiki/Quotient_intellectuel#Records",
    attemptLimit: 5,
  },
  {
    id: 7,
    date: "2022-2-26",
    title:
      "Combien d'épisodes possède la plus longue série terminée au monde&nbsp;?",
    answer: 18262,
    linkForMore: "https://fr.wikipedia.org/wiki/Haine_et_Passion",
    attemptLimit: 10,
  },
  {
    id: 8,
    date: "2022-2-27",
    title: "Combien d'os possède un corps humain adulte&nbsp;?",
    answer: 206,
    linkForMore: "https://fr.wikipedia.org/wiki/Squelette_humain",
    attemptLimit: 4,
  },
  {
    id: 9,
    date: "2022-2-28",
    title:
      "Combien de temps la lumière du soleil met-elle pour nous parvenir&nbsp;? (en minutes)",
    answer: 8,
    linkForMore: "https://fr.wikipedia.org/wiki/Vitesse_de_la_lumi%C3%A8re",
    attemptLimit: 4,
  },
  {
    id: 10,
    date: "2022-3-1",
    title: "Combien y a-t-il de signes astrologiques chinois&nbsp;?",
    answer: 12,
    linkForMore: "https://fr.wikipedia.org/wiki/Astrologie_chinoise",
    attemptLimit: 3,
  },
  {
    id: 11,
    date: "2022-3-2",
    title:
      "Combien y a-t-il de joueurs sur le terrain dans une équipe de base‑ball&nbsp;?",
    answer: 9,
    linkForMore: "https://fr.wikipedia.org/wiki/Baseball",
    attemptLimit: 4,
  },
  {
    id: 12,
    date: "2022-3-3",
    title:
      "A combien d'années de mariages correspondent les noces de papier&nbsp;?",
    answer: 37,
    linkForMore: "https://fr.wikipedia.org/wiki/Anniversaire_de_mariage",
    attemptLimit: 7,
  },
  {
    id: 13,
    date: "2022-3-4",
    title:
      "En quelle année Angela Merkel a-t-elle été nommée chancelière d'Allemagne&nbsp;?",
    answer: 2005,
    linkForMore: "https://fr.wikipedia.org/wiki/Angela_Merkel",
    attemptLimit: 4,
  },
  {
    id: 14,
    date: "2022-3-5",
    title: "Combien font un + la moitié d'un quart de 8&nbsp;?",
    answer: 2,
    linkForMore: "https://fr.wikipedia.org/wiki/2_(chiffre)",
    attemptLimit: 2,
  },
  {
    id: 15,
    date: "2022-3-6",
    title:
      "Combien y a-t-il de miles à parcourir dans la course d'Indianapolis&nbsp;?",
    answer: 500,
    linkForMore: "https://fr.wikipedia.org/wiki/500_miles_d%27Indianapolis",
    attemptLimit: 6,
  },
  {
    id: 16,
    date: "2022-3-7",
    title: "Combien de fois Elizabeth Taylor s'est-elle mariée&nbsp;?",
    answer: 8,
    linkForMore: "https://fr.wikipedia.org/wiki/Elizabeth_Taylor",
    attemptLimit: 4,
  },
  {
    id: 17,
    date: "2022-3-8",
    title: "Quel numéro porte le département du Loir-et-Cher&nbsp;?",
    answer: 41,
    linkForMore: "https://fr.wikipedia.org/wiki/Loir-et-Cher",
    attemptLimit: 6,
  },
  {
    id: 18,
    date: "2022-3-9",
    title:
      "Combien d'années a duré le plus long règne de tous les temps&nbsp;?",
    answer: 82,
    linkForMore: "https://fr.wikipedia.org/wiki/Sobhuza_II",
    attemptLimit: 7,
  },
  {
    id: 19,
    date: "2022-3-10",
    title: "Combien de côtés possède un ennéagone&nbsp;?",
    answer: 9,
    linkForMore: "https://fr.wikipedia.org/wiki/Enn%C3%A9agone",
    attemptLimit: 3,
  },
  {
    id: 20,
    date: "2022-3-11",
    title:
      "Quel chiffre effraie la plupart des habitants d'Asie de l'est&nbsp;?",
    answer: 4,
    linkForMore: "https://fr.wikipedia.org/wiki/T%C3%A9traphobie",
    attemptLimit: 3,
  },
  {
    id: 21,
    date: "2022-3-12",
    title: "Combien de dents permanentes ont les chiens&nbsp;?",
    answer: 42,
    linkForMore: "https://fr.wikipedia.org/wiki/Anatomie_du_chien#Dents",
    attemptLimit: 6,
  },
  {
    id: 22,
    date: "2022-3-13",
    title: "En quelle année les Beatles se sont séparés&nbsp;?",
    answer: 1970,
    linkForMore:
      "https://fr.wikipedia.org/wiki/The_Beatles#S%C3%A9paration_(1969-1970)",
    attemptLimit: 5,
  },
  {
    id: 23,
    date: "2022-3-14",
    title: "Combien de touches possède un piano standard&nbsp;?",
    answer: 88,
    linkForMore: "https://fr.wikipedia.org/wiki/Piano",
    attemptLimit: 5,
  },
  {
    id: 24,
    date: "2022-3-15",
    title:
      "Combien d'éléments comporte le tableau périodique standard des éléments&nbsp;?",
    answer: 118,
    linkForMore:
      "https://fr.wikipedia.org/wiki/Tableau_p%C3%A9riodique_des_%C3%A9l%C3%A9ments",
    attemptLimit: 5,
  },
  {
    id: 25,
    date: "2022-3-16",
    title: "Combien de coeurs possède une pieuvre&nbsp;?",
    answer: 3,
    linkForMore: "https://fr.wikipedia.org/wiki/Pieuvre",
    attemptLimit: 3,
  },
  {
    id: 26,
    date: "2022-3-17",
    title:
      "En quelle année a été lancée le système d'exploitation Windows XP&nbsp;?",
    answer: 2001,
    linkForMore: "https://fr.wikipedia.org/wiki/Windows_XP",
    attemptLimit: 4,
  },
  {
    id: 27,
    date: "2022-3-18",
    title: "En quelle année fut couronné Charlemagne&nbsp;?",
    answer: 800,
    linkForMore: "https://fr.wikipedia.org/wiki/Charlemagne",
    attemptLimit: 5,
  },
  {
    id: 28,
    date: "2022-3-19",
    title:
      "Combien de doigts possèdent les personnages dans l'univers des Simpson&nbsp;?",
    answer: 4,
    linkForMore: "https://fr.wikipedia.org/wiki/Les_Simpson",
    attemptLimit: 3,
  },
  {
    id: 29,
    date: "2022-3-20",
    title: "Combien de Grand Chelem en simple a gagné Serena Williams&nbsp;?",
    answer: 23,
    linkForMore: "https://fr.wikipedia.org/wiki/Serena_Williams",
    attemptLimit: 5,
  },
  {
    id: 30,
    date: "2022-3-21",
    title: "Pendant quel siècle le peintre Rembrandt a-t-il vécu&nbsp;?",
    answer: 17,
    linkForMore: "https://fr.wikipedia.org/wiki/Rembrandt",
    attemptLimit: 3,
  },
  {
    id: 31,
    date: "2022-3-22",
    title:
      "Combien de présidents américains a rencontré la Reine Élisabeth II depuis le début de son règne&nbsp;?",
    answer: 13,
    linkForMore: "https://fr.wikipedia.org/wiki/%C3%89lisabeth_II",
    attemptLimit: 5,
  },
  {
    id: 32,
    date: "2022-3-23",
    title:
      "Sur un espace de combien de points peut être représenté une lettre en braille&nbsp;?",
    answer: 6,
    linkForMore: "https://fr.wikipedia.org/wiki/Braille",
    attemptLimit: 4,
  },
  {
    id: 33,
    date: "2022-3-24",
    title: "En quelle année fut inventée la pile électrique&nbsp;?",
    answer: 1800,
    linkForMore: "https://fr.wikipedia.org/wiki/Pile_%C3%A9lectrique",
    attemptLimit: 6,
  },
  {
    id: 34,
    date: "2022-3-25",
    title: "En quelle année fut lancée la console Nintendo 64 en europe&nbsp;?",
    answer: 1997,
    linkForMore: "https://fr.wikipedia.org/wiki/Nintendo_64",
    attemptLimit: 5,
  },
  {
    id: 35,
    date: "2022-3-26",
    title: "En quelle année Bob Kane a créé le super-héros Batman&nbsp;?",
    answer: 1939,
    linkForMore: "https://fr.wikipedia.org/wiki/Batman",
    attemptLimit: 4,
  },
  {
    id: 36,
    date: "2022-3-27",
    title: "Combien d'années a duré le périple de Marco Polo en Asie&nbsp;?",
    answer: 24,
    linkForMore: "https://fr.wikipedia.org/wiki/Marco_Polo",
    attemptLimit: 4,
  },
  {
    id: 37,
    date: "2022-3-28",
    title:
      "Quelle est la date conventionnelle de l'invention de la photographie&nbsp;?",
    answer: 1839,
    linkForMore: "https://fr.wikipedia.org/wiki/Photographie",
    attemptLimit: 4,
  },
  {
    id: 38,
    date: "2022-3-29",
    title:
      "Pendant combien d'années Charles de Gaulle a été président de la république Française&nbsp;?",
    answer: 10,
    linkForMore: "https://fr.wikipedia.org/wiki/Charles_de_Gaulle",
    attemptLimit: 4,
  },
  {
    id: 39,
    date: "2022-3-30",
    title:
      "En quelle année Spiderman est apparu pour la première fois dans un comic&nbsp;?",
    answer: 1962,
    linkForMore: "https://fr.wikipedia.org/wiki/Spider-Man",
    attemptLimit: 4,
  },
  {
    id: 40,
    date: "2022-3-31",
    title:
      "En quelle année Christophe Colomb a-t-il découvert l'Amérique&nbsp;?",
    answer: 1492,
    linkForMore: "https://fr.wikipedia.org/wiki/Christophe_Colomb",
    attemptLimit: 4,
  },
  {
    id: 41,
    date: "2022-4-1",
    title:
      "De quand date la plus ancienne occurence connue du « poisson d'avril »&nbsp;?",
    answer: 1466,
    linkForMore: "https://fr.wikipedia.org/wiki/Poisson_d%27avril",
    attemptLimit: 4,
  },
  {
    id: 42,
    date: "2022-4-2",
    title: "En quelle année est dépénalisé l'avortement en France&nbsp;?",
    answer: 1975,
    linkForMore:
      "https://fr.wikipedia.org/wiki/Interruption_volontaire_de_grossesse_en_France",
    attemptLimit: 4,
  },
  {
    id: 43,
    date: "2022-4-3",
    title:
      "Combien de mètres mesure la plus haute structure humaine construite au monde&nbsp;?",
    answer: 828,
    linkForMore: "https://fr.wikipedia.org/wiki/Burj_Khalifa",
    attemptLimit: 4,
  },
  {
    id: 44,
    date: "2022-4-4",
    title: "A quel âge est mort Jules Cesar&nbsp;?",
    answer: 89,
    linkForMore:
      "https://fr.wikipedia.org/wiki/Constitution_fran%C3%A7aise_du_4_octobre_1958",
    attemptLimit: 4,
  },
  {
    id: 45,
    date: "2022-4-5",
    title:
      "Combien d'articles possède la constitution française de 1958&nbsp;?",
    answer: 828,
    linkForMore: "https://fr.wikipedia.org/wiki/Burj_Khalifa",
    attemptLimit: 4,
  },
  {
    id: 46,
    date: "2022-4-6",
    title: "Combien de touches avait la première calculatrice de poche&nbsp;?",
    answer: 35,
    linkForMore: "https://fr.wikipedia.org/wiki/Calculatrice",
    attemptLimit: 4,
  },
  {
    id: 47,
    date: "2022-4-7",
    title: "Combien d'années a vécu Michael Jackson&nbsp;?",
    answer: 50,
    linkForMore: "https://fr.wikipedia.org/wiki/Michael_Jackson",
    attemptLimit: 4,
  },
  {
    id: 48,
    date: "2022-4-8",
    title: "En quelle année est mort Louis XIV&nbsp;?",
    answer: 1715,
    linkForMore: "https://fr.wikipedia.org/wiki/Louis_XIV",
    attemptLimit: 4,
  },
  {
    id: 49,
    date: "2022-4-9",
    title:
      "Quelle est la valeur maximale de l'echelle de Mohs qui permet de mesurer la dureté des minéraux&nbsp;?",
    answer: 10,
    linkForMore: "https://fr.wikipedia.org/wiki/%C3%89chelle_de_Mohs",
    attemptLimit: 4,
  },
  {
    id: 50,
    date: "2022-4-10",
    title: "Quand a été inventée l'échelle de Richter&nbsp;?",
    answer: 1935,
    linkForMore: "https://fr.wikipedia.org/wiki/%C3%89chelle_de_Richter",
    attemptLimit: 4,
  },
  {
    id: 51,
    date: "2022-4-11",
    title: "En quelle année s'est produite la chute du mur de Berlin&nbsp;?",
    answer: 1989,
    linkForMore: "https://fr.wikipedia.org/wiki/Mur_de_Berlin",
    attemptLimit: 4,
  },
  {
    id: 52,
    date: "2022-4-12",
    title: "En quelle année fut lancé le réseau social Myspace&nbsp;?",
    answer: 2003,
    linkForMore: "https://fr.wikipedia.org/wiki/Myspace",
    attemptLimit: 4,
  },
  {
    id: 53,
    date: "2022-4-13",
    title:
      "Combien de milliers de km mesure la Grande muraille de Chine&nbsp;?",
    answer: 21,
    linkForMore: "https://fr.wikipedia.org/wiki/Grande_Muraille",
    attemptLimit: 4,
  },
  {
    id: 54,
    date: "2022-4-14",
    title:
      "Quel est le record mondial (en milliers) de décimales de pi récitées de mémoire&nbsp;?",
    answer: 83,
    linkForMore: "https://fr.wikipedia.org/wiki/Akira_Haraguchi",
    attemptLimit: 4,
  },
  {
    id: 55,
    date: "2022-4-15",
    title: "En quelle année fut inventé le PC&nbsp;?",
    answer: 1957,
    linkForMore: "https://fr.wikipedia.org/wiki/Ordinateur_personnel",
    attemptLimit: 4,
  },
  {
    id: 56,
    date: "2022-4-16",
    title: "Quelle est la date de sortie du jeu-vidéo Tetris&nbsp;?",
    answer: 1984,
    linkForMore: "https://fr.wikipedia.org/wiki/Tetris",
    attemptLimit: 4,
  },
  {
    id: 57,
    date: "2022-4-17",
    title:
      "A combien de millions d'exemplaire s'est vendue la première console Playstation&nbsp;?",
    answer: 104,
    linkForMore: "https://fr.wikipedia.org/wiki/PlayStation",
    attemptLimit: 4,
  },
  {
    id: 58,
    date: "2022-4-18",
    title: "Combien d'années a vécu Wolfgang Amadeus Mozart&nbsp;?",
    answer: 35,
    linkForMore: "https://fr.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
    attemptLimit: 4,
  },
  {
    id: 59,
    date: "2022-4-19",
    title:
      "Quelle est la distance minimale entre la Terre et Mars en dizaine de millions de km&nbsp;?",
    answer: 5,
    linkForMore: "https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)",
    attemptLimit: 4,
  },
  {
    id: 60,
    date: "2022-4-20",
    title:
      "En quelle année a été envoyé le premier courrier électronique&nbsp;?",
    answer: 1971,
    linkForMore: "https://fr.wikipedia.org/wiki/Courrier_%C3%A9lectronique",
    attemptLimit: 4,
  },
  {
    id: 60,
    date: "2022-4-20",
    title:
      "En quelle année a été envoyé le premier courrier électronique&nbsp;?",
    answer: 1971,
    linkForMore: "https://fr.wikipedia.org/wiki/Courrier_%C3%A9lectronique",
    attemptLimit: 4,
  },
  {
    id: 61,
    date: "2022-4-21",
    title:
      "Quelle est (en années) le record de longévité humaine officiellement reconnu&nbsp;?",
    answer: 122,
    linkForMore: "https://fr.wikipedia.org/wiki/Jeanne_Calment",
    attemptLimit: 4,
  },
  {
    id: 62,
    date: "2022-4-22",
    title: "En quelle année a débuté la guerre du Golfe&nbsp;?",
    answer: 1990,
    linkForMore: "https://fr.wikipedia.org/wiki/Guerre_du_Golfe",
    attemptLimit: 4,
  },
  {
    id: 63,
    date: "2022-4-23",
    title:
      "Combien de jours il y a-t-il entre le 1er janvier 2022 et le 21 avril 2022&nbsp;?",
    answer: 110,
    linkForMore: "https://fr.wikipedia.org/wiki/Calendrier",
    attemptLimit: 4,
  },
  {
    id: 64,
    date: "2022-4-24",
    title:
      "A combien de pixels de large minimum correspond le format d'image numérique 4K&nbsp;?",
    answer: 4096,
    linkForMore: "https://fr.wikipedia.org/wiki/4K",
    attemptLimit: 4,
  },
  {
    id: 65,
    date: "2022-4-25",
    title: "En quelle année Neil Armstrong a posé le pied sur la lune&nbsp;?",
    answer: 1969,
    linkForMore:
      "https://fr.wikipedia.org/wiki/Liste_des_hommes_ayant_march%C3%A9_sur_la_Lune",
    attemptLimit: 4,
  },
  {
    id: 66,
    date: "2022-4-26",
    title: "Quelle serait la température du noyau solaire (en Kelvin)&nbsp;?",
    answer: 15000000,
    linkForMore: "https://fr.wikipedia.org/wiki/Noyau_solaire",
    attemptLimit: 4,
  },
  {
    id: 67,
    date: "2022-4-27",
    title:
      "Quelle taille (en mètres) fait le plus haut arbre connu au monde&nbsp;?",
    answer: 116,
    linkForMore: "https://fr.wikipedia.org/wiki/Hyperion_(arbre)",
    attemptLimit: 4,
  },
  {
    id: 68,
    date: "2022-4-28",
    title:
      "En quelle année se sont déroulés les jeux olympiques de Barcelone&nbsp;?",
    answer: 1992,
    linkForMore:
      "https://fr.wikipedia.org/wiki/Jeux_olympiques_d%27%C3%A9t%C3%A9_de_1992",
    attemptLimit: 4,
  },
  {
    id: 69,
    date: "2022-4-29",
    title: "Combien de paires de chromosomes possède l'humain&nbsp;?",
    answer: 23,
    linkForMore: "https://fr.wikipedia.org/wiki/Chromosomes_humains",
    attemptLimit: 4,
  },
  {
    id: 70,
    date: "2022-4-30",
    title:
      "En quelle année fut créée l'encyclopédie universelle Wikipedia&nbsp;?",
    answer: 2001,
    linkForMore: "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia",
    attemptLimit: 4,
  },
  {
    id: 71,
    date: "2022-5-1",
    title: "Combien de secondes il y a-t-il dans une heure&nbsp;?",
    answer: 3600,
    linkForMore: "https://fr.wikipedia.org/wiki/Seconde_(temps)",
    attemptLimit: 4,
  },
];

export default questions;
