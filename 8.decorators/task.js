function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args){

    const hash = args.join(',')
    console.log(hash)
    let idx = cache.findIndex((item) => item.hash == hash) // Проверять естьли для данных эл-тов уже кэш
    if(idx !== -1){ // если элемент найден
      console.log('Из кэша: '+ cache[idx].value)
      return 'Из кэша: '+ cache[idx].value;
    } 
    let value = func (...args);
      
      cache.push({ hash, value })
      if (cache.length > 5){
        cache.shift() // Удаляем первый элемент массива если длина превышена
      }
      console.log('Вычисляем: ' + value)
      return 'Вычисляем: ' + value
    }
  
  return wrapper;
}
const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); // вычисляем: 6
upgradedAddThree(1, 2, 3); // из кэша: 6
upgradedAddThree(2, 2, 3); // вычисляем: 7
upgradedAddThree(3, 2, 3); // вычисляем: 8
upgradedAddThree(4, 2, 3); // вычисляем: 9
upgradedAddThree(5, 2, 3); // вычисляем: 10
upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)

console.log(cachingDecoratorNew.cache)//как мне посмотреть, что там в хэше?

// --Задача 2--

function debounceDecoratorNew(func, ms) {
  let timeout;
  let canCall = true; // устанавливаем флаг, по умолчанию тру, тк сразу запускаем

  return function(...args){
     
    clearTimeout(timeout);

    if(canCall){
      func.apply(this, args);// вызываем функцию
      canCall = false;
    }
    timeout = setTimeout(() => { 
      func.apply(this, args);
      canCall = true;
    }, ms)
  }
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
 
// --Задача 3--
function debounceDecorator2(func, ms) {

  let timeout;
  let canCall = true; 
  let count = 0;
  

  return function(...args){
    count += 1;
    clearTimeout(timeout);

    if(canCall){
      func.apply(this, args);// вызываем функцию
      canCall = false;
    }
    timeout = setTimeout(() => { 
      func.apply(this, args);
      canCall = true;
    }, ms)
  }
}


