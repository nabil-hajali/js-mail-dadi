//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//creazione di 2 variabile per il lancio dei dadi


const userDice = Math.floor(Math.random() * 6)+ 1;
const computerDice = Math.floor(Math.random() * 6) + 1;

console.log('il tuo numero è:' + ' ' + userDice);
console.log('il numero del computer è:' + ' ' +computerDice);


//creazione di una condizione

if(userDice > computerDice){
    console.log('Il vincitore sei tu!');
    
} else if(userDice < computerDice){
    console.log('Il vincitore è il computer!');
    
}  else {
    console.log('È un pareggio!');  

}
    








