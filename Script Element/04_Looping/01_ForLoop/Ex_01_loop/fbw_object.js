 let Safwan = {
     name: 'Safwan',
     age: 33,
     gender: 1,
     position: 'Mentor',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: undefined,
     passed: ['']
 };

 let Arif = {
     name: 'Arif',
     age: 30,
     gender: 1,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 80,
     passed: ['CSS', 'SCSS', 'Bootstrap']
 };
 let Gabor = {
     name: 'Gabor',
     age: 24,
     gender: 1,
     position: 'class Rep.',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 70,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap']
 };
 let Jon = {
     name: 'Jon',
     age: 24,
     gender: 1,
     position: 'English teacher',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 110,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap']
 };

 let Manon = {
     name: 'Manon',
     age: 24,
     gender: 2,
     position: 'class Rep.',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 90,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap']
 };
 let Ljiljana = {
     name: 'Ljilijana',
     age: 35,
     gender: 2,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 50,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap']
 };

 let Nargiza = {
     name: 'Nargiza',
     age: 25,
     gender: 2,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 60,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap']
 };
 let Santiago = {
     name: 'Santiago',
     age: 28,
     gender: 1,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 25,
     passed: ['HTML', 'CSS', 'SCSS']
 };

 let Rashad = {
     name: 'Rashad',
     age: 28,
     gender: 1,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 30,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap']
 };

 let Tareq = {
     name: 'Tareq',
     age: 28,
     gender: 1,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 76,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap']
 };
 let Matheus = {
     name: 'Matheus',
     age: 29,
     gender: 1,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 60,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'C++']
 };
 let Adam = {
     name: 'Adam',
     age: 33,
     gender: 1,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 69,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap']
 };

 let Glauber = {
     name: 'Glauber',
     age: 34,
     gender: 1,
     position: 'Tutor',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 90,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'C++']
 };

 let Daniel = {
     name: 'Daniel',
     age: 28,
     gender: 1,
     position: 'Tutor',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 100,
     passed: ['HTML', 'CSS', 'SCSS', 'Bootstrap', 'javascript']
 };

 let Nils = {
     name: 'Nills',
     age: 28,
     gender: 1,
     position: 'Student',
     course: 'Bob Marley',
     division: 'Web-Dev',
     grade: 105,
     passed: ['CSS', 'HTML', 'SCSS', 'Bootstrap']
 };

 let fbw39Participants = [
     Safwan,
     Gabor,
     Jon,
     Manon,
     Ljiljana,
     Nargiza,
     Santiago,
     Rashad,
     Tareq,
     Matheus,
     Adam,
     Glauber,
     Daniel,
     Arif,
     Nils,
 ];
 let htmlCounter = 0;
 //let ageCounter = 0;

 // How many People passed 'HTML'
 for (let i = 0; i < fbw39Participants.length; i++) {
     //considering 'HTML' is any position in the passed array
     // loop through the passed array , use let j = 0

     for (let j = 0; j < fbw39Participants[i].passed.length; j++) {

         if (fbw39Participants[i].passed[j] === 'HTML') {
             htmlCounter++;
             //j = fbw39Participants[i].passed.length; //or use break
         }
     }



 }


 //document.write(`<h2> The Students who jcounter:  ${jCounter}</h2>`);


 document.write(`<h2> The Students who passed in HTML:  ${htmlCounter}</h2>`);

 // document.write(`<h2> The Students who older than 25:  ${ageCounter}</h2> `);