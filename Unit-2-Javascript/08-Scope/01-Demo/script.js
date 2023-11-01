// A variable declared in global scope is available to all functions
const hello = "Hello"; 

const sayHello = () => {
  console.log(hello);
  return;
}

const sayHelloAgain = () => {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
const sayGoodbye = () => { 
  const goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
const sayGoodbyeAgain = () => { 
  console.log(goodbye);
  return;
};

// Shadowing happens when the same variable is used in the local and global scope
const shadow = "Hello";
 console.log(shadow);

// Logs "Hello"
const sayWhat = () => {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
const sayWhatAgain = () => {
  const shadow = "Goodbye";
  console.log(shadow);   
};

sayGoodbye();
sayWhat();
sayWhatAgain();
