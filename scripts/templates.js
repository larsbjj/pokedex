function getCartTemplate(name, index, currentImage, backgroundColor) {
    return `<div class="card" style="background-color: ${backgroundColor};">
    <div class="number">#${index}</div>
    <h2>${name}</h2>
    <img src="${currentImage}">
    </div>`
}