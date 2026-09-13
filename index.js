const sec = (n) => (n*1000);


// Crea una funzione che somma due numeri

/// dichiarativa:

    function somma(num1, num2) {
        return num1 + num2
    };

console.log(somma(5, 3));

/// anonima:

    const sum = function(num1, num2) {return num1 + num2};

    const sumEs = sum(1, 2);

    console.log(sumEs);

/// arrow:

    const sumArrow = (a, b) => {return a + b};

    const sumArrowEs = sumArrow(5, 4);

    console.log(sumArrowEs);

// Crea una funzione che fa il quadrato di un numero

    const quadrato = n => n ** 2;

    console.log(quadrato(2));

// Crea una funzione "esegui operazione" con callback

    // Crea una funzione "esegui operazione" con callback

    const somma = (num1, num2) => (num1 + num2);
    const moltiplica = (num1, num2) => (num1*num2); 



    function esegui(n1, n2, operatore) {
        return operatore(n1, n2);
    }

console.log(esegui(1, 88, somma));
console.log(esegui(1, 88, moltiplica));

// Crea un generatore di funzioni "crea timer"

function creaTimer(tempo) {

        const timerSeconds = tempo/1000;

        console.log(`${timerSeconds}s di tempo...`);

        return () => {
            setTimeout(() => {
                console.log('Timeout!');
            }, tempo);
        }
    }

    const timer3s = creaTimer(sec(3));
    timer3s();

// Definisci funzione che accetta un messaggio e lo stampa ogni secondo

function printOgniSec(msg){
    setInterval(() => {
        console.log(msg);
    }, 1000);
}

printOgniSec("Wela");

// Definisci funzione "crea contatore automatico" che accetta un intervallo di tempo e restituisce una funzione che avvia un "setInterval"


function creaAutoCounter(interval) {
    let count = 0;
    return () => {
        setInterval(() => {
            count++
            console.log(`Contatore a ${count}, passati ${count*(interval/1000)} secondi`);
        }, interval);
    }
}

const conta5sec = creaAutoCounter(sec(5));
const conta2sec = creaAutoCounter(sec(2));

conta5sec();
conta2sec();

// Crea una funzione che ferma un timer dopo un certo tempo

function eseguiFerma(msg, interval, lenght) {
    
    const intervalId = setInterval(() => {
        console.log(msg);
    }, interval);

    setTimeout(() => {
        clearInterval(intervalId)
    }, lenght)
}

eseguiFerma("Ciao", sec(1), sec(4));

// Crea una funzione che simula un conto alla rovescia

    function countdown(n){

        let counter = n;

        const intervalId = setInterval(() => {
            if (counter > 0){
                console.log(counter);
                counter--;
            }else{
                console.log('Timeout');
                clearInterval(intervalId);
            }
        }, sec(1));
    }

    countdown(5);

// Creare una funzione che esegue una sequenza di operazioni con ritardi

function sequence(operazioni, interval) {

    operazioni.forEach((operazione, index) => {
        setTimeout(() => {
            operazione();
        }, interval * index)
    })

}

sequence([
    () => console.log("Ciao1"),
    () => console.log("Ciao2")
], sec(3));

// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

function creaThrottler(fun, limit) {

    let ultimaExec = 0;

    return function (...args) {

        const ora = Date.now();

        if (ora - ultimaExec >= limit) {
            ultimaExec = ora;
            fun(...args);
        }else{
            console.log("Non posso eseguire");
        }
    }
}

const throttlerLog = creaThrottler(() => console.log("Eseguito"), sec(2));

throttlerLog();
throttlerLog();