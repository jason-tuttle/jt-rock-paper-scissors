function game() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random(3) * 3);
    const computerChoice = choices[index];

    const playerChoice = document.getElementById("player").value;
    let playerWins = false;

    let message = "The computer chose " + computerChoice + ".\n";
    if (playerWins) {
        message = message + "Congrats, you win!";
    } else {
        message = message + "Sorry, you lose!";
    }

    debugger;

    alert(message);

}
