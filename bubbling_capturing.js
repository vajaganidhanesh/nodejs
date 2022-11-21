document.getElementById('grandparent').addEventListener('click',(e)=>{
    console.log("grandparent block");
    e.stopPropagation()
},true)
document.getElementById('parent').addEventListener('click',(e)=>{
    console.log("parent block");
},true)
document.getElementById('child').addEventListener('click',(e)=>{
    console.log("child block");
    // e.stopPropagation();
},true)

let array = [
    {
        id : 1,
        name:"dhanesh",
        salary:35000,
    },
    {
        id : 2,
        name:"vajagani",
        salary:40000
    }
]
let array2 = [
    {
        id:1,
        designation:"web developer",
        skils:"java"
    },
    {
        id:2,
        designation:"MERN Stack developer",
        skils:"javascript"
    }
]

let newArray = [];

array.map((values1,index1)=>{
    array2.map((values2,index2)=>{
        if(values1.id === values2.id){
            newArray.push(Object.assign({},values1,values2))
        }
    })
})

console.log(newArray);