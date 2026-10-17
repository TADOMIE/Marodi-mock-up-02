import type { Series, SeriesLang, SeriesGenre, SeriesBadge } from './series.ts';

export interface SeriesFilterOptions {
  lang?: SeriesLang | 'toutes';
  genre?: SeriesGenre | 'tous';
  badge?: SeriesBadge | 'tous';
  searchQuery?: string;
}

export function filterSeries(seriesList: Series[], options: SeriesFilterOptions): Series[] {
  const { lang = 'toutes', genre = 'tous', badge = 'tous', searchQuery = '' } = options;
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return seriesList.filter((item) => {
    // Language filter
    if (lang !== 'toutes' && item.lang !== lang) {
      return false;
    }

    // Genre filter
    if (genre !== 'tous' && item.genre !== genre) {
      return false;
    }

    // Badge / Statut filter
    if (badge !== 'tous' && item.badge !== badge) {
      return false;
    }

    // Search query matching
    if (normalizedQuery) {
      const matchTitle = item.title.toLowerCase().includes(normalizedQuery);
      const matchGenre = item.genre.toLowerCase().includes(normalizedQuery);
      const matchLang = item.lang.toLowerCase().includes(normalizedQuery);
      const matchBadge = item.badge.toLowerCase().includes(normalizedQuery);
      if (!matchTitle && !matchGenre && !matchLang && !matchBadge) {
        return false;
      }
    }

    return true;
  });
}

export function getRelatedSeries(allSeries: Series[], currentSlug: string, limit = 4): Series[] {
  const current = allSeries.find((s) => s.slug === currentSlug);
  if (!current) return [];

  return allSeries
    .filter((s) => s.slug !== currentSlug && s.lang === current.lang)
    .slice(0, limit);
}

export interface CastingFormState {
  fullName: string;
  birthDate: string;
  phone: string;
  gender: string;
  email: string;
  height: string;
  weight: string;
  hasExperience: boolean;
  experienceDetails: string;
  socialLinks: string;
  professionalAssets: string;
  termsConfirmed: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateCastingForm(state: Partial<CastingFormState>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!state.fullName || state.fullName.trim().length < 2) {
    errors.fullName = "Le nom et prénom sont obligatoires.";
  }

  if (!state.birthDate) {
    errors.birthDate = "La date de naissance est obligatoire.";
  }

  if (!state.phone || state.phone.trim().length < 6) {
    errors.phone = "Un numéro de téléphone valide est obligatoire.";
  }

  if (!state.gender) {
    errors.gender = "Veuillez sélectionner votre genre.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!state.email || !emailRegex.test(state.email.trim())) {
    errors.email = "Une adresse e-mail valide est obligatoire.";
  }

  const heightNum = Number(state.height);
  if (!state.height || isNaN(heightNum) || heightNum < 50 || heightNum > 250) {
    errors.height = "Veuillez entrer une taille valide en cm (ex: 175).";
  }

  const weightNum = Number(state.weight);
  if (!state.weight || isNaN(weightNum) || weightNum < 20 || weightNum > 300) {
    errors.weight = "Veuillez entrer un poids valide en kg (ex: 70).";
  }

  if (state.hasExperience && (!state.experienceDetails || state.experienceDetails.trim().length < 5)) {
    errors.experienceDetails = "Veuillez préciser votre expérience antérieure.";
  }

  if (!state.professionalAssets || state.professionalAssets.trim().length < 5) {
    errors.professionalAssets = "Veuillez décrire vos atouts professionnels.";
  }

  if (!state.termsConfirmed) {
    errors.termsConfirmed = "Vous devez confirmer l'exactitude des informations fournies.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface ContactFormState {
  subject: string;
  fullName: string;
  email: string;
  message: string;
}

export function validateContactForm(state: Partial<ContactFormState>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!state.subject) {
    errors.subject = "Veuillez choisir l'objet de votre demande.";
  } else if (state.subject === "Castings") {
    errors.subject = "Les candidatures de casting doivent obligatoirement être soumises via l'Espace Casting.";
  }

  if (!state.fullName || state.fullName.trim().length < 2) {
    errors.fullName = "Votre nom complet est obligatoire.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!state.email || !emailRegex.test(state.email.trim())) {
    errors.email = "Une adresse e-mail valide est obligatoire.";
  }

  if (!state.message || state.message.trim().length < 5) {
    errors.message = "Veuillez saisir votre message.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
