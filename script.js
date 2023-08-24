const key = "QclcZHO8A_bKGZPHqwS_3NYl4_yiYxy8D35XeM3OLI4";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
//get the value from the input field
inputData = searchInputEl.value;
 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;
 console.log(url);
 const response = await fetch(url);
//convert data to json file
const data = await response.json();
console.log(data)
//make the page results appears empty,and based on the results fill the page with images
 if (page === 1) {
 searchResultsEl.innerHTML = "";
}
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});