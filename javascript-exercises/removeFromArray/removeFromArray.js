const removeFromArray = function(arr, ...itemsToRemove) {
  const newArr = [];

  arr.forEach((item) => {
    if (!itemsToRemove.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}

module.exports = removeFromArray
