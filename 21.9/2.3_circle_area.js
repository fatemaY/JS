function circleArea(radius) {
    // Calculate  area= pI*r^2
    const area = Math.PI * Math.pow(radius, 2);
    console.log("Area:", area);
    const roundedArea = Math.round(area * 100) / 100;
    console.log("Area -rounded to two decimal places:", roundedArea);
  }
  const radius = 5;
  circleArea(radius);
  