function swapPropertiesAndValues(obj) {
    const swappedObj = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        swappedObj[obj[key]] = key;
      }
    }
  
    return swappedObj;
  }
  
  const originalObject = { name: "John", age: 30, city: "New York" };
  const swappedObject = swapPropertiesAndValues(originalObject);
  
  console.log("Original Object:", originalObject);
  console.log("Swapped Object:", swappedObject);
  