let statement = true;

function callApi(){
    let p = new Promise((res,req)=>{

        if(statement === false)
        {
            res('its true statement')
        }
        else
        {
            req('its false statement')
        }
        
    })
    
    return p
}

callApi()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

const asyncFunction = async()=>{
    const response  = await fetch('')
    const data = await response.json()

    console.log(data);
}