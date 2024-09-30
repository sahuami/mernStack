
// console.log("amit");
// console.log(1234);
// console.log(2+2);
// console.log("apna","college", 123);


//// Template literals(`` backtik)
// let a = 5;
// let b = 10;
// console.log(`your pay ${a + b} rupees`);


// // operators
// let a = 20;
// let b = 10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);  // a ko multiple kro b times
// console.log(a++)
// console.log(a)
// console.log(++a)
// console.log(b--)
// console.log(b)
// console.log(--b)


//// comparision operator
// let num = 8;
// let str = "8";
// let x = 5;
// console.log(num == str)  // compare value, not type 
// console.log(num === str)  // compare value and  type
// console.log(num!= x);
// console.log(num> x);
// console.log(num< x);
// console.log(num>= x);
// console.log(num<= x);


//// logical operator
// let x= 5;
// let y= 6;
// let z= 5;
// console.log(x<y && y>z);
// console.log(x<y || y<z);
// console.log( !(x == 5));

//// Conditional (ternary) operator
//// variablename = (condition) ? value1:value2 
// let age = 19;
// let result = (age <= 18)? "  not give vote": "give vote";
// console.log(result);

//// Conditional statement
// 1. if-else statement
// let age = 14;
// if(age >= 18 ){
//     console.log("you are eligible for vote");
// }
// else{
//     console.log("you are not eligible for vote")
// }

//// 2. else-if statement
// let age = 13;
// if(age >= 18 ){
//     console.log("you are adult");
// }
// else if(age > 12 && age <=17){
//     console.log("you are teenage");
// }

// else{
//     console.log("you are child")
// }

//// nested if else statment
// let marks = 70;
// if (marks >= 33) {

//     if (marks >= 34 && marks < 70) {
//         console.log("you are get bronze medal");
//     }
//     else if (marks >= 70 && marks < 90) {
//         console.log("you are get sliver medal");
//     }
//     else if (marks >= 90) {
//         console.log("you are get gold medal");
//     }
// }
// else {
//     console.log("you are failed");
// }


//// 3. switch statement
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
    // without "break" jaha pr case match ho jayga uske age ke sare cases bhi print ho jayge
// switch (num = 7) {
//     case 1: console.log("you are good ");
//         break;
//     case 2: console.log("you are bad")
//         break;
//     case 3: console.log("you are awesome")
//         break;
//     case 4: console.log("you are mindblowing")
//         break;
//     case 5: console.log("you are intelligent")
//         break;
//     default: console.log("No any good text")
// }


//// Alert and Prompt
// alert("I am an alert box!");
// let name = prompt("Please enter your name");
// console.log(name);
// prompt("hello \nhow are you")  //line break 












// // TODO APP
// let todo = [];
// let req = prompt("enter your request");
// while (true) {
//     if (req == "quit") {
//         console.log("quitting app")
//         break;
//     }
//     if (req == "list") {
//         console.log("------")
//         for (let i = 0; i <= todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("------")
//     }
//     else if (req == "add") {
//         let task = prompt("please enter the task you want to add")
//         todo.push(task);
//         console.log("task added");
//     }
//     else if (req == "delete") {
//         let idx = prompt("please enter the task index")
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     }
//     else {
//         console.log("wrong request");
//     }
//     req = prompt("enter your request");
// }



//// get value from objects
// let student = {
//     name: "amit",
//     age: 23,
//     goal:"developer"
// }
// console.log(student["name"]);
// console.log(student.name);
// console.log(student);
// console.log(delete student.age);
// console.log(student);


// guessing game
const max = prompt("enter the max number");
const random = Math.floor(Math.random()*max) +1;
let guess = prompt("enter your guess number");

 while(true){
    if(guess =="quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("your guess are right" , "congrats!!");
        break;
    }
    else if(guess<random){
        guess = prompt("your guess was too small then random number. please try again");
    }
    else{
        guess = prompt("your guess was too large then random number. please try again");

    }
 }


// function printinfo(name, age){
//     console.log(`${name} age is ${age}`);
// }
// printinfo("amit", 23);



// function average(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// average(1,2,3);



// function printTable(n){
//     for(let i=n; i<= n*10; i=i+n){
//         console.log(i);
//     }
// }
// printTable(23);




// function getsum(n){
//     let sum=0;
//     for( let i=1; i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }
// let SUM = getsum(3);
//  console.log(SUM);



//  let string = ["my","name","is","amit"]
//  function concat(str){
//     let result = "";
//     for(let i=0; i<=str.length; i++){
//         result= result+str[i];
//     }
//     return result;
//  }
//  console.log(concat(string));


// const cal = {
//     add(a, b) {
//         return a + b;
//     },

//     sub(a, b) {
//         return a - b;
//     },

//     mul(a, b) {
//         return a * b;
//     }
// };

// console.log(cal.add(1, 2));
// console.log(cal.sub(1, 2));
// console.log(cal.mul(1, 2));

// let country = ["Australia", "Germany", "United States ofAmerica"];
// function longestName(country) {
//     let ansIdx = 0;
//     for (let i = 0; i < country.length; i++) {
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if (currLen > ansLen) {
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// console.log(longestName(country));



// // arrow function
// const cube = (n)=>{
//     return n*n*n ;
// };
// console.log(cube(2));




// // arrow function(implicit return)
// const sum = (a,b)=>(a+b);
// console.log(sum(2,3));




// //  set timeout
// console.log("hello");
// setTimeout(()=>{
//     console.log("today is good day");
// },4000);
// console.log("bye");



// let arr = [1,2,3,4,5];
// function print(el) {
//     console.log(el);
// }
// arr.forEach(print);




// let num = [1,2,3,4];
// let double = num.map((el)=>{
//     return el*2 ;
// });
// console.log(double);


// let arr = [2,4,6,10];
// let ans = arr.every((el)=>{
//     return el%2==0 ;
// });
// console.log(ans);



// let arr = [2,4,6];
// let finalval = arr.reduce((result,el)=> result*el);
// console.log(finalval);


// let names=["amit","shubham", "yash", "priya"];
// let [winner,runnerUp,...other]= names;
// console.log(winner,runnerUp,other);


// let student= {
//         name : "amit",
//         age :23,
//         username:"@sahami",
//         password:"abcd"
//     }

//     // let {username,password}= student;
//     // console.log(username,password)
//    console.log(JSON.stringify(student));


// our first api request
// let url = "https://dog.ceo/api/breeds/image/random ";
// let url2 = "https://catfact.ninja/fact";
// let url3 = "https://quote-garden.onrender.com/api/v3/quotes"

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })

//   .then((data) => {
//     console.log("data1 =", data.message);
//     return fetch(url2);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 =", data2.fact);
//     return fetch(url3);
//   })
//   .then((data3) => {
//     console.log("data3 = ", data3.headers);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   })


// using fetch with async await
// let url = "https://catfact.ninja/fact";




