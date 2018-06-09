$(document).ready(function() {
    
    // Function that randomly chooses a goal number from 19-120.
        function chooseGoal() {
            return Math.floor(Math.random()*(120 - 19 + 1) + 19);
        }

    // Display goal number on page
        var goal = chooseGoal();
        $("#goal-number").text(goal);

    // Display score on page
        var score = 0;
        $("#score").text(score);

    // Cache the DOMs
        var c1 = $("#c1");
        var c2 = $("#c2");
        var c3 = $("#c3");
        var c4 = $("#c4");


    // Fisher-Yates Algorithm to shuffle the possible values of a crystal. 

        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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

    // Choose 4 random, non-repeating numbers for crystal values
        var shuffledNums = shuffle(numbers);
        var crystalArray = shuffledNums.splice(0, 4);
        console.log(crystalArray);

    // Give the crystals the values generated above.

        c1.attr("data-crystalvalue", crystalArray[0]);
        c2.attr("data-crystalvalue", crystalArray[1]);
        c3.attr("data-crystalvalue", crystalArray[2]);
        c4.attr("data-crystalvalue", crystalArray[3]);

        // //When ou click on crystal 1 .... 
        // c1.on("click", function() {
        //     var crystalValue = ($(this).attr("data-crystalvalue"));
        //     crystalValue = parseInt(crystalValue);
        //     score += crystalValue;
        //     });



});

    // // This time, our click event applies to every single crystal on the page. Not just one.
    // $(".crystal-image").on("click", function() {

    // // Determining the crystal's value requires us to extract the value from the data attribute.
    // // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    // var crystalValue = ($(this).attr("data-crystalvalue"));
    // crystalValue = parseInt(crystalValue);
    // // We then add the crystalValue to the user's "counter" which is a global variable.
    // // Every click, from every crystal adds to the global counter.
    // counter += crystalValue;

    // // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);

    // if (counter === targetNumber) {
    //   alert("You win!");
    // }

    // else if (counter >= targetNumber) {
    //   alert("You lose!!");
    // }



//When user clicks a crystal ...
// if value + score is less than or equal to goal number.
// then animate crystal falling into basket.
// change score value.

//if value + score is greater than goal number.
// add a loss.
// animate crystal to pulse.
