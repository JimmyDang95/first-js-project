let num = 1; //Variablendeklaration
let num2 = 2;
let num3 = 3;
const firstString = "Hello";
const secondString =" User";

// let sum = num + num2; //Addition von Variablen

// console.log("result: " + sum); // Ausgabe der Addition

// console.log("result: " + add2(num3)); //Aufruf einer Funktion

// console.log("result :" + add(num, num3));
// console.log("result :" + add(firstString, secondString));

const student = { // Erzeugung eines Objekts
    id: "1",
    name: "Peter",
    subject: "History"
}

console.log(student); // Ausgabe Objekt

student.name = "Martin"; //Update Student Name
console.log(student); //Ausgabe new Student Name

const todos = [ //Erstellung Array
    {
        id: "1",
        description: "some-text",
        status: "open"
    },
    {
        id: "2",
        description: "some-more-text",
        status: "close"
    }
]

console.log(todos[1]) // Ausgabe Array mit dem ersten Index

todos[1].status = "In Progress"; //Update Status Array Index [1]
console.log(todos[1]) //Ausgabe mit Statusupdate

todos[1].date = "today";
console.log(todos[1]) //Ausgabe mit Statusupdate


function add2(num) {  // Erstellung einer Funktion
    return num + 2;
}

function add(firstParameter, secondParameter) {
    return firstParameter + secondParameter;
}


