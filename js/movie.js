const btnSearch = document.getElementById('btnSearch');
const conteiner = document.getElementById('rootCard');
btnSearch.addEventListener('click', () => {
  conteiner.innerHTML = '';
  const search = document.getElementById('searchText').value;
  const SearchMovie = encodeURIComponent(search);
  window.getConnection(SearchMovie);
  limpiar();
});
const drawMovie = element => {
  const html = `
  <div class="card">
  <img src="${element.Poster}" class="card-img-top" > 
  <div class="card-body card-header">
  <p class="card-title whiteText" >${element.Title}</p>
  </div>  
  <ul class="list-group list-group-flush">
  <li class="list-group-item" > Tipo : ${element.Type}</li>
  <li class="list-group-item" > Año : ${element.Year}</li>
  <li class="list-group-item" > ImdbID : ${element.imdbID}</li>
  </ul>
  </div> 
  `;
  conteiner.insertAdjacentHTML('beforeEnd', html);
};

const limpiar = () => {
  document.getElementById('Search').reset();
};
const printCinema = document.getElementById("rootCard");

const eachMovieSeries = (movie) => {
  for (let cinemaCount = 0; cinemaCount < movie.length; cinemaCount++) {
    if (movie[cinemaCount].Poster !== "N/A") {
      printCinema.innerHTML += `
         <div class="card">
       <img src="${movie[cinemaCount].Poster}" class="card-img-top" > 
       <div class="card-body card-header">
       <p class="card-title whiteText" >${movie[cinemaCount].Title}</p>
       </div>  
       <ul class="list-group list-group-flush">
       <li class="list-group-item" > Tipo : ${movie[cinemaCount].Type}</li>
       <li class="list-group-item" > Año : ${movie[cinemaCount].Year}</li>
       <li class="list-group-item" > ImdbID : ${movie[cinemaCount].imdbID}</li>
       </ul>
       </div> `
    } else {
      printCinema.innerHTML += `
         <div class="card" ">
       <img src="./assets/notFound.jpg" class="card-img-top" > 
       <div class="card-body card-header">
       <p class="card-title whiteText">${movie[cinemaCount].Title}</p>
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item" > Tipo : ${movie[cinemaCount].Type}</li>
       <li class="list-group-item" > Año : ${movie[cinemaCount].Year}</li>
       <li class="list-group-item" > ImdbID : ${movie[cinemaCount].imdbID}</li>
       </ul>
       </div> `
    }
  }
}
const getDataUpPoke = (data) => {
  function upCinema() {
    printCinema.innerHTML = ``;
    eachMovieSeries(data.sort(sortArrsToObjects));
  }
  return upCinema();
}
const getDataDownPoke = (data) => {
  function downCinema() {
    printCinema.innerHTML = ``;
    eachMovieSeries(data.sort(sortArrsToObjects).reverse());
  }
  return downCinema();
}
const searchTitle = document.getElementById("searchTitle");
const AzButton = document.getElementById("AzButton")
const title = "game of thrones"
function traer(title) {
  fetch(`https://www.omdbapi.com/?s="${title}"&apikey=ea8492c7 `)
    .then(resp => { return resp.json() })
    .then(data => getDataUpPoke(data.Search))
    .catch(error => console.log("Error", error)).catch(error => console.log("Error", error))
};
 AzButton.addEventListener("click", () => { 
  const search = document.getElementById('searchText').value;
  const SearchMovie = encodeURIComponent(search); 
  traer(SearchMovie) });
function traer1(title) {
  fetch(`https://www.omdbapi.com/?s="${title}"&apikey=ea8492c7`)
    .then(resp => { return resp.json() })
    .then(data => getDataDownPoke(data.Search))
    .catch(error => console.log("Error", error))
};
const ZaButton = document.getElementById("ZaButton");
ZaButton.addEventListener("click",
  () => {
    const search = document.getElementById('searchText').value;
  const SearchMovie = encodeURIComponent(search);  
    traer1(SearchMovie) }); 