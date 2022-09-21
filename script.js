let recupere = document.getElementById("recupere");
let genere = document.getElementById("genere");
let phrase = document.getElementById("phrase");
let randomNumber;
let phrase2 = document.getElementById("score");
score = 0;
console.log(score);

function generer() {
  min = 0;
  max = 100;
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
}

genere.addEventListener("click", generer);

function compare() {
  let input = document.getElementById("input").value;

  phrase.innerHTML = "Saisie incorrecte";
  if (input == "" || input == isNaN) {
  } else if (randomNumber == undefined) {
    phrase.innerHTML = "Vous n'avez pas encore généré de nombre";
  } else if (input > randomNumber) {
    phrase.innerHTML = "C'est moins";
  } else if (input < randomNumber) {
    phrase.innerHTML = "C'est plus";
  } else {
    score++;
    phrase2.innerHTML = `Voici votre score ${score}`;
    console.log(phrase2);
    phrase.innerHTML =
      "Gagné ! Appuie sur générer pour chercher un nouveau nombre";
  }
}

recupere.addEventListener("click", compare);
