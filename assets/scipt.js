var fetchBtn = document.getElementById("search-button");
var input = document.getElementById("search-input");
var results = document.getElementById("results");
var food = document.getElementById("food");
var storageText = document.getElementById("storage-text")
var lastSearched = document.getElementById("last-search");

function getApi() {
  var cocktailByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`;
  return fetch(cocktailByName)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks);
      return data.drinks;
      
    });
}
getApi();

function getAndDisplayDrinkResults() {
    //clear results div so response does not duplicate in HTML
    results.innerHTML = "";

    // grabbing the value of the input field
    var textValue = input.value;
    console.log(textValue);

    // LOCAL STORAGE       "KEY" ,  "VALUE"
    localStorage.setItem("search", textValue);

    var drinks = getApi();

    drinks.then((drinksArray) => {
    console.log("The drinks variable is as follows: ");
    console.log(drinksArray);

    createAndAppendDrinkElements(drinksArray);
  });
// LOOP THROUG DRINK-ARRAYG
  function createAndAppendDrinkElements(drinksArray) {
    for (let i = 0; i < drinksArray.length; i++) {
      let drink = drinksArray[i].strDrink;
      console.log(drink);
      
      
      cocktailItemEl = document.createElement("li");
      results.appendChild(cocktailItemEl);
      buttonLi= document.createElement("button");
      buttonLi.textContent = drink;
      buttonLi.setAttribute("value", drink);
      buttonLi.addEventListener("click", foodApi);
      buttonLi.style.margin = "15px auto"
      cocktailItemEl.append(buttonLi);
      
      
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



// EVENT LISTNER FOR MY SEARCH BUTTON
  fetchBtn.addEventListener("click", getAndDisplayDrinkResults);
  var mealField = document.getElementById('food');

function foodApi(){
$.getJSON("www.thecocktaildb.com/api/json/v1/1/search.php?f=a", function(data){
    console.log(data);
   });
  
    
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
      food.innerHTML="";
       
        var foodUrl= document.createElement("p");
       food.append(foodUrl);
       foodUrl.textContent = "This food item would go well with your drink :" + " " + mealslot;
      

      console.log(mealslot);
   };

}
foodApi();

// make local storage display last search on screen
var searchedItem = localStorage.getItem("search");
lastSearched.textContent = searchedItem;