$.getJSON("www.thecocktaildb.com/api/json/v1/1/search.php?f=a", function(data){
 console.log(data);
});

const mealButton = document.getElementById('mealbtn');
const mealField = document.getElementById('mealfield');

mealButton.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
			createMeal(res.meals[0]);
		})
		.catch(e => {
			console.warn(e);
		});
});

const createMeal = meal => {

	const newInnerHTML = `
		<div class="row">
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>

			</div>
		</div>
	`;

	mealField.innerHTML = newInnerHTML;
};

// var fetchBtn = document.getElementById('coctails-btn');


// function getApi(){
// var coctailByName = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

//      fetch(coctailByName)
//      .then(function(response){
//          return response.json();
//      }).then(function(data{
 //   console.log('parsed data!');
 //   console.log(data);
//});
// }

// fetchBtn.addEventListener('click', getApi);