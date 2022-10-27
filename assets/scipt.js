var fetchBtn = document.getElementById("search-button");
var input = document.getElementById("search-input");
var results = document.getElementById("results");
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
      cocktailItemEl.append(buttonLi);
      
      // cocktailName.appendChild(listItem);
      // listItem.classList.add("p-2 ");
      //   listItem.innerHTML = value;
      //   cocktailName.appendChild(listItem);
    }
    // listItem = document.createElement("li");
  }
  //   console.log(drinks);
  //   var cocktailName = document.createElement("ul");
  //   results.appendChild(cocktailName);

  //   //   drinks.foreach();
  //   let value = getIngredients[key];
  //   listItem = document.createElement("li");
  //   listItem.innerHTML = value;
  //   cocktailName.appendChild(listItem);
}

//   for (let key in getNames) {
//     let value = getIngredients[key];
//     listItem = document.createElement("li");
//     listItem.innerHTML = value;
//     cocktailName.appendChild(listItem);
//   }
// }

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

// if(input == input.value){
// console.log(working)
// }

fetchBtn.addEventListener("click", getAndDisplayDrinkResults);

// results.appendChild(searchResults);
document.body.appendChild(results);
