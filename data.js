/* Manejo de data */

function sortArrsToObjects(a, b) {
  a = a.id;
  b = b.id;

  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}

window.sortArrsToObjects = sortArrsToObjects;

const filtrarPokemon = (data, tipo) => {
  const arrayT = data.filter(onePoke => onePoke.type === tipo || (Array.isArray(onePoke.type) && onePoke.type.includes(tipo)));
  return arrayT;

}


window.filtrarPokemon = filtrarPokemon;

const calculusStats = (dataRestante, pokesTipo) => {
  return (dataRestante.length / 100) * (pokesTipo.length);
}
window.calculusStats = calculusStats;
