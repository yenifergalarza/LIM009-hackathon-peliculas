const btnSearch=document.getElementById('btnSearch');
const conteiner=document.getElementById('rootCard');
btnSearch.addEventListener('click', ()=>{
    conteiner.innerHTML='';
    const search=document.getElementById('searchText').value;
    const SearchMovie=encodeURIComponent(search);
    window.getConnection(SearchMovie);
    limpiar();
});
const drawMovie= element=>{
  const html=`
  <div class="conteiner-movie">
      <h3>${element.Title}</h3>
      <img src="${element.Poster}"/>
  </div>
  `;
  conteiner.insertAdjacentHTML('beforeEnd',html);
}

const limpiar=()=>{
document.getElementById('Search').reset();
};
const printCinema = document.getElementById("rootCard");
   fetch("https://www.omdbapi.com/?apikey=ea8492c7&s=batman") 	
   .then(resp =>{return resp.json();})	
    .then(data=> console.log(data.Search))	
 
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
  const AzButton =document.getElementById("AzButton")
  const title = "game of thrones"
 function traer (title){
   fetch(`https://www.omdbapi.com/?s="${title}"&apikey=ea8492c7 `) 
   .then(resp =>{return resp.json()})
   .then(data=> getDataUpPoke(data.Search))
    .catch(error=>console.log("Error",error))	   .catch(error=>console.log("Error",error))
 };
 traer(); 	AzButton.addEventListener("click",()=>{traer(title)});
  function traer1 (title){
     fetch(`https://www.omdbapi.com/?s="${title}"&apikey=ea8492c7`) 
     .then(resp =>{return resp.json()})
     .then(data=> getDataDownPoke(data.Search))
      .catch(error=>console.log("Error",error))
   };
 const ZaButton = document.getElementById("ZaButton");
 ZaButton.addEventListener("click",
 ()=>{traer1(title)}); 