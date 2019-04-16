
const btnSearch=document.getElementById('btnSearch');
const conteiner=document.getElementById('Conteiner');
btnSearch.addEventListener('click', ()=>{
    conteiner.innerHTML='';
    const search=document.getElementById('textSearch').value;
    const SearchMovie=encodeURIComponent(search);
    getConnection(SearchMovie);
    limpiar();
})



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

// filtrado por peliculas y series

