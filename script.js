 const games = [];

function start() {
  play();
}

function play() {
  const random = randomNumber(1,100);
  var numberOfGuesses = 0;

  while (input != random) {
  var input = prompt("Veldu tölu milli 0 og 100.");

  if (input == null) {
    numberOfGuesses = 0;
    games.push(numberOfGuesses);
    alert('Hætt í leik');
    break;
  }

  alert(getResponse(input, random));
  numberOfGuesses++;
  
  }
  games.push(numberOfGuesses);
  if (input != null) {
    var newInput = confirm("Spila annan leik?")
    if (newInput) {
      start();
    }
    else {
      getResults();
    }
  }
}

// Veit ekkert af hverju alertið virkar ekki fyrir getResults.
function getResults(){
  if (games.length == 0) {
    var result1 = ('Þú spilaðir engann leik >_<');
    alert(result1);
  }
  else {
    var result2 = ('Þú spilaðir ' + games.length + ' leiki\n Meðalfjöldi ágiskana var ' + calculateAverage());
    alert(result2);
  }
}

function calculateAverage(){
  var average = 0;
  for (var i = 0; i < games.length; i++) {
    average += games[i];
    }
  average = average / games.length;
  average = num.toFixed(2);
  return average;
}

function getResponse(guess, correct){
  if (guess < 0) return 'Ekki rétt';
  if (guess == correct) return 'Rétt!';
  if (Math.abs(guess-correct) < 5)  return 'Mjög nálægt';
  else if (Math.abs(guess-correct) < 10 && Math.abs(guess-correct) >= 5)  return 'Nálægt';
  else if (Math.abs(guess-correct) < 20 && Math.abs(guess-correct) >= 10)  return 'Frekar langt frá';
  else if (Math.abs(guess-correct) < 50 && Math.abs(guess-correct) >= 20)  return 'Langt frá';
  else return 'Mjög langt frá';
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

start();