/**
 * The filter() method creates a new array with all elements
 *  that pass the test implemented by the provided function.
 */

function mask(element) {
    if (element !== 'covid-19') {
        return element;
    }
}

function legalMask(element) {
    if (element !== 'marijuana') {
        return element;
    }
}


let airContent = ['o2', 'co2', 'covid-19', 'marijuana', 'dust', 'smoke'];
let healthyAir = airContent.filter(mask);

let legalAir = airContent.filter(legalMask);



console.log('The HealthyAir:', healthyAir);
console.log('The Legal Air is:', legalAir);


// ......................Assignment I ..using filter.........................