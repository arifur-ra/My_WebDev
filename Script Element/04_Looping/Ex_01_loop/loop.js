let i;

for (i = 1; i <= 10; i++) {
    // document.write(`The Number is  ${i} . <br>`);
}


let student = ['Arif', 'Adam', 'Tareq', 'Daniel', 'Santiago', 'Jon', 'Matheus', 'Manon', 'Gabor', 'Glabur', 'Lilijana', 'Nargiza', 'Rashad'];

for (let k = 0; k <= student.length - 1; k++) {

    //document.write(`Name of Student  ${student[k]} <br>`);
}


//Write a simple for loop creating a un order list of three items and each item will take on of the elements from an array of three animals 

let j;
let animals = ['Tiger', 'Dog', 'Cat'];

for (j = 0; j < animals.length; j++) {
    // document.write(`<li> The  List of Animal: ${animals[j]} </li>`);
}



let tutor, representative, copyWriter;
tutor = {
    name: 'Daniel',
    class: 'Bob Marley',
    age: 23
}

representative = {
    name: 'gabor',
    class: 'Bob Marley',
    age: 27

}
copyWriter = {
    name: 'Arif',
    class: 'Bob Marley',
    age: 28
}

let students = [tutor, representative, copyWriter];

for (let i = 0; i < students.length; i++) {
    //wrtie the condition here
    if (students[i].age > 25) {
        document.write(` <li> The list of Student ${student[i].name} </li>`);

    }
}