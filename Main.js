numberOfRound = 5
i = 0
function computerPlay()
{
    let r = (Math.floor(Math.random() * 100)) % 3
    if(r == 0)
    {
        return "rock"
    }
    else if(r == 1)
    {
        return "paper"
    }
    else
    {
        return "scissors"
    }
}
function playerPlay()
{
    let p = window.prompt("Enter Rock, Paper, or Scissors: ")
    return p.toLowerCase()
}
function playRound(playerSelection, computerSelection)
{
    playerSelection = playerPlay()
    computerSelection = computerPlay()
    if(playerSelection == "rock" && computerSelection == "scissors")
    {return "You win, " + playerSelection + " beats " + computerSelection}
    else if(playerSelection == "paper" && computerSelection == "rock")
    {return "You win, " + playerSelection + " beats " + computerSelection}
    else if(playerSelection == "scissors" && computerSelection == "paper")
    {return "You win, " + playerSelection + " beats " + computerSelection}
    else if(playerSelection == computerSelection)
    {return "Draw"}
    else
    {return "You lose, " + computerSelection + " beats " + playerSelection}

}
while(i < numberOfRound)
{
    console.log(playRound())
    i++
}
console.log("Game Over!! now go home")