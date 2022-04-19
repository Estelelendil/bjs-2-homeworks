function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args){
    // const hash = args[0] + ',' + args[1];
    const hash = args.join(',')
    let idx = cache.findIndex( (item) =>{item == hash}) // Проверять естьли для данных эл-тов уже кэш
    if(idx !== -1){ // если элемент найден
      console.log('Из кэша: '+ cache[idx].value)
      return 'Из кэша: '+ cache[idx].value;
    } 

    // if (hash in cache || cache.length <= 5 ){
    //   console.log('Из кэша: '+ cache[0].hash)//я не знаю, к какому номеру в массиве нужно обращаться
    // }
    // else if (hash in cache || cache.length > 5){

    // }
    // else {
      let result = func (...args);
      // cache[hash] = result;
      TODO:
      // cache[6].value = result; здесь возможно должно быть дструктурирующее прсваивание?
      // cache[6].hash = hash;
      // cache.push({});// пушим объект с хэшем и результатом
      
      if (cache.length > 5){
        cache.shift() // Удаляем первый элемент массива если длина превышена
      }
      console.log('Вычисляем: ' + result)
      return 'Вычисляем: ' + result
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
  func; // вызываем функцию
  let flag = true; // устанавливаем флаг

  return function(...args){
    clearTimeout(timeout);

    timeout = setTimeout(() =>{ //  нужно проверить флаг и сбросить его?
      f.apply(this.args);
      console.timeEnd('time');
    }, ms)
  }
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
 
// --Задача 3--
function debounceDecorator2(func) {
  // Ваш код
}
