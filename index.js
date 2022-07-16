// // // // // // VARIABLES // // // // // //

const choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let aiChoice = "";
let wins = 0;

// // // // // // Functionality // // // // // //

function randomChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function game() {
  for (let i = 1; i < 6; i++) {
    playerChoice = prompt(
      "Please enter Rock, Paper or Scissors",
      ""
    ).toLowerCase();

    aiChoice = randomChoice();

    if (playerChoice == choices[0]) {
      console.log(`Round ${i}`);

      console.log("Player: ", playerChoice);
      console.log("AI: ", aiChoice);
      if (aiChoice == choices[0]) {
        console.log(`It is a Draw, you and the ai played ${playerChoice}!`);
      } else if (aiChoice == choices[1]) {
        console.log(`You Lost, ${aiChoice} beats ${playerChoice}!`);
      } else if (aiChoice == choices[2]) {
        console.log(`You won, ${playerChoice} beats ${aiChoice}!`);
        wins += 1;
      }
    } else if (playerChoice == choices[1]) {
      console.log(`Round ${i}`);

      console.log("Player: ", playerChoice);
      console.log("AI: ", aiChoice);
      if (aiChoice == choices[1]) {
        console.log(`It is a Draw, you and the ai played ${playerChoice}!`);
      } else if (aiChoice == choices[2]) {
        console.log(`You Lost, ${aiChoice} beats ${playerChoice}!`);
      } else if (aiChoice == choices[0]) {
        console.log(`You won, ${playerChoice} beats ${aiChoice}!`);
        wins += 1;
      }
    } else if (playerChoice == choices[2]) {
      console.log(`Round ${i}`);

      console.log("Player: ", playerChoice);
      console.log("AI: ", aiChoice);
      if (aiChoice == choices[2]) {
        console.log(`It is a Draw, you and the ai played ${playerChoice}!`);
      } else if (aiChoice == choices[0]) {
        console.log(`You Lost, ${aiChoice} beats ${playerChoice}!`);
      } else if (aiChoice == choices[1]) {
        console.log(`You won, ${playerChoice} beats ${aiChoice}!`);
        wins += 1;
      }
    } else {
      alert(`Please enter Rock, Paper or Scissors!`);
      i--;
    }
  }

  if (wins > 2) {
    console.log(`You have Won against the Ai with ${wins} Wins`);
  } else {
    console.log(`You have Lost against the Ai with ${wins} Wins`);
  }
}

game();
