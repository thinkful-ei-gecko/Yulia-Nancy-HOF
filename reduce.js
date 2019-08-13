'use strict';
let inpStr = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const arrOfWords = inpStr.split(' ');
let decoded = arrOfWords.reduce(function(accumulator, currentValue){
  if (currentValue.length === 3) {
    return accumulator + ' ';
  } else {
    return accumulator + currentValue[currentValue.length-1].toUpperCase();
  }
}, '');
console.log(decoded);
