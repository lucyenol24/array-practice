////In the console: 
//
//var arr = [4, 5, 23, 11]
//
//arr.push(90);
//5
////(returns with the new length of the array)
//
//arr.pop()
//90
////pop returns the last element in the Array
//
//arr.shift()
//4
////makesit shorter
//
//arr.unshift(98)
//4
////returns length of array with new Number
////  [98, 5, 23, 11]
//
//arr.splice 
////adds new contents while removing old ones. "splices it out of the array"
//
//var arr = [1, 2, 3, 4]
//
//arr.forEach(function(el){
//  console.log( el * 2 )  
//})
//
////each one times 2
//
////Practice JS:
//
//var inty = [1, 4, 9, 24]
//
//function square(el) {
//  console.log(el**2);
//}
//
//inty.forEach(square);
//
////creating an array of intergers that loops through and console logs each value of the element and squares it
//
//inty.indexOf(24)
//1
//
//inty.indexOf(2000)
//-1 
////negative because it is not in the array
//
////Write a function that accepts a spice name and
////updates an array like the example, adding the
////name if it is not already contained, removing it if
////it is. 
//
//var spicy = ["clove", "nutmeg", "ancho"]
//
//function toggleSpices(newSpice) {
//  var i = spicy.indexOf(newSpice);
//  if (i == -1) {
//    spicy.push(newSpice);
//  } else {
//    spice.splice(i, 1);
//  }
//  console.log(spicy);
//}
//
////Custom Sort
//function customSortFunc(a, b) {
//  return a - b;
//}
//
//.sort(customSortFunc)
//
////this is how you compare numbers. 




//More Sorting Practice

var people = [{age: 12, name: "Richard"},
              {age: 19, name: "Elvis"},
              {age: 4, name: "Jaime"}]

//custom sort fun by age attribute. 
function sortByAge(a, b) {
  return a.age - b.age;
}

//custom sort func, by name attr
function sortByName(a, b) {
  if(a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else if(b.name < a.name) {
    return 1;
  }
  return 0;
}

// call sort with custom func
console.log(people.sort(sortByAge))



//Function Practice
//Write a function that takes an array of strings
//as a parameter and returns the sum of
//characters of all elements in array. 

countEmUp(["elm", "birch", "oak"]);
