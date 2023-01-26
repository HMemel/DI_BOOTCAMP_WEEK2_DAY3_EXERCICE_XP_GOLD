// Exercise 1 : Divisible By Three

// Loop through the array above and determine whether or not each number is divisible by three.
let numbers = [123, 8409, 100053, 333333333, 7];
// Each time you loop console.log true or false.
for(let number in numbers){
    numbers[number]%3 == 0 ? console.log(`${numbers[number]} is divisible by three`) : console.log(`${numbers[number]} is not divisible by three`)
}


// Exercise 2 : Attendance

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  let username = prompt("Hello, enter your name please ");
  for(const user in guestList) {
    username == user ? console.log(`Hi! I'm ${user}, and I'm from ${guestList[user]}`) : console.log("Hi! I'm a guest")
  }



// Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];
let sum = 0;
for (let i of age) {
    sum += i;
}
console.log(sum);
for (let i of age) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
let big = 0;
for (let i of age) {
    if (i > big) {
        big = i;
    }
}
console.log(big);

