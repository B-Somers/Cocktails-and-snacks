var fetchBtn = document.getElementById('search-button');
var input = document.getElementById('search-input');
var results = document.getElementById('results');
// var searchResults = data.drinks[0];


function getApi(){
    var cocktailByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`;
     fetch(cocktailByName)
     .then(function(response){
    return response.json();
     })
     .then(function(data){
   console.log(data.drinks);
//    searchResults = data.drinks;
//    console.log(searchResults);

});
}
getApi();

var cocktailName = document.createElement("ul");
results.appendChild(cocktailName);  

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

for (let key in getNames) {
  let value = getIngredients[key];
  listItem = document.createElement("li");
  listItem.innerHTML = value;
  cocktailName.appendChild(listItem);
}
    


// if(input == input.value){
// console.log(working)
// }

fetchBtn.addEventListener('click', getApi);



// results.appendChild(searchResults);
 document.body.appendChild(results);
