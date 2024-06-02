//import name list into array
const unsortedNames = ['Adrian', 'Ashe', 'Brian', 'Dan', 'Erick', 'Aria', 'Kim', 'Ploy', 'Lauren', 'Jeremy'];
//sort array alphabetically
const sortedNames = unsortedNames.sort();
console.log(sortedNames);
//create state array

const stateArray = [];
sortedNames.forEach((name) => {
  stateArray.push({
    name: name,
    safe: false,
    snoozed: false,
    answeringNow: false,
  });

});

console.log(stateArray);

export default stateArray;