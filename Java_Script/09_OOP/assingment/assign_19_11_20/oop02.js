// .......................Assignment 3 ...................................

/**
 * write a constructor function to build a Participant type
 * function Participant(){}
 * add to the prototype of Participant the below settters :
 * setParticipantName('string')
 * setParticipantDateOfBirth(date of birth : type of date)
 * claculateAge() returns the age
 * 
 * 
 * write a constructor function to build a Course type
 * function Course(){}
 * add to the prototype of Course the below settters :
 * setCourseName('string')
 * setCourseTeacher('string')
 * setCoursePrticipants(array of prticipants : use the type Participant)
 * getCourseName()
 * getCourseTeacher()
 * getPrticipants()
 *
 */

function Participant() {}
Participant.prototype = {
    setParticipantName(string) {
        this.name = string;
    },
    setParticipantDateOfBirth(dateOfBirth) {
        this.birthDate = dateOfBirth;
    },
    claculateAge() {
        //this year - birth year
        let currentDate = new Date();
        let age = currentDate.getFullYear() - this.birthDate.getFullYear();
        this.age = age;
    }
};

function Course() {}
Course.prototype = {
    setCourseName(string) {
        this.name = string;
    },
    setCourseTeacher(string) {
        this.teacher = string;
    },
    setCoursePrticipants(arr) {
        // this.participants = arr; just pointing to the same refernce : not profissional
        this.participants = [];
        arr.forEach(item => {
            this.participants.push(item);
        });
    },
    getCourseName() {
        return this.name;
    },
    getCourseTeacher() {
        return this.teacher;
    },
    getPrticipants() {
        return this.participants;
    }
}
let datOfBirth = new Date('Nov 12 1995');
let matheus = new Participant();
matheus.setParticipantName('Matheus');
matheus.setParticipantDateOfBirth(datOfBirth);
matheus.claculateAge();
let participants = new Array(matheus, matheus, matheus);
let FbW39 = new Course();
FbW39.setCourseName('FbW39');
FbW39.setCourseTeacher('Safwan');
FbW39.setCoursePrticipants(participants);
console.log(FbW39.getPrticipants());