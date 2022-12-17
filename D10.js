/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 0
sum =+ 10 + 20
console.log("eserc-A) ", sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.round(Math.random() * 20)
console.log("eserc-B) ", random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me ={}
me.name = 'Tommaso'
me.surname = 'Nannicini'
me.age = '25'
console.log("eserc-C) ", me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log("eserc-D) ", me)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
// */

skill = []
me['skill'] = ['HTML', 'CSS', 'JS']
console.log("eserc-E) ", me)


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me['skill'].push('ECMA3')
console.log("eserc-F) ", me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me['skill'].pop()
console.log("eserc-G) ", me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log("---------------Eserc-1-----------------")

function dice(num) {
  num = Math.round(Math.random() * 7)
  return num
  
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("---------------Eserc-2-----------------")
function twoNumbers(x, y) {
  
  return x + y
  
}
console.log("La somma dei due  numeri è: ",twoNumbers(1, 2))
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("---------------Eserc-3-----------------")



let mystring = "I love coding"


function splitMe (string){
   return string.split(" ")
}

console.log(splitMe(mystring))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("---------------Eserc-4-----------------")
let stringa = "I love tea"
function deleteOne(string, trueFalse) {
  if (trueFalse === true) {
    return string.slice(1)
    
  }else{
    return string.slice(0, -1)

  }

}
console.log(deleteOne(stringa, false))
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("---------------Eserc-5-----------------")



let stringa1 ="I have 4 cats"


function onlyLetters (stringa){

sNienteNumeri = stringa.replace(/[0-9]?/g,"")
return  sNienteNumeri
}

console.log(onlyLetters(stringa1))






/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("---------------Eserc-6-----------------")

function isThisAnEmail (stringa, mail, chiocciola, gmail, com) {
  let email = mail.concat(chiocciola).concat(gmail).concat(com)
  if (stringa === email){
    return true
  }else{
    console.log("La stringa non è un valido indirizzo email")
  }
  
}

console.log(isThisAnEmail("tnannicini@gmail.com", "tnannicini", "@", "gmail", ".com"))





/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("---------------Eserc-7-----------------")

// function formatDate(date, format) {
//   const map = {
//       mm: date.getMonth() + 1,
//       dd: date.getDate(),
//       yy: date.getFullYear().toString().slice(-2),
//       yyyy: date.getFullYear()
//   }

//   return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
// }

// console.log(formatDate())


// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

let dataOggi = new Date()

let giornodellaSettimana = dataOggi.getDay()

function whatDayIsIt(day) {
  



switch (day) {
  case 0:
    console.log("It's Sunday!")
    break;
  case 1:
     console.log("It's Monday!")
    
    break;
  case 2:
    console.log("It's Tuesday!")
    
    break;
  case 3:
    console.log("It's Wednesday!")
    break;
  case 4:
    console.log("It's Thursday!")
    break;
  case 5:
    console.log("It's Friday!")
    break;
  case 6:
    console.log("It's Saturday!")
    break;

}


}

whatDayIsIt(giornodellaSettimana)

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("---------------Eserc-8-----------------")


function rollDice (numerolanci) {
function createDice(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}


const rollDice6 = () => createDice(1, 6);
let sumDice = 0



 sumDice =+ rollDice6() * numerolanci
 rollDice6()

 console.log("Questa è la somma casuale rispetto al numero di lanci effettuati: ", sumDice)

}



rollDice(3)






/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("---------------Eserc-9-----------------")






const howManyDays = function(selectedDate) {
  let today = Date.now()
  let selectedInMilliseconds = Date.parse(selectedDate)
  return Math.floor((today - selectedInMilliseconds) / (1000 * 60 * 60 * 24))

}

let date = howManyDays('16 Oct 1997')

console.log("Dalla data sono trascorsi", date, "giorni")

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
console.log("---------------Eserc-10-----------------")



let currentDate = new Date()

let day = currentDate.getDate()

let month = currentDate.getMonth() + 1

let dayandmonth = day + "/" + month

let dayandmonthstring = dayandmonth.toString()

console.log("Oggi è il ", dayandmonthstring)

let isTodayMyBirthday = (date) => {

  if (date === "16/10") {

    console.log(true, ": oggi è il mio compleanno!")

    
  }else{

    console.log(false, ": oggi non è il mio compleanno")
  }
}



isTodayMyBirthday(dayandmonthstring)






/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("---------------Eserc-11-----------------")



let object = {
  name: 'Tommaso',
  surname: 'Nannicini',
  age: "25"
  
  }

function deleteprop(oggetto) {
  


const {age, ...rest} = oggetto
console.log("Ecco l'oggetto senza la proprietà selezionata: ", rest)

}


deleteprop(object)








const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

















/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("---------------Eserc-12-----------------")



const piùRecente = (array) => {
  let filmPiùRecente = array[0]

  array.forEach(element => {
    if (parseInt(filmPiùRecente.Year) < parseInt(element.Year)) {
      filmPiùRecente = element
      
    }
  })
    return filmPiùRecente
  }
 
console.log("Il film più recente contenuto nell' array è: ", piùRecente(movies))




/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("---------------Eserc-13-----------------")




const countMovies = array => { return array.length}

console.log("Il numero di film contenuti nell' array è ", countMovies(movies))


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("---------------Eserc-14-----------------")



const annidiUscitadeiFilm = array => {
  return array.map(element=>element.Year)
}



console.log ("Ecco tutti gli anni di uscita dei film contenuti nell' array: ", annidiUscitadeiFilm(movies))



/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("---------------Eserc-15-----------------")

const onlyInLastMillennium = array => {
  let result = []
  for (let index = 0; index < array.length; index++) {
    if (parseInt(array[index].Year) < 2000){
      result.push (array[index])
      
    }
    
  }
  return result


}


console.log("Ecco tutti i film usciti prima del 2000 contenuti nell' array: ", onlyInLastMillennium(movies))



/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("---------------Eserc-16-----------------")



const sumAllTheYears = array => {
  return array.reduce((acc, curr) => acc + parseInt(curr.Year),0)
}


console.log("Ecco la somma di tutti i film contenuti nell' array: ", sumAllTheYears(movies))









/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("---------------Eserc-17-----------------")




const searchByTitle = function (array, title) {
  return array.find(elem => elem.Title === title)
}


console.log(searchByTitle(movies, 'Avengers: Age of Ultron'))


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("---------------Eserc-18-----------------")




const searchAndDivide = function (array, string) {
  let match = null
  let unmatch = null
  for (let index = 0; index < array.length; index++) {
    if(array[index].Title === string) {
      match = array[index]
      console.log("Questo oggetto fa dell' array matched", match)
    } else if (array[index].Title !== string){
      unmatch = array[index]
      console.log("Questo oggetto fa parte dell' array unmatch", unmatch)

    } 
  }
  
  
}


console.log(searchAndDivide(movies, 'Avengers: Age of Ultron'))




/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("---------------Eserc-19-----------------")
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)


function removeIndex(index) {
  


movies.splice(index, 1);

console.log("Ecco l'array senza l'elemento con l'indice selezionato nel parametro: ", movies)



}



removeIndex(2)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


// const container = document.querySelectorAll("#container")

// function container (){



// document.innerHTML += `
//         <div id="container">
         
         
//          </div>
         
//          `
//         }


console.log("---------------Eserc-20-----------------")
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.

*/

// const td = document.querySelectorAll("td")

// function(params) {
  
// }



// let el = document.getElementsByTagName( "td" );

// for( let i = 0; i < el.length; i++ ){
//   console.log( el[i].innerHTML );
// }






console.log("---------------Eserc-21-----------------")
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("(La risposta è commentata)---------------Eserc-22-----------------")

// I td sono in un' ipotetica pagina HTML


// function selettore (selector){
// const selector = document.querySelectorAll(`${selector}`)

//   for (let i = 0; i < selector.length; i++){

//     console.log(selector[i].value)
//   }

// }

// selettore(td)






/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("(La risposta è commentata)---------------Eserc-23-----------------")



// const backgroundRed = function () {
//   const red = document.querySelectorAll("a")
//   red.forEach(link => link.style.backgroundColor = "red")

// }

// backgroundRed()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("(La risposta è commentata)---------------Eserc-24-----------------")



// const nodeFunction = function () {
//   const node = document.createElement('li')
//   document.querySelector('#myList ul li').appendChild(node);

// }

// nodeFunction()





/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("(La risposta è commentata)---------------Eserc-25-----------------")



// const removeList = function(){
// const removeLi = document.querySelector('#myList ul li')
// remove.forEach(list => list.value = null)
// }
// removeList()


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("(La risposta è commentata)---------------Eserc-26-----------------")




// const addTest = function () {
//   const trs = document.querySelectorAll('tr')
//   for (let i = 0; i < trs.length; i++) {
//     trs[i].classList.add('test')
//   }
//  }
// addList()






// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("---------------Eserc-27-----------------")
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("---------------Eserc-28-----------------")
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
console.log("---------------Eserc-29-----------------")
