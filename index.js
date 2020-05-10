
// // This Tutorial follows with the conventions of the 
// eloquentjavascript.net book's conventions. 

// BASIC VARIABLES, OPERATIONS AND FUNCTIONS
x = 4 + 3; 
// if (x > 5){
//     console.log('Hello');
// }
// function sayHello(){
//     num = prompt('How many Hellos you want to Log?');
//     var i = 0; 
//     while (i < num){
//         console.log('Hello!!');
//         i++;
//     }
    

// }
// sayHello()
// function sing(song){
//     console.log(song);
// }
// sing('under my umbrella')
// function multiply(a,b){
//     return a * b; 
// }
// alert(multiply(4,5));
 //       //JAVASCRIPT DATA STRUCTURES 
// var list = ['pear','mango','fish',['meat','eggs']]
// // list.concat([1,4,5]);

// // console.log(list);
// var todos =[
//     'call papa bobo', 
//     'collect tv',
//     'Nepa market', 
//     'Find route to ota'
// ]
// for (var i = 0 ; i < todos.length ; i++){
//     console.log(todos[i] + "!");
//     alert(todos[i]+ "!");
// }
// while same with Java 

// var counterOne = 10;

// while(counterOne > 0 ){
//     console.log(counterOne);
//     consoleOne--;
// }
// var counterTwo = 10; 
// do{
//     console.log(counterTwo);
//     counterTwo--;
// }while(counterTwo > 0);

// var todos =[
//     'call papa bobo', 
//     'collect tv',
//     'Nepa market', 
//     'Find route to ota'
// ]
// //for each takes each individual item of the todos lsit.
// // todos.forEach(function(todo,i){
// //     console.log(todo, i);
// // })
// function logTodos(todo, i){
//     console.log(todo,i);
// }

// todos.forEach(logTodos);

// var user = {
//     name: 'David',
//     age: 25, 
//     hobby: 'Soccer', 
//     isMarried: false,
// };

// var list = [
//     {
//         username: 'dave',
//         password: 'password'
//     },
//     {
//         username: 'joe',
//         password: 'pass'
//     }
// ]
// var database = [{
//     username:'dave',
//     password: 'pass'
// },{
//     username:'dan',
//     password:'pass'
// }];
// var newsFeed = [
//     {
//         username: 'dave',
//         timeline: 'Today was a great day'
//     },
//     {
//         username:'pearl',
//         timeline: 'I love javascript'
//     }
// ];
// var userNamePrompt = prompt('What is your username');
// var passwordPrompt = prompt('What is your password');
// function signIn(username, password){
// // if(username === database[0].username && password === database[0].password){
// //     alert('Welcome')    ;
// // }
// // else{
// //     alert('Wrong Details');
// // }
//     for (var i = 0; i < database.length; i++){
//         if(database[i].username === username && database[i].password === password){
//             alert('welcome');
//             console.log(newsFeed);
//             return;

//         }
//     }
//     alert('wrong password');
// }
// signIn(userNamePrompt,passwordPrompt);
// confirm('how are you')


// // DOCUMENT OBJECT MODEL MANIPULATION

// console.log(document);
// var button = document.getElementsByTagName('button')[0];
// // button.addEventListener('click',function(){
// //     alert('click');
// //     console.log('click')
// // })
// button.addEventListener('mouseout',function(){
//     alert('why you no click me?')
// })
// var button = document.getElementById('button');
// var input = document.getElementById('item');
// var list = document.getElementById('list')

// function checkInputLength(){
//     return  input.value.length;
    
// }
// function createListElement(){
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input.value));
//     list.appendChild(li);
//     input.value = '';
// }

// function addListAfterClick(){
//     if (checkInputLength()> 0 ){
//         createListElement()
//      }
     

// }
// function addListAfterEnterPress(){
//     if (checkInputLength()> 0 && event.keyCode === 13){
//         createListElement()
        
//      }
     

// }
// button.addEventListener('click', addListAfterClick)
// input.addEventListener('keypress',addListAfterEnterPress)
    // function isUservalid(bool){
    //     return bool;
    // }
    // function moveCommand(direction){
    //     var whatHappens; 

    //     switch (direction){
    //         case "forward":
    //             whatHappens = "you encountered a monster"

    //         case "back":
    //             whatHappens = "you arrived at home"
    //             break;
    //         case "right":
    //             whatHappens = "you run into a troll"
    //             break;
    //         case "left": 
    //             whatHappens = "you get busted"
    //             break;
    //     }
    //     return whatHappens;
    // }

  //  //Difference between constant and let 

//     const player = 'bobby';
//     let exp = 100; 
//     let level = false;

//     if (exp > 90){
//         let level = true;
//     }

