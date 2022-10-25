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

// var fetchBtn = document.getElementById('coctails-btn');


function getApi(){
var coctailByName = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

     fetch(coctailByName)
     .then(function(response){
         return response.json();
     }).then(function(data){
   console.log('parsed data!');
   console.log(data);
});
}
getApi();
// fetchBtn.addEventListener('click', getApi);