const btnSearch = document.getElementById('btnSearch');

let search = document.getElementById('searchText');
const conteiner = document.getElementById('rootCard');
btnSearch.addEventListener('click', () => {
  const elemento = document.getElementById("hideAndShow");
  elemento.className = ``;
  const navBarOrder = document.getElementById('navBarOrder');
  elemento.className += " displayNone ";
  navBarOrder.classList.remove("displayNone");
  conteiner.innerHTML = '';
  const search = document.getElementById('searchText').value;
  const SearchMovie = encodeURIComponent(search);
  window.getConnection(SearchMovie);
  limpiar();
});

let btnMovies = document.getElementById('btnMovies');
btnMovies.addEventListener('click', () => {
    conteiner.innerHTML = '';
    let Busqueda = search.value;
    let btnElection = btnMovies.value;
    const SearchMovie = encodeURIComponent(Busqueda);
    window.callData(SearchMovie, btnElection);

});
let btnSeries = document.getElementById('btnSeries');
btnSeries.addEventListener('click', () => {
    conteiner.innerHTML = '';
    let Busqueda = search.value;
    let btnElection = btnSeries.value;
    const SearchMovie = encodeURIComponent(Busqueda);
    window.callData(SearchMovie, btnElection);
})


const drawMovie = element => {
  const html = `
  <a href="#openModal" class="card">   
  <img src="${element.Poster}" class="card-img-top"> 
  <div class="card-body">
  <p class="card-title whiteText" >${element.Title}</p>
  </div>  
  </a>

  <div id="openModal" class="modalDialog">
  <div>
    <a href="#close" title="Close" class="close">X</a>
   
    <div class="card widthModal" >
    <img src="${element.Poster}" class="card-img-top " > 
    <div class="card-body card-header">
    <p class="card-title whiteText">${element.Title}</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item blackBack whiteText" > Tipo : ${element.Type}</li>
    <li class="list-group-item blackBack whiteText" > Año : ${element.Year}</li>
    <li class="list-group-item blackBack whiteText" > ImdbID : ${element.imdbID}</li>
    </ul>
    </div> 
  </div>
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
      <a href="#openModal" class="card">   
      <img src="${movie[cinemaCount].Poster}" class="card-img-top" > 
      <div class="card-body">
      <p class="card-title whiteText" >${movie[cinemaCount].Title}</p>
      </div>  
     
      </a>

      <div id="openModal" class="modalDialog">
      <div>
        <a href="#close" title="Close" class="close">X</a>
       
        <div class="card widthModal" >
        <img src="${movie[cinemaCount].Poster}" class="card-img-top " > 
        <div class="card-body card-header">
        <p class="card-title whiteText">${movie[cinemaCount].Title}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item" > Tipo : ${movie[cinemaCount].Type}</li>
        <li class="list-group-item" > Año : ${movie[cinemaCount].Year}</li>
        <li class="list-group-item" > ImdbID : ${movie[cinemaCount].imdbID}</li>
        </ul>
        </div> 
      </div>
    </div>

        `
    } else {
      printCinema.innerHTML += `
      <a href="#openModal">    <div class="card" ">
      <img src="./assets/notFound.jpg" class="card-img-top" > 
      <div class="card-body">
      <p class="card-title whiteText">${movie[cinemaCount].Title}</p>
      </div>
      </a>

      <div id="openModal" class="modalDialog">
        <div>
          <a href="#close" title="Close" class="close">X</a>
        
          <div class="card widthModal" >
          <img src="./assets/notFound.jpg" class="card-img-top" > 
          <div class="card-body card-header">
          <p class="card-title whiteText">${movie[cinemaCount].Title}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item blackBack  whiteText" > Tipo : ${movie[cinemaCount].Type}</li>
          <li class="list-group-item blackBack whiteText" > Año : ${movie[cinemaCount].Year}</li>
          <li class="list-group-item blackBack whiteText" > ID : ${movie[cinemaCount].imdbID}</li>
          </ul>
          </div> 
        </div>
      </div>

     `
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