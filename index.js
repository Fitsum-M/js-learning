
const button1 = document.getElementById("button1");
const labels1 = document.getElementById("labels1");
const labels2 = document.getElementById("labels2");
const labels3 = document.getElementById("labels3");
const min = 1;
const max = 6;
let randomnum1;
let randomnum2;
let randomnum3;

button1.onclick = function() {
    randomnum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomnum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomnum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    labels1.textContent=randomnum1;
    labels2.textContent=randomnum2;
    labels3.textContent=randomnum3;

};