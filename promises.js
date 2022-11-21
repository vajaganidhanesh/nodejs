// function newPromise(){
//     let p = new Promise((resolve,reject)=>{
//         let value = true;
//         if(value===true){
//             resolve("its resolves the areas")
//         }
//         else{
//             reject("its rejects the values")
//         }
//     })
//     return p;
// }
// newPromise()
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err);
// })

function toGetData(url)
{
    let p = new Promise((resolve,reject)=>{

        let xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange=function(){

            if(this.readyState===4)

            if(this.status===200){
                resolve(JSON.parse(this.responseText))
            }

            else{
                reject('some problem')
            }

        }

        xhttp.open('GET',url,true)
        xhttp.send();

    })
    return p;
}

toGetData('data.json')
.then((data)=>{

    console.log(data);
    data.map((value,index)=>{
        
        // console.log(value.title);
        let p = document.createElement('p');
        p.append(value.title);
        document.getElementById('demo').appendChild(p);

    })
})
.catch((err)=>{
    console.log('its an error');
    console.log(err);
})