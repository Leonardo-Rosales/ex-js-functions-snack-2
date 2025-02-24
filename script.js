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

//snack 2

const quadrato = (number) => number ** 2;
console.log(quadrato(5));

//snack 3

const sottrazzione = (a, b) => a - b;
const divisione = (a, b) => a / b;
const moltiplicazione = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(9, 3, sottrazzione));
console.log(eseguiOperazione(9, 3, divisione));
console.log(eseguiOperazione(9, 3, moltiplicazione));

//snack 4

function creaTimer() {
  setTimeout(() => {
    console.log('Tempo scaduto!');
  }, 1000);
}

creaTimer();

//snack 5

function stampaOgniSecondo() {
  let contatore = 0;
  const intervallo = setInterval(() => {
    console.log('ciao');
    contatore++;
    if (contatore >= 4) {
      clearInterval(intervallo);
    }
  }, 1000);
}

// stampaOgniSecondo();

//snack 6

function creaContatoreAutomatico() {
  let contatore = 0;
  setInterval(() => {
    contatore++;
    console.log(contatore);
  }, 1000);
}

// creaContatoreAutomatico();

//snack 7

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
  setTimeout(() => {
    const intervallo = setInterval(() => {
      console.log(messaggio);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervallo);
    }, tempoStop);
  }, tempoAvvio);
}

eseguiEferma('Leonardo', 2000, 6000);
