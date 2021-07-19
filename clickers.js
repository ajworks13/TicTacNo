


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

    // for player 1
    let two = document.querySelector(".two");
    let three = document.querySelector(".three");
    let four = document.querySelector(".four");
    let five = document.querySelector(".five");
    let six = document.querySelector(".six");

    // for player 2
    let twoTwo = document.querySelector(".twoTwo");
    let twoThree = document.querySelector(".twoThree");
    let twoFour = document.querySelector(".twoFour");
    let twoFive = document.querySelector(".twoFive");
    let twoSix = document.querySelector(".twoSix");

    let slotOne = document.querySelector('.slotOne');
    let slotTwo = document.querySelector('.slotTwo');
    let slotThree = document.querySelector('.slotThree');
    let slotFour = document.querySelector('.slotFour');
    let slotFive = document.querySelector('.slotFive');
    let slotSix = document.querySelector('.slotSix');
    let slotSeven = document.querySelector('.slotSeven');
    let slotEight = document.querySelector('.slotEight');
    let slotNine = document.querySelector('.slotNine');

    let divOneText = "";
    let  
        divTwoText, 
        divThreeText, 
        divFourText, 
        divFiveText,
        divSixText, 
        divSevenText, 
        divEightText, 
        divNineText;

    let gameOver = false;

    // for player 1
    let rolled1 = 0;
    let rolled2 = 0;
    let rolled3 = 0;

    // for player 2
    let rolled21 = 0;
    let rolled22 = 0;
    let rolled23 = 0;

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
        

        if(exOrCircle === "Player 1"){
            divOneText = document.createTextNode("X");
           // allNineBoxes.push(1);
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
        
        

        if(exOrCircle === "Player 1"){
            divNineText = document.createTextNode("X");
        }else if(exOrCircle === "Player 2"){
            divNineText = document.createTextNode("O");
        }

        divNine.appendChild(divNineText);
        document.querySelector(".slotNine").appendChild(divNine);
    }

    // easier way to select a row of numbers when needed.
    // const generateNums = (min, max) => {
    //     return Math.floor((Math.random() * (max - min)) + min);
    // }

    const generateNums2 = () => {
        return Math.floor((Math.random() * 9) + 1);
    }

    // use this function to select empty slots as the board gets populated.
    // Array.prototype.random = function () {
    //     return this[Math.floor((Math.random()*this.length))];
    // }


    if(divOneText.innerHTML === "X" || divOneText.innerHTML === "O"){
        console.log("SPOTTED");
    }

    const playerOne = () => {
        console.log("THIS IS DIV ONE: " + slotOne.value);
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

    // LEFT OFF HERE ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    /*
               POSSIBLE FORMULA


                                                let list = [];
                                                const letters = (...letts) => {
                                                
                                                list.push(letts);
                                                
                                                for(lists of list){
                                                    console.log(list);
                                                }
                                                
                                                //console.log(list);
                                                if(list.length === 3){
                                                    console.log("winner");
                                                }
                                                
                                                }

                                                const apple = () =>{
                                                let one = '1';
                                                letters(one)
                                                }
                                                const orange = () =>{
                                                let two = "2";
                                                letters(two);
                                                }
                                                const grape = () =>{
                                                let three = "3";
                                                letters(three);
                                                }

                                                apple();
                                                orange();
                                                grape();

    */
    
    if(divOneText === "X"){
        console.log("THERE IT IS");
    }
    if(divTwoText === "O"){
        console.log("THERE IT IS");
    }
    
    
    // this function catches the random box that is going to be selected and printed. It also catches the players roll number.
    const ticTacNoChecker = (thePerson, boxNumbers) =>{
        
        // const random15 = [1,5];
        // const random67 = [6,7];
        // const random147 = [1,4,7];
        // const random246 = [2,4,6];
        // const random135 = [1,3,5];
        // const random258 = [2,5,8];
        // const random369 = [3,6,9];
        // const random124 = [1,2,4];
        // const random234789 = [2,3,4,7,8,9];
        // const random234578 = [2,3,4,5,7,8];
        // const random13456789 = [1,3,4,5,6,7,8,9];
        // const random12456789 = [1,2,4,5,6,7,8,9];
        // const random12356789 = [1,2,3,5,6,7,8,9];
        // const random12346789 = [1,2,3,4,6,7,8,9];
        // const random12345789 = [1,2,3,4,5,7,8,9];
        // const random12345689 = [1,2,3,4,5,6,8,9];
        // const random12345679 = [1,2,3,4,5,6,7,9];
        // const random12345678 = [1,2,3,4,5,6,7,8];

        
        // This function makes sure that the numbers are NOT repeated. If a repeated number comes in, the function reruns until a new number is found.
        const letsRanomize = (tempArr) =>{
            const theRandomNumberFromGenerator = generateNums2();

            if(tempArr.includes(theRandomNumberFromGenerator)){
                console.log("NUMBER EXIST " + theRandomNumberFromGenerator);
                return letsRanomize(tempArr);
            }

            console.log('pushing..');
            boxNumbers = theRandomNumberFromGenerator;
            
        }
        letsRanomize(allNineBoxes);
        

       // boxNumbers = generateNums(1,2);
        // if(allNineBoxes.length === 0){
        //     boxNumbers = generateNums(1,9);
        // }else if(allNineBoxes.includes("one")){
        //     boxNumbers = generateNums(2,9);
        //     console.log("Avoiding 1");
        // }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two"))){
        //     boxNumbers = generateNums(3,9);
        //     console.log("Avoiding 1-2");
        // }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two"))){
        //     boxNumbers = generateNums(3,9);
        //     console.log("Avoiding 1-2");
        // }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three"))){
        //     boxNumbers = generateNums(4,9);
        //     console.log("Avoiding 1-2-3");
        // }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four"))){
        //     boxNumbers = generateNums(5,9);
        //     console.log("Avoiding 1-2-3-4");
        // }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four")) && (allNineBoxes.includes("five"))){
        //     boxNumbers = generateNums(6,9);
        //     console.log("Avoiding 1-2-3-4-5");
        // }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four")) && (allNineBoxes.includes("five")) && (allNineBoxes.includes("six"))){
        //     boxNumbers = generateNums(7,9);
        //     console.log("Avoiding 1-2-3-4-5-6");
        // }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four")) && (allNineBoxes.includes("five")) && (allNineBoxes.includes("six")) && (allNineBoxes.includes("seven"))){
        //     boxNumbers = generateNums(8,9);
        //     console.log("Avoiding 1-2-3-4-5-6-7");
        // }else if(allNineBoxes.includes("one") && (allNineBoxes.includes("two")) && (allNineBoxes.includes("three")) && (allNineBoxes.includes("four")) && (allNineBoxes.includes("five")) && (allNineBoxes.includes("six")) && (allNineBoxes.includes("seven")) && (allNineBoxes.includes("eight"))){
        //     boxNumbers = 9;
        //     console.log("Avoiding 1-2-3-4-5-6-7-8");




        // }else if(allNineBoxes.includes("two")){
        //     const r = Math.floor(Math.random() * random13456789.length);
        //     boxNumbers = random13456789[r];
        //     console.log("avoiding 2");
        // }else if(allNineBoxes.includes("three")){
        //     const r = Math.floor(Math.random() * random12456789.length);
        //     boxNumbers = random12456789[r];
        //     console.log("avoiding 3");
        // }else if(allNineBoxes.includes("four")){
        //     const r = Math.floor(Math.random() * random12356789.length);
        //     boxNumbers = random12356789[r];
        //     console.log("avoiding 4");
        // }else if(allNineBoxes.includes("five")){
        //     const r = Math.floor(Math.random() * random12346789.length);
        //     boxNumbers = random12346789[r];
        //     console.log("avoiding 5");
        // }else if(allNineBoxes.includes("six")){
        //     const r = Math.floor(Math.random() * random12345789.length);
        //     boxNumbers = random12345789[r];
        //     console.log("avoiding 6");
        // }else if(allNineBoxes.includes("seven")){
        //     const r = Math.floor(Math.random() * random12345689.length);
        //     boxNumbers = random12345689[r];
        //     console.log("avoiding 7");
        // }else if(allNineBoxes.includes("eight")){
        //     const r = Math.floor(Math.random() * random12345679.length);
        //     boxNumbers = random12345679[r];
        //     console.log("avoiding 8");
        // }else if(allNineBoxes.includes("nine")){
        //     const r = Math.floor(Math.random() * random12345678.length);
        //     boxNumbers = random12345678[r];
        //     console.log("avoiding 9");






        // }else if(allNineBoxes.includes("one") && allNineBoxes.includes("five")){
        //     const r = Math.floor(Math.random() * random15.length);
        //     boxNumbers = random15[r];
        //     console.log("avoiding 1-5");
        // }else if(allNineBoxes.includes("six") && allNineBoxes.includes("seven")){
        //     const r = Math.floor(Math.random() * random67.length);
        //     boxNumbers = random67[r];
        //     console.log("avoiding 6-7");



       
        
        
        
        
        
        
        
        // }else if(allNineBoxes.includes("one") && allNineBoxes.includes("three") && allNineBoxes.includes("five")){
        //     const r = Math.floor(Math.random() * random246.length);
        //     boxNumbers = random246[r];
        //     console.log("avoiding 1-3-5");
        // }else if(allNineBoxes.includes("one") && allNineBoxes.includes("four") && allNineBoxes.includes("seven")){
        //     const r = Math.floor(Math.random() * random147.length);
        //     boxNumbers = random147[r];
        //     console.log("avoiding 1-4-7");
        // }else if(allNineBoxes.includes("two") && allNineBoxes.includes("five") && allNineBoxes.includes("eight")){
        //     const r = Math.floor(Math.random() * random258.length);
        //     boxNumbers = random258[r];
        //     console.log("avoiding 2-5-8");
        // }else if(allNineBoxes.includes("three") && allNineBoxes.includes("six") && allNineBoxes.includes("nine")){
        //     const r = Math.floor(Math.random() * random369.length);
        //     boxNumbers = random369[r];
        //     console.log("avoiding 3-6-9");
        // }else if(allNineBoxes.includes("two") && allNineBoxes.includes("four") && allNineBoxes.includes("six")){
        //     const r = Math.floor(Math.random() * random135.length);
        //     boxNumbers = random135[r];
        // }else if(allNineBoxes.includes("one") && allNineBoxes.includes("two") && allNineBoxes.includes("four")){
        //     const r = Math.floor(Math.random() * random124.length);
        //     boxNumbers = random124[r];
        
        
        
        
        
        
        // }else if(allNineBoxes.includes("two") && allNineBoxes.includes("three") && allNineBoxes.includes("four") && allNineBoxes.includes("seven") && allNineBoxes.includes("eight") && allNineBoxes.includes("nine")){
        //     const r = Math.floor(Math.random() * random234789.length);
        //     boxNumbers = random234789[r];
        // }else if(allNineBoxes.includes("two") && allNineBoxes.includes("three") && allNineBoxes.includes("four") && allNineBoxes.includes("five") && allNineBoxes.includes("seven") && allNineBoxes.includes("eight")){
        //     const r = Math.floor(Math.random() * random234578.length);
        //     boxNumbers = random234578[r];
        // }
    


        // these statements push the X's or O's into the random place.
        console.log("Num is " + boxNumbers);
        if(boxNumbers === 1){
            box_A(thePerson);
            allNineBoxes.push(1);
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 2){
            box_B(thePerson);
            allNineBoxes.push(2);
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 3){
            box_C(thePerson);
            allNineBoxes.push(3);
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 4){
            box_D(thePerson);
            allNineBoxes.push(4);
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 5){
            box_E(thePerson);
            allNineBoxes.push(5);
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 6){
            box_F(thePerson);
            allNineBoxes.push(6);
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 7){
            box_G(thePerson);
            allNineBoxes.push(7);
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 8){
            box_H(thePerson);
            allNineBoxes.push(8);
            for(let x in allNineBoxes){
                console.log('this is from for loop: ' + allNineBoxes[x]);
            }
        }else if(boxNumbers === 9){
            box_I(thePerson);
            allNineBoxes.push(9);
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

        /*
        GRADIENT IN JS
            document.body.style.backgroundImage = 'linear-gradient(to right,' + "red 50%" + " , " + "yellow" +')';
        */
        
        
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
                if(six.style.backgroundColor = 'yellow' && rolled1 === 3 && rolled2 === 1 && rolled3 === 1){
                    console.log('PAST 5 / 12113');
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

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            */

            
        }else if(person === "Player 2"){
            if(theDice === 1){
                rolled21++;
                onlyOnce++;
                // if player lands on the highlighted platform, you will go twice at once in the 'tic tac no' board.
                if(randomPowerSpawn === 1 && onlyOnce === 1){
                    onlyOnce++;
                    console.log("POWER UP!");
                }


                console.log("rolled = " + rolled21);
                twoTwo.style.backgroundColor = 'cyan';
                

                if(twoTwo.style.backgroundColor = 'cyan' && rolled21 === 2){
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'cyan';
                    
                }
                
                if(twoThree.style.backgroundColor = 'cyan' && rolled21 === 3){
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'cyan';
                    
                }
                
                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 4){
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'cyan';
                    
                }
                
                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 5){
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                    
                }
                
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 6){
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    rolled21 = 0;
                    console.log("-- LAP 1 --");

                    //start adding more boxes, fill allNineBoxes array as boxes get called.
                    // add includes when a box is already taken.
                    
                    ticTacNoChecker(person, ticTacBoxNumbers);
                   

                    
                }

                if(twoThree.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 1){
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'cyan';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                }

                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 2 && rolled23 === 0){
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 2 && rolled23 === 0){
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    console.log("from 2 to 4 to 5 to past 5 / 2211");
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                
                // from 3 to 4
                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled23 === 1){
                    console.log('from 3 to 4');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'cyan';
                }

                // from 4 to 5
                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 0 && rolled23 === 1){
                    console.log('from 4 to 5');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }

                // from 1 to 3 to 4 //121
                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 1 && rolled23 === 0){
                    console.log('from 1 to 3 to 4 - 121');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'cyan';
                    twoSix.style.backgroundColor = 'gray';
                }

                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 3 && rolled22 === 1 && rolled23 === 0){
                    console.log('from 1 to 3 to 4 - 1211');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }

                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 4 && rolled22 === 1 && rolled23 === 0){
                    console.log('from 1 to 3 to 4 to 5 to past 5 - 12111');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // PAST 5 (restart)
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 1 && rolled23 === 1){
                    console.log('PAST 5 from 321');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // PAST 5 (restart)
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 3 && rolled22 === 0 && rolled23 === 1){
                    console.log('PAST 5 from 3111');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }
                // PAST 5 (restart)
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 1 && rolled23 === 1){
                    console.log('PAST 5 from 231');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

            /*
            ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
            */
                
            }else if(theDice === 2){
                rolled22++;
                
                // two.style.backgroundColor = 'gray';
                twoThree.style.backgroundColor = 'cyan';
               
                if(twoThree.style.backgroundColor = 'cyan' && rolled22 === 2){
                    twoThree.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'cyan';
                }

                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 0 && rolled22 === 3 && rolled23 === 0){
                    twoThree.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    console.log('went threw the whole board');
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // from 1 to 3
                if(twoTwo.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 1 && rolled23 === 0){
                    console.log('from 1 to 3');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'cyan';
                }
                // from 1 to 2 to 4
                if(twoThree.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 1 && rolled23 === 0){
                    console.log('from 1 to 3');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'cyan';
                }

                // from 3 to 5
                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 0 && rolled22 === 1 && rolled23 === 1){
                    console.log('from 3 to 5');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }
                // from 1 to 3 to 5
                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 2 && rolled23 === 0){
                    console.log('from 1 to 3 to 5 -122');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }

                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 3 && rolled22 === 1 && rolled23 === 0){
                    console.log('from 1 to 2 to 3 to 5 -1112');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }
                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 2 && rolled23 === 0){
                    console.log('from 2 to 3 to 5 -212');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 3 && rolled23 === 0){
                    console.log('from 1 to 3 to 5 -1222');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 3 && rolled22 === 1 && rolled23 === 0){
                    console.log('from 1 to 3 to 4 to 5 to past 5 -12112');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // from 4 through 5
                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 1 && rolled23 === 1){
                    console.log('from 4 through 5');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }
                // from 1 to 3 to 4 to past 5
                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 2 && rolled23 === 0){
                    console.log('from 1 to 3 to 4 to past 5 / 1212');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 3 && rolled22 === 2 && rolled23 === 0){
                    console.log('from 2 to 3 to 4 to 5 to past 5 / 21112');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // PAST 5 (restart)
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 0 && rolled22 === 2 && rolled23 === 1){
                    console.log('PAST 5 from 232');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // from 1 - 2 - 3 - 4 - through 5
                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 4 && rolled22 === 1 && rolled23 === 0){
                    console.log('from 1 - 2 - 3 - 4 - through 5 / 1112');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // through 5
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 0 && rolled22 === 2 && rolled23 === 1){
                    console.log('through 5');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 3 && rolled23 === 0){
                    console.log('through 5 / 2212');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 3 && rolled23 === 0){
                    console.log('through 5 / 1222');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }


                // PAST 5 (restart)
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 1 && rolled23 === 1){
                    console.log('PAST 5 from 3112');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 5 && rolled22 === 1 && rolled23 === 0){
                    console.log('PAST 5 from 111112');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }
                /*
                ====================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
                */

            }else if(theDice === 3){
                rolled23++;
                twoFour.style.backgroundColor = 'cyan';

                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 0 && rolled22 === 0 && rolled23 === 2){
                    twoFour.style.backgroundColor = 'gray';
                    console.log('went threw the whole board');
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoTwo.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled23 === 1){
                    console.log('from 1 to 4');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'cyan';
                }

                if(twoThree.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 0 && rolled23 === 1){
                    console.log('113');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }

                if(twoThree.style.backgroundColor = 'cyan' && rolled21 === 0 && rolled22 === 1 && rolled23 === 1){
                    console.log('23');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'cyan';
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 0 && rolled23 === 2){
                    console.log('1133 past 5');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // from 3 through PAST 5 (restart)
                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled23 === 2){
                    console.log('went threw board');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }
                // from 1 to 3 to past 5
                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 1 && rolled23 === 1){
                    console.log('from 1 to 3 to past 5 -123');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 1 && rolled22 === 2 && rolled23 === 1){
                    console.log('from 1 to 3 to 5 to past 5 -2123');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 1 && rolled23 === 1){
                    console.log('from 1 to 3 to past 5 -1123');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 0 && rolled22 === 2 && rolled23 === 1){
                    console.log('from 1 to 3 to past 5 -223');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // PAST 5 (restart)
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 0 && rolled22 === 1 && rolled23 === 2){
                    console.log('PAST 5');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 5 && rolled22 === 0 && rolled23 === 1){
                    console.log('PAST 5 / 111113');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }
                if(twoFive.style.backgroundColor = 'cyan' && rolled21 === 4 && rolled22 === 0 && rolled23 === 1){
                    console.log('PAST 5 / 11113');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 3 && rolled22 === 1 && rolled23 === 1){
                    console.log('PAST 5 / 12113');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }
                if(twoFour.style.backgroundColor = 'cyan' && rolled21 === 3 && rolled22 === 0 && rolled23 === 1){
                    console.log('PAST 5 / 1113');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }

                // PAST 5 (restart)
                if(twoSix.style.backgroundColor = 'cyan' && rolled21 === 2 && rolled22 === 0 && rolled23 === 2){
                    console.log('PAST 5 from 3113');
                    twoTwo.style.backgroundColor = 'gray';
                    twoThree.style.backgroundColor = 'gray';
                    twoFour.style.backgroundColor = 'gray';
                    twoFive.style.backgroundColor = 'gray';
                    twoSix.style.backgroundColor = 'gray';
                    ticTacNoChecker(person, ticTacBoxNumbers);
                    rolled21 = 0;
                    rolled22 = 0;
                    rolled23 = 0;
                }
            }
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
    
    

    //starts it off.
    p1 = setInterval(playerOne, 1000);
    
    // divOneText = "X";

    

}

gameStart();
