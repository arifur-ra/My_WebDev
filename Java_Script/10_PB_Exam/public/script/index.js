// .................Exam1... On Tuesday date 17.11.20............................

// crate an Object A-1 


const profileData = {
    name: "Arifur rahman",
    surname: "Arif",
    age: 30,
    city: "Berlin",
};

// Object for In loop A-2

const findKeyInObject = (obj, key) => {
    for (let keys in obj) {
        key = obj[keys];
    }
    return key;


};
//console.log(findKeyInObject(profileData, age));



// B-1 data Manipulation 


let beverage = ['coffee', 'tea', 'juice'];


let convertArryData = (item, indexA, indexB) => {

    let temp = item[indexA];
    item[indexA] = item[indexB];
    item[indexB] = temp;
    //item.reverse(1, 2);
    // item.splice(1, 0, 'milk');

};
beverage.splice(2, 1, 'milk');

convertArryData(beverage, 0, 1);

console.log(beverage);


// B-2 Data Conversation

let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = [
    "891.68 km2",
    "755.3 km2",
    "310.7 km2",
    "207.35 km2",
    "217.41 km2",
];

const ConvertArrayToObject = () => {


};
console.log(ConvertArrayToObject(cities, areas));


// B-3 Generate formatted String

const formatPhoneNumber = array => {

};

//console.log(formatPhoneNumber([1, 2, 3, 4, 5]));



// B-4 Word converter

let adjectives = ["smart", "kind", "sweet", "small", "clear"];

const wordConverter = word => {


}

//console.log(wordConverter(adjectives));



// B-5 Hour Calculation

const hourTracking = [{
        day: "Monday",
        start: 8,
        end: 17
    },

    {
        day: "Tuesday",
        start: 9,
        end: 15
    },

    {
        day: "Wednesday",
        start: 10,
        end: 18
    },

    {
        day: "Thursday",
        start: 7,
        end: 14
    },

    {
        day: "Friday",
        start: 6,
        end: 12
    },
];

const calculationHours = getHour => {

    for (const k in getHour) {



    }

}