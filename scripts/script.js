let allPokemonData = [];
let allPokemon = [];
let renderCount = 10;

async function render() {
    let contentRef = document.getElementById('content-box');
    contentRef.innerHTML = "";

    for (let i = 1; i < renderCount; i++) {
        await fetchDataJson(i);
    }
}

async function loadMorePokemon(renderCount, newRenderCount) {
    if (newRenderCount != null) {
        for (let i = renderCount; i < newRenderCount; i++) {
            await fetchDataJson(i);
        }
    }
}

async function fetchDataJson(index) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + index);
    let responseAsJson = await response.json();
    let pokemonData = {
        name: responseAsJson.name,
        index: index,
        image: responseAsJson.sprites.other["official-artwork"].front_default,
        type: responseAsJson.types[0].type.name
    };
    
    allPokemon.push(pokemonData.name);
    allPokemonData.push(pokemonData);
    renderPokemon(pokemonData.name, pokemonData.index, pokemonData.image, pokemonData.type);
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

async function increaseRenderCount() {
    document.getElementById('loading-spinner').style.display = 'block';
    let newRenderCount = renderCount + 18;
    await delay(2000);
    await loadMorePokemon(renderCount, newRenderCount);
    renderCount = renderCount + 18;
    document.getElementById('loading-spinner').style.display = 'none';
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function filterAndShowNames(filterWord) {
    // Convert the filter word to lowercase for case-insensitive comparison
    filterWord = filterWord.toLowerCase();
    
    // Get filtered Pokémon names
    let filteredNames = allPokemon.filter(name => name.toLowerCase().includes(filterWord));
    
    // Filter out the Pokémon objects based on their names
    let filteredPokemon = allPokemonData.filter(pokemon => filteredNames.includes(pokemon.name.toLowerCase()));
    
    // Clear the content box before rendering
    document.getElementById('content-box').innerHTML = '';
    
    // Render filtered Pokémon
    filteredPokemon.forEach(pokemon => {
        renderPokemon(pokemon.name, pokemon.index, pokemon.image, pokemon.type);
    });
}

function handleInput(event) {
    const filterWord = event.target.value.toLowerCase();
    filterAndShowNames(filterWord);
}