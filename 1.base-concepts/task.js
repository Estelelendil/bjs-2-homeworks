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
  // debugger

  

  const newPercent = Number(percent);
  const newContribution = Number(contribution);
  const newAmount = Number (amount);

  if(isNaN(newPercent)) {
    return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)
  };
  if(isNaN(newContribution)) {
    return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
  };
  if(isNaN(newAmount)) {
    return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`)
  };

  let creditSumm = newAmount -newContribution; // cумма/тело кредита

  // // let dateCreditEnd = new Date(Date.parse(date));// date изначально строка, date.parse преобразует в секунды, new Date преобразует в дату О_О (но с лишними часами и минутами, хз почему)
  // // dateCreditEnd.setHours(0,0,0,0) // удаляет лишние минуты часы секунды и прочую хрень
  // date.setHours(0, 0, 0, 0);

  // let dateNow = new Date()// создает текущею дату,но с лишниими часами и минутами
  // dateNow.setHours(0, 0, 0, 0) // удаляет лишние минуты часы секунды и прочую хрень

  // // console.log(dateNow, dateCreditEnd)

  // let creditPeriod = Math.round((date - dateNow) / 2419200000) - 1;// cрок  в месяцах
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();

  let differenceYear = date.getFullYear() - currentYear;
  let creditPeriod = differenceYear * 12 - currentMonth + date.getMonth();

  let interestRate = newPercent / 100 / 12;
  let creditMonthPayment = creditSumm * (interestRate + (interestRate / (((1 +interestRate) ** creditPeriod) - 1)));
  let totalAmount = creditMonthPayment * creditPeriod;
  return Number(totalAmount.toFixed(2));
}


