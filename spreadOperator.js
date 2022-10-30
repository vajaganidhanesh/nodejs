let arr1 = [1,2,3,4,5];

let arr2 = [6,7,8,9,10];

// ---spread operator---

let arr3 = [...arr1,...arr2]

let arr4 = arr2.concat(arr1)

// console.log(arr3);

// console.log(arr4);

function values(...vals){
    console.log(vals);
}
values(1,3,4,5,6,7,8,9)