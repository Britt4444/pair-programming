//Pair programming Module 2:  Aziz Rahman and Britt Cowper

const raisinAlarm = function(cookie) {
  //use includes to search cookie array for raisin value
  if (cookie.includes("🍇")) {
    return "Raisin alert!";
  //if no raisin found...
  } else {
    return "All good!";
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  //declared empty array to push values to.
  let result = [];
  //iterates over the array.
  for (let i = 0; i < cookies.length; i++) {
  //pushed the return of raisinAlarm array to the empty result array.
    result.push(raisinAlarm(cookies[i]));
  }
  //returns empty result array when false.
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

/* expected output
Raisin alert!
Raisin alert!
All good!
 [Function: raisinAlarm]
["Raisin alert!", "Raisin alert!", "All good!"]

Complete the function named raisinAlarm that will receive
an array of strings and return the correct assessment of raisin presence.
*/

