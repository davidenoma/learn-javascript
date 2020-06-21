// BASIC VARIABLES, OPERATIONS AND FUNCTIONS
x = 4 + 3; 
if (x > 5){
    console.log('Hello');
}
function sayHello(){
    num = prompt('How many Hellos you want to Log?');
    var i = 0; 
    while (i < num){
        console.log('Hello!!');
        i++;
    }
    

}
sayHello()
function sing(song){
    console.log(song);
}
sing('under my umbrella')
function multiply(a,b){
    return a * b; 
}
alert(multiply(4,5));
       //JAVASCRIPT DATA STRUCTURES 
var list = ['pear','mango','fish',['meat','eggs']]
list.concat([1,4,5]);

console.log(list);
var todos =[
    'call papa bobo', 
    'collect tv',
    'Nepa market', 
    'Find route to ota'
]
for (var i = 0 ; i < todos.length ; i++){
    console.log(todos[i] + "!");
    alert(todos[i]+ "!");
}
// while same with Java 

var counterOne = 10;

while(counterOne > 0 ){
    console.log(counterOne);
    consoleOne--;
}
var counterTwo = 10; 
do{
    console.log(counterTwo);
    counterTwo--;
}while(counterTwo > 0);

var todos =[
    'call papa bobo', 
    'collect tv',
    'Nepa market', 
    'Find route to ota'
]
// //for each takes each individual item of the todos lsit.
todos.forEach(function(todo,i){
    console.log(todo, i);
})
function logTodos(todo, i){
    console.log(todo,i);
}

todos.forEach(logTodos);

var user = {
    name: 'David',
    age: 25, 
    hobby: 'Soccer', 
    isMarried: false,
};

var list = [
    {
        username: 'dave',
        password: 'password'
    },
    {
        username: 'joe',
        password: 'pass'
    }
]
var database = [{
    username:'dave',
    password: 'pass'
},{
    username:'dan',
    password:'pass'
}];
var newsFeed = [
    {
        username: 'dave',
        timeline: 'Today was a great day'
    },
    {
        username:'pearl',
        timeline: 'I love javascript'
    }
];
var userNamePrompt = prompt('What is your username');
var passwordPrompt = prompt('What is your password');
function signIn(username, password){
if(username === database[0].username && password === database[0].password){
    alert('Welcome')    ;
}
else{
    alert('Wrong Details');
}
    for (var i = 0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            alert('welcome');
            console.log(newsFeed);
            return;

        }
    }
    alert('wrong password');
}
signIn(userNamePrompt,passwordPrompt);
confirm('how are you')