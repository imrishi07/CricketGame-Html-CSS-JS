console.log("working");
let computerChoice;
let playerChoice;

let bat = "🏏 Bat";
let ball = "🔴 Ball";
let stump = "🖍️ Stump";

let won = "You Won🏆";
let draw = "You Draw😟";
let lose = "You Lose👎";

//Score Object
let initialScore = {
  win: 0,
  lose: 0,
  draw: 0,
};

let updateScore = JSON.parse(localStorage.getItem("score")) || initialScore;

let score = {
  win: updateScore.win,
  lose: updateScore.lose,
  draw: updateScore.draw,
  updateScore: function updateScore() {
    storeScoreLocal();
    scoreBoardText();
  },
};

function storeScoreLocal() {
  localStorage.setItem("score", JSON.stringify(score));
}

function scoreBoardText() {
  document.querySelector(".score-win").innerText = `🏆 ${score.win}`;
  document.querySelector(".score-loss").innerText = `👎 ${score.lose}`;
  document.querySelector(".score-draw").innerText = `😟 ${score.draw}`;
}
scoreBoardText();
//Clear storage data
function clearScore() {
  localStorage.clear();
  location.reload();
}

//Player Choice
function SelectplayerChoice(choice) {
  playerChoice = choice;
  let player_Choice = `You have choice ${choice}`;
  document.querySelector(".player-choice").value = player_Choice;
}

//Display Computer Choice
function computerChoiceInput(choice) {
  document.querySelector(
    ".computer-choice"
  ).value = `Computer choice is ${choice}`;
}

//Generate Computer Choice
function generateComputerChoice() {
  let randomChoice;

  randomChoice = Math.round(Math.random() * 3);
  if (randomChoice == 0) {
    computerChoice = ball;
    computerChoiceInput(computerChoice);
  } else if (randomChoice == 1) {
    computerChoice = bat;
    computerChoiceInput(computerChoice);
  } else {
    computerChoice = stump;
    computerChoiceInput(computerChoice);
  }
}

//Generate Result
function generateResult(playerMove, computerMove) {
  if (playerMove === bat) {
    if (computerMove === bat) {
      document.querySelector(".win-lose").value = draw;
      score.draw += 1;
      score.updateScore();
    } else if (computerMove === ball) {
      document.querySelector(".win-lose").value = won;
      score.win += 1;
      score.updateScore();
    } else if (computerMove === stump) {
      document.querySelector(".win-lose").value = lose;
      score.lose += 1;
      score.updateScore();
    }
  } else if (playerMove === ball) {
    if (computerMove === bat) {
      document.querySelector(".win-lose").value = lose;
      score.lose += 1;
      score.updateScore();
    } else if (computerMove === ball) {
      document.querySelector(".win-lose").value = draw;
      score.draw += 1;
      score.updateScore();
    } else if (computerMove === stump) {
      document.querySelector(".win-lose").value = won;
      score.win += 1;
      score.updateScore();
    }
  } else if (playerMove === stump) {
    if (computerMove === bat) {
      document.querySelector(".win-lose").value = won;
      score.win += 1;
      score.updateScore();
    } else if (computerMove === ball) {
      document.querySelector(".win-lose").value = lose;
      score.lose += 1;
      score.updateScore();
    } else if (computerMove === stump) {
      document.querySelector(".win-lose").value = draw;
      score.draw += 1;
      score.updateScore();
    }
  }
}
