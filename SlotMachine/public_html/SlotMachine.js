/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let userBet= prompt("Enter Betting Amount");

let choices = ['cherries', 'oranges', 'plums', 'bells', 'melons', 'bars | bar.jpg'];


 
  let words = choices;
  let picks = [];
  let counts = {};
  let largestDuplicate = {count:0};
  
  for (let i = 0; i < 3; i++) {
    picks.push(words[Math.floor(Math.random() * 5 + 1)]);
  }
  
  picks.forEach(pick => {
    if (counts[pick]) {
      counts[pick]++;
    } else {
      counts[pick] = 1;
    }
  });

  for (let key in counts) {
    if (counts[key] > largestDuplicate.count) {
      largestDuplicate.count = counts[key];
      largestDuplicate.word = key;
    }
  }

  if (largestDuplicate.count === 3) {
    alert('Jackpot');
    alert('Your winnings:' + userBet * 3 );
  } else if (largestDuplicate.count >= 2) {
    alert('Double Bet');
    alert('Your winnings:' + userBet * 2 );
  } else {
    alert('Try Again');
  }




