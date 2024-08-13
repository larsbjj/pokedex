function getCartTemplate(name, index, currentImage, backgroundColor, currentType, secondType) {
    // Check if secondType exists and create HTML for it using a ternary operator
    let secondTypeHtml = secondType
        ? `<img src="./assets/icons/${secondType}.webp">`
        : '';
    // Return the HTML template for the Pokemon card
    return `<div class="card" onclick="toggleOverlay()" style="background-color: ${backgroundColor};">
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