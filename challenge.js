var scores, roundScores, activePlayer, gamePlaying, lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function( ){
    //Do something here
    if(gamePlaying){
         var dice = Math.floor(Math.random()*6) + 1;

    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-'+dice+'.png';
   
    if(dice === 6 && lastDice === 6){
        scores[activePlayer] = 0;
        document.querySelector('#score-'+activePlayer).textContent = '0';
        nextPlayer();
    } 
    else if(dice !== 1){
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;

    }
    else{
        nextPlayer();
    }
    lastDice = dice; 
    }
});

document.querySelector('.btn-hold').addEventListener('click', function( ){
    //Do something here
    if(gamePlaying){
        scores[activePlayer] += roundScores;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var maxScore = document.querySelector('.maxScore').value;
    if(scores[activePlayer]>=maxScore){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        gamePlaying = false;
    }
    else{
        nextPlayer();
    }
    }
});

document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer(){
    activePlayer ===1 ? activePlayer=0 :activePlayer=1;
    roundScores = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active'); 
    document.querySelector('.dice').style.display = 'none';
}

function init(){
    activePlayer=0
    roundScores = 0;
    scores= [0,0];
    gamePlaying = true;
    document.querySelector('#current-0').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1'
    document.querySelector('#name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}

