/*
                FORMULA for taking turns

                
let theTextArea = document.querySelector('.theTextArea');
var count = 0;
let p1, p2;

const playerOne = () => {
  console.log("player 1 go!");
  theTextArea.onclick = () => {
    console.log("player 1 clicked");
    count++;
    console.log(count);
    if(count === 1){
      clearInterval(p1);
      count = 0;
      p2 = setInterval(playerTwo, 1000);
    }
 
  }
}

const playerTwo = () => {
  console.log("player 2 go!");
  theTextArea.onclick = () => {
    console.log("player 2 clicked");
    count++;
    console.log(count);
    if(count === 1){
      clearInterval(p2);
      count = 0;
      p1 = setInterval(playerOne, 1000);
    }
  }
}

p1 = setInterval(playerOne, 1000);



*/

let slotOne = document.querySelector(".slotOne");

let theTextArea = document.querySelector(".theTextArea");

let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let ten = document.querySelector(".ten");
let eleven = document.querySelector(".eleven");
let twelve = document.querySelector(".twelve");



const gameStart = () => {
    //alert("Hello and welcome to 'TicTacNo'!\nEach player will click on the bottom black box to roll a number between 1 - 6. If you land on the POWER BOX, you will get the ability to take 2 slots at once when you arrive back around to the starting line. Same Tic tac toe rules, but with chances.\nEnjoy!")

    let gameOver = false;

    const playerOne = () => {
        console.log("player 1 go!");
        theTextArea.onclick = () => {
            console.log("player 1 clicked");
        }
    }

    const playerTwo = () => {
        console.log("player 2 go!");
        theTextArea.onclick = () => {
            console.log("player 2 clicked");
        }
    }

    const dice = () => {
        const theDice = Math.floor((Math.random() * 6) + 1);

        
    }

    const powerSelector = () => {
        //selects slot two - twelve
        const randomPowerSpawn = Math.floor((Math.random() * 11) + 1);
        console.log(randomPowerSpawn);
    
        //if selectors
        if(randomPowerSpawn === 1){
            two.style.border = "2px solid red";
        }else if(randomPowerSpawn === 2){
            three.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 3){
            four.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 4){
            five.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 5){
            six.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 6){
            seven.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 7){
            eight.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 8){
            nine.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 9){
            ten.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 10){
            eleven.style.border = "2px solid red";
        }
        else if(randomPowerSpawn === 11){
            twelve.style.border = "2px solid red";
        }
    }
    powerSelector();

    slotOne.onclick = function(){
        console.log("clicked");
    }

    playerOne();
    setTimeout(function(){console.log('here');}, 3000);
    playerTwo();
    


}

gameStart();