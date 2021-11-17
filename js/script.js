// const miaLista = ['Marco', 'Mario', 'Emanuele'];
// const myUl = document.querySelector('.list');

// for(i = 0; i < miaLista.length; i++){
//     const currentName = miaLista[i];
//     console.log(currentName);

//     myUl.innerHTML += `<li>${currentName}</li>`
// }

// for(i = miaLista.length - 1; i >= 0; i--){
//     const currentName = miaLista[i];
//     console.log(currentName);

//     myUl.innerHTML += `<li>${currentName}</li>`
// }



// Chiediamo un numero all'utente e stampiamo l'elemento 
// che si trova nella posizione indicata dall'utente nell'array

// const miaLista = ['Marco', 'Mario', 'Emanuele', 'Francesco'];

// const userNumber = parseInt(prompt('Dammi un numero da 0 a ' + (miaLista.length - 1)));


// if(userNumber < 0 || userNumber > (miaLista.length - 1)){
//     alert('Il numero che mi hai dato è errato');
// } else{
//     alert(miaLista[userNumber]);
// }




// Chiediamo un numero all'utente e stampiamo il numero successivo

// const userNumber = parseInt(prompt('Dammi un numero'));

// const numberResult = userNumber + 1;
// console.log(userNumber);
// if(isNaN(userNumber)){
//     alert('Non hai inserito un numero')
// } else{
//     alert(`Numero inserito: ${userNumber} 
// Numero ottenuto: ${numberResult}`);
// }




// Stampare tutti gli elementi dell'array

// const teachers = ['Michele', 'Mario', 'Roberto'];

// for(i = 0; i < teachers.length; i++){
//     console.log(teachers[i]);
// }


// Al contrario

// for(i = (teachers.length -1); i >= 0; i--){
//     console.log(teachers[i]);
// }






// Dato un array di interi, stampa solo i numeri dispari

// const numbersList = [1, 5, 6, 7, 3, 5, 767, 6765, 24234, 234234, 23, 6, 7, 123, 6, 345, 634, 43];

// for(i = 0; i < numbersList.length; i++){
//     const currentNumber = numbersList[i];

//     if (!(currentNumber % 2 === 0)){
//         console.log(currentNumber);
//     }
// }




// Chiediamo all'utente un nome di una squadra e vediamo se la squadra gioca in Serie A
const teamsA = ['Atalanta', 'Bologna', 'Cagliari', 'Roma', 'Inter', 'Juventus', 'Venezia', 'Milan', 'Napoli', 'Verona', 'Lazio'];

const userTeam = prompt('Dimmi il nome di una squadra');
let teamFound = false;
for(i = 0; i < teamsA.length; i++){
    const currentTeam = teamsA[i];

    if (userTeam === currentTeam){
        teamFound = true;
    } 
}

if(teamFound){
    alert(`La tua squadra gioca in Serie A`);
} else{
    alert('La tua squadra non gioca in Serie A');
}