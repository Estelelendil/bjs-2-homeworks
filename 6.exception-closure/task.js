function parseCount(parsObject){
  let parseValue = Number.parseInt(parsObject, 10);
  if (isNaN(parseValue)){
    throw new Error("Невалидное значение");
  }
  return parseValue
  // try {
  //       return parseValue
  //     }
  // catch(e){
  //    console.error(e);
  // }   
}
// console.log(parseCount("ыфва"))

function validateCount(parseValue){
  try {
    return parseCount(parseValue);
  }
  catch(e){
    return e;
  }
}
// console.log(validateCount("ыфва"))

// --Task 2--

class Triangle {
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
    if( a + b < c ||a + c < b || c + b < a){
      throw new Error("Треугольник с такими сторонами не существует")
    }
  }
  getPerimeter(){
    return this.a + this.b + this.c;
  }
  getArea(){
    let p = this.getPerimeter() / 2;
    let s = Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c));
    return Number(s.toFixed(3))
  }
}
// const abc = new Triangle(1, 3, 3)
// console.log(abc)

function getTriangle(a,b,c){
  let triangle;
  try{
    return triangle = new Triangle(a,b,c)
  }
  catch(e){ 
    triangle = "Ошибка! Треугольник не существует"
    triangle.getArea = function(){
      return "Ошибка! Треугольник не существует"
    };
    triangle.getPerimeter = function (){
      return "Ошибка! Треугольник не существует"
    }
    return triangle
  }
}
let tri = getTriangle(1,3,100)
console.log(tri)
console.log(tri.getArea)