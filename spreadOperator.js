let arr1 = [1, 2, 3, 4, 5];

let arr2 = [6, 7, 8, 9, 10];

// ---spread operator---

let arr3 = [...arr1, ...arr2];

let arr4 = arr2.concat(arr1);

// console.log(arr3);

// console.log(arr4);

function values(...vals) {
  // console.log(vals);
}
values(1, 3, 4, 5, 6, 7, 8, 9);

let developer1 = {
                    name: "dhanesh",
                    skills : {
                        Primaryskills:'Frontend development',
                        secondaryskills:'Backend development',
                    } 
                };
// let developer2 = Object.assign({}, developer1);
// let developer2 = {...developer1}
let developer2 = JSON.parse(JSON.stringify(developer1))
developer2.name = "vajagani";
developer2.skills.Primaryskills = 'UI/UX designer'

// console.log(developer1);
// console.log(developer2);


// var x = 12;
//  x = 'dhanesh'
//  x = true

var data = 22;
function valies(){
    x = {name:'dhanesh'};
    console.log(data);
}
valies()
console.log(x);