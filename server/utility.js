const removeDuplicates = (array) => {
  // Sets don't allow duplicate values
  const set = new Set()
  const uniqueArray = array.filter(el => {
    // Checks if the set has an id already
    const duplicate = set.has(el.id);
    // Adds the id to the set
    set.add(el.id);
    // Will only add a value to the array if it doesn't belong to set
    return !duplicate;
  });
  return uniqueArray;
}

const generateRandomArray = (array) => {
  const randomArray = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * (array.length));
    randomArray.push(array[randomNumber]);
  }
  return randomArray;
}

module.exports = { removeDuplicates, generateRandomArray }