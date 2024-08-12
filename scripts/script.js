let allPokemon = "";
let currentPokemon = "";
let currentImage = "";
let currentType = "";

async function render() {
    let contentRef = document.getElementById('content-box');
    contentRef.innerHTML = "";

    for (let i = 1; i < 11; i++) {
        await fetchDataJson(i);
    }
}

async function fetchDataJson(index) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);
    let responseAsJson = await response.json();
    console.log(responseAsJson);
    
    allPokemon = responseAsJson;
    currentPokemon = responseAsJson.name;
    currentImage = responseAsJson.sprites.other["official-artwork"].front_default;
    
    console.log(allPokemon.types[0].type.name);
    
    currentType = allPokemon.types[0].type.name;

    renderPokemon(currentPokemon, index, currentImage, currentType);
}

function renderPokemon(currentPokemon, index, currentImage, currentType) {
    let contentRef = document.getElementById('content-box');
    let backgroundColor = checkType(currentType);

    contentRef.innerHTML += getCartTemplate(currentPokemon, index, currentImage, backgroundColor);
}

function checkType(currentType) {

    switch (currentType) {
        case 'water':
            backgroundColor = '#AAD0FF'; // Neutral Blue
            break;
        case 'fire':
            backgroundColor = '#EC7979'; // Neutral Red
            break;
        case 'grass':
            backgroundColor = '#739C77'; // Neutral Green
            break;
        case 'bug':
            backgroundColor = '#CCAF72'; // Neutral Beige
            break;
        case 'normal':
            backgroundColor = '#AAAA99'; // Greyish Neutral
            break;
        case 'poison':
            backgroundColor = '#AA5599'; // Slightly Muted Purple
            break;
        case 'electric':
            backgroundColor = '#FFE58E'; // Neutral Yellow
            break;
        case 'ground':
            backgroundColor = '#DDBB55'; // Earthy Neutral
            break;
        case 'fairy':
            backgroundColor = '#EE99AC'; // Soft Pink
            break;
        case 'fighting':
            backgroundColor = '#CC3333'; // Muted Red
            break;
        case 'psychic':
            backgroundColor = '#FF5599'; // Warm Pink
            break;
        case 'rock':
            backgroundColor = '#CCAF72'; // Neutral Beige
            break;
        case 'ghost':
            backgroundColor = '#6666BB'; // Muted Blue
            break;
        case 'ice':
            backgroundColor = '#AAD0FF'; // Light Blue
            break;
        case 'dragon':
            backgroundColor = '#7766EE'; // Muted Purple
            break;
        case 'dark':
            backgroundColor = '#775544'; // Neutral Brown
            break;
        case 'steel':
            backgroundColor = '#AAAABB'; // Neutral Grey
            break;
        case 'flying':
            backgroundColor = '#8899FF'; // Soft Blue
            break;
        default:
            backgroundColor = '#CCCCCC'; // Default Neutral Grey
            break;
    }    
    return backgroundColor;    
}
