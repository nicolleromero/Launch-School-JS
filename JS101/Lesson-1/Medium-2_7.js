
function bubbleSort(arr) {
  while (true) {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let element1 = arr[i];
      let element2 = arr[i + 1];
      if (element1 > element2) {
        arr[i] = element2;
        arr[i + 1] = element1;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*
Strings are compared lexographically
*/