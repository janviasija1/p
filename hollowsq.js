let length = 5;
for (let i = 1; i <= length; i++) {
  let str = "";
  for (let j = 1; j <= length; j++) {
    if (i === 1 || i === length || j === 1 || j === length) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}
