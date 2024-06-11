// Create pop up alert with user input of ice cream flavors.

// Create a table with two columns and three rows. 

// Put ice cream flavors in the first column and the amount ordered in the 2nd column.

const string = ["vanilla","vanilla","vanilla","strawberry","coffee","coffee"];
let flavor = prompt("What is your favorite flavors:", string);

const icecream = {
  flavor: ["vanilla", "strawberry", "coffee"],
  numOrdered: [string],
};

let numOrdered = 0;


console.table (icecream);

console.log (icecream[string]);



function calculateOrder(numOrdered) {
  let string = string.split (",");
for (
    let i = 0, numOrdered = string.length;
    i < numOrdered;
    i += 1
) {
  string.push (flavor);
}
return numOrdered;
}





// let numOrdered = string.split(",");  
// 
//   string.push(+numOrdered(i));
// }


// let numOrdered = "0";



// function stringSplit (numOrdered)
// 
// for (let i = 0; i< string.length; i++);









// function splitString(flavors, seperator) {

// const numOrdered 

// for (const flavor in icecream) {
//   console.log (flavor);
//   console.log (icecream.flavor(numOrdered));
// };

// let numOrdered = 0;
// for const (numOrdered in icecream) {
//   numOrdered += flavor [icecream];
// }


   

// const stringArray = string.split(",");
//   const numbers = [1,2,3,4,5,6];
//   for (let i = 0; i < stringArray.length; i++) {
//     const str = stringArray[i];
//         const numbers = parseInt(str);
//         numbers.push(number);
   
//   }
//   return stringArray;
// }


// const userInputString = prompt(
//     "Please enter some integers separated by commas.",
//     "1,2,3,4,5"
//   );
  
  
//   const stringArray = flavors.split(",");

//   const numbers = [];
//   for (let i = 0; i < stringArray.length; i++) {
//     const str = stringArray[i];
//     const number = parseInt(str);
//     // numbers.push(number);
//   }

//   return number;


  

  
  
//   const userInputString = prompt(
//     "Please enter some integers separated by commas.",
//     "1,2,3,4,5"
//   );
  
  // Split the string of numbers into an array of strings.
//   const stringArray = userInputString.split(",");
  
  // Convert the array of strings into an array of numbers.
//   const numbers = [];
//   for (let i = 0; i < stringArray.length; i++) {
//     const str = stringArray[i];
//     const number = parseInt(str);
//     numbers.push(number);