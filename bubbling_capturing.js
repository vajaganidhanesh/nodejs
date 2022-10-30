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