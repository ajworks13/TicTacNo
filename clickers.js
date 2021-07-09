


const gameStart = () => {
    //alert("Hello and welcome to 'TicTacNo'!\nEach player will click on the bottom black box to roll a number between 1 - 6. If you land on the POWER BOX, you will get the ability to take 2 slots at once when you arrive back around to the starting line. Same Tic tac toe rules, but with chances.\nEnjoy!")

    //        FOR WHEN THE GAME IS PLAYABLE
    // let x = prompt("First players name? >> ");
    // let y = prompt("Second players name? >> ");

    // const ID_ONE = x;
    // const ID_TWO = y;

    const ID_ONE = "Player 1";
    const ID_TWO = "Player 2";

    document.getElementById("player1").innerHTML = ID_ONE;
    document.getElementById("player2").innerHTML = ID_TWO;

    let theTextArea = document.querySelector(".theTextArea");

    let numDisplay = document.querySelector(".numDisplay");

    let two = document.querySelector(".two");
    let three = document.querySelector(".three");
    let four = document.querySelector(".four");
    let five = document.querySelector(".five");
    let six = document.querySelector(".six");

    let slotOne = document.querySelector('.slotOne');

    let gameOver = false;

    let rolled1 = 0;
    let rolled2 = 0;
    let rolled3 = 0;
    let p1, p2;
    let count = 0;
    let onlyOnce = 0;

    // a new element is entered depending on which slot was chosen randomly.
    // later make sure you add standard tic tac toe winning rules from this array.
    const allNineBoxes = [1];
    

    // these boxes will spawn randomly inside the TicTacNo board.
    const box_A = (exOrCircle) => {
        let divOne = document.createElement('div');
        divOne.style.backgroundColor = 'transparent';
        divOne.style.fontSize = '70px';
        divOne.style.color = 'black';
        divOne.style.textAlign = 'center';
        divOne.style.margin = '0 auto';
        let divOneText;

        if(exOrCircle === "Player 1"){
            divOneText = document.createTextNode("X");
            allNineBoxes.push(1);
        }else if(exOrCircle === "Player 2"){
            divOneText = document.createTextNode("O");
        }

        divOne.appendChild(divOneText);
        document.querySelector(".slotOne").appendChild(divOne);
    }

    const box_B = (exOrCircle) => {
        let divTwo = document.createElement('div');
        divTwo.style.backgroundColor = 'transparent';
        divTwo.style.fontSize = '70px';
        divTwo.style.color = 'black';
        divTwo.style.textAlign = 'center';
        divTwo.style.margin = '0 auto';
        
        let divTwoText;

        if(exOrCircle === "Player 1"){
            divTwoText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divTwoText = document.createTextNode("O");
        }

        divTwo.appendChild(divTwoText);
        document.querySelector(".slotTwo").appendChild(divTwo);
    }

    // easier way to select a row of numbers when needed.
    const generateNums = (min, max) => {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    // use this function to select empty slots as the board gets populated.
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
    }

    let possibleBoardSelectors = [2,3,4,5,6,7,8,9];

    const playerOne = () => {
        
        

        console.log("player 1 go!");
        console.log(allNineBoxes);
        theTextArea.onclick = () => {
            console.log("player 1 clicked");
            count++;
            console.log(count);
            dice(ID_ONE);
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
            dice(ID_TWO);
            if(count === 1){
                clearInterval(p2);
                count = 0;
                p1 = setInterval(playerOne, 1000);
            }
        }
    }

    // this function catches the random box that is going to be selected and printed. It also catches the players roll number.
    const ticTacNoChecker = (thePerson, boxNumbers) =>{
        boxNumbers = generateNums(1,2);
        console.log("Num is " + boxNumbers);
        if(boxNumbers === 1){
            box_A(thePerson);
        }else if(boxNumbers === 2){
            box_B(thePerson);
        }
    }

    const dice = (person) => {
       

        // set to 3.
        //let theDice = Math.floor((Math.random() * 3) + 1);

        //for testing
        let theDice = 1;
        console.log(`${person} rolled for number: ${theDice}`);
        numDisplay.innerHTML = `${person} rolled: (${theDice})`;

        
        /*
            ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
        */
        
        // this checks if slotOne was taken, the random selector can NOT randomly select 1 anymore because it is taken by either player.
        // if(allNineBoxes.includes(1)){
        //     console.log("WHOOOOOAAAAAA");
        // }
        
        
           
        let ticTacBoxNumbers = Math.floor((Math.random() * 3) + 1);
        console.log(ticTacBoxNumbers);

        if(person === "Player 1"){
            
            if(theDice === 1){
                rolled1++;
                onlyOnce++;
                // if player lands on the highlighted platform, you will go twice at once in the 'tic tac no' board.
                if(randomPowerSpawn === 1 && onlyOnce === 1){
                    onlyOnce++;
                    console.log("POWER UP!");
                }

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

                    // LEFT OFF HERE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    //start adding more boxes, fill allNineBoxes array as boxes get called.
                    // add includes when a box is already taken.
                    
                    ticTacNoChecker(person, ticTacBoxNumbers);
                   

                    // if(allNineBoxes.includes(1) && ticTacBoxNumbers === 1){
                    //     console.log("WHOOOOOAAAAAA");
                    //     ticTacBoxNumbers = generateNums(1,9);
                    //     if(ticTacBoxNumbers === 1){
                    //         box_A(person);
                    //     }else if(ticTacBoxNumbers === 2){
                    //         box_B(person);
                    //     }
                    // }
                }

                if(three.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 1){
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'yellow';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                }

                if(five.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 2 && rolled3 === 0){
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }

                if(six.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 2 && rolled3 === 0){
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    console.log("from 2 to 4 to 5 to past 5 / 2211");
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

                if(five.style.backgroundColor = 'yellow' && rolled1 === 3 && rolled2 === 1 && rolled3 === 0){
                    console.log('from 1 to 3 to 4 - 1211');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }

                if(five.style.backgroundColor = 'yellow' && rolled1 === 4 && rolled2 === 1 && rolled3 === 0){
                    console.log('from 1 to 3 to 4 to 5 to past 5 - 12111');
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
                if(six.style.backgroundColor = 'yellow' && rolled1 === 3 && rolled2 === 0 && rolled3 === 1){
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
                // PAST 5 (restart)
                if(six.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 1 && rolled3 === 1){
                    console.log('PAST 5 from 231');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

            /*
            ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
            */
                
            }else if(theDice === 2){
                rolled2++;
                
                // two.style.backgroundColor = 'gray';
                three.style.backgroundColor = 'yellow';
               
                if(three.style.backgroundColor = 'yellow' && rolled2 === 2){
                    three.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'yellow';
                }

                if(five.style.backgroundColor = 'yellow' && rolled1 === 0 && rolled2 === 3 && rolled3 === 0){
                    three.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    console.log('went threw the whole board');
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
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
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'yellow';
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

                if(four.style.backgroundColor = 'yellow' && rolled1 === 3 && rolled2 === 1 && rolled3 === 0){
                    console.log('from 1 to 2 to 3 to 5 -1112');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }
                if(four.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 2 && rolled3 === 0){
                    console.log('from 2 to 3 to 5 -212');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }

                if(six.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 3 && rolled3 === 0){
                    console.log('from 1 to 3 to 5 -1222');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                if(six.style.backgroundColor = 'yellow' && rolled1 === 3 && rolled2 === 1 && rolled3 === 0){
                    console.log('from 1 to 3 to 4 to 5 to past 5 -12112');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
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
                // from 1 to 3 to 4 to past 5
                if(five.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 2 && rolled3 === 0){
                    console.log('from 1 to 3 to 4 to past 5 / 1212');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                if(six.style.backgroundColor = 'yellow' && rolled1 === 3 && rolled2 === 2 && rolled3 === 0){
                    console.log('from 2 to 3 to 4 to 5 to past 5 / 21112');
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
                if(six.style.backgroundColor = 'yellow' && rolled1 === 0 && rolled2 === 2 && rolled3 === 1){
                    console.log('PAST 5 from 232');
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

                if(six.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 3 && rolled3 === 0){
                    console.log('through 5 / 2212');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                if(six.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 3 && rolled3 === 0){
                    console.log('through 5 / 1222');
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

                if(six.style.backgroundColor = 'yellow' && rolled1 === 5 && rolled2 === 1 && rolled3 === 0){
                    console.log('PAST 5 from 111112');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }
                /*
                ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
                */

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

                if(three.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 0 && rolled3 === 1){
                    console.log('113');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }

                if(three.style.backgroundColor = 'yellow' && rolled1 === 0 && rolled2 === 1 && rolled3 === 1){
                    console.log('23');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'yellow';
                }

                if(six.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 0 && rolled3 === 2){
                    console.log('1133 past 5');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
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

                if(six.style.backgroundColor = 'yellow' && rolled1 === 1 && rolled2 === 2 && rolled3 === 1){
                    console.log('from 1 to 3 to 5 to past 5 -2123');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                if(five.style.backgroundColor = 'yellow' && rolled1 === 2 && rolled2 === 1 && rolled3 === 1){
                    console.log('from 1 to 3 to past 5 -1123');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }

                if(five.style.backgroundColor = 'yellow' && rolled1 === 0 && rolled2 === 2 && rolled3 === 1){
                    console.log('from 1 to 3 to past 5 -223');
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

                if(six.style.backgroundColor = 'yellow' && rolled1 === 5 && rolled2 === 0 && rolled3 === 1){
                    console.log('PAST 5 / 111113');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }
                if(five.style.backgroundColor = 'yellow' && rolled1 === 4 && rolled2 === 0 && rolled3 === 1){
                    console.log('PAST 5 / 11113');
                    two.style.backgroundColor = 'gray';
                    three.style.backgroundColor = 'gray';
                    four.style.backgroundColor = 'gray';
                    five.style.backgroundColor = 'gray';
                    six.style.backgroundColor = 'gray';
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
                }
                if(four.style.backgroundColor = 'yellow' && rolled1 === 3 && rolled2 === 0 && rolled3 === 1){
                    console.log('PAST 5 / 1113');
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


            /*
            ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
            */
        }
        
    }
    
    let randomPowerSpawn = Math.floor((Math.random() * 5) + 1);
    const powerSelector = () => {
        //selects slot two - twelve
        //const randomPowerSpawn = Math.floor((Math.random() * 5) + 1);
        console.log("the location is now at >>> " + randomPowerSpawn);
    
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
    }

    powerSelector();
    

    slotOne.onclick = function(){
        console.log("clicked");
    }
    //starts it off.
    p1 = setInterval(playerOne, 1000);
    


}

gameStart();