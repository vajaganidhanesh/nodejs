let str = '1';
let number = Number(str);
 
str = str + 1
console.log(str, typeof str);

// let valueForm = {}

// const readvalue = (property,value )=>{
//     valueForm[property] = value
//     console.log(valueForm); 
// }

// document.getElementById('input').addEventListener('input',(e)=>{
//     readvalue('input',e.target.value)
// })

// document.getElementById('btn').addEventListener('click',()=>{
//     if(isNaN(valueForm.input) === false){
//         console.log('its number');
//     }
//     else{
//         console.log('its not a number');
//     }
// })

// let arr = [1,2,3,4,5,6];
// let x = arr.map((val,index)=>{
//     if(val % 2 === 0){
//         return val,index
//     }
// })
// console.log(x);

// let y = arr.filter((val,index)=>{
//     if(val % 2 ===0){
//         return val
//     }
// })

// console.log(y);

// let max = 0;

// let z = arr.reduce((acc,curr)=>{
//     if(acc > max)
//     {
//         max = acc
//     }
// })
// console.log(max);
// console.log(z);
