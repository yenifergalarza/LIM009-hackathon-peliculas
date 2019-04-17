
const randomMovieArray = ["skins",
"lord of the rings","The Art of Travel",
"undefined","Bottle Rocket",
"Message in a Bottle"
,"Three Billboards Outside Ebbing, Missouri"
,"Java Heat"
,"Requiem from Java"
,"La Vie en Rose"
,"Amélie"
,"Where the Money Is"
,"This Is Where I Leave You"
,"Interstellar"
,"Star Trek"
,"The Phantom of the Opera"
,"Call Me by Your Name"
,"Moonlight"
,"Revenge Body with Khloé Kardashian",
"The Shape of Water",
"In the Heart of the Sea",
"The Chainsmokers: Closer Feat. Halsey",
"Kali"];
let randomNumber = Math.floor((Math.random()*randomMovieArray.length )-1);
console.log(randomNumber);
const randomMovie = randomMovieArray[randomNumber];
 console.log(randomMovie);
    const getOne = (movie) => {
  
    random.innerHTML += `
    

    
    <div>
      <div class="card widthModal" >
      <img src="${movie.Poster}" class="card-img-top " > 
      <div class="card-body card-header">
      <p class="card-title whiteText">${movie.Title}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item whiteText blackWall" > Plot : ${movie.Plot}</li>
        <li class="list-group-item whiteText blackWall" > Genre : ${movie.Genre}</li>
        <li class="list-group-item whiteText blackWall" > Actors : ${movie.Actors}</li>
      <li class="list-group-item whiteText blackWall" > Tipo : ${movie.Type}</li>
      <li class="list-group-item whiteText blackWall" > Año : ${movie.Year}</li>
      <li class="list-group-item whiteText blackWall" > ImdbID : ${movie.imdbID}</li>
    
      </ul>
      </div> 
    </div>
 

      `
  }
 

function Generate(randomMovie) {
    const URL = `https://www.omdbapi.com/?t=${randomMovie}&apikey=e41750ae`;
    fetch(URL).then(resp => { return resp.json() })
      .then(data =>getOne(data))
      .catch(error => console.log("Error", error)).catch(error => console.log("Error", error))
  };

  Generate(randomMovie);


  
  
