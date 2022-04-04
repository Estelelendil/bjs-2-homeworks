// --1--
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}


// --2--
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


// --3--4--
Student.prototype.addMark = function(mark){
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(... mark){
  if(this.marks === undefined){ 
    this.marks = [];
    this.marks.push(...mark);
    } else {
      this.marks.push(...mark);
    }
}


// --5--
Student.prototype.getAverage = function(){

  const sum = this.marks.reduce(function(sum, current) {
    return sum + current
  });

  return sum / this.marks.length;

}

// --6--
Student.prototype.exclude = function(reason){
  this.excluded = reason;
  delete this.subject;
  delete this.marks
}


let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); //4.6666
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
