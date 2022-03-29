// --1--
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
// let student1 = new Student("Tony", "male", 37)

// --2--
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
// student1.setSubject("Algebra");

// --3--4--
Student.prototype.addMark = function(mark){
  // debugger;
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(... mark){
  // debugger;
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(...mark);
    } else {
      this.marks.push(...mark);
    }
}

// student1.addMark(5,4,5);
// student1.addMark(4);
// student1.addMark(5);
//Создайте метод addMarks(mark1,mark2,mark3...) по аналогии с п.2, который при вызове будет добавлять студенту сразу несколько оценок. 
// Подсказка: так как количество добавляемых оценок неизвестно, воспользуйтесь rest(?) параметром.

// --5--
Student.prototype.getAverage = function(){
  // debugger
  const sum = this.marks.reduce(function(sum, current) {
    return sum + current
  });

  return sum / this.marks.length;
//   const initialValue = 0;
//   return (this.marks.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
//   ) / this.marks.length);
}

// --6--
Student.prototype.exclude = function(reason){
  this.excluded = reason;
  delete this.subject;
  delete this.marks
}

// console.log(student1.getAverage());
let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); //4.6666
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}