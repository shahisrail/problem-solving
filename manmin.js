function findMaxMin(arr) {
    if (arr.length === 0) {
      return null; 
    }
  
    const max = Math.max(...arr); 
    const min = Math.min(...arr); 
  
    return { max, min };
  }
  
  // Example usage:
  const numbers = [10, 25, 6, 48, 32, 51, 19];
  const maxMin = findMaxMin(numbers);
  console.log("Maximum number:", maxMin.max);
  console.log("Minimum number:", maxMin.min);
  