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

// Jest with nock and HTML Response
test('should return the an object with the name, image, ingredients, and directions', async () => {
  // Arrange
  const url =
    'http://www.allrecipes.com/recipe/266826/air-fryer-potato-wedges/';

  // setup nock to intercept HTTP request and return a mock response
  nock('http://www.allrecipes.com')
    .get('/recipe/266826/air-fryer-potato-wedges/')
    .reply(
      200,
      `
    <html>
    <body>
        <div class="universal-image__image" data-src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F81577bd180cdb3fd9b75781bf27d2284%2F1682387844413IMG_6442-2-.JPG&q=60&c=sc&orient=true&w=160&poi=auto&h=90"></div>
        <ul>
            <li class="mntl-structured-ingredients__list-item">2 medium russet potatoes</li>
            <li class="mntl-structured-ingredients__list-item">1 ½ tablespoons olive oil</li>
            <li class="mntl-structured-ingredients__list-item">½ teaspoon ground paprika</li>
            <li class="mntl-structured-ingredients__list-item">½ teaspoon parsley flakes</li>
            <li class="mntl-structured-ingredients__list-item">½ teaspoon chili powder</li>
            <li class="mntl-structured-ingredients__list-item">½ teaspoon sea salt</li>
            <li class="mntl-structured-ingredients__list-item">⅛ teaspoon ground black pepper</li>
        </ul>
        <div class="comp">
            <div class="mntl-sc-block">
                <div class="mntl-sc-block-html">Preheat an air fryer to 400 degrees F (200 degrees C).</div>
                <div class="mntl-sc-block-html">Cut each potato in half lengthwise. Cut each half in half lengthwise, and then cut each quarter in half lengthwise. You will have 16 wedges. Gather the seasonings.</div>
                <div class="mntl-sc-block-html">Place potato wedges in a large bowl. Add olive oil, paprika, parsley, chili, salt, and pepper; mix until well combined.</div>
                <div class="mntl-sc-block-html">Place 1/2 of the potato wedges in the basket of the air fryer and cook for 10 minutes.</div>
                <div class="mntl-sc-block-html">Flip wedges with tongs and cook for an additional 5 minutes. Remove to a plate.</div>
                <div class="mntl-sc-block-html">Repeat to cook the remaining wedges.</div>
                <div class="mntl-sc-block-html">Serve hot and enjoy!</div>
            </div>
        </div>
    </body>
    </html>
  `
    );

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

// test('value of name should be a type of string', async () => {
//   // Arrange
//   const url = 'http://www.allrecipes.com/recipe/266826/air-fryer-potato-wedges/';

//   // Act
//   // Assert
// })
