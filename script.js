console.log('ciao');

//snack 1

function sommaDichiarativa(a, b) {
  return a + b;
}
console.log(sommaDichiarativa(3, 5));

const sommaAnonima = function (a, b) {
  return a + b;
};
console.log(sommaAnonima(3, 5));

const sommaArrow = (a, b) => a + b;
console.log(sommaArrow(3, 5));
