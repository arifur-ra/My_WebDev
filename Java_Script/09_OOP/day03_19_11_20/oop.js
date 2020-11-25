//
let human = {
    gender: 'male',
    age: 28,
    // hints = String
    toString() {
        return `{gender:"${this.gender}"}`;
    },

    // Hints =Number
    valueOf() {
        return `{age:"${this.age}"}`;
    },
    // arrow syntax
    sayHello: () => `Hello ${this.gender}`
};


let person = {
    name: 'Arif',
    job: 'WEB_DEV',
};



let demo = human.toString();
demo = human.valueOf();

console.log(human.sayHello());



// using prototype

let animal = {
    speak: true,
    sound: 'bow',
    soundOf() {
        return this.sound;

    }
};

let bird = {
    fly: true,

};


bird.__proto__ = animal;
console.log(bird.speak);


// Another example

/*let user = {
    user_name: 'user',
    password: '1234',
    credentials: ['main page'],


    setUserName(name) {
        this.user_name = name;
    },


    setPass(pass) {
        this.password = pass;
    },

    setCredentials(newCred) {
        newCred.forEach(element => {
            this.credentials.push(element);
        });
    }
};*/
//let admin = {};
//let guest = {};
//admin.__proto__ = user;
/* guest.__proto__ = user;
 admin.setCredentials(['edit', 'update', 'delete']);
 console.log(admin);

 guest.setUserName('userone');
 guest.setPass('12345678');
guest.setCredentials(['view', 'upload']);
 console.log(guest);*/

function UserInfo(userName, passWord) {
    this.user_name = userName;
    this.password = passWord;
    this.credentials = [];
    this.setCredentials = array => {
        array.forEach(element => {
            this.credentials.push(element);
        });
    };

}

let guest = new UserInfo('guestone', 'Abc241120');

guest.setCredentials(['Viewing', 'navigating']);

console.log(guest.credentials);

let admin = new UserInfo('admin', 'abc123456');

admin.setCredentials(['editing', 'updating']);

console.log(admin.credentials);