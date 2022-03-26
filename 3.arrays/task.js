// function compareArrays(arr1, arr2) {
//   function isElement(currentElementArr,){
// arr1.every()
//   }
//   // arr1.every(element) === arr2.every(element)
//   let result;

  // Ваш код

//   return result; // boolean
// }

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);
  
  return resultArr; 
}

// function every(arr, func) {

//   for (let i = 0; i < arr.length; i++) {
//     if (!func(arr[i], i, arr)) {
//       return false;
//     }
    
//   }

//   return true;
// }