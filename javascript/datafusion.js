// The squirrels in Palo Alto spend most of the day playing. 
// In particular, they play if the temperature is between 60 and 90 (inclusive). 
// Unless it is summer, then the upper limit is 100 instead of 90. 
// Given a number temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

// Examples

// squirrelPlay(70, false) → true
// squirrelPlay(95, false) → false
// squirrelPlay(95, true) → true

// function squirrelPlay(temp, isSummer) {
//     let upperLimit = 90;
//     if (isSummer) {
//         upperLimit = 100;
//     }
//     if (temp >= 60 && temp <= upperLimit) {
//         return true;
//     }
//     if (temp < 60 || temp > upperLimit) {
//         return false;
//     }
// }
// console.log(squirrelPlay(70, false)); // true
// console.log(squirrelPlay(95, false)); // false
// console.log(squirrelPlay(95, true)); // true

// You and your date are trying to get a table at a restaurant. 
// The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. 
// The result getting the table is encoded as a number value with 0=no, 1=maybe, 2=yes. 
// If either of you is very stylish, 8 or more, then the result is 2 (yes).
// With the exception that if either of you has style of 2 or less, then the result is 0 (no). 
// Otherwise the result is 1 (maybe).

// Examples

// dateFashion(5, 10) → 2
// dateFashion(5, 2) → 0
// dateFashion(5, 5) → 1

// function dateFashion(you, date) {
//     if (you <= 2 || date <= 2) {
//         return 0;
//     }
//     if (you >= 8 || date >= 8) {
//         return 2;
//     }
//     return 1;
// }

// console.log(dateFashion(5, 10)); // 2
// console.log(dateFashion(5, 2)); // 0
// console.log(dateFashion(5, 5)); // 1

// You are driving a little too fast, and a police officer stops you. 
// Write code to compute the result, encoded as a number: 0=no ticket, 1=small ticket, 2=big ticket. 
// If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. 
// If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

// Examples

// caughtSpeeding(60, false) → 0
// caughtSpeeding(65, false) → 1
// caughtSpeeding(65, true) → 0

function caughtSpeeding(speed, isBirthday) {
    let speedLimit = 60;
    let smallTicketLimit = 80;
    let bigTicketLimit = 81;

    if (isBirthday) {
        speedLimit += 5;
        smallTicketLimit += 5;
        bigTicketLimit += 5;
    }

    if (speed <= speedLimit) {
        return 0;
    }
    if (speed >= smallTicketLimit && speed < bigTicketLimit) {
        return 1;
    }
    if (speed >= bigTicketLimit) {
        return 2;
    }

}