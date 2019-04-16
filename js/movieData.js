
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
  
  
  const filterMovie = (data, tipo) => {
    const arrayT = data.filter(oneMovie => oneMovie.type === tipo || (Array.isArray(oneMovie.type) && oneMovie.type.includes(tipo)));
    return arrayT;
  
  }
  
  
  window.filterMovie = filterMovie;