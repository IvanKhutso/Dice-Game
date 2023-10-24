let scores, roundScore, activePlayer, gamePlaying;

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';

    document.querySelector('.player#player1').classList.add('active');
    document.querySelector('.player#player2').classList.remove('active');
}

function switchPlayer() {
    roundScore = 0;
    document.getElementById('current' + activePlayer).textContent = '0';

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player#player1').classList.toggle('active');
    document.querySelector('.player#player2').classList.toggle('active');
}

document.getElementById('rollDice').addEventListener('click', function() {
    if(gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.getElementById('current' + activePlayer).textContent = roundScore;
        } else {
            switchPlayer();
        }
    }
});

document.getElementById('hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.getElementById('score' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            document.getElementById('player' + activePlayer).textContent = 'Winner!';
            document.getElementById('player' + activePlayer).classList.add('winner');
            gamePlaying = false;
        } else {
            switchPlayer();
        }
    }
});

document.getElementById('newGame').addEventListener('click', init);

init();
