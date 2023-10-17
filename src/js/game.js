const gameContainer = document.querySelector(".game-field");
const scoreDisplay = document.querySelector(".score");
const winScoreDisplay = document.querySelector(".win-score");

const starCount = 13;
const winScore = 100;
winScoreDisplay.textContent = `Win: ${winScore}`

let speed = 1000;
let tickCounter = 0;
let score = 0;

function gameLogic() {
  if (tickCounter >= 5) {
    speed = 900;
  }
  if (tickCounter >= 12) {
    speed = 800;
  }
  if (tickCounter >= 20) {
    speed = 600;
  }

  console.log("Швидкість:", speed);
  createRandomBall();
  if (score === winScore) {
    window.location.href = "/GiftsWebsite/src/html/surprisePage.html";
  }

  if (tickCounter > starCount) {
    if (confirm("Спробувати ще раз?")) {
      reset();
      gameLogic();
    }
  } else {
    
    setTimeout(gameLogic, speed);
  }
}

function createRandomBall() {
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }

  const ball = document.createElement("div");
  ball.classList.add("star");

  console.log();
  const size = 170;
  const maxX = window.innerWidth - size;
  const maxY = window.innerHeight - size;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  console.log("Кординати", x, y);

  ball.style.width = `${size}px`;
  ball.style.height = `${size}px`;
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  // if (score === 90) {
  //   ball.addEventListener("mouseover", () => {
  //     gameContainer.removeChild(ball);
  //   });
  // }

  ball.addEventListener("click", () => {
    gameContainer.removeChild(ball);
    score += 10;
    scoreDisplay.textContent = `Score: ${score}`;
  });

  gameContainer.appendChild(ball);
  tickCounter++;
}

gameLogic();

function reset() {
  speed = 1000;
  tickCounter = 0;
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`
}
