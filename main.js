//Crea una lista di email di invitati ad una festa.  array

const mailList = ["luca@gmail.com","marco@gmail.com","simone@gmail.com","fabio@gmail.com"];
//Chiedi all’utente la sua email. prompt

let mail = prompt('inserisci la tua mail:');
//controlla che sia nella lista di chi può accedere,

let mailCheck = false;

for(i = 0; i < mailList.length; i++){  
    if(mail === mailList[i]){
        mailCheck = true;
        console.log(mail);
        

    }

}
//stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
if(mailCheck===true){   
    console.log('Sei invitato');
    
} else {
    console.log('Non sei invitato');
    
}