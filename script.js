//Array of card
var card = document.getElementsByClassName("card");
var cards = [...card];

//Moves Counter
var totalMoves = 1;

//Matched Card counter
var matchedCards = 0;
var imgCard = [];
var openCard = [];


//image source
var imgSrc = [
  "/Images/dog.png",
  "/Images/duck.png",
  "/Images/frog.png",
  "/Images/ice-cream.png",
  "/Images/plane.png",
  "/Images/rabbit.png",
  "/Images/sword.png",
  "/Images/tower.png",
  "/Images/dog.png",
  "/Images/duck.png",
  "/Images/frog.png",
  "/Images/ice-cream.png",
  "/Images/plane.png",
  "/Images/rabbit.png",
  "/Images/sword.png",
  "/Images/tower.png",
];

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", displayCard);
}

// Shuffles on reload
function shuffleArray(array) {
  for (var i = array.length-1; i > 0; i--) {
    var j = Math.floor(Math.random() *i);    
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
var shuffledArray=shuffleArray(imgSrc);

for(var i=0;i<cards.length;i++){
  console.log(cards[i])
  cards[i].firstElementChild.firstElementChild.src=shuffledArray[i]; 
}

//Displays Card

function displayCard() {
  openCard.push(this);
  console.log(openCard);
  imgCard.push(this.firstElementChild.innerHTML);
  console.log(imgCard);
  if (imgCard.length < 3) {
    this.children[0].style.visibility = "visible";
    this.classList.add("open");
    this.classList.add("disabled");
    console.log(totalMoves++);
    checkAnswer(openCard);
  }
}


//Checks answer

function checkAnswer() {
  if (imgCard.length === 2) {
    if (imgCard[0] === imgCard[1]) {
      correct();
    } else {
      wrong();
    }
  }
}

//Called if two cards are matched

function correct() {
  openCard[0].classList.add("correct");
  openCard[1].classList.add("correct");
  openCard[0].classList.add("disabled");
  openCard[1].classList.add("disabled");
  openCard = [];
  imgCard = [];
  matchedCards++;
  result(matchedCards);
}

//Called if two cards are not matched

function wrong() {
  openCard[0].classList.add("wrong");
  openCard[1].classList.add("wrong");
  openCard[0].classList.remove("disabled");
  openCard[1].classList.remove("disabled");
  window.setTimeout(function () {
    openCard[0].children[0].style.visibility = "hidden";
    openCard[0].classList.remove("open");
    openCard[1].children[0].style.visibility = "hidden";
    openCard[1].classList.remove("open");
    openCard[0].classList.remove("wrong");
    openCard[1].classList.remove("wrong");
    openCard = [];
    imgCard = [];
  }, 1000);
}


//alerts result

function result() {
  if (matchedCards == 8) {
    window.setTimeout(function () {
      alert("Congrats! You Completed the game in " + totalMoves + " moves");
      window.location.reload();
    }, 300);
  }
}

