/* // Crea una funzione che somma due numeri

/// dichiarativa:

    function somma(num1, num2) {
        return num1 + num2
    };

console.log(somma(5, 3));

/// anonima:

    const somm = function(num1, num2) {return num1 + num2};

    const sommEs = somm(1, 2);

    console.log(sommEs);

/// arrow:

    const soamma = (a, b) => {return a + b};

    const soammaEs = soamma(5, 4);

    console.log(soammaEs);

// Crea una funzione che fa il quadrato di un numero

    const quadrato = n => n ** 2;

    console.log(quadrato(2));

// Crea una funzione "esegui operazione" con callback

    function esegui(n1, n2, operatore) {
        return somma(n1, n2);
    }

console.log(esegui(1, 88, somma)); */

// Crea un generatore di funzioni "crea timer"

   /*  function creaTimer(tempo) {

        const timerSeconds = tempo/1000;

        console.log(`${timerSeconds}s di tempo...`);

        return () => {
            setTimeout(() => {
                console.log('Timeout!');
            }, tempo);
        }
    }

    const timer3s = creaTimer(3000);
    timer3s(); */

// Definisci funzione che accetta un messaggio e lo stampa ogni secondo

function printOgniSec(msg){
    setInterval(() => {
        console.log(msg);
    }, 1000);
}

printOgniSec("Wela");