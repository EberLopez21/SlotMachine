/* 
 Design a program that calculates a car's gas mileage. 
MPG = miles/gallons
Have the user input the number of gallons of gas the car holds, and the number
 of miles it can be driven on a full tank.  Then call a function to calculate
  and return miles per gallon.  After the function call, display the MPG returned
   from the function back to the user.
 */

let numGallons= Number(prompt("Enter number of gallons"));
let numMiles=Number(prompt("Enter miles on full tank"));

function calcMPG(numGallons, numMiles){
    return numMiles/numGallons;}
document.write(numMiles/numGallons);
