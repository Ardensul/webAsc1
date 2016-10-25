alert("Bienvenue dans le jeu");

numberToGuess = Math.floor(Math.random()*100)+1;
remainingAttemps = 7;

do {
	number = prompt("Entrer le nombre:");


	if(number < numberToGuess){
		alert("Le nombre est plus grand");
	}
	else if(number > numberToGuess){
		alert("Le nombre est plus petit");
	}


	remainingAttemps -= 1;

}
while( number != numberToGuess && remainingAttemps > 0)

if(number == numberToGuess)
	alert("Gagné");
else
	alert("Perdu le nombre était" +  numberToGuess);