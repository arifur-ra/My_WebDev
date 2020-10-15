let grades = [8, 40, 47, 52, 80, 68, 90, 106];
let passGrade = 60;
let maxGrade = 100;
let minGrade = 10;
let passCounter = 0;
let failCounter = 0;
let errorCounter = 0;

for (let i = 0; i < grades.length; i++) {

    // how many people the pass
    //document.write(` The grade is ${grades[i]} <br>`);
    if (grades[i] >= passGrade && grades[i] <= maxGrade) {
        passCounter++;
    }
    if (grades[i] < passGrade && grades[i] > minGrade) {
        failCounter++;
    }
    if (grades[i] > maxGrade || grades[i] < minGrade) {
        errorCounter++;
    }

}
document.write(`The student who passed the exam : ${passCounter} <br>`);
document.write(` <br>`);

document.write(`The student who failed the exam : ${failCounter} <br>`);
document.write(` <br>`);


document.write(`The error of student is ${errorCounter} <br>`);