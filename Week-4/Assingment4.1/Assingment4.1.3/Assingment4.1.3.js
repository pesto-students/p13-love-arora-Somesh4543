function drawTriangle(triangleSize) {
    if (triangleSize <= 0) {
      console.log("Please provide a positive triangleSize.");
      return;
    }
  
    for (let i = 1; i <= triangleSize; i++) {
      let asterisks = '';
      
      for (let j = 1; j <= i; j++) {
        asterisks += '*';
      }
  
      console.log(asterisks);
    }
  }
  
  drawTriangle(4);
  