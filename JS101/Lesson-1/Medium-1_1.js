
let arr = [{ a: 2 }, [1, 2], 3];

function rotateArray(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  } else {
    for (let element of arr) {
      result.push(element);
    }
  }
  let movedElement = result.shift();
  result.push(movedElement);
  return result;
}

console.log(rotateArray(arr));