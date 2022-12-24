document.getElementById('types').addEventListener('click',(e)=>{
    console.log(e.target.id);
    window.location.href = '/'+e.target.id
});