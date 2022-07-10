function nameMenuItem(name) {
  return `Delicious ${name}`;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  };
  return menuItem;
};

function addIngredients(ingredient, ingredients) {
  if (ingredients.indexOf(ingredient) === -1) {
    ingredients.push(ingredient);
  };
};

function formatPrice(price) {
  return `$${price}`;
};

function decreasePrice(price) {
  return price * 0.9;
};

function createRecipe(title, ingredients, type) {
  recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  };
  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
