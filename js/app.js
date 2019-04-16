
const btnSearch=document.getElementById('btnSearch');
const conteiner=document.getElementById('Conteiner');
btnSearch.addEventListener('click', ()=>{
    conteiner.innerHTML='';
    const search=document.getElementById('searchText').value;
    const SearchMovie=encodeURIComponent(search);
    getConnection(SearchMovie);
    limpiar();
})
const getConnection = (busqueda) => {
    
    const URL=`http://www.omdbapi.com/?s=${busqueda}&apikey=e41750ae`;

    fetch(URL).then(Response=> Response.json())
    .then(Response=>{let resul=Response.Search
        resul.forEach(element => {
            drawMovie(element);
            
        });
    })


}

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
}