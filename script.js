let pcVic = 0;
let playerVic = 0;
let choisePC, choisePlayer;
let divRes = document.getElementById("div-resultado");
let divR = document.getElementById("div-rounds");
function getComputerChoice() {
    let nChoise = Math.floor(Math.random() * 3);
    switch (nChoise) {
        case 0:
            choisePC = 'Rock';
            break;
        case 1:
            choisePC = 'Paper';
            break;
        default:
            choisePC = 'Scissors'
            break;
    }

    console.log('Escolha pc ->' + choisePC)
    return choisePC;
}
function playRound(choisePC, choisePlayer) {
    
    let victoryRound;
    //console.log(choisePC);
    cPC = choisePC.toLowerCase();
    cPlayer = choisePlayer.toLowerCase();

    /*if (cPC === 'rock' && cPlayer === 'paper') {
        victoryRound = 'Player Won! Paper Beats Rock'
    } else if (cPC === 'paper' && cPlayer === 'rock') {
        victoryRound = 'PC Won! Paper Beats Rock';
    } else if (cPC === 'rock' && cPlayer === 'rock') {
        victoryRound = 'Draw! R - R';
    } else if (cPC === 'rock' && cPlayer === 'scissors') {
        victoryRound = 'PC Won! Rock Beats Scissors';
    } else if (cPC === 'scissors' && cPlayer === 'rock') {
        victoryRound = 'Player Won! Rock Beats Scissors';
    } else if (cPC === 'scissors' && cPlayer === 'scissors') {
        victoryRound = 'Draw! S - S';
    } else if (cPC === 'scissors' && cPlayer === 'paper') {
        victoryRound = 'Pc Won! Scissors beats Paper';
    } else if (cPC === 'paper' && cPlayer === 'scissors') {
        victoryRound = 'Player Won! Scissors beats Paper';
    } else if (cPC === 'paper' && cPlayer === 'paper') {
        victoryRound = 'Draw! P - P';
    }*/
    if (cPlayer === 'rock' || cPlayer === 'scissors' || cPlayer === 'paper') {
        switch (cPlayer) {
            case 'rock':
                //console.log('passou r');
                if (cPC === 'paper') {
                    victoryRound = 'PC Won! Paper Beats Rock';
                    pcVic++;
                }
                if (cPC === 'scissors') {
                    victoryRound = ' Player Won! Rock Beats Scissors';
                    playerVic++;

                }
                if (cPC === 'rock') {
                    victoryRound = 'Draw! R-R';
                }
                break;
            case 'paper':
                //console.log('passou p');

                if (cPC === 'rock') {
                    victoryRound = 'Player Won! Paper Beats Rock';
                    playerVic++;
                }
                if (cPC === 'scissors') {
                    victoryRound = ' PC Won! Scissors Beats Paper';
                    pcVic++;
                }
                if (cPC === 'paper') {
                    victoryRound = 'Draw! P-P';
                }
                break;
            case 'scissors':
                //console.log('passou s');

                if (cPC === 'rock') {
                    victoryRound = 'PC Won! Rock Beats Scissors';
                    pcVic++;
                }
                if (cPC === 'scissors') {
                    victoryRound = 'Draw! S-S';
                }
                if (cPC === 'paper') {
                    victoryRound = 'Player Won! Scissors Beats Paper';
                    playerVic++;
                }
                break;
            default:
                victoryRound = 'Erro!';
                break;
        }
        divR.innerHTML += `PC-> ${choisePC} ${pcVic}  || Player ${choisePlayer} ${playerVic} <br> `;
        return victoryRound, pcVic, playerVic;
    } else {
        divR.innerHTML += victoryRound = 'Rodada Invalida! <br>';
        console.log(victoryRound);
        return victoryRound;
    }
}
function game() {
    let winner;
    let choisePC;
    divR.innerHTML = '';
    divRes.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        do {
            choisePlayer = prompt('Rock , Paper or Scissors ? ;) ');
        } while (choisePlayer === '' || choisePlayer === 'undefined');
        //choisePlayer = prompt('R-P-C');
        //console.log('Choise Player -> ' + choisePlayer);
        choisePC = getComputerChoice();
        playRound(choisePC, choisePlayer);
    }
    if (playerVic > pcVic) {
        winner = 'Player Won !!';
    } else if (playerVic < pcVic) {
        winner = 'Pc Won !!';
    } else {
        winner = 'Draw!!!'
    }
    return winner;
}

//let choisePlayer = 'rock';
let gameRPC = game();
divRes.innerHTML += gameRPC;
