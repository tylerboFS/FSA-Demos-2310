// Functions are reusable blocks of code that perform a specific task
// This is a <= ES5 function declaration 
function helloES5() { 
  console.log("Hello, I am a ES5 function declaration.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}

// This is a >= ES6 function expression
const helloES6 = () => { 
  console.log("Hello, I am a ES6 function expression.");
  console.log("-----------------------------------");
  return;
};

// Functions must be called to execute
helloES5(); 
helloES6();

//Functions can be called again to make the block of code execute again
helloES5(); 

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
const declareHelloAgain = (x,y,z) => { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
  console.log("-----------------------------------");
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true);

const getGreeting = (name) => { 
  return `Nice to meet you, ${name}`;
}

const greeting1 = getGreeting("Tyler");

const greeting2 = getGreeting("Greg");

console.log(greeting1);