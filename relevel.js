// // Function candidate has to implement
// function maximumSubarray(arr, n)
// {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if(element > n)
//     {
//         return 2
//     }
//     else{
//         return 3
//     }
//   }
// }

// //Driver Code
// var t =readline();
// while(t--)
// {
// 	var n = readline();
// 	var temp = readline().trim();
// 	var s = temp.split(" ");
// 	for(i=0;i<n;i++)
// 	{
// 	    s[i]=Number(s[i]);
// 	}
// 	var num  = maximumSubarray(s,n);
// 	print(num);
// }

// let data = '';
// let value = false;

// console.log(data === value);

let number = { value: 10 };
let anotherNum = number;

function changeNumber(num) {
  console.log("number before updation", num);
  num.value=num.value+2;
  console.log("number after updation", num);
}

console.log("the number at first", number);
changeNumber(number);
console.log("number after intilization of number", number);
console.log(anotherNum);
