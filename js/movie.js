let search = document.getElementById('searchText');
const btnSearch = document.getElementById('btnSearch');
const conteiner = document.getElementById('rootCard');
btnSearch.addEventListener('click', () => {
    conteiner.innerHTML = '';
    let Busqueda = search.value;
    const SearchMovie = encodeURIComponent(Busqueda);
    window.getConnection(SearchMovie);
    limpiar();
});

const drawMovie = element => {
    const html = `
  <div class="conteiner-movie">
      <h3>${element.Title}</h3>
      <img src="${element.Poster}"/>
      <h3>${element.Type}</h3>
      <h3>${element.Year}</h3>
      
  </div>
  `;
    conteiner.insertAdjacentHTML('beforeEnd', html);
};

const limpiar = () => {
    // document.getElementById('Search').value = "";
};
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

// Ordenar A-Z
const AzButton = document.getElementById("AzButton");
AzButton.addEventListener('click', () => {
    conteiner.innerHTML = '';
    let Busqueda = search.value;
    const SearchMovie = encodeURIComponent(Busqueda);
    const title = SearchMovie;
    traer(title);

});
const ZaButton = document.getElementById("ZaButton");
ZaButton.addEventListener('click', () => {
    conteiner.innerHTML = '';
    let Busqueda = search.value;
    const SearchMovie = encodeURIComponent(Busqueda);
    const title = SearchMovie;
    traer1(title);

})

const printCinema = document.getElementById("rootCard");

const eachMovieSeries = (movie) => {
    for (let cinemaCount = 0; cinemaCount < movie.length; cinemaCount++) {
        if (movie[cinemaCount].hasOwnProperty('Title')) {
            printCinema.innerHTML += `
         <div class="card">
       <img src="${movie[cinemaCount].Poster}" class="card-img-top" > 
       <div class="card-body card-header">
       <p class="card-title whiteText" >${movie[cinemaCount].Title}</p>
       </div>  
       <ul class="list-group list-group-flush">

       <li class="list-group-item" > Año : ${movie[cinemaCount].Year}</li>

       </ul>
       </div> `
        } else {
            printCinema.innerHTML += `
         <div class="card" ">
       <img src="${movie[cinemaCount].Poster}" class="card-img-top" > 
       <div class="card-body card-header">
       <p class="card-title whiteText">${movie[cinemaCount].Title}</p>
       </div>
       <ul class="list-group list-group-flush">

       <li class="list-group-item" > Año : ${movie[cinemaCount].Year}</li>

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
};

function traer(title) {
    fetch(`https://www.omdbapi.com/?s="${title}"&apikey=ea8492c7 `)
        .then(resp => { return resp.json() })
        .then(data => getDataUpPoke(data.Search))
        .catch(error => console.log("Error", error)).catch(error => console.log("Error", error))
};


function traer1(title) {
    fetch(`https://www.omdbapi.com/?s="${title}"&apikey=ea8492c7`)
        .then(resp => { return resp.json() })
        .then(data => getDataDownPoke(data.Search))
        .catch(error => console.log("Error", error))
};