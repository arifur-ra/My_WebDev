// const person = {
//   name: "Arif",
//   age: 31,
//   sayMyName: function () {
//     return this.name;
//   },
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduceMe = () => {
    console.log(`My name is ${this.name} &  I am ${this.age} years old `);
  };
}
module.export = Person;
