alert("Bienvenue dans le jeu");

numberToGuess = Math.floor(Math.random()*100)+1;
remainingAttemps = 7;

var results = document.querySelector("#results");

do {
	number = prompt("Entrer le nombre:");

	var p = document.createElement("p");

	if(number < numberToGuess){
		p.innerHTML = "Le nombre est plus <strong> grand </strong>";
		p.childNodes[1].style.color = "green";
	}
	else if(number > numberToGuess){
		p.innerHTML = "Le nombre est plus <strong> petit </strong>";
		p.childNodes[1].style.color = "red";
	}

	results.appendChild(p);

	remainingAttemps -= 1;

}
while( number != numberToGuess && remainingAttemps > 0)

var p = document.createElement("p");
results.appendChild(p);

if(number == numberToGuess)
	p.textContent = "Gagné";
else
	p.textContent = "Perdu le nombre était" +  numberToGuess;