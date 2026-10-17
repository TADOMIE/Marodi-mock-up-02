export interface Article {
  slug: string;
  title: string;
  date: string;
  category: 'Actualités' | 'Castings';
  image: string;
  excerpt: string;
  body: string[];
  marodiUrl: string;
  externalLink?: {
    label: string;
    url: string;
  };
}

export const ALL_NEWS: Article[] = [
  {
    slug: "alerte-casting-marodi-tv-a-la-recherche-de-ses-prochaines-etoiles",
    title: "Alerte casting : Marodi TV à la recherche de ses prochaines étoiles",
    date: "27 janv. 2026",
    category: "Castings",
    image: "https://marodi.tv/wp-content/uploads/2026/01/two-product-designers-testing-3d-printed-prototype-2026-01-11-11-13-45-utc-1024x683.jpg",
    excerpt: "La maison de production numéro 1 au Sénégal lance un grand casting à Dakar.",
    body: [
      "Vous rêvez de passer de l'autre côté de l'écran ? La maison de production numéro 1 au Sénégal lance un grand casting à Dakar. Votre moment est peut-être arrivé.",
      "Le rêve à portée de main. Derrière ces succès qui captivent des millions de spectateurs à travers le monde, il y a le savoir-faire de Marodi TV.",
      "Pour nos prochains projets (séries dramatiques, thrillers et comédies), nous ouvrons nos portes à la diversité. Hommes et femmes de 18 à 65 ans.",
    ],
    marodiUrl: "https://marodi.tv/alerte-casting-marodi-tv-a-la-recherche-de-ses-prochaines-etoiles/",
  },
  {
    slug: "le-casting-tour-arrive-a-dakar",
    title: "Le Casting Tour arrive à Dakar",
    date: "27 janv. 2026",
    category: "Castings",
    image: "https://marodi.tv/wp-content/uploads/2026/01/1769005656295.jpeg",
    excerpt: "Après Saint-Louis, cap sur Dakar, deuxième ville du Casting Tour. Rendez-vous au centre culturel Blaise Senghor.",
    body: [
      "Après Saint-Louis, cap sur Dakar, deuxième ville du Casting Tour.",
      "Retrouvez-nous le samedi 24 janvier à partir de 10h00 au centre culturel Blaise Senghor.",
      "Pour plus d'informations : +221 77 514 76 53.",
    ],
    marodiUrl: "https://marodi.tv/le-casting-tour-arrive-a-dakar/",
    externalLink: {
      label: "Appeler le +221 77 514 76 53",
      url: "tel:+221775147653",
    },
  },
  {
    slug: "financez-votre-projet-audiovisuel-avec-and-tekki",
    title: "Financez votre projet audiovisuel avec And Tekki",
    date: "7 janv. 2026",
    category: "Actualités",
    image: "https://marodi.tv/wp-content/uploads/2026/01/1761159721601-1024x1019.jpeg",
    excerpt: "Votre projet et vous, financés et accompagnés avec And Tekki. Programme dédié aux porteurs de projets audiovisuels.",
    body: [
      "Votre projet et vous, financés et accompagnés avec And Tekki.",
      "Pour soumettre votre dossier, rendez-vous sur www.andtekki.com.",
    ],
    marodiUrl: "https://marodi.tv/financez-votre-projet-audiovisuel-avec-and-tekki/",
    externalLink: {
      label: "Visiter andtekki.com",
      url: "https://www.andtekki.com",
    },
  },
  {
    slug: "diariatou-sow-decroche-le-sotigui-du-meilleur-espoir-africain",
    title: "Diariatou Sow décroche le Sotigui du meilleur espoir africain",
    date: "27 nov. 2025",
    category: "Actualités",
    image: "https://marodi.tv/wp-content/uploads/2026/01/1763322676455-1024x683.jpeg",
    excerpt: "Une nouvelle distinction pour Diariatou Sow, qui remporte le Sotigui du meilleur espoir africain pour son rôle de Débo dans Crédule.",
    body: [
      "Nouvelle distinction pour l'actrice Diariatou Sow, qui remporte le prestigieux Sotigui du meilleur espoir africain pour son rôle de Débo dans Crédule.",
    ],
    marodiUrl: "https://marodi.tv/diariatou-sow-decroche-le-sotigui-du-meilleur-espoir-africain/",
    externalLink: {
      label: "Voir la publication",
      url: "https://www.linkedin.com/company/marodi-tv/",
    },
  },
];
