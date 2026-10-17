import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_SERIES } from './series.ts';
import {
  filterSeries,
  getRelatedSeries,
  validateCastingForm,
  validateContactForm,
} from './seriesLogic.ts';

test('filterSeries returns all series when filters are default', () => {
  const result = filterSeries(ALL_SERIES, {
    lang: 'toutes',
    genre: 'tous',
    badge: 'tous',
    searchQuery: '',
  });
  assert.equal(result.length, 52);
});

test('filterSeries filters accurately by language', () => {
  const wolof = filterSeries(ALL_SERIES, { lang: 'wolof' });
  const pulaar = filterSeries(ALL_SERIES, { lang: 'pulaar' });
  const francais = filterSeries(ALL_SERIES, { lang: 'francais' });

  assert.ok(wolof.length > 0);
  assert.ok(pulaar.length > 0);
  assert.ok(francais.length > 0);
  assert.equal(wolof.length + pulaar.length + francais.length, 52);
  assert.ok(wolof.every((s) => s.lang === 'wolof'));
  assert.ok(pulaar.every((s) => s.lang === 'pulaar'));
  assert.ok(francais.every((s) => s.lang === 'francais'));
});

test('filterSeries filters by genre and search query', () => {
  const thrillers = filterSeries(ALL_SERIES, { genre: 'Thriller' });
  assert.ok(thrillers.length > 0);
  assert.ok(thrillers.every((s) => s.genre === 'Thriller'));

  const searchBaabel = filterSeries(ALL_SERIES, { searchQuery: 'Baabel' });
  assert.ok(searchBaabel.length >= 1);
  assert.equal(searchBaabel[0].title, 'Baabel');
});

test('getRelatedSeries returns series of same language excluding current', () => {
  const related = getRelatedSeries(ALL_SERIES, 'baabel', 4);
  assert.equal(related.length, 4);
  assert.ok(related.every((s) => s.slug !== 'baabel'));
  assert.ok(related.every((s) => s.lang === 'wolof'));
});

test('validateContactForm rejects "Castings" subject and redirects', () => {
  const invalid = validateContactForm({
    subject: 'Castings',
    fullName: 'Amadou Diallo',
    email: 'amadou@example.com',
    message: 'Je veux auditionner',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.subject);

  const valid = validateContactForm({
    subject: 'Production',
    fullName: 'Fatou Sow',
    email: 'fatou@example.com',
    message: 'Proposition de partenariat de coproduction.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('validateCastingForm validates required fields', () => {
  const empty = validateCastingForm({});
  assert.equal(empty.isValid, false);
  assert.ok(empty.errors.fullName);
  assert.ok(empty.errors.termsConfirmed);

  const valid = validateCastingForm({
    fullName: 'Ousmane Fall',
    birthDate: '1998-05-14',
    phone: '+221770000000',
    gender: 'Homme',
    email: 'ousmane@example.com',
    height: '180',
    weight: '75',
    hasExperience: false,
    experienceDetails: '',
    socialLinks: 'https://instagram.com/ousmane',
    professionalAssets: 'Improvisation théâtrale, bilingue wolof et français.',
    termsConfirmed: true,
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
