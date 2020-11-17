// // while looping

// let condition = true;
// let n = 0;
// let m = 5;

// while (condition) {
//     n++;
//     condition = (m >= n);
//     console.log(n);
// }
// console.log(condition);

//.............Another way................

let students = ["Arif", "Gabor", "Adam", "Manon", "Safwan", "Tonu", "Ayan"];

// let done = false;
let n = 0;

while (students[n] != "Tonu") {
  // keep doing
  console.log(n);
  console.log(students[n]);
  n++;
}
//console.log(students[n]);

//-------Do while loop................

let students1 = [
  "Arif",
  "Gabor",
  "Adam",
  "Manon",
  "Safwan",
  "Tonu",
  "Ayan",
  "Saima",
];

do {
  // keep doing
  console.log(n);
  console.log(students1[n]);
  n++;
} while (students1[n] == "Tonu");
