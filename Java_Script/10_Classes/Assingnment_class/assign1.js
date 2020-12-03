/**First Ex.
 * Create a type (ES6 Class) called User
 * props : name, age and author
 * to the prototype add :
 * method sayMyName()
 * method add authority(param): true
 * method remove authority(param) : true
 *
 * method setPassword(psw)
 * condition ; password length min:8
 *
 */


class User {
    constructor(name, age, author) {
        this.name = name;
        this.age = age;
        this.author = Array.from(author); // here Author is an Array

    }

    seyMyName() {
        //  document.write(`<h1>Hello,${this.name}</h1>`);
        return this.name;
    }

    addAuthority(authority) {
        // this.author.push(addauthority);

        if (this.author.indexOf(authority) >= 0) return false;
        this.author.push(authority);
        return true;

    }
    removeAuthority(authority) {

        if (this.author.findIndex(item => item == authority < 0)) {
            return false;
        }

        this.author.splice(
            this.author.findIndex((item) => item == authority), 1);
        return true;
    }
    setPassword(pass) {
        if (pass.length < 8) return `Password should be minimum 8 digit`;
        this.password = pass;
        return `Successfully Done`;
    }

}

let info = new User('Arif', 30, ['read', 'write', 'update']);
info.seyMyName();
info.addAuthority('delete');
//info.setPassword('12345678');

console.log(info.setPassword('123456790'));

//console.log(info.addAuthority());
info.removeAuthority('read');
console.log(info);
//console.log(info.removeAuthority());