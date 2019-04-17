function sortArrsToObjects(a, b) {
    a = a.Title;
    b = b.Title;

    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    }
}

window.sortArrsToObjects = sortArrsToObjects;
const callData = (busqueda, btnElection) => {
    const URL = `https://www.omdbapi.com/?s=${busqueda}&apikey=e41750ae`;
    let select = btnElection
    fetch(URL).then(Response => Response.json())
        .then(Response => {
            let resul = Response.Search
            let cont = [];

            for (let i = 0; i < resul.length; i++) {
                let ele = resul[i];

                if (ele.Type === select) {


                    drawMovie(ele)


                }
                // else if (ele.Type === 'series') {
                //     cont.push(ele);

                // }
            }



        })

}


const getConnection = (busqueda) => {

    const URL = `https://www.omdbapi.com/?s=${busqueda}&apikey=e41750ae`;

    fetch(URL).then(Response => Response.json())
        .then(Response => {
            let resul = Response.Search
            resul.forEach(element => {
                drawMovie(element);

            });
        })


}

const filterMovie = (data, tipo) => {
    const arrayT = data.filter(oneMovie => oneMovie.type === tipo || (Array.isArray(oneMovie.type) && oneMovie.type.includes(tipo)));
    return arrayT;

}
window.filterMovie = filterMovie;
window.getConnection = getConnection;
window.callData = callData;