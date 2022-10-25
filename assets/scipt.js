// fetch('www.thecocktaildb.com/api/json/v1/1/search.php')
//                     .then(response => {
//                       if (response.ok) return response.json()
//                       throw new Error('Network response was not ok.')
//                     })
//                     .then(data => console.log(data.contents));



// $.getJSON('https://api.allorigins.win/get?url=' + 
// encodeURIComponent('www.thecocktaildb.com/api/json/v1/1/search.php?f=a'), function (data) {
// console.log(data);  });

// $.getJSON("www.thecocktaildb.com/api/json/v1/1/search.php?f=a", function(data){
//  console.log(data.drinks);
// });

var fetchBtn = document.getElementById('coctails-btn');


function getApi(){
var cocktailByName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

     fetch(cocktailByName)
     .then(function(response){
         return response.json();
     }).then(function(data){
   console.log('parsed data!');
   console.log(data);
});
}
getApi();
fetchBtn.addEventListener('click', getApi);

var button = document.getElementById('click');
var input = document.getElementById('input');
button.addEventListener('click',  function(){
    console.log('working');
    console.log(input.value);
    var url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input.value;
    console.log(url);
});