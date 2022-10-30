let arr = [1,2,3,4,5,6,7,8];

evenOddArray(arr)

function evenOddArray(arr){

    let newArray = [];
    let index = 0

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2 ===0)
        {
            newArray[index] = arr[i]
            index++;
        }
   
    }

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2 !==0)
        {
            newArray[index] = arr[i]
            index++;

        }
   
    }

    console.log(newArray);
}
