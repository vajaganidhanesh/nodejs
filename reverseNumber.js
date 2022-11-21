let number = 4592;
console.log(reverse(number));
function reverse(number)
{
    let reverse = 0;
    let rem;

    while(number > 0)
    {
        rem = number%10;
        reverse = (reverse*10) + rem;
        number=number/10
    }
    return reverse;
}