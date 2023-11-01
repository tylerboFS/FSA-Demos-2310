// Shout is declared in the global scope and is available to both functions 
const shout = "Shout";

function justShout() {
  console.log(shout + ", " + shout);
  return;
 }
 
function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
 }
 
justShout();
shoutItAllOut();
 
// Lions is declared locally so it is available only to the sayLions function
function sayLions() {
  const animal = "Lions"; 
  console.log(animal);
  return;
}
 
// Tigers is declared locally so it only available to the sayTigers function 
function sayTigers() {
  const animal = "Tigers";
  console.log("and " + animal + " and "); 
  return;
 }
 
// Variables of the same name should not be declared in global and local scope
// Kept global scope
const bears = "Bears";
 
// Removed local scope
function sayBears() {
  console.log(bears + "! OH  MY!");
  return;
 }

sayLions();
sayTigers();
sayBears();
 
// Declaring sing in the outer function makes it available to the inner and outer function
function singAlong() {
  const sing = "Sing";
  console.log(sing + ",");
  const singASong = function () {  
    console.log(sing + " a Song.");
   };
  singASong();
 }
 
singAlong();
 
