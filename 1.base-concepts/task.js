'use strict'
function solveEquation(a, b, c){
    const arr = [];
    const d = b ** 2 - 4 * a * c;

    if ( d == 0) {
        let answer = -b / (2 * a);
        arr.push(answer);
    }
    if (d > 0){
        let answer = (-b + Math.sqrt(d) )/(2*a)
        arr.push(answer);
        answer = (-b - Math.sqrt(d) )/(2*a)
        arr.push(answer);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
