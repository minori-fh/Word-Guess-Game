 //Defined variables
    // Create variables to hold the number of wins (starts at 0), losses (starts at 0), and maxGuesses (starts at 12)
    var wins = 0;
    var losses = 0;
    var maxGuesses = 12;

    // Create an array of all valid options/ inputs by player
    var validGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // Create an array of words to be guessed (correctWords) 
    var wordList = ['poodle', 'dalmation', 'bulldog', 'beagle', 'pug', 'husky', 'dachshund', 'terrier','boxer', 'greyhound', 'chihuahua']


    // Create initially empty arrays
    var guessedLettersList = [] //all letters guessed by player 
    var visibleLettersList = [] //correct letters guessed by player and brought to interface 

    // Create variables that hold references to HTML DOM

    var directionsText = document.getElementById("directions-text");
    var playerGuess = document.getElementById("player-guess");
    var guessedLetters = document.getElementById("guessed-letters")
    var maxGuessesText = document.getElementById("max-guesses")

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var underscoreText = document.getElementById("underscore");
    var mainBackground = document.getElementById("bkground");

//Functions

//Main Process
    //Generate a random correctWord
    var correctWord = wordList[Math.floor(Math.random() * wordList.length)]; 
    console.log(correctWord)

    //Generate underscores depending on number of letters in correctWord
    for (i = 0; i < correctWord.length; i++) { 
        visibleLettersList.push("_");
        underscoreText.textContent = visibleLettersList.join(" ");
    }

    //Create an event when a player releases a key
    document.onkeyup = function (event) { 
        var playerGuess = event.key; //new variable for player's guess

    }

    //Add playerGuess to guessedLettersList array IF: 1) it does not already exist 2.) it is a valid guess 3.) max guesses is > 0
    if (guessedLettersList.indexOf(playerGuess) < 0 && validGuess.indexOf(playerGuess) >= 0 && maxGuesses > 0) { 
        guessedLettersList.push(playerGuess); 
        guessedLetters.textContent = "Guessed Letters: " + guessedLettersList; //update guessedLettersList on interface 
    

    //Check guess 
    for (i = 0; i < correctWord.length; i++) { 
        if (playerGuess === correctWord[i]) { //if the player guess is correct 
            visibleLettersList[i] = playerGuess //assign playerGuess to the appropriate underscore
            underscoreText.textContent = visibleLettersList.join(" "); //update underscoreText on interface 
        } 
    }

    if (correctWord.indexOf(playerGuess) < 0) { //if the player guess is INcorrect
        maxGuesses--; //decrement remaining guesses by 1 
        maxGuessesText.textContent = "Remaining Guesses: " + maxGuesses; //update interface with correct number of remaining guesses
    }

    //Create if statement for if player 'wins' 
    if (visibleLettersList.indexOf("_")< 0) {
        wins++; //increment win count
        winsText.textContent = "Wins: " + wins; //display new win count to interface 
        $("#bkground").css("background-color", "#3CB371"); //change background-color 
        setTimeout(reset, 1000);
    }
}