function drawTriangle(triangleSize) {

    // Your solution goes here
    for (let i = 1; i<= triangleSize; i++) {
        console.log('*'.repeat(i));
    }
 }
 
 let triangleSize = 5
 console.log('Triangle size: ', triangleSize);
 drawTriangle(triangleSize);