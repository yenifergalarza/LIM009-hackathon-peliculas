
function traer (){
  fetch("http://www.omdbapi.com/?apikey=ea8492c7&s=batman") 
  .then(resp =>{return resp.json();})
  .then(data=> console.log(data.Search))
   .catch(error=>console.log("Error",error))
};
traer();