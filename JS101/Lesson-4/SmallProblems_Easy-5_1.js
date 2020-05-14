/* eslint-disable max-lines-per-function */
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

function getAngle(dms) {
  let lastIndex = dms.indexOf(')');
  let begIndex = dms.indexOf('(');
  let num = dms.slice(begIndex + 1, lastIndex);

  while (num < 0) {
    num = Number(num);
    num += 360;
  }

  if (num % 10 === 0) {
    return num + '°00\'00"';
  } else {
    let degrees = num.slice(0, num.indexOf('.'));
    let minutes = 0;

    let seconds = (Number(minutes) * 60) - (Math.floor(Number(minutes) * 60)).toString();
    seconds = Math.round(seconds * 60);

    minutes = (Math.floor(Number(minutes) * 60)).toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    return degrees + '°' + minutes + "'" + seconds + '"';
  }
}

console.log(getAngle('dms(-360)'));