const comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
const arithmaticOperators = ["+", "-", "%"];
const logicalOperators = ["and", "or", "not"];
const myString = "Hello String";
const stringList = "One, Two, Three";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort(); 

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
arithmaticOperators.push("%");

//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
const logicalOperatorsSliced = logicalOperators.slice(0,2);

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
const myNewString = myString.replace("String", "World");
console.log(myNewString);

//The orginal string is unchanged
console.log(myString);

//Splits up the string according to the parameter and returns an array of the split up string.
const myArray = stringList.split(", ");

console.log(myArray);
