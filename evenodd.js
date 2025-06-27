let i=14;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is Even");
  } else {
    console.log(i + " is Odd");
  }
}


//divisible by 2 and 3 both
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i + " is divisible by both 2 and 3");
  }
}


//divisible by 2 or 3
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i + " is divisible by 2 or 3");
  }
}
