function table(a)
{
let i = 1;
let table1 = setInterval(() => {
    console.log(a*i);
    i++;
    if(i === 11)
    {
        clearInterval(table1)
    }
},1000)
}
table(9);
