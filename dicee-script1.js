var n1 = Math.random();
n1 = Math.floor(n1 * 6) + 1;

if(n1 === 1) {
    document.querySelector(".dice").setAttribute("src", "./images/dice1.png");
} else if(n1 === 2){
    document.querySelector(".dice").setAttribute("src", "./images/dice2.png");
} else if(n1 === 3){
    document.querySelector(".dice").setAttribute("src", "./images/dice3.png");
} else if(n1 === 4){
    document.querySelector(".dice").setAttribute("src", "./images/dice4.png");
} else if(n1 === 5){
    document.querySelector(".dice").setAttribute("src", "./images/dice5.png");
} else if(n1 === 6){
    document.querySelector(".dice").setAttribute("src", "./images/dice6.png");
}
console.log(n1);