//     //Destructuring 
//     const obj = {
//         name: 'David',
//         age: 25, 
//         wizardLevel: false
//     }
//     const player = obj.player;
//     const experience = obj.experience;
//     let wizardLevel = obj.wizardLevel; 
// // Lines below are the same as the one above in ES6 conventions
//     const {player, experience} = obj;
//     let {wizardLevel} = obj;

// const name = 'John Snow';
// const obj = {
//     [name] : 'hello',
//     [1 + 3]: 'hihi'

// }
//Object Properties 
// const a = 'somto';
// const b = true;
// const c = {};

// const obj = {
// a,b,c
// }

// //Template Stringing

// const name = 'Sandra';
// const age = 29; 
// const pet = 'cat';
// greetingBest = `Hello ${name} you are ${age} and you love ${pet}s. `;

// //Default Arguments to functions. 

// function greet (name = '',age = 30, pet='cat'){
//     return `Hello ${name} you are ${age} and you love ${pet}s. `;

// }

//Symbol 

// //Arrow functions 

// function add(a,b){
//     return a + b; 
// }

// const add = (a,b) => a + b; 

// const add = (a, b ) => {
//     return a + b; 
// }


// //Object Oriented PHP 

// class Animal {
//     constructor(name, color){
//         this.name = 'cow',
//         this.color = 'white'
//     }
// }
// class Mammal extends Animal{
//     constructor(name, color){
//         super(name,color);
//         this.type = 'mammal';
//     }

//      moo(){
//        console.log(`I am a ${this.name} and I am a ${this.type}`);
//     }

// }
// const cow = new Mammal('cow','black');
// cow.moo();

//Javascript closures
//The function run once and will not run again but will 
//remember the variable states. 
// const first = () => {
//     const greet = 'hi';
//     const second = ()=>{
//         alert(greet);
//     }
//     return second;
// }
// const newFunc = first(); 

// newFunc();

//ES7, ES7 and Advanced ES6 CONCEPTS

//Currying 
//converting multiple function arguments to take them one by oe 	
// const multiply = (a,b)=> a * b; bn
// const curriedMultiply = (a)  => (b) => a * b;
// const multiplyby5 = curriedMultiply(5);

// //Compose
// //joining two functions together where the result of 
// //one function serves as the input for the other function. 

// const compose = (f,g) => (a) => f(g(a));
// //minimize side effects 
// const sum = (num) => num + 1;
// var a = 1; 
// const sum = () =>{
//     a+=1;
//     return a;
// }
// function noisy(f){
//     return (...args) => {
//         console.log('calling with ', args);
//         let result = f(...args);
//         console.log('called with ', args, ', returned',result);
//         return result;
//     }
// }

                        //ARRAYS END NEW OPERATIONS
array = [12,44,3,1];
//for each does not return a new array
arrayMultiply = array.forEach((element) => {
    element * 2;
});

console.log(arrayMultiply);

//map returns a new array 
newArray = array.map(elem => elem * 2)
console.log(newArray)

//filter returns an array after performing a check 
filtArray = array.filter(elem => elem%2 === 1)
//reduce returns an array after performing an operation 
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
    current = combine(current, element);
    }
    return current;
    }
reduceArray = array.reduce((accumulator,num) => accumulator+num,0)
// The second argument of the reduce function is the stating value.
// The first argument of the reduce function is the accumulator
// It could be named otherwise


//        // JAVASCRIPT CLASSES AND ADVANCED OBJECTS'
// Context Vs Scope
var object1 = {value: 10}
var object2 = object1;
var object3 = {value:10};


//instantiation 

class Player{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i am ${this.name} and I am a ${this.type}`);
    }
}
class Wizard extends Player{ 
    constructor(name, type){
        super(name,type);
    }
    play(){
        console.log(`WEEEE!! I am a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly','Spell research');

//new features in ES7 
'hello'.includes('o');
let pets = ['cat','dog','bat']
pets.includes('cat')

const square = (x) => x**2;

//new features in ES8 
// .padEnd()
// .padStart()
const func = (a,b,c,d) => {
    console.log(a,b,c,d); 
}

let obj = {
    username0:'Santa',
    username1: 'Rudolf', 
    username2: 'Belch'
}
Object.keys(obj).forEach((key,index)=>{
    console.log(key, obj[key])
})
Object.values(obj).forEach(value => {
    console.log(value)
})
Object.entries(obj).forEach(value => {
    console.log(value)
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
alert('hi')

// async 
// await

    // DEBUGGING
const flat = [[0,1,3],[2,3],[4,5]].reduce((a,b)=>
{
    debugger;
    a.concat(b)
} , []);


console.log([0,38,88,4].reduce((a,b)=> a + b))