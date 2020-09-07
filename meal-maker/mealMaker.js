const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizersIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains = mainsIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers, mains: this.mains, desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice)  {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Steak', 14.50);
menu.addDishToCourse('desserts', 'Cheesecake', 5.00);
let meal = menu.generateRandomMeal();
console.log(meal);
