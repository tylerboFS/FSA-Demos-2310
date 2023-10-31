// Objects are a collection of properties
const planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion",
  neighbors: ["Venus", "Mars"],
  moonInfo: {
    name: "Moon", 
    diameter: "3,475 km" 
  },
  greeting: () => {
    console.log("Hi, I'm Earth");
  }
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

//You can add new properties to an existing object
planet.color = "blue";

console.log(planet.color);

// Returns keys of an object
console.log(Object.keys(planet));

// Returns values of an object
console.log(Object.values(planet));

// Loops through keys of an object
for(const key in planet){
  console.log(planet[key]);
}
