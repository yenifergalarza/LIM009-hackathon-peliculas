

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
      </div> 
    
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${movie[cinemaCount].Title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src="${movie[cinemaCount].Poster}" class="card-img-top" > 
      Año : ${movie[cinemaCount].Year}
       ImdbID : ${movie[cinemaCount].imdbID}
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      `
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


 const getDataUpPoke = (data)=>{
  function upCinema() {
    printCinema.innerHTML = ``;
    eachMovieSeries(data.sort(sortArrsToObjects));
     }
  return upCinema();
}



const getDataDownPoke = (data)=>{
    function downCinema() {
      printCinema.innerHTML = ``;
      eachMovieSeries(data.sort(sortArrsToObjects).reverse());
       }
    return downCinema();
  }
const searchTitle = document.getElementById("searchTitle");

const searchButton =document.getElementById("searchButton")

const title ="mick";

function traer (title){
  fetch(`https://www.omdbapi.com/?s="${title}"&apikey=ea8492c7 `) 
  .then(resp =>{return resp.json()})
  .then(data=> getDataUpPoke(data.Search))
   .catch(error=>console.log("Error",error))
};
AzButton.addEventListener("click",()=>{traer(title)});

function traer1 (title){
    fetch(`https://www.omdbapi.com/?s="${title}"&apikey=ea8492c7`) 
    .then(resp =>{return resp.json()})
    .then(data=> getDataDownPoke(data.Search))
     .catch(error=>console.log("Error",error))
  };
const ZaButton = document.getElementById("ZaButton");
ZaButton.addEventListener("click",
()=>{traer1(title)});