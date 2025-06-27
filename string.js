const fruits = [
    {Name: "Mango", count: 5},
     {Name: "Banana", count: 1},
      {Name: "Watermelon", count: 9}
]
console.log("Array:", fruits)

function fruits1(fruitadd){
const fruitfind = fruits.find(item => item.Name === fruitadd.Name)
if(fruitfind)
{
    fruitfind.count += 1
}
else{
    fruits.push(fruitadd)
}
}
 fruits1({Name: "Apple", count: 1})
 fruits1({Name: "Mango", count: 1})
 fruits1({Name: "Watermelon", count: 1})
 fruits1({Name: "Banana", count: 1})
 console.log(fruits)