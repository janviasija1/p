arr = [1,2,4,2,6,4,2,6,8,9,5,2,4,6];
//const HighestValue = (arr) => 
{
    let max = arr[0];
    for(let i=0; i<arr.length; i++)
    {
        if(max < arr[i])
        {
            max = arr[i];
                }
    }
    //console.log(max);
}
//HighestValue(arr);


let sum = 0;
arr.forEach((item) => {
    sum += item;
}
)
console.log(sum);