// const mycheckbox=document.getElementById("mycheckbox");
// const mysubmit=document.getElementById("mysubmit");
// const myresult=document.getElementById("myresult");
// const mymastercard=document.getElementById("mymastercard");
// const myvisa=document.getElementById("myvisa")
// const mypaypal=document.getElementById("mypaypal");
// const myresult2=document.getElementById("myresult2");

// mysubmit.onclick = function(){
//     if(mycheckbox.checked){
//      myresult.textContent="you are subscribed";
//     }
//     else{
//         myresult.textContent="your are not subscribes";
//     }
//     if(myvisa.checked){
//         myresult2.textContent="you are paying through paypal";
//     }
//     else if(mymastercard.checked){
//        myresult2.textContent="your are paying through mastercard";
//     }
//     else if(mypaypal.checked){
//         myresult2.textContent="you are paypa";
//     }
//     else{
//         myresult.textContent="you are not paying";
//     }
// }
// let age=20;
// let message=age>18?"you are adult":"not audlt";
// console.log(message);
// let time=2
// let greeting=time>2?"good after noon":"good night";
// console.log(greeting)
// let day=1;
// switch(day){
//     case 1:
//       console.log("monday");
//       break;
//     case 2:
//         console.log("tuesday");
    
// }
// let mark=56;
// let lettergrade;
// switch(true){
//     case mark>50:{
//         lettergrade='A';
//         break;
//     }
   
//     case  mark<50:{
//       lettergrade='C';
//       break;
//     }
    
// }
// console.log(lettergrade);
// let username="bro code";
// let firstname=username.slice(0,username.indexOf("o"));
// console.log(firstname);
// let username=window.prompt("enter your name :");
// let letter=username.indexOf("0");
// letter=letter.toLowerCase();

// let extaract=username.slice(1);
// extaract=extaract.toLowerCase();
// username=letter+extaract;
// console.log(username);

// let pi=3.14;
// if(pi==="3.14"){
//     console.log("this is strictly equlal")
// }
// else{
//     console.log("this is not")
// }
// let logedin=false;
// let username;
// let password;
// while(!logedin){
//     username=window.prompt("enter your name");
//     password=window.prompt("enter your password")
   
//     if(username === "myfirstname" && password === "mypassword"){
//            logedin=true;
//            console.log("your are logged in");
//     }
//     else{
//         console.log("your are not logged in");
//     }
// }

// let min=1;
// let max=100;
// let answer=Math.floor(Math.random()*100);

// let attemp=0;
// let guess;
// let running=true;

// while(running){
//     let guess = window.prompt("Enter a number between " + min + " and " + max + ":");
//     guess=Number(guess);
//     if(isNaN(guess)){
//         window.alert("not guess type");
//     }
//     else if(guess<min || max<guess){
//         window.alert("this is not in range");
//     }
//     else{
//         attemp++;
//         if(guess<answer){
//             window.alert("to low");
//         }
//         else if(guess>answer){
//             window.alert("to high");
//         }
//         else{
//             window.alert("correct in",{attemp},"tines")
//             running =false;
//         }

//     }
// }
// function happybirthday(username,age){
//     console.log("happy birthday to you"+username);
//     console.log("happy birthday to you");
//     console.log("happy birthday to you"+age);
//     console.log("happy birthday to you");
// }
// happybirthday("abiy",59);
// console.log(happybirthday);
// function multiple(x,y){
//     resutl=x*y;
//     return resutl;
// }
// multiple(5,66);
const mytextbox=document.getElementById("textbox");
const mycelcius=document.getElementById("mycelcius");
const myfarinite=document.getElementById("myfaranite");
const mysubmit=document.getElementById("mysubmit");
const myresult=document.getElementById("myresult");
let temp;
function convert(){
    if(myfaranite.checked){
        temp=Number(textbox.value);
        temp = (temp * 9 / 5) + 32;
        myresult.textContent=temp;
    }
    else if(mycelcius.checked){
        temp=Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        myresult.textContent=temp;
    }
    else{
        console.log("you are not in correct path");
    }
}

