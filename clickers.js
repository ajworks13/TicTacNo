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




const gameStart = () => {
    //alert("Hello and welcome to 'TicTacNo'!\nEach player will click on the bottom black box to roll a number between 1 - 6. If you land on the POWER BOX, you will get the ability to take 2 slots at once when you arrive back around to the starting line. Same Tic tac toe rules, but with chances.\nEnjoy!")

    let slotOne = document.querySelector(".slotOne");

    let theTextArea = document.querySelector(".theTextArea");

    let numDisplay = document.querySelector(".numDisplay");

    let two = document.querySelector(".two");
    let three = document.querySelector(".three");
    let four = document.querySelector(".four");
    let five = document.querySelector(".five");
    let six = document.querySelector(".six");
    // let seven = document.querySelector(".seven");
    // let eight = document.querySelector(".eight");
    // let nine = document.querySelector(".nine");
    // let ten = document.querySelector(".ten");
    // let eleven = document.querySelector(".eleven");
    // let twelve = document.querySelector(".twelve");

    let gameOver = false;
    let rolled1 = 0;
    let rolled2 = 0;
    let rolled3 = 0;
    let p1, p2;
    let count = 0;

    const playerOne = () => {
        const person1 = "Player 1";
        console.log("player 1 go!");
        theTextArea.onclick = () => {
            console.log("player 1 clicked");
            count++;
            console.log(count);
            dice(person1);
            if(count === 1){
                clearInterval(p1);
                count = 0;
                p2 = setInterval(playerTwo, 1000);
            }
        }
    }

    const playerTwo = () => {
        const person2 = "Player 2";
        console.log("player 2 go!");
        theTextArea.onclick = () => {
            console.log("player 2 clicked");
            count++;
            console.log(count);
            dice(person2);
            if(count === 1){
                clearInterval(p2);
                count = 0;
                p1 = setInterval(playerOne, 1000);
            }
        }
    }

    const dice = (person) => {
        // If player 1 goes and 'box 1' is selected, then I can add a temp string or num to determine that it isnt selectable at the moment. After players goes full circle, all boxes get wipped out to be refilled again for another turn.

        // for Player 1.
        let box1_1, box1_2, box1_3, box1_4, box1_5, box1_6;
        // for Player 2.
        let box2_1, box2_2, box2_3, box2_4, box2_5, box2_6;

        

        // set to 6.
        let theDice = Math.floor((Math.random() * 3) + 1);

        //for testing
        //let theDice = 1;
        console.log(`${person} rolled for number: ${theDice}`);
        numDisplay.innerHTML = `${person} rolled: (${theDice})`;

        // if the player gets any number after the first roll, their previous box will be replaced with a gray box as if it moved forward.
       

        //figure out how to keep moving forward as you roll the dice multiple times.

        /*
            Check the following combinations
            3112 - 3111 - 121 - 122
        */

        if(person === "Player 1"){
            
            if(theDice === 1){
                rolled1++;
                console.log("rolled = " + rolled1);
                two.style.backgroundColor = 'yellow';
                

                if(two.style.backgroundColor = 'yellow' && rolled1 === 2){
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'yellow';
                    
                }
                
                if(three.style.backgroundColor = 'yellow' && rolled1 === 3){
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'yellow';
                    
                }
                
                if(four.style.backgroundColor = 'yellow' && rolled1 === 4){
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'yellow';
                    
                }
                
                if(five.style.backgroundColor = 'yellow' && rolled1 === 5){
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                    
                }
                
                if(six.style.backgroundColor = 'yellow' && rolled1 === 6){
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    console.log("-- LAP 1 --");
                }

                
                // from 3 to 4
                if(four.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled3 === 1){
                    console.log('from 3 to 4');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'yellow';
                }

                // from 4 to 5
                if(five.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 0 && rolled3 === 1){
                    console.log('from 4 to 5');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }

                // from 1 to 3 to 4 //121
                if(four.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 1 && rolled3 === 0){
                    console.log('from 1 to 3 to 4 - 121');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'yellow';
                    six.style.backgroundColor = 'gray';
                }

                // PAST 5 (restart)
                if(six.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 1 && rolled3 === 1){
                    console.log('PAST 5 from 321');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                // PAST 5 (restart)
                if(six.style.backgroundColor = 'yellow' && rolled1 === 3 && rolled2 === 1 && rolled3 === 1){
                    console.log('PAST 5 from 3111');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                
            }else if(theDice === 2){
                rolled2++;
                
                // two.style.backgroundColor = 'gray';
                three.style.backgroundColor = 'yellow';
               
                if(three.style.backgroundColor = 'yellow' && rolled2 === 2){
                    three.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'yellow';
                }

                if(five.style.backgroundColor = 'yellow' && rolled2 === 3){
                    three.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    console.log('went threw the whole board');
                    rolled2 = 0;
                }

                // from 1 to 3
                if(two.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 1 && rolled3 === 0){
                    console.log('from 1 to 3');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'yellow';
                }
                // from 1 to 2 to 4
                if(three.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 1 && rolled3 === 0){
                    console.log('from 1 to 3');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'yellow';
                }

                // from 3 to 5
                if(four.style.backgroundColor = 'yellow' && rolled1 === 0 && rolled2 === 1 && rolled3 === 1){
                    console.log('from 3 to 5');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }
                // from 1 to 3 to 5
                if(four.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 2 && rolled3 === 0){
                    console.log('from 1 to 3 to 5 -122');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }

                // from 4 through 5
                if(five.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 1 && rolled3 === 1){
                    console.log('from 4 through 5');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }
                // from 1 - 2 - 3 - 4 - through 5
                if(five.style.backgroundColor = 'yellow' && rolled1 === 4 && rolled2 === 1 && rolled3 === 0){
                    console.log('from 1 - 2 - 3 - 4 - through 5 / 1112');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                // through 5
                if(six.style.backgroundColor = 'yellow' && rolled1 === 0 && rolled2 === 2 && rolled3 === 1){
                    console.log('through 5');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }


                // PAST 5 (restart)
                if(six.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 1 && rolled3 === 1){
                    console.log('PAST 5 from 3112');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

            }else if(theDice === 3){
                rolled3++;
                four.style.backgroundColor = 'yellow';

                if(four.style.backgroundColor = 'yellow' && rolled1 === 0 && rolled2 === 0 && rolled3 === 2){
                    four.style.backgroundColor = 'gray';
                    console.log('went threw the whole board');
                    rolled3 = 0;
                }

                if(two.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled3 === 1){
                    console.log('from 1 to 4');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'yellow';
                }

                // from 3 through PAST 5 (restart)
                if(five.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled3 === 2){
                    console.log('went threw board');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }
                // from 1 to 3 to past 5
                if(four.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 1 && rolled3 === 1){
                    console.log('from 1 to 3 to past 5 -123');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                // PAST 5 (restart)
                if(six.style.backgroundColor = 'yellow' && rolled1 === 0 && rolled2 === 1 && rolled3 === 2){
                    console.log('PAST 5');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                // PAST 5 (restart)
                if(six.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 0 && rolled3 === 2){
                    console.log('PAST 5 from 3113');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }
            }

            



        }
        
    }

    const powerSelector = () => {
        //selects slot two - twelve
        const randomPowerSpawn = Math.floor((Math.random() * 5) + 1);
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
        // else if(randomPowerSpawn === 6){
        //     seven.style.border = "2px solid red";
        // }
        // else if(randomPowerSpawn === 7){
        //     eight.style.border = "2px solid red";
        // }
        // else if(randomPowerSpawn === 8){
        //     nine.style.border = "2px solid red";
        // }
        // else if(randomPowerSpawn === 9){
        //     ten.style.border = "2px solid red";
        // }
        // else if(randomPowerSpawn === 10){
        //     eleven.style.border = "2px solid red";
        // }
        // else if(randomPowerSpawn === 11){
        //     twelve.style.border = "2px solid red";
        // }
    }
    powerSelector();

    slotOne.onclick = function(){
        console.log("clicked");
    }

    p1 = setInterval(playerOne, 1000);
    


}

gameStart();