const key = "QclcZHO8A_bKGZPHqwS_3NYl4_yiYxy8D35XeM3OLI4";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

function searchImages(){
//get the value from the input field
inputData = searchInputEl.value;
 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;
console.log(url)

}
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  searchImages();
});