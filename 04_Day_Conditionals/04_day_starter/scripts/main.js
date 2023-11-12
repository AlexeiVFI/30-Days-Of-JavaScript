Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = +prompt('How old are you?','Enter your age here'), drivingAge = 18, difference = drivingAge - age
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
if (difference <= 0){
    alert(`You are ${age}. You are old enough to drive`)
} else {
    alert(`You are${age}. You are not enough to drive, but you can try again in ${difference} years.`)
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 25, yourAge = +prompt('How old are you?','Enter your age here')
// Enter your age: 30
// You are 5 years older than me.
if (myAge > yourAge){
    let diff = myAge - yourAge
    alert(`I am ${diff} years older than you.`)
} else if (myAge < yourAge) {
    let diff = yourAge - myAge
    alert(`You are ${diff} years older than me`)
} else {
    alert('We are the same age :)')
}

If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3
// using if else
if (a > b) {
    alert('a is greater than b')
} else{
    alert('b is greater than a')
}

// ternary operator.
a > b
? alert('a is greater than b')
: alert('b is greater than a')
//   4 is greater than 3


Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let i = +prompt('Enter a number','number here')
let remainder = i % 2
console.log(remainder)
// Enter a number: 2
// 2 is an even number
if (remainder == 0){
    alert(`The number ${i} is an even number`)
} else if (remainder != 0) {
    alert(`The number ${i} is an odd number`)
} 

Enter a number: 9
9 is is an odd number.


Exercises: Level 2


// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = +prompt('Enter your test score','0-100')
switch (true){
    case score >= 80 && score <= 100:
        alert('You got an A')
        break;
    case score >= 70 && score <= 79:
        alert('You got a B')
        break;
    case score >= 60 && score <= 69:
        alert('You got a C')
        break;
    case score >= 50 && score <= 59:
        alert('You got a D')
        break;
    case score >= 0 && score <= 49:
        alert('You got an F')
        break;        
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
const autumn = ['September', 'October', 'November'], winter = ['December', 'January', 'February'], spring = ['March', 'April', 'May'], summer = ['June', 'July', 'August']
let month = prompt('What month is it?', 'Enter the month')

if (autumn.indexOf(month)>-1){
    alert('It is Autumn')
} else if (winter.indexOf(month)>-1){
    alert('It is Winter')
} else if (spring.indexOf(month)>-1){
    alert('It is Spring')
}else if (summer.indexOf(month)>-1){
    alert('It is Summer')
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
const weekDays = ['Monday', 'Tuesday','Wednesday','Thursday','Friday'], weekendDays = ['Saturday','Sunday']
let day = prompt('What day is it today?','Enter a day of the week here')
day = day.toLowerCase()
day = day.toUpperCase().charAt(0) + day.slice(1)
weekDays.indexOf(day) > -1
? alert(`${day} is a working day`)
: weekendDays.indexOf(day) > -1
    ? alert(`${day} is a weekend day.`)
   : alert(`${day} is not a calendar day. Please ensure you enter the correct day`)

// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.
const shortMonth = ['April','June','September', 'November'], longMonth = ['January','March','May', 'July','August','October','December']
let year = +prompt('What year is it?'), month = prompt('Please enter the current month')
let leap = year % 4, febDays

leap == 0
? febDays = 29
: febDays = 28

month = month.toLowerCase()
month = month.toUpperCase().charAt(0) + month.slice(1)
month == 'February'
? alert(`The month of ${month} has ${febDays} days this year`)
: shortMonth.indexOf(month) > -1
    ? alert(`The month of ${month} has 30 days`)
    : longMonth.indexOf(month) > -1
        ? alert(`The month of ${month} has 31 days`)
        : alert(`${month} is not a calendar month. Please ensure you enter the correct month`)