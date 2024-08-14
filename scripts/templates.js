function getCardTemplate(name, index, currentImage, backgroundColor, currentType, secondType) {
    // Check if secondType exists and create HTML for it using a ternary operator
    let secondTypeHtml = secondType
        ? `<img src="./assets/icons/${secondType}.webp">`
        : '';
    // Return the HTML template for the Pokemon card
    return `<div class="card" onclick="toggleOverlay(); renderPokemonCard(${index}, '${currentType}');" id="pokemon${index}"style="background-color: ${backgroundColor};">
        <span><h2>${name}</h2> <div class="number">#${index}</div></span>
        <div class="pokemon-types">
            <img src="./assets/icons/${currentType}.webp">
            ${secondTypeHtml}
        </div>
        <div class="pokemon-image">
            <img src="${currentImage}">
        </div>
    </div>`;
}

function getPokemonCardTemplate(index, currentType) {
    const type1 = allPokemonData[index].types[0];
    const type2 = allPokemonData[index].types[1]; // This could be undefined
    const name = capitalizeFirstLetter(allPokemonData[index].name);

    return `<div class="pokemon-card" onclick="preventEventBubbling(event)";>
    <div class="pokemon-card-header" style="background-color: ${currentType};">
        <div class="pokemon-card-header-top">
             <button class="close-btn" onclick="toggleOverlay();">×</button>
            <h2>${name}</h2>
            <div class="pokemon-number">#${allPokemonData[index].index}</div>
        </div>
         <div class="pokemon-types-card">
            <img src="./assets/icons/${type1}.webp">
            ${type2 ? `<img src="./assets/icons/${type2}.webp">` : ''}
        </div>
        <div class="pokemon-image">
            <img src="${allPokemonData[index].image}">
        </div>
    </div>
    <div class="pokemon-card-details">
        <ul class="pokemon-tabs">
            <li class="pokemon-tab active" id="pokemon-tab-about" onclick="changePokemonTab('about');">About</li>
            <li class="pokemon-tab" id="pokemon-tab-base-stats" onclick="changePokemonTab('base-stats');">Base Stats</li>
        </ul>
        <div class="pokemon-tab-content">
            <div class="pokemon-about">
                <p><strong>Name:</strong> ${allPokemonData[index].name}</p>
                <p><strong>Height:</strong> ${allPokemonData[index].height}</p>
                <p><strong>Weight:</strong> ${allPokemonData[index].weight}</p>
                <p><strong>Type:</strong> ${allPokemonData[index].types.join(', ')}</p>
                <p><strong>Abilities:</strong> ${allPokemonData[index].abilities.join(', ')}</p>
            </div>
            <div class="pokemon-base-stats">
                <p><strong>HP:</strong> ${allPokemonData[index].stats[0].base_stat}</p>
                <p><strong>Attack:</strong> ${allPokemonData[index].stats[1].base_stat}</p>
                <p><strong>Defence:</strong> ${allPokemonData[index].stats[2].base_stat}</p>
                <p><strong>Sp-attack:</strong> ${allPokemonData[index].stats[3].base_stat}</p>
                <p><strong>Sp-defence:</strong> ${allPokemonData[index].stats[4].base_stat}</p>
                <p><strong>Speed:</strong> ${allPokemonData[index].stats[5].base_stat}</p>
            </div>
        </div>
    </div>
</div>`;
}
