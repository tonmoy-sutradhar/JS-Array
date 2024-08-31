const friends = ["Tonmoy", "Sagor", "Rahim", "Karim", "Faisal"];

// Includes use kora hoi value ta array te ace kina----->
console.log(friends.includes("Tonmoy"));
console.log(friends.includes("meghal"));
console.log(friends.includes("Sagor"));

if (friends.includes("Tonmoy")) {
  console.log("Jack and me going to restaurant.");
} else {
  console.log("We are going to restaurant.");
}

// IndexOf use kora hoi array er kon element koto nmbr index e ace----->

console.log(friends.indexOf("Rahim"));
// Element jodi array te na thake tahole -1 return korbe....>
console.log(friends.indexOf("Suleman"));
