/**
 * write a function takes as a parameter a date, 
 * and return the name of the day only
 * 
 * Example: nameOfDay('August 19.2020) ---> 'Wednesday';
 */

function nameOfDay(date) {
    let day = new Date(date).getDay();
    switch (day) {
        case 0:
            return 'It was on Sunday';
        case 1:
            return 'It was on Monday';
        case 2:
            return 'It was on Tuesday';
        case 3:
            return 'It was on Wednesday';
        case 4:
            return 'It was on Thursday';

        case 5:
            return 'It was on Friday';
        case 6:
            return 'It was on Saturday';

    }

}

//console.log(nameOfDay('November 20 1987'));

function nameOfDate() {
    let date = document.getElementById('date').value;
    let result = document.getElementById('result');
    result.innerHTML = nameOfDay(date);



}