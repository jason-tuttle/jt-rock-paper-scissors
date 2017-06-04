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

    // Step One: Complete the following if statement such that it properly
    // updates the playerWins variable after comparing the computer's choice to
    // the player's choice. There are three branches here because of the fact
    // that there are only three cases in which the player can win (since the
    // computer wins ties!). Remember, paper beats rock, rock beats scissors,
    // scissors beat paper. 
    //
    // Hints:
    // - you can combine logical expressions with && and ||, where && means
    // "and" and || means "or". Thus, "false || true" would evaluate to true
    // because only one value needs to be truthy, while "false && true" would
    // evalulate to false because both values need to be truthy.
    //
    // - given the above, this three-part if statement could be written as a
    // single, long conditional expression inside of one if statement. Doing so
    // would be rather difficult to read, however, which is why we have three
    // separate if statements chained together
    if () {
    } else if () {
    } else if () {
    }

    // Step Two: Fix the following string such that the value of computerChoice
    // is inserted after the word "chose" but before the period. That is, if the
    // computer chose "rock", message should have the value "The computer chose
    // rock.\n"
    let message = "The computer chose .\n";

    // Step Three: Write an if statement that, when the player wins, would
    // append "Congrats, you win!" onto the end of message above, and "Sorry,
    // you lose!" when the player loses. As an example, when a player loses,
    // message should look like this (note the newline):
    //
    // The computer chose rock.
    // Sorry, you lose!

    alert(message);
}
