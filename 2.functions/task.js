// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg;
  // debugger
for( let i = 0; i <= arr.length -1 ; i++){
  if( arr[i]< min){
    min = arr[i];
  }
  if(arr[i]>max){
    max = arr[i];
  }
  sum += arr[i]
}
avg = Number((sum / arr.length).toFixed(2));
return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i=0; i <= arr.length - 1; i++){
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for(let j = 1 ; j<= arrOfArr.length - 1; j++){
    if(func(arrOfArr[j])>max)
    max = func(arrOfArr[j]);
    }
  return max;
}

// Задание 3
function worker2(arr) {
  let difference; // рзница между максимальнфм и минимальным значениями
  let min = Infinity, max = -Infinity;
    // debugger
  for( let i = 0; i <= arr.length -1 ; i++){
    if( arr[i]< min){
      min = arr[i];
    }
    if(arr[i]>max){
      max = arr[i];
    }
  }
  difference = Math.abs(max - min);
  return difference
}
console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); 
