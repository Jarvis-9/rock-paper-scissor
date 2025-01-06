console.log("Hello World!")
let choices = ['rock', 'paper', 'scissor']
var ComputerScore = humanScore = 0
function getComputerChoice(){
    let n = Math.floor(Math.random()*3)
    return choices[n]
}
 function getHumanChoice(){
    let choice = prompt(message= 'Choose Rock/papaer/scissor').toLowerCase()
    return choice
 }
//console.log(getComputerChoice(), getHumanChoice())


function playRound(humanChoice, ComputerChoice){
    if(humanChoice=='rock'){
        if(ComputerChoice=='scissor'){
            console.log('Rock beats Scissors')
            humanScore += 1
        }
        if(ComputerChoice=='paper'){
            console.log('Paper beats Rock')
            ComputerScore += 1
        }
    }
    if(humanChoice=='paper'){
        if(ComputerChoice=='scissor'){
            console.log('Scissors beats Paper')
            ComputerScore += 1
        }
        if(ComputerChoice=='rock'){
            console.log('Paper beats Rock')
            humanScore += 1
        }
    }
    if(humanChoice=='scissor'){
        if(ComputerChoice=='rock'){
            console.log('Rock beats Scissors')
            ComputerScore += 1
        }
        if(ComputerChoice=='paper'){
            console.log('Scissors beats Paper')
            humanScore += 1
        }
    }
    //console.log(ComputerScore, humanScore)
}

function playGame(){
    for(let i = 0; i<5; i++){
        let humanChoice = getHumanChoice()
        let ComputerChoice = getComputerChoice()
        playRound(humanChoice, ComputerChoice)
    }
    if(humanScore == ComputerScore){
        alert('Tie Game')
    }
    else if(humanScore>ComputerScore){
        alert('Human beats Computer')
    }
    else{
        alert('Computer beats Human')
    }
    console.log('Computer Score: '+ ComputerScore+ ' HumanScore: '+humanScore)
}

playGame()
