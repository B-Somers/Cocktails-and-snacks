var fetchBtn = document.getElementById("search-button");
var input = document.getElementById("search-input");
var results = document.getElementById("results");
var food = document.getElementById("food");
// var searchResults = data.drinks[0];

function getApi() {
  var cocktailByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`;
  return fetch(cocktailByName)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks);
      return data.drinks;
      //    searchResults = data.drinks;
      //    console.log(searchResults);
    });
}
getApi();

function getAndDisplayDrinkResults() {
    //clear results div so response does not duplicate in HTML
    results.innerHTML = "";
    var drinks = getApi();

    drinks.then((drinksArray) => {
    console.log("The drinks variable is as follows: ");
    console.log(drinksArray);

    createAndAppendDrinkElements(drinksArray);
  });

  function createAndAppendDrinkElements(drinksArray) {
    for (let i = 0; i < drinksArray.length; i++) {
      let drink = drinksArray[i].strDrink;
      //   console.log(drink.strDrink);
      console.log(drink);

      //   var cocktailName = document.createElement("ul");
      cocktailItemEl = document.createElement("li");
    //   cocktailItemEl.innerHTML = drink;
      results.appendChild(cocktailItemEl);
      buttonLi= document.createElement("button");
      buttonLi.textContent = drink;
      buttonLi.setAttribute("value", drink);
      buttonLi.addEventListener("click", foodApi);
      cocktailItemEl.append(buttonLi);
      
      // cocktailName.appendChild(listItem);
      // listItem.classList.add("p-2 ");
      //   listItem.innerHTML = value;
      //   cocktailName.appendChild(listItem);
      // target.addEventListener("click", getFoodItem(target.value))
    }}
  
}
    
// Loop through drinks to show requested onces
var getNames = Object.keys(results)
  .filter(function (drink) {
    return drink.indexOf("strDrink") == 0;
  })
  .reduce(function (data, drinks) {
    if (cocktail[drinks] != null) {
      data[drinks] = cocktail[drinks];
    }
    return drinks;
  }, {});


fetchBtn.addEventListener("click", getAndDisplayDrinkResults);
cocktailItemEl.addEventListener("click", )
//     {if(food.style.display==='none'){
//     food.style.display==='block';}
//     else{ food.style.display==='none'}
//---------------------------------------------------------------



// document.body.appendChild(results);
function foodApi(){
$.getJSON("www.thecocktaildb.com/api/json/v1/1/search.php?f=a", function(data){
    console.log(data);
   });
  
   var mealField = document.getElementById('food');
   
    
       fetch('https://www.themealdb.com/api/json/v1/1/random.php')
           .then(res => res.json())
           .then(res => {
               createMeal(res.meals[0]);
           })
           .catch(e => {
               console.warn(e);
           });
   
   
   const createMeal = meal => {
   
       const mealslot = meal.strMeal
   
       console.log(mealslot);
   };
   var randomMeal = meal[Math.floor(Math.random()*meal.length)];
}