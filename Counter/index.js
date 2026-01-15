let homescore=document.getElementById("homescore");
let guestscore=document.getElementById("guestscore");
let resetbtn=document.getElementById("rbtn");
let homes=0;
let guests=0;
function home1(){
    homes+=1;
    homescore.innerText = homes;
}
function home2(){
    homes+=2;
    homescore.innerText = homes;
}
function home3(){
    homes+=3;
    homescore.innerText = homes;
}

function guest1(){
    guests+=1;
    guestscore.innerText = guests;
}
function guest2(){
    guests+=2;
    guestscore.innerText = guests;
}
function guest3(){
    guests+=3;
    guestscore.innerText = guests;
}

function reset(){
    homes=0;
    guests=0;
    homescore.innerText = homes;
    guestscore.innerText = guests;
}