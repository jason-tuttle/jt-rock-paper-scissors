function game() {
    // the different choices either player can make
    const choices = ["rock", "paper", "scissors"];

    // Math.random picks a random floating point (kind of like decimals) number.
    // Multiplying it by 3 (the number of choices) gives us a floating point
    // number between 0 and 3 (eg. 0.1324 or 2.5452). Finally, Math.floor
    // truncates a floating point number, maing it an Integer. So
    // Math.floor(2.423) would result in 2.
    const index = Math.floor(Math.random(3) * 3);

    // now that we have an integer between 0 and 2, we can use that to pick a
    // random item from the choices array above.
    const computerChoice = choices[index];

    const playerChoice = document.getElementById("player").value;
    let playerWins = false;

    // Step One: Update the playerWins boolean variable based on the rules of
    // rock, paper, scissors. You should be replacing the empty strings with
    // values that make sense. You should also be updating the variable values
    // within each clause, because as written, the behavior of the game won't
    // change! Remember, paper beats rock, rock beats scissors, scissors beat
    // paper.
    if (playerChoice === "" && computerChoice === "") {
        playerWins = false;
    } else if (playerChoice === "" && computerChoice === "") {
        playerWins = false;
    } else if (playerChoice === "" && computerChoice === "") {
        playerWins = false;
    }

    // Strings can be "added" together to make larger strings. \n is an escape
    // sequence which tells the computer to print a new line. Without it, the
    // message would be printed on one line instead of two.
    let message = "The computer chose " + computerChoice + ".\n";

    // Step Two: Complete the if statement such that the correct message is
    // displayed win the player wins.
    if () {
        message = message + "Congrats, you win!";
    } else {
        message = message + "Sorry, you lose!";
    }

    alert(message);
}
