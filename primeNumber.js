let a = 11;

var value = true

for(let i=2;i<=a-1;i++)
{
    if(a % i == 0)
    {
        value = false;
        // continue;
    }
}

if(value == true)

    console.log(`${a} is a prime number`);

else{

    console.log(`${a} is not a prime number`);
    
}