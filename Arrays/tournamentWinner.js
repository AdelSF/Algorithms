
  // Given an array of pairs representing the teams that have competed against each
  // other and an array containing the results of each competition, write a
  // function that returns the winner of the tournament. The input arrays are named competetions and results, competetions is array of arrays and results is just a number, first team in array is considered home, second one is away, number 1 in results array means home team won, number 0 means away team won. no draw for competiotiions and each winner gonna take 3 points, write an algorithm to show who is the winner and how has the most points
  //   ["HTML", "Java"],
   //     ^        ^
//      home,     away

// let competetions = [
//   ["HTML", "Java"],
//   ["Java", "Python"],
//   ["Python", "HTML"]
// ]

// let results = [0, 1, 1];

  



function tournamentWinner(competitions, results) {

  let myMap = new Map();
  let currWinner;

  for (let i = 0; i < competitions.length; i++) {
    let currWinnerHomeAway = results[i];

    if (currWinnerHomeAway === 1) {
      currWinner = competitions[i][0]
    } else {
      currWinner = competitions[i][1]
    }
    
    if (!myMap.has(currWinner)) {
      myMap.set(currWinner, 3)
    } else {
      let prevPoints = myMap.get(currWinner)
      myMap.set(currWinner, prevPoints + 3)
    }

  }

  let currMaxVal = -Infinity;
  let currKey = "";

  for (const [key, value] of myMap) {
    if (value > currMaxVal) {
      currMaxVal = value;
      currKey = key;
    }
  }
   
  return currKey;
}

let competetions = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"]
]

let results = [0, 1, 1];




console.log(tournamentWinner(competetions, results)) // java