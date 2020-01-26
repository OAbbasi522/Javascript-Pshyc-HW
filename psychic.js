var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var guesses = []

var lettertoGuess = null 

var guessesLeft = 5 

var wins = 0

var losses = 0

function updateguessesLeft(){
    document.querySelector("#guesses-left").innerHTML = guessesLeft
}

function updatelettertoGuess (){
    lettertoGuess = letter[Math.floor(Math.random()*letter.length)]
}

function updateguessessoFar (){
    document.querySelector("#guesses-so-far").innerHTML = guesses.join(", ")
}

function resetEverything(){
guessesLeft = 5; 
guesses = []; 
updateguessesLeft();
updatelettertoGuess();
updateguessessoFar();
}

updatelettertoGuess();
updateguessesLeft();

document.onkeydown = function(event){
    guessesLeft--

    var letters = event.key.toLowerCase()

    console.log(letters)
    guesses.push(letters)

    updateguessesLeft();
    updateguessessoFar();

    if(letters===lettertoGuess){
        wins++
        document.querySelector("#Wins").innerHTML = wins
        
        resetEverything();
    }
    if(guessesLeft===0){
        losses++
        document.querySelector("#Losses").innerHTML = losses

        resetEverything();
    }
}