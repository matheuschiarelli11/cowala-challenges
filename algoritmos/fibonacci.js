function fibonacciSequence(num){
  let sequence = [];
  sequence[0] = 0;
  sequence[1] = 1;
  
  for(let i = 2; i <= num; i++){
  	sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  
  return sequence
}

console.log(fibonacciSequence(11));