const axios = require('axios');
const cheerio = require('cheerio');

async function getIngredients(url) {
  let res = await axios.get(url);

  const $ = cheerio.load(res.data);
  // let recipe = {
  //   image: '',
  //   ingredients: [],
  //   directions: {},
  // };

  // Ben suggestion
  let recipe = {
    //consider adding this
    //works only if url ENDS WITH / also. As shown in example
    //splits on /, slices the second to last out, replaces - with space
    //given url below, it would return 'air fryer potato wedges'
    name: url.split('/').slice(-2, -1)[0].replace(/-/g, ' '),
    image: '',
    ingredients: [],
    directions: {},
  };

  recipe.image = $('.universal-image__image').data('src');

  $('.mntl-structured-ingredients__list-item').each((i, el) => {
    recipe.ingredients.push($(el).text().replace(/\n/g, ''));
    // console.log($(el).text());
  });

  $('.comp .mntl-sc-block .mntl-sc-block-html').each((i, el) => {
    recipe.directions[`Step ${i + 1}`] = $(el).text().replace(/\n/g, '');
    // console.log('directions', $(el).text());
  });

  console.log(recipe);
}

getIngredients(
  'http://www.allrecipes.com/recipe/266826/air-fryer-potato-wedges/'
);

// Ben Suggestion
// let recipe = {
//   //consider adding this
//   //works only if url ENDS WITH / also. As shown in example
//   //splits on /, slices the second to last out, replaces - with space
//   //given url below, it would return 'air fryer potato wedges'
//   name: url.split('/').slice(-2, -1)[0].replace(/-/g, ' '),
//   image: '',
//   ingredients: [],
//   directions: {},
// };
