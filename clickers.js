let slotOne = document.querySelector(".slotOne");

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



slotOne.onclick = function(){
    console.log("clicked");
}

const gameStart = () => {
    //alert("Hello and welcome to 'TicTacNo'!\nEach player will click on the bottom black box to roll a number between 1 - 6. If you land on the POWER BOX, you will get the ability to take 2 slots at once when you arrive back around to the starting line. Same Tic tac toe rules, but with chances.\nEnjoy!")

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


}

gameStart();