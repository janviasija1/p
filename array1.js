const arr1 = [2, 4, 3, 7, 5, 3, 9];
  const evenNo = arr1.filter((num) => num % 2 === 0);
  const sq = arr1.map(num => num * num);              
  const sum = arr1.reduce((sum, num) => sum + num, 0); 
  console.log("Even no:",  evenNo);
  console.log("suares:", sq);
  console.log("sum:", sum); 
