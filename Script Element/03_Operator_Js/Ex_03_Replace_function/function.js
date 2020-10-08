/** define a string which includes the complete prticipants names
 *let FbW39Complete =  "'Glauber', 'Adam', 'Arif', 'Tareq', 'Santiago', 'Gabor', 'Nils', 'Nargiza', 'Matheus', 'Daniel', 'Ljiljana', 'Manonmani', 'Ion', 'Rashad'"
 *let attandedNames = ""
 *let absent = ""
 *let tutors = ""
 *let representative = "Gabor"
 *write a function isFbW39Student(sName, classNames){
     //returns boolean indicatinig if yes or no
 }
 *write a function isAttending(sName, attendanceList){
     //returns boolean indicatinig if yes or no
 }
  *write a function isAbsent(sName, absentList){
     //returns boolean indicatinig if yes or no
 }
 *write a function isTutor(sName, tutorsList){
     //returns boolean indicatinig if yes or no
 }
 *write a function isRepresentative (sName, rName){
      //returns boolean indicatinig if yes or no
 }*/


let FbW39Complete = "Glauber, Adam, Arif, Tareq, Santiago, Gabor, Nils, Nargiza, Matheus, Daniel, Ljiljana, Manonmani, Ion, Rashad";
let attandedNames = " Arif, Adam, Gabor,santiago,Glauber,Manon,Tareq,Matheus, Ljiljana";
let absent = "Nils";
let tutors = "Glauber, Daniel";
let representative = "Gabor";

function isFbW39Student(sName, classNames) {
    //returns boolean indicatinig if yes or no
    return classNames.includes(sName);
}
let student = isFbW39Student('Adam', FbW39Complete);
console.log(` The result is: ${student}`);




function isAttending(sName, attendanceList) {
    //returns boolean indicatinig if yes or no
    return attendanceList.includes(sName);
}
let attendingStudent = isAttending('Matheus', attandedNames);

console.log(` The attending student is :${attendingStudent}`);




function isAbsent(sName, absentList) {
    //returns boolean indicatinig if yes or no

    return absentList.includes(sName);
}

let absentStudent = isAbsent('Arif', absent);
console.log(` The Absent student is :${absentStudent}`);



function isTutor(sName, tutorsList) {
    //returns boolean indicatinig if yes or no
    return tutorsList.includes(sName);

}

let tutor = isTutor('Glauber', tutors);
console.log(` The tutor is :${tutor}`);

function isRepresentative(sName, rName) {
    //returns boolean indicatinig if yes or no
    return rName.includes(sName);
}

let represenTive = isRepresentative('Gabor', representative);
console.log(` The Name of Representive:${represenTive}`);