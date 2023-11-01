const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 },
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

moviePatrons.forEach((patron) => console.log(patron.age));

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

const canWatchRatedR = moviePatrons.filter(function (patron) {
  return patron.age > 17;
});

console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array
const nums = [1, 2, 3, 4];

const numsTimesTwo = nums.map((n) => n * 2);

console.log(numsTimesTwo);

const cardedMoviePatrons = moviePatrons.map((patron) => {
  // Copy the object being iterated over
  const patronCopy = { ...patron };
  // Do everything else the same
  if (patronCopy.age >= 17) {
    patronCopy.canWatchRatedR = true;
  } else {
    patronCopy.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return patronCopy;
});

console.log("Movie Patrons: ");
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);

// 4. Find
// returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const result = moviePatrons.find((patron) => patron.name === "Ashley");

console.log(result);

const arr = ["a", "b", "c"];

arr.find((element)=> {
  return element === "b";
});

//5. Reduce
// Reduces array to a single by using an accumulator to pass to the callback frunction for each element in the array
const nums2 = [1, 3, 4, 2];

const sum = nums2.reduce(  (accumulator, currentValue) => {
    console.log("TOTAL SO FAR: ", accumulator);
    return accumulator += currentValue;
}, 0  );

console.log("SUM: ", sum);


