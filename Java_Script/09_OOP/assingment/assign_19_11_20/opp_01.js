//................... Assignment1...............................

/**
 * Create two objects
 * first object is Peter = {}
 * second object is Katja = {}
 * age , gender,status ,method marryFrom(name),method whoIsSpouse()
 *
 * example:
 * Peter.marryFrom('Katja') // output : true
 * Peter.whoIsSpouse() // output : Katja
 */

let person1 = {
    name: 'peter',
    age: 30,
    gender: 'male',
    status: 'single',

    marryFrom(name) {
        this.status = 'married';
        this.spouse = name;
        return true;
        //return this.status;
    },
    whoIsSpouse() {
        return this.spouse;
    }
};

let person2 = {
    name: 'katja',
    age: 25,
    gender: 'female',
    status: 'single',

    marryFrom(name) {
        this.status = 'married';
        this.spouse = name;
        return true;
    },
    whoIsSpouse() {
        return this.spouse;
    }
};

console.log(person1.marryFrom('katja'));
console.log(person1.whoIsSpouse());


// Another Assignment

/**
 * write a constructor function to build a wagen type
 * two properties : number of wheels , category
 * method setNumOfWheels
 * method setCategory
 */

function Wagen() {

    // this.setNumberOfWheels = num => {
    //     this.num_of_wheels = num;
    // };

    // this.setCategory = array => {
    //     this.category = array;
    // };
}

Wagen.prototype = {

    constructor: Wagen,
    setNumberOfWheels(num) {
        this.num_of_wheels = num;
    },

    setCategory(array) {
        this.category = array;
    },
    getNumberOfWheels() {
        return this.num_of_wheels;
    },
    getCategory() {
        return this.category;
    }
};


let car = new Wagen();
car.setNumberOfWheels(4);
car.setCategory('Truck');

console.log(car);
//console.log(car.getCategory);



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

//let dateOfBirth = new Date();
//let CourseParticipants = [];


Participant.prototype = {

    constructor: Participant,
    setPaticipantName(str) {
        this.ParticipantName = str;
    },
    setPaticipantDateOfBirth(dateOfBirth) {
        this.PaticipantDateOfBirth = dateOfBirth;
    },
    setPaticipantAge() {
        let currentDate = new Date();
        let age = currentDate.getFullYear() - this.PaticipantDateOfBirth.getFullYear();
        this.PaticipantAge = age;
    }
};


function Course() {}

Course.prototype = {
    constructor: Course,
    setCourseName(str) {
        this.courseName = str;
    },
    setCourseTeacher(str) {
        this.courseTeacher = str;
    },
    setCourseParticipants(array) {
        this.CourseParticipants = [];
        // this.CourseParticipants=array; just pointing to the same reference: not professional
        array.forEach(element => {
            this.CourseParticipants.push(element);
        });
    },

    getCourseName() {
        return this.courseName;
    },
    getCourseTeacher() {
        return this.courseTeacher;
    },
    getCourseParticipants() {
        return this.CourseParticipants;
    }

};


let dateOfBirth = new Date('Nov 20 1989');


let Arif = new Participant();
Arif.setPaticipantName('Arif');
Arif.setPaticipantDateOfBirth(dateOfBirth);
Arif.setPaticipantAge();


console.log(Arif);

let FBW39 = new Course();
FBW39.setCourseName('FBW39');
FBW39.setCourseTeacher('Safwan');
FBW39.setCourseParticipants(['arif', 'Adam', 'Tareq']);

console.log(FBW39.getCourseParticipants);