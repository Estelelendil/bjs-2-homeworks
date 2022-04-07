function parseCount(parsObject){
  if (isNaN(Number.parseInt(parsObject, 10))){
    throw new Error("Невалидное значение");
  }
  try {
        Number.parseInt(parsObject, 10)
      }
  catch(e){
     console.error(e);
  }
  finally {
    return Number.parseInt(parsObject, 10)
  }
    
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
    let p = this.a + this.b + this.c;
    return p
  }
  getArea(){
    let p = (this.a + this.b + this.c) / 2;
    let s = Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c));
    s = Number(s.toFixed(3))
    return s
  }
}
// const abc = new Triangle(1, 3, 3)
// console.log(abc)

function getTriangle(a,b,c){
  let triangle;
  try{
    triangle = new Triangle(a,b,c)
  }
  catch(e){ 
    return "Ошибка! Треугольник не существует"
  }
  return triangle
}
// console.log(getTriangle(1,3,100))