fetch('data.json')
.then((data)=>data.json())
.then((output)=>{
    output.map((value,index)=>{
        
        // console.log(value.title);
        let p = document.createElement('p');
        p.append(value.title);
        document.getElementById('demo').appendChild(p);

    })
})

.catch((err)=>{
    console.log(err);
})

function getData(url,callback)
{
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange=function(){
        if(this.status===200 && this.readyState===4)
        {
            let data = JSON.parse(this.responseText);
            callback(data);
        }
    }

    xhttp.open('GET',url,true);

    xhttp.send();
}

getData('data.json',(response)=>{
    console.log(response.id);
})

