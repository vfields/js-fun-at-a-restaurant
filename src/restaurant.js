
function createRestaurant(name) {
  var newRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return newRestaurant;
};

function addMenuItem(nameOfRestaurant, menuItem) {
    if (menuItem.type === "breakfast" && nameOfRestaurant.menus.breakfast.indexOf(menuItem) === -1) {
      nameOfRestaurant.menus.breakfast.push(menuItem);
    }
    else if (menuItem.type === "lunch" && nameOfRestaurant.menus.lunch.indexOf(menuItem) === -1) {
      nameOfRestaurant.menus.lunch.push(menuItem)
    }
    else if (menuItem.type === "dinner" && nameOfRestaurant.menus.dinner.indexOf(menuItem) === -1) {
      nameOfRestaurant.menus.dinner.push(menuItem)
    }
}

/*
var newRestaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: [],
  },
*/

/* function removeMenuItem(nameOfRestaurant, menuItem, itemType) {
  if (itemType === "breakfast") {
    nameOfRestaurant.menus.breakfast.splice(menuItem);
  }
  else if (itemType === "lunch") {
    nameOfRestaurant.menus.lunch.splice(menuItem)
  }
  else if (itemType === "dinner") {
    nameOfRestaurant.menus.dinner.splice(menuItem)
  };
  return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
} */

/* function removeMenuItem(nameOfRestaurant, menuItem, itemType) {
  if (itemType === "breakfast" && nameOfRestaurant.menus.breakfast.includes(menuItem)) {
    nameOfRestaurant.menus.breakfast.splice(menuItem);
    return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
  }
  else if (itemType === "lunch" && nameOfRestaurant.menus.lunch.includes(menuItem)) {
    nameOfRestaurant.menus.lunch.splice(menuItem)
    return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
  }
  else if (itemType === "dinner" && nameOfRestaurant.menus.dinner.includes(menuItem)) {
    nameOfRestaurant.menus.dinner.splice(menuItem)
    return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
  }
  else {
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
};
}; */

/*
var newRestaurant = {
  name: name,
  menus: {
    breakfast: [{
      name: "BBQ Chicken Pizza",
      price: "12.49",
      type: "lunch"
    }, {etc.}],
    lunch: [],
    dinner: [],
  },
*/

function removeMenuItem(nameOfRestaurant, menuItem, itemType) {
  for (var i = 0; i < nameOfRestaurant.menus[itemType].length; i++) {
    if (nameOfRestaurant.menus[itemType][i].name.includes(menuItem)) {
      nameOfRestaurant.menus[itemType].splice(i, 1)
      return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`;
    }
  }
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}

/* function removeMenuItem(nameOfRestaurant, menuItem, itemType) {
  if (itemType === "breakfast" && nameOfRestaurant.menus.breakfast.indexOf(menuItem) > -1) {
    nameOfRestaurant.menus.breakfast.splice(menuItem);
    return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
  }
  else if (itemType === "lunch" && nameOfRestaurant.menus.lunch.indexOf(menuItem) > -1) {
    nameOfRestaurant.menus.lunch.splice(menuItem)
    return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
  }
  else if (itemType === "dinner" && nameOfRestaurant.menus.dinner.indexOf(menuItem) > -1) {
    nameOfRestaurant.menus.dinner.splice(menuItem)
    return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
  }
  else {
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
};
}; */

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

/* var pizzaRestaurant = createRestaurant("Sexy Pizza");
var bbqPizza = {
  name: "BBQ Chicken Pizza",
  price: "12.49",
  type: "lunch"
};

var veggiePizza = {
  name: "Veggie Pizza",
  price: "11.49",
  type: "dinner"
};

var baconEggsPizza = {
  name: "Bacon and Eggs Pizza",
  price: "13.49",
  type: "breakfast"
};

addMenuItem(pizzaRestaurant, bbqPizza);
addMenuItem(pizzaRestaurant, baconEggsPizza);
addMenuItem(pizzaRestaurant, veggiePizza);

console.log(pizzaRestaurant.menus.breakfast);
console.log(pizzaRestaurant.menus.breakfast.indexOf(baconEggsPizza));
console.log(pizzaRestaurant.menus.breakfast.indexOf(veggiePizza));
console.log(pizzaRestaurant.menus.lunch);
console.log(pizzaRestaurant.menus.dinner); */
