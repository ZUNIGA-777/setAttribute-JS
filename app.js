const image = document.querySelector(".wallpaper");
const botonNext = document.getElementById("btn-next");
const botonBack = document.getElementById("btn-back");

botonNext.addEventListener("click", () => {
    image.setAttribute("src","https://images4.alphacoders.com/134/1347937.png");
});

botonBack.addEventListener("click", () => {
    image.setAttribute("src","https://images8.alphacoders.com/134/1348342.jpeg");
});

