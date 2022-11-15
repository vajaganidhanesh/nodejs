

// Function candidate has to implement
function maximumSubarray(arr, n)
{
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element > n)
    {
        return 2
    }
    else{
        return 3
    }
  }
}


//Driver Code
var t =readline();
while(t--)
{
	var n = readline();
	var temp = readline().trim();
	var s = temp.split(" ");
	for(i=0;i<n;i++)
	{
	    s[i]=Number(s[i]);
	}
	var num  = maximumSubarray(s,n);
	print(num);
}