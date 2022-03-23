let navbar = document.querySelector("#navbar");
let menuIcon = document.querySelector("#menu-icon");

let cartItemsContainer = document.querySelector("#cart-items-container");
let cartIcon = document.querySelector("#cart-icon");

let searchForm = document.querySelector("#search-form");
let searchIcon = document.querySelector("#search-icon");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("search-input-scale");
});

cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("search-input-scale");
});

searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("search-input-scale");
    navbar.classList.remove("active");
    cartItemsContainer.classList.remove("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("search-input-scale");
};