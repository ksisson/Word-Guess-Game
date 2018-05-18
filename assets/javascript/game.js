// Create an array for all possible words
var possibleWords = ["ferrari", "lamborghini", "pagani", "mclaren", "porsche", "bugatti", "saleen", "koenigsegg", "gumpert", "maserati", "jaguar"]

// Start or restart the game by pressing Enter
document.onkeyup = function(event){
    if (event.key === "Enter"){

        document.getElementById("reset").textContent = "Press Enter to reset game"

        document.getElementById("start").innerHTML = "";
// Keep track of the guesses left
        
// Keep track of all guessed letters
        
    var wins = 0;

    
// Create an array to hold the incorrectly guessed letters
        var guessedwrong = []
        var guessed = []
        var guessesLeft = 12

// Randomly select a word from the array
        var selectedWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        

// Create a variable that contains the incomplete word
        var incompleteword = "";

// Write a for loop that creates the incomplete word        
        for (var char = 0; char < selectedWord.length; char++ ){
            
            incompleteword = incompleteword + "_ ";
        }

// Write the incomplete word to HTML
        document.getElementById("incompleteword").innerHTML = incompleteword;
        console.log(selectedWord, incompleteword)

        
//  Start guessing       
        document.onkeyup = function(event){

            console.log(incompleteword.indexOf("_"));

            if (guessesLeft>0 && incompleteword.indexOf("_" > -1)){
// Save current guess
                var guess = event.key.toLowerCase();

    // Add guess to an array of all guesses            
                guessed.push(guess)

    // Save the index of the guess from the selected word (-1 if not in word)            
                var index = selectedWord.indexOf(guess)
                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                if (letters.indexOf(guess)>-1)  {
        // Check to see if the letter is in the word
                    if (index > -1){

        // Rebuild the incomplete word if the guess is right
                        incompleteword = "";
                        for (var char = 0; char < selectedWord.length; char++ ){
                            if (guessed.indexOf(selectedWord[char]) > -1) {
                                incompleteword = incompleteword + selectedWord[char];
                            }
                            else {
                                incompleteword = incompleteword + "_"
                            }
                        }
        
        // Show the incomplete word in HTML
                        document.getElementById("incompleteword").innerHTML = incompleteword;
                        

                    }
        // Add the guess to the guessedwrong array if it is guessed wrong           
                    else if (guessedwrong.indexOf(guess) === -1){
                        guessedwrong.push(guess);
                        
        // Reduce the number of guesses left
                        guessesLeft--;                
                    }
                    document.getElementById("guessesleft").innerHTML = guessesLeft;
        // Show user his/her incorrectly guess letters
                    var guessedwrongstring = ""
                    for (var i = 0; i < guessedwrong.length; i++) {
                        guessedwrongstring = guessedwrongstring + " " + guessedwrong[i];
                    }
                    document.getElementById("guessedwrong").innerHTML = guessedwrongstring;

                    
                }
                else if (event.key === "Enter"){
                    location.reload();
                    
                }
        }
        else if (guessesLeft === 0) {
            document.getElementById("gameover").innerHTML = "GAME OVER"
            }

        else if (incompleteword.indexOf("_" === -1)){
            document.getElementById("gameover").innerHTML = "You Won!"
        }
    
        
    }
    
    }
}