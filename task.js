function solveEquation(a, b, c) {
  let arr = [];

  // код для задачи №1 писать здесь
  
  let d = b**2-4*a*c;

  let x1;
  let x2;
  
  
  if (d === 0) {
      x1 =  - b / (2 * a);
      arr.push(x1); 
  };
    
  if (d > 0) {
      x1 = (- b + Math.sqrt(d))/(2 * a);
      x2 = (-b - Math.sqrt(d))/(2 * a);
      arr.push(x1, x2); 
  }
  return arr; // array
  }

