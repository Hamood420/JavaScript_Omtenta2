const btn = document.querySelector('button');
btn.addEventListener('click', clickEvent);


function clickEvent(e){
    e.preventDefault();
 
document.querySelector('h4').innerText = ''; 

 

const input = document.querySelector('input');

let searchText = input.value;

const urlName = `https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita/${searchText}`;


getCocktailName(urlName);
input.value = ''; 
}

function getCocktailName(url){
    fetch(url).then(
        response => response.json()
    ).then(
         drinks => displayCocktailName(drinks)
    ).catch(displayError);
}

function displayCocktailName(data){
 console.log(data);

 document.querySelector('#drink-name').innerText = strDrink;

 document.querySelector('#IBA-category').innerText = strIBA;

 document.querySelector('#IBA-category').innerText = strCategory;

 document.querySelector('#instructions').innerText = strInstructions;

 document.querySelector('#cocktail-img').src = `${StrDrinkThumb}`;

 }


function displayError(e){
document.querySelector('h4').innerText = 'Kunde inte hittas';
}
