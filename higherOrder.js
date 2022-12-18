const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    console.log(filteredArr)
  }

  function isOdd(x) {
    return x % 2 != 0;
  }
  
  // Function containing logic for filtering out even numbers
  
  function isEven(x) {
    return x % 2 === 0;
  }

  filterFunction(arr, isOdd)
// Output of console.log(filterFunction(arr, isOdd)):
// [ 1, 3, 5, 7, 9, 11 ]

// For filtering out even numbers

filterFunction(arr, isEven)
// Output of console.log(filterFunction(arr, isEven)):
// [ 2, 4, 6, 8, 10 ]