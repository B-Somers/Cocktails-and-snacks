 fetchBtn = document.getElementById("search-button");
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
      buttonLi.style.margin = "15px auto"
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
// cocktailItemEl.addEventListener("click", )
//     {if(food.style.display==='none'){
//     food.style.display==='block';}
//     else{ food.style.display==='none'}
//---------------------------------------------------------------

// foodUrl= document.createElement("p");
// food.append(foodUrl);
// listItem.innerHTML = value;

// document.body.appendChild(results);
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
      //  foodUrl.textContent = mealslot;
       
      
       
       //  const heading = document.createElement("h1");
       //  heading.innerHTML = cocktailName;
       // cocktailDiv.appendChild(heading);
      console.log(mealslot);
   };
//    var randomMeal = mealslot[Math.floor(Math.random() * mealslot.length)];
}
foodApi



















//const list = document.getElementById("results")

//let.list = document.createElement()






//var resultStyle = document.getElementById("results")
//resultStyle.setAttribute("style", "justifyContent: space-around;
//   background-color: limegreen;")

//style.innerHTML = "#drinks (background-color:red)"




 //  justify-content: space-around;
 //  background-color: limegreen;
 //  font-family: 'Freehand', cursive;
 //  font-size: 25px;
 //  color: rgb(255, 89, 0);
 //  text-shadow: 2px 2px rgb(1, 45, 1) ;
 //  width: 80%;
 //  box-shadow: 5px 5px 5px yellow;
 //  border-radius: 12px;
 //  border-color: limegreen;
