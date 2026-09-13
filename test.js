const sec = (n) => (n * 1000);

// snack 10 Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

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