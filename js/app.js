var random = function(min, max) {

    return Math.round(Math.random() * (min - max) - min);

}

var newPlayer = function() {

var sistite = document.createElement('div') ;

var app = document.getElementById('app');

sistite.classList.add('board');

sistite.setAttribute("id", "dealer");

app.appendChild(sistite);

}

newPlayer()

var diceThrow = function(min=1, max=6) {

    var newDiv = document.createElement('div')   

    newDiv.classList.add('dice');

    var player = document.getElementById('player');

    player.appendChild(newDiv);

    var number = random(min, max)*100;

    newDiv.style.backgroundPositionX = `${number}px`;

}
  


var diceDealer = function(min=1, max=6) { 
    
    var dealerDiv = document.createElement('div')   

    dealerDiv.classList.add('dice');

    var player = document.getElementById('dealer');

    player.appendChild(dealerDiv);   
    
    
    
    var number = random(min, max)*100;

    dealerDiv.style.backgroundPositionX = `${number}px`;

}

function play() {
    var lancer= Number(prompt('combien de dé voulez vous lancer?'))
    
    for(let i = 0; i < lancer; i++ ) {
      
     diceThrow()
     diceDealer()

}    

}

play()