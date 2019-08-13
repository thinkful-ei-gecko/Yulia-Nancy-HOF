'use strict';
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter===0 || warningCounter>=2) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
    else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }        
  }; 
  
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const huricaneWarning = hazardWarningCreator('Huricane is coming');
const earthquakeWarning = hazardWarningCreator('Duck in Cover');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
huricaneWarning('Main St and Pacific Ave');
earthquakeWarning('Centinela Ave and Olympic Blvd');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
huricaneWarning('Main St and Pacific Ave');