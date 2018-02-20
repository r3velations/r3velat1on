// creating a simple function. ES6 Arrow function.
const double = number => number*2
console.log(double(2)) // prints 4
// Note: ES6 allows no parenthethes when only a single paramter. *needs parenthethes.

//lets add a 2nd paramater to the above function.
const double2 = (number1, number2) => number1*2 + number2*2
console.log(double2(26, 15)) // prints 82

const rangeDay = (distanceMeters) => {
  if (distanceMeters > 300) {
    console.log(`Looks like you will be doing some long range work, remember the spotting scope.`)
  } else {
    console.log(`Go ahead and leave the spotting scope at home today.`)
  }
}
rangeDay(250) // prints Go ahead and leave the spotting scope at home today.

const hogHunt = (totalWeight, numberOfHogs) => numberOfHogs / totalWeight
console.log(hogHunt(5,1098)) //prints 219.6
