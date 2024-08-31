const num1 = 19;
const num2 = 29;
const num3 = 39;
const num4 = 49;
const num5 = 59;

// Array------->

// (), {}, []

const numbers = [10, 9, 78, 18, 20];
const friends = ["Tonmoy", "Sagor", "Rahim", "Karim", "Faisal"];
// Array index er man change kora-->
friends[1] = "Meghla";
const passed = [true, false, true, false];
console.log(numbers[3]);
console.log(friends[0]);
console.log(passed[3]);
console.log(friends.length);
console.log(friends);

// ------Not Good------->
const mixed = [399, "Tonmoy", 25.54, true];
console.log(mixed[2]);
