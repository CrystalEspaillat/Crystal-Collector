$(document).ready(function() {

    var goal;
    var score;
    var numbers;
    var crystalArray;
    var crystalValue;

    // Cache the DOMs
    var c1 = $("#c1");
    var c2 = $("#c2");
    var c3 = $("#c3");
    var c4 = $("#c4");


    // Function that starts the game. 
    function initializeGame() {
    
        // Function that randomly chooses a goal number from 19-120.
            function chooseGoal() {
                return Math.floor(Math.random()*(120 - 19 + 1) + 19);
            }

        // Display goal number on page
            goal = chooseGoal();
            $("#goal-number").text(goal);

        // Display score on page
            score = 0;
            $("#score").text(score);

        // Array with possible values of a crystal. 
            numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        // Fisher-Yates Algorithm to shuffle the possible values of a crystal. 
            function shuffle (array) {
                var i = 0, j = 0, temp = null
            
                for (i = numbers.length - 1; i > 0; i -= 1) {
                j = Math.floor(Math.random() * (i + 1))
                temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
                }
                return numbers;
            }

        // Choose 4 random, non-repeating numbers from shuffled array for crystal values
            var shuffledNums = shuffle(numbers);
            crystalArray = shuffledNums.splice(0, 4);
            console.log(crystalArray);

        // Give the crystals the values generated above.

            c1.attr("data-crystalvalue", crystalArray[0]);
            c2.attr("data-crystalvalue", crystalArray[1]);
            c3.attr("data-crystalvalue", crystalArray[2]);
            c4.attr("data-crystalvalue", crystalArray[3]);

    }

    //Start the game.
    initializeGame();

    // When you click on the crystals ... 
        $(".crystal").on("click", function() {
            // Pass on the random, non-repeating values to the crystals
            crystalValue = $(this).attr("data-crystalvalue");
            // Make the value a string
            crystalValue = parseInt(crystalValue);
            // Add the value of the crystal to the score counter.
            score = score + crystalValue;
            // Show the updated score on the webpage.
            $("#score").text(score);

            if (score > goal) {
                // if the score is greater than the goal, then ... 
                alert("You lose!");
            }

            else if (score === goal) {
                
                alert("You win!");
            }

            else {
                console.log(score);
            }
        });


});