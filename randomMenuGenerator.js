const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[] 
    },
    get appetizers(){
      return this._appetizers;
    },
    set appetizers(appIn){
      this._appetizers = appIn;
    }, 
    get mains(){
      return this._mains;
    },
    set mains(mainsIn){
      this._mains = mainsIn;
    }
    , 
    get desserts(){
      return this._desserts;
    },
    set desserts(dessertsIn){
      this._desserts = dessertsIn;
    },
  
    get courses(){
          return{
          appetizers: this._courses.appetizers,
          mains: this._courses.mains,
          desserts: this._courses.desserts,
          };
    },
  
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomCourse =  Math.floor(Math.random() * dishes.length);
      return dishes[randomCourse];
    },
  
    generateRandomMeal(){
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalCost = appetizers.price + mains.price + desserts.price;
      return `Your meal consists of: ${appetizers.name} as your appetizer, ${mains.name} as your main dish, ${desserts.name} as your dessert. Your cost for this fancy dinner tonight is $${totalCost}.` 
     },
  }
  
  menu.addDishToCourse('appetizers', 'Gruyere and Apple Salad', 5.00);
  menu.addDishToCourse('appetizers', 'Le French Onion Soup', 4.00);
  menu.addDishToCourse('appetizers', 'Truffle Butter Garlic Bread', 3.00);
  
  menu.addDishToCourse('mains', 'Ricotta and Lamb Lasagna', 14.00);
  menu.addDishToCourse('mains', 'Mushroom and White Wine Risotto', 12.00);
  menu.addDishToCourse('mains', 'DOP Margherita Pizza', 16.00);
  
  menu.addDishToCourse('desserts', 'Glass House Tiramisu', 6.00);
  menu.addDishToCourse('desserts', 'Sicilian Panna Cotta', 8.00);
  menu.addDishToCourse('desserts', 'Modena White Truffle Cheesecake', 7.00);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);