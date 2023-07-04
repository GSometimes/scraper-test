// Vitest
// import { it, expect } from 'vitest';
// import { getIngredients } from './scraper.js';

// it('should return the an object with the name, image, ingredients, and directions', async () => {
//   // Arrange
//   const url =
//     'http://www.allrecipes.com/recipe/266826/air-fryer-potato-wedges/';

//   // Act
//   const result = await getIngredients(url);

//   // Assert
//   expect(result).toEqual({
//     name: 'air fryer potato wedges',
//     image:
//       'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F81577bd180cdb3fd9b75781bf27d2284%2F1682387844413IMG_6442-2-.JPG&q=60&c=sc&orient=true&w=160&poi=auto&h=90',
//     ingredients: [
//       '2 medium russet potatoes',
//       '1 ½ tablespoons olive oil',
//       '½ teaspoon ground paprika',
//       '½ teaspoon parsley flakes',
//       '½ teaspoon chili powder',
//       '½ teaspoon sea salt',
//       '⅛ teaspoon ground black pepper',
//     ],
//     directions: {
//       'Step 1': 'Preheat an air fryer to 400 degrees F (200 degrees C).',
//       'Step 2':
//         'Cut each potato in half lengthwise. Cut each half in half lengthwise, and then cut each quarter in half lengthwise. You will have 16 wedges. Gather the seasonings.',
//       'Step 3':
//         'Place potato wedges in a large bowl. Add olive oil, paprika, parsley, chili, salt, and pepper; mix until well combined.',
//       'Step 4':
//         'Place 1/2 of the potato wedges in the basket of the air fryer and cook for 10 minutes.',
//       'Step 5':
//         'Flip wedges with tongs and cook for an additional 5 minutes. Remove to a plate.',
//       'Step 6': 'Repeat to cook the remaining wedges.',
//       'Step 7': 'Serve hot and enjoy!',
//     },
//   });
// });

// Jest
const { getIngredients } = require('./scraper.js');
const nock = require('nock');

test('should return the an object with the name, image, ingredients, and directions', async () => {
  // Arrange
  const url =
    'http://www.allrecipes.com/recipe/266826/air-fryer-potato-wedges/';
  // setup nock to intercept HTTP request and return a mock response
  nock('http://www.allrecipes.com');

  // Act
  const result = await getIngredients(url);

  // Assert
  expect(result).toEqual({
    name: 'air fryer potato wedges',
    image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F81577bd180cdb3fd9b75781bf27d2284%2F1682387844413IMG_6442-2-.JPG&q=60&c=sc&orient=true&w=160&poi=auto&h=90',
    ingredients: [
      '2 medium russet potatoes',
      '1 ½ tablespoons olive oil',
      '½ teaspoon ground paprika',
      '½ teaspoon parsley flakes',
      '½ teaspoon chili powder',
      '½ teaspoon sea salt',
      '⅛ teaspoon ground black pepper',
    ],
    directions: {
      'Step 1': 'Preheat an air fryer to 400 degrees F (200 degrees C).',
      'Step 2':
        'Cut each potato in half lengthwise. Cut each half in half lengthwise, and then cut each quarter in half lengthwise. You will have 16 wedges. Gather the seasonings.',
      'Step 3':
        'Place potato wedges in a large bowl. Add olive oil, paprika, parsley, chili, salt, and pepper; mix until well combined.',
      'Step 4':
        'Place 1/2 of the potato wedges in the basket of the air fryer and cook for 10 minutes.',
      'Step 5':
        'Flip wedges with tongs and cook for an additional 5 minutes. Remove to a plate.',
      'Step 6': 'Repeat to cook the remaining wedges.',
      'Step 7': 'Serve hot and enjoy!',
    },
  });
});
