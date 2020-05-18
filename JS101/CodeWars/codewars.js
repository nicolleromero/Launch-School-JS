/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
// function cakes(recipe, available) {
//   let maxCakes = [];
//   for (let key in recipe) {
//     let availableArr = Object.keys(available);
//     if (!availableArr.includes(key)) {
//       return 0;
//     }
//     if (available[key] / recipe[key] < 1) {
//       return 0;
//     } else {
//       maxCakes.push((parseInt(available[key] / recipe[key], 10)));
//     }
//   }
//   return Math.min(...maxCakes);
// }

// let recipe = {"eggs":14,"chocolate":50,"sugar":37};
// let available = {"oil":4900,"chocolate":2300,"crumbles":8800,"nuts":4200,"eggs":3600,
// "cream":2500,"flour":7500,"cocoa":3700,"pears":6900,"milk":7300,"butter":7500,"sugar":6600,"apples":5200};

// console.log(cakes(recipe, available));

// function getPrimes(max) {
//   if (max < 2) {
//     return [];
//   }

//   const primes = [2];

//   for (let num = 3; num <= max; num += 2) {
//     let isPrime = true;

//     for (let prime of primes) {
//       if (num % prime === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       primes.push(num);
//     }
//   }

//   return primes;
// }

// function sumOfDivided(lst) {
//   let P = [];
//   let pTemp = [];
//   let topPrime = lst.map((num => Math.abs(num)));
//   topPrime = Math.max(...topPrime);
//   let primes = getPrimes(topPrime);
//   console.log(primes);
//   let primeFactor = [];
//   for (let num of lst) {
//     for (let i = 0; primes[i] <= Math.abs(num); i++) {
//       let factor = primes[i];
//       if (Math.abs(num) % factor === 0) {
//         primeFactor.push(factor);
//         pTemp.push([factor, num]);
//       }
//     }
//   }
//   primeFactor = primeFactor.filter((v, i, a) => a.indexOf(v) === i);
//   primeFactor.sort((a, b) => a - b);

//   for (let i = 0; i < primeFactor.length; i++) {
//     let sum = 0;
//     let candidate = [];
//     for (let j = 0; j < pTemp.length; j++) {
//       if (pTemp[j][0] === primeFactor[i]) {
//         sum += pTemp[j][1];
//       }
//     }
//     candidate[0] = primeFactor[i];
//     candidate[1] = sum;
//     P.push(candidate);
//   }
//   return P;
// }
// let lst = [15, 30, -45];
// console.log(sumOfDivided(lst));

// function whoIsNext(names, steps) {
//   let count = names.length;
//   let step = 1;

//   while (step <= steps) {
//     step += count;
//     count *= 2;
//   }

//   if (step > steps) {
//     count /= 2;
//     step -= count;
//   }

//   const index = Math.floor((steps - step) / (count / names.length));
//   return names[index];
// }
// let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

// // r = n, n = n * 2
// // r = 2 * n, n = r * 2
// // r = 4 * n, n = r * 2
// console.log(whoIsNext(names, 7230702951));

function orderWeight(strng) {
  if (strng === "") {
    return "";
  }

  let newSet = strng.split(" ");
  let orderedList = [];
  for (let i = 0; i < newSet.length; i++) {
    let newWeight = sumChars(newSet[i]);
    let oldWeight = newSet[i];
    orderedList[i] = [newWeight, oldWeight];
  }
  orderedList.sort((a, b) => a[0] - b[0]);
  let result = orderedList.map(arr => arr[1]);
  return result.join(" ");
}

function sumChars(weight) {
  let sum = 0;
  for (let char of weight.split("")) {
    sum += Number(char);
  }
  return sum;
}

console.log(orderWeight("103 123 4444 99 2000"));