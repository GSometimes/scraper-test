const axios = require('axios');
const cheerio = require('cheerio');

// export async function getIngredients(url) {
//   let res = await axios.get(url);

//   const $ = cheerio.load(res.data);
//   // let recipe = {
//   //   image: '',
//   //   ingredients: [],
//   //   directions: {},
//   // };

//   // Ben suggestion
//   let recipe = {
//     //consider adding this
//     //works only if url ENDS WITH / also. As shown in example
//     //splits on /, slices the second to last out, replaces - with space
//     //given url below, it would return 'air fryer potato wedges'
//     name: url.split('/').slice(-2, -1)[0].replace(/-/g, ' '),
//     image: '',
//     ingredients: [],
//     directions: {},
//   };

//   recipe.image = $('.universal-image__image').data('src');

//   $('.mntl-structured-ingredients__list-item').each((i, el) => {
//     recipe.ingredients.push($(el).text().replace(/\n/g, ''));
//     // console.log($(el).text());
//   });

//   $('.comp .mntl-sc-block .mntl-sc-block-html').each((i, el) => {
//     recipe.directions[`Step ${i + 1}`] = $(el).text().replace(/\n/g, '');
//     // console.log('directions', $(el).text());
//   });

//   return recipe;
// }

// getIngredients(
//   'http://www.allrecipes.com/recipe/266826/air-fryer-potato-wedges/'
// );

// I'm a potato and thought that converting this to an arrow function would some how make it work. I was wrong.
// I needed to change export { getIngredients } to module.exports = { getIngredients };
// That was all. I'm a potato.

// import axios from 'axios';
// import cheerio from 'cheerio';

const getIngredients = async (url) => {
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

  return recipe;
};

getIngredients(
  'http://www.allrecipes.com/recipe/266826/air-fryer-potato-wedges/'
);

module.exports = { getIngredients };
