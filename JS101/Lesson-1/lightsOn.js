

const switchPasses = (allLights, switches) => {
  for (let factor = 2; factor <= switches; factor++) {
    changeLightsPass(allLights, switches, factor);
  }
  return buildArray(allLights, switches);
}

const changeLightsPass = (allLights, switches, factor) => {
  for (let key = 1; key <= switches; key++) {
    if (key % factor === 0) {
      allLights[key] = !allLights[key];
    }
  }
  return allLights;
}

const buildArray = (allLights, switches) => {
  let arr = [];
  for (let i = 1; i <= switches; i++) {
    if (allLights[i]) {
    arr.push(i); 
    }
  }
  return arr;
}

const lightsOn = (switches) => {
  let allLights = {};
  for (let i = 1; i <= switches; i++) {
    allLights[i] = true;
  }
  return switchPasses(allLights, switches);
}

console.log(lightsOn(100));