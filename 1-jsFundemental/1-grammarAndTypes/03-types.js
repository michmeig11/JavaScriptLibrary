// boolean
let on = true
console.log(on);

let off = false;


// null is an empty value but is still a space to able to be filled. it is or can be intentional


let empty = null;
console.log(empty);

// undefined - default value when a variable is not initialized

let undef = undefined;
let correct;


// numbers 

let degrees = 90;
console.log(degrees)

let precise = 999999999999999
console.log(precise);

let rounded = 9999999999999999
console.log(rounded);
// for numbers any 15 characters and above will be rounded

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let aNumber = Number("123");
console.log(typeof aNumber);

// Strings - strings are datatypes that are used to represent text and are either single quotes '' or double quotes "", or string interpalation (``)

let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;
console.log(stringOne,stringTwo,stringThree);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

//Objects - are used to store many values instead of a singular value

let frodo = {
    race: "hobbit",
    rings: 1,
    cloak: true 
}
// ex: race, rings, cloak are key value objects

// Arrays - are containers that hold lists of items
/*
    let list = [  "item1", "item2", "item3"];
         1     2         3   

    1- name of our data storage
    2- arrays are denoted by [ ]
    3- each value is seperated by a comma        
arrays are actually objects 

*/

let burritos = ['large', 4 , true];
console.log(burritos);


let firstName = 'Michelle';
let lastName ='Meighen';
let houseNumber = 1054;
let aptNumber = 'Apt'+' B';
let street = "Lismore South Dr";
let city = "Indianapolis";
let state = 'IN';
let zipCode = 46227;

console.log(firstName,lastName,houseNumber,street, aptNumber, city, state, zipCode);

let myName = 'Michelle';
console.log(myName.length);
console.log(myName.toUpperCase());

let home ='My home is in Greenwood';
console.log(home.includes('Greenwood'));


let sent = 'This sentence will be split into individual parts';
console.log(sent.split("i"));
