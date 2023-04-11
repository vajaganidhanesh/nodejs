document.getElementById('types').addEventListener('click',(e)=>{
    console.log(e.target.id);
    window.location.href = '/'+e.target.id
});

let a = 10;
var b = 20;
const c = 30;
let students = {
    name : "dhanesh",
    age : 24,
    desigation : 'frontend developer'
}

console.log(students);

// function demo(){
//     return Promise.resolve(1);
// }

async function demo(){
    return 1;
}

console.log(demo());