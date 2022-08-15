const axios = require('axios');
const cheerio = require('cheerio');

async function getIngredients() {
  let res = await axios.get(
    'http://www.allrecipes.com/recipe/266826/air-fryer-potato-wedges/'
  );

  const $ = cheerio.load(res.data);
  let airFryTaters = {
    image: '',
    ingredients: [],
    directions: {},
  };

  airFryTaters.image = $('.lazy-image-udf').data('src');

  $('.ingredients-item-name').each((i, el) => {
    airFryTaters.ingredients.push($(el).text());
    // console.log($(el).text());
  });

  $('.section-body').each((i, el) => {
    airFryTaters.directions[`Step ${i + 1}`] = $(el).text();
    // console.log('directions', $(el).text());
  });

  console.log(airFryTaters);
}

getIngredients();