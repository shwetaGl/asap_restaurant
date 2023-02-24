import images from './images';

const wines = [
  {
    title: 'Black Label',
    price: '1800',
    tags: 'AU | Bottle',
  },
  {
    title: 'Red Label',
    price: '900',
    tags: 'AU | Bottle',
  },
  {
    title: 'Teacher',
    price: '2500',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Elephant',
    price: '180',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Old Monk',
    price: '700',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Vodka Mojito',
    price: '150',
    tags: 'Refreshing jal jeera mojito',
  },
  {
    title: 'Tamarind Ginger Margarita',
    price: '240',
    tags: 'tamarind-flavored drink',
  },
  {
    title: 'Daiquiri',
    price: '1100',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '300',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '2600',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
