class Clock{
    constructor (date,func,id) {
        this.time = date;
        this.cullback = func;
        this.id = id;
    }
}
class AlarmClock{
    constructor(){
        this.alarmCollection = []; 
        this.timerId = null;
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
        let clock = new Clock(date,func,id)
        this.alarmCollection.push(clock)
    }
    
    removeClock(id){
        const lenght = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id)
        return this.alarmCollection.length !== lenght;
    }  

    getCurrentFormattedTime(){
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`
    }

    start(){
        this.timerId = setInterval(findClock,1000)
        function findClock(){
            if(this.alarmCollection.length == 0){ 
                throw new Error('Звонков не обнаружено')
            }
            for(let i=0; i < this.alarmCollection.length; i++){
                checkClock(alarmCollection[i])// Передаю конкретный объект
            }
        }
        function checkClock(clock){// получает объект
            if(clock.date == getCurrentFormattedTime()){ //проверяет дату объекта
                clock.cullback() // запускает функцию объекта
            }
        }
    }

    stop() {
        if(this.timerId){
            clearInterval(this.timerId)
            this.timerId = null;
        }
    }
    
    printAlarms(){
        this.alarmCollection.forEach((item) => console.log(item.id, item.time))
    }

    clearAlarms(){
        stop();
        this.alarmCollection.forEach((item,index,arr) => arr.splice(0,arr.length))
    }
} 

function testcase(){
    let clockTimer = new AlarmClock
    clockTimer.addClock("16:45", f => console.log('Работает'), 1) 
    clockTimer.addClock("16:45", f => f, 1);
    clockTimer.addClock("16:45", f => f, 2);
    clockTimer.addClock("16:45", f => f, 3);
    clockTimer.clearAlarms()
    console.log(clockTimer)
}