let count = 0;

function cc(card) {
  // Only change code below this line
  if(card > 1 && card < 7){
    count++;
  } else if(card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'J' || card == 'A'){
    count--;
  }

  if(count > 0){
    return count + " Bet";
  } else {
    return count + " Hold";
  }  
  // Only change code above this line
}

console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('K')); 
console.log(cc('A'));