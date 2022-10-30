// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange=function(){

//     if(this.readyState===4 && this.status===200)
//     {
//         var obj = JSON.parse(this.responseText)
//         console.log(obj);

//        document.getElementById("demo").innerHTML="";

//        obj.forEach((value,index) => {

//             let p = document.createElement('p');
//             p.append(value.title)

//             document.getElementById("demo").appendChild(p);
//        });


        
//     }

// }

// xhttp.open("GET","data.json",true);
// xhttp.send();

fetch('data.json')
.then((response)=>response.json())
.then((data)=>{
    console.log(data);

    //    document.getElementById("demo").innerHTML="";

       data.forEach((value,index) => {

            let p = document.createElement('div');
            p.append("title : "+value.title)

            let p1 = document.createElement('p');
            p1.append("body : "+value.body)

            document.getElementById("demo").appendChild(p);
            document.getElementById("demo").appendChild(p1);

       });
})
.catch((err)=>{
    console.log(err);
})