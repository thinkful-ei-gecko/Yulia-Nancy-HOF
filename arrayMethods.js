let arrayTurtleMove = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filterMove = arrayTurtleMove.filter(function(move){
    //console.log(move[0]);
    
    return move[0] >= 0 && move[1] >= 0;

})

//console.log(filterMove);

let totalSteps = filterMove.map(function(step){
    return step[0] + step[1];
})

let start = 1;

let totalStepsCounter = totalSteps.forEach(function(step1){
    if(start !== 1){
        console.log(`Movement #${start}: ${step1} steps`)
    }
    else{
        console.log(`Movement #${start}: ${step1} step`)
    }
 
    start++;
})

console.log(totalSteps)