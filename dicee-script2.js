var n2 = Math.random();
n2 = Math.floor(n2 * 6) + 1;

if(n2 === 1) {
    document.querySelector(".dice2").setAttribute("src", "./images/dice1.png");
} else if(n2 === 2){
    document.querySelector(".dice2").setAttribute("src", "./images/dice2.png");
} else if(n2 === 3){
    document.querySelector(".dice2").setAttribute("src", "./images/dice3.png");
} else if(n2 === 4){
    document.querySelector(".dice2").setAttribute("src", "./images/dice4.png");
} else if(n2 === 5){
    document.querySelector(".dice2").setAttribute("src", "./images/dice5.png");
} else if(n2 === 6){
    document.querySelector(".dice2").setAttribute("src", "./images/dice6.png");
}

console.log(n2);