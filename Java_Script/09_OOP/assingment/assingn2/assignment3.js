/**
 * crate arrow function and takes two params
 * array of keys
 * object
 * returns array of keys that are not in the object
 * 
 * Example:
 * checkKeysOf(['name','age','dateOfbirth'], {name:'SomeOne'}) ---> ['age','dateOfbirth']
 * checkKeysOf(['name','age','dateOfbirth'], {}) ---> ['name','age','dateOfbirth']
 * checkKeysOf(['name','age','dateOfbirth'], {name:'la',age:12,dateOfbirth:1.1.1}) ---> []
 */

const checkKeysOf = (keys, object) => {
    // here keys is an array
    // object is and object

    // let temp = [];
    // for (let i = 0; i < keys.length; i++) {

    //     if (!(keys[i] in object)) {
    //         temp.temp(keys[i]);
    //     }
    // }
    // return temp;

    return keys.filter(item => (!(item in object))); //using filter and item is a parameter

};

console.log(checkKeysOf(['name', 'age', 'dateOfbirth'], {
    'name': 'Arif',

}));

// another way to solved
let info = ['name', 'age', 'dateOfBirth'];
let object = {
    name: 'arif'
};


let temp = [];

info.forEach(element => {
    if (!(element in object)) {
        temp.push(element);
    }

});

//console.log(temp);


/**
 * define an object with 4 properties
 * the key is country code "49",
 * the value is the country name "germany";
 * 
 * the return should be the same object how i defined
 */

let countryCode = {
    "0049": "Germany",
    "0041": "Switzerland",
    "0088": "Bangladesh",
    "001": "USA"
};

//console.log(countryCode);
// using for in loop
for (let keys in countryCode) {
    console.log(Number(keys), countryCode[keys]);
}