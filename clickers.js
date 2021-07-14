


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
    const allNineBoxes = [];
    

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

    const box_C = (exOrCircle) => {
        let divThree = document.createElement('div');
        divThree.style.backgroundColor = 'transparent';
        divThree.style.fontSize = '70px';
        divThree.style.color = 'black';
        divThree.style.textAlign = 'center';
        divThree.style.margin = '0 auto';
        
        let divThreeText;

        if(exOrCircle === "Player 1"){
            divThreeText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divThreeText = document.createTextNode("O");
        }

        divThree.appendChild(divThreeText);
        document.querySelector(".slotThree").appendChild(divThree);
    }

    const box_D = (exOrCircle) => {
        let divFour = document.createElement('div');
        divFour.style.backgroundColor = 'transparent';
        divFour.style.fontSize = '70px';
        divFour.style.color = 'black';
        divFour.style.textAlign = 'center';
        divFour.style.margin = '0 auto';
        
        let divFourText;

        if(exOrCircle === "Player 1"){
            divFourText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divFourText = document.createTextNode("O");
        }

        divFour.appendChild(divFourText);
        document.querySelector(".slotFour").appendChild(divFour);
    }

    const box_E = (exOrCircle) => {
        let divFive = document.createElement('div');
        divFive.style.backgroundColor = 'transparent';
        divFive.style.fontSize = '70px';
        divFive.style.color = 'black';
        divFive.style.textAlign = 'center';
        divFive.style.margin = '0 auto';
        
        let divFiveText;

        if(exOrCircle === "Player 1"){
            divFiveText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divFiveText = document.createTextNode("O");
        }

        divFive.appendChild(divFiveText);
        document.querySelector(".slotFive").appendChild(divFive);
    }

    const box_F = (exOrCircle) => {
        let divSix = document.createElement('div');
        divSix.style.backgroundColor = 'transparent';
        divSix.style.fontSize = '70px';
        divSix.style.color = 'black';
        divSix.style.textAlign = 'center';
        divSix.style.margin = '0 auto';
        
        let divSixText;

        if(exOrCircle === "Player 1"){
            divSixText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divSixText = document.createTextNode("O");
        }

        divSix.appendChild(divSixText);
        document.querySelector(".slotSix").appendChild(divSix);
    }

    const box_G = (exOrCircle) => {
        let divSeven = document.createElement('div');
        divSeven.style.backgroundColor = 'transparent';
        divSeven.style.fontSize = '70px';
        divSeven.style.color = 'black';
        divSeven.style.textAlign = 'center';
        divSeven.style.margin = '0 auto';
        
        let divSevenText;

        if(exOrCircle === "Player 1"){
            divSevenText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divSevenText = document.createTextNode("O");
        }

        divSeven.appendChild(divSevenText);
        document.querySelector(".slotSeven").appendChild(divSeven);
    }

    const box_H = (exOrCircle) => {
        let divEight = document.createElement('div');
        divEight.style.backgroundColor = 'transparent';
        divEight.style.fontSize = '70px';
        divEight.style.color = 'black';
        divEight.style.textAlign = 'center';
        divEight.style.margin = '0 auto';
        
        let divEightText;

        if(exOrCircle === "Player 1"){
            divEightText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divEightText = document.createTextNode("O");
        }

        divEight.appendChild(divEightText);
        document.querySelector(".slotEight").appendChild(divEight);
    }

    const box_I = (exOrCircle) => {
        let divNine = document.createElement('div');
        divNine.style.backgroundColor = 'transparent';
        divNine.style.fontSize = '70px';
        divNine.style.color = 'black';
        divNine.style.textAlign = 'center';
        divNine.style.margin = '0 auto';
        
        let divNineText;

        if(exOrCircle === "Player 1"){
            divNineText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divNineText = document.createTextNode("O");
        }

        divNine.appendChild(divNineText);
        document.querySelector(".slotNine").appendChild(divNine);
    }

    // easier way to select a row of numbers when needed.
    const generateNums = (min, max) => {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    // use this function to select empty slots as the board gets populated.
    // Array.prototype.random = function () {
    //     return this[Math.floor((Math.random()*this.length))];
    // }



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
    // LEFT OFF HERE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const ticTacNoChecker = (thePerson, boxNumbers) =>{
        const random147 = [1,4,7];
        const random246 = [2,4,6];
        const random135 = [1,3,5];
        const random258 = [2,5,8];
        const random369 = [3,6,9];
        const random13456789 = [1,3,4,5,6,7,8,9];
        const random12456789 = [1,2,4,5,6,7,8,9];
        const random12356789 = [1,2,3,5,6,7,8,9];
        const random12346789 = [1,2,3,4,6,7,8,9];
        const random12345689 = [1,2,3,4,5,6,8,9];
        const random12345679 = [1,2,3,4,5,6,7,9];
        const random12345678 = [1,2,3,4,5,6,7,8];

       // boxNumbers = generateNums(1,2);
        if(allNineBoxes.length === 0){
            boxNumbers = generateNums(1,9);
        }else if(allNineBoxes.includes("one")){
            boxNumbers = generateNums(2,9);
            console.log("Avoiding 1");
        }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two"))){
            boxNumbers = generateNums(3,9);
            console.log("Avoiding 1-2");
        }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two"))){
            boxNumbers = generateNums(3,9);
            console.log("Avoiding 1-2");
        }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three"))){
            boxNumbers = generateNums(4,9);
            console.log("Avoiding 1-2-3");
        }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four"))){
            boxNumbers = generateNums(5,9);
            console.log("Avoiding 1-2-3-4");
        }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four")) && (allNineBoxes.includes("five"))){
            boxNumbers = generateNums(6,9);
            console.log("Avoiding 1-2-3-4-5");
        }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four")) && (allNineBoxes.includes("five")) && (allNineBoxes.includes("six"))){
            boxNumbers = generateNums(7,9);
            console.log("Avoiding 1-2-3-4-5-6");
        }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four")) && (allNineBoxes.includes("five")) && (allNineBoxes.includes("six")) && (allNineBoxes.includes("seven"))){
            boxNumbers = generateNums(8,9);
            console.log("Avoiding 1-2-3-4-5-6-7");
        }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four")) && (allNineBoxes.includes("five")) && (allNineBoxes.includes("six")) && (allNineBoxes.includes("seven")) && (allNineBoxes.includes("eight"))){
            boxNumbers = 9;
            console.log("Avoiding 1-2-3-4-5-6-7-8");




        }else if(allNineBoxes.includes("two")){
            const r = Math.floor(Math.random() * random13456789.length);
            boxNumbers = random13456789[r];
            console.log("avoiding 2");
        }else if(allNineBoxes.includes("three")){
            const r = Math.floor(Math.random() * random12456789.length);
            boxNumbers = random12456789[r];
            console.log("avoiding 3");
        }else if(allNineBoxes.includes("four")){
            const r = Math.floor(Math.random() * random12356789.length);
            boxNumbers = random12356789[r];
            console.log("avoiding 4");
        }else if(allNineBoxes.includes("five")){
            const r = Math.floor(Math.random() * random12346789.length);
            boxNumbers = random12346789[r];
            console.log("avoiding 5");
        }else if(allNineBoxes.includes("six")){
            const r = Math.floor(Math.random() * random12345789.length);
            boxNumbers = random12345789[r];
            console.log("avoiding 6");
        }else if(allNineBoxes.includes("seven")){
            const r = Math.floor(Math.random() * random12345689.length);
            boxNumbers = random12345689[r];
            console.log("avoiding 7");
        }else if(allNineBoxes.includes("eight")){
            const r = Math.floor(Math.random() * random12345679.length);
            boxNumbers = random12345679[r];
            console.log("avoiding 8");
        }else if(allNineBoxes.includes("nine")){
            const r = Math.floor(Math.random() * random12345678.length);
            boxNumbers = random12345678[r];
            console.log("avoiding 9");



        // }else if(allNineBoxes.includes("one") && allNineBoxes.includes("two")){
        //     const r = Math.floor(Math.random() * random12.length);
        //     boxNumbers = random12[r];
        //     console.log("avoiding 1-2");
        
        
        
            
        
        
        
        
        
        
        
        }else if(allNineBoxes.includes("one") && allNineBoxes.includes("three") && allNineBoxes.includes("five")){
            const r = Math.floor(Math.random() * random246.length);
            boxNumbers = random246[r];
            console.log("avoiding 1-3-5");
        }else if(allNineBoxes.includes("one") && allNineBoxes.includes("four") && allNineBoxes.includes("seven")){
            const r = Math.floor(Math.random() * random147.length);
            boxNumbers = random147[r];
            console.log("avoiding 1-4-7");
        }else if(allNineBoxes.includes("two") && allNineBoxes.includes("five") && allNineBoxes.includes("eight")){
            const r = Math.floor(Math.random() * random258.length);
            boxNumbers = random258[r];
            console.log("avoiding 2-5-8");
        }else if(allNineBoxes.includes("three") && allNineBoxes.includes("six") && allNineBoxes.includes("nine")){
            const r = Math.floor(Math.random() * random369.length);
            boxNumbers = random369[r];
            console.log("avoiding 3-6-9");
        }else if(allNineBoxes.includes("two") && allNineBoxes.includes("four") && allNineBoxes.includes("six")){
            const r = Math.floor(Math.random() * random135.length);
            boxNumbers = random135[r];
        }
    


        // these statements push the X's or O's into the random place.
        console.log("Num is " + boxNumbers);
        if(boxNumbers === 1){
            box_A(thePerson);
            allNineBoxes.push("one");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 2){
            box_B(thePerson);
            allNineBoxes.push("two");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 3){
            box_C(thePerson);
            allNineBoxes.push("three");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 4){
            box_D(thePerson);
            allNineBoxes.push("four");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 5){
            box_E(thePerson);
            allNineBoxes.push("five");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 6){
            box_F(thePerson);
            allNineBoxes.push("six");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 7){
            box_G(thePerson);
            allNineBoxes.push("seven");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 8){
            box_H(thePerson);
            allNineBoxes.push("eight");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 9){
            box_I(thePerson);
            allNineBoxes.push("nine");
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }

       

       

        // if(allNineBoxes.includes(1) && ticTacBoxNumbers === 1){
        //     console.log("WHOOOOOAAAAAA");
        //     ticTacBoxNumbers = generateNums(1,2);
        //     if(ticTacBoxNumbers === 1){
        //         box_A(person);
        //     }else if(ticTacBoxNumbers === 2){
        //         box_B(person);
        //     }
        // }
    }

    const dice = (person) => {
       

        // set to 3.
        let theDice = Math.floor((Math.random() * 3) + 1);

        //for testing
        //let theDice = 1;

        console.log(`${person} rolled for number: ${theDice}`);
        numDisplay.innerHTML = `${person} rolled: (${theDice})`;

        
        /*
            ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
        */
        
        // this checks if slotOne was taken, the random selector can NOT randomly select 1 anymore because it is taken by either player.
        // if(allNineBoxes.includes(1)){
        //     console.log("WHOOOOOAAAAAA");
        // }
        
        
        // set to 9 to choose a random Tic Tac No box.
        let ticTacBoxNumbers = Math.floor((Math.random() * 9) + 1);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled1 = 0;
                    rolled2 = 0;
                    rolled3 = 0;
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled1 = 0;
                    rolled2 = 0;
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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
                    ticTacNoChecker(person, ticTacBoxNumbers);
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