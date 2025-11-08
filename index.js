const increament = document.getElementById("increament");
const decreament = document.getElementById("decreament");
const reset = document.getElementById("reset");
const myh3 = document.getElementById("myh3");

let count = 0;

increament.onclick = function() {
    count++;
    myh3.textContent = count;
};

decreament.onclick = function() {
    count--;
    myh3.textContent = count;
};

reset.onclick = function() {
    count = 0;
    myh3.textContent = count;
};
