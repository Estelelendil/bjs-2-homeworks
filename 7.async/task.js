class Clock{
    constructor (date,func,id) {
        this.date = date;
        this.func = func;
        this.id = id;
    }
}
class AlarmClock{
    constructor(){
        this.alarmCollection = []; // здесь будут храниться объекты звонки
        this.timerId = null; //здесь не понятно что
    }
    
    addClock(date,func,id){
        if(!id){
            throw new Error('error text')
        }
        for(let i =0;i < this.alarmCollection.length; i++ ){
            if(this.alarmCollection[i].id == id){
                return console.error('error text')
            }
        }
        // if(this.alarmCollection.some((item,) => item == id)){
        //     return console.error('error text')
        // }
        let clock = new Clock(date,func,id)
        this.alarmCollection.push(clock)
        // this.timerId.push(id) //вообще не факт
    }
    
    removeClock(id){
        // if(this.timerId.some((item) => item == id)) {
        //     this.timerId.splice
        // this.timerId = this.timerId.filter((item) => item == !id)// как проверить произошлоэто или нет?
        const lenght = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id)
        return this.alarmCollection.length !== lenght;
    }  

    getCurrentFormattedTime(){
        let date = new Date;
        return `${date.getHours()}:${date.getMinutes()}`
    }

    start(){
        this.timerId = setInterval(findClock,1000)
        function findClock(){
            if(this.addClock.lenght == 0){
                throw new Error('Звонков не обнаружено')
            }
            for(let i=0; i < this.alarmCollection.length; i++){
                checkClock(alarmCollection[i])// Передаю конкретный объект
            }//для этого класса ножно в массиве перебрать все ключи даты с проверкой на соответствие по функции чек
        }
        function checkClock(clock){// получает объект
            if(clock.date == getCurrentFormattedTime()){ //проверяет дату объекта
                clock.func() // запускает функцию объекта
            }
        }

        stop() 
            {
            if(this.timerId){
                clearInterval(this.timerId)
                this.timerId = null;}
            
        }
    }
} 
let clockTimer = new AlarmClock
console.log(clockTimer.alarmCollection.length)
clockTimer.addClock("16:45", f => f, 1)
// console.log(clockTimer)