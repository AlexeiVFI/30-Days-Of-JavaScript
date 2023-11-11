// 💻 Day 3: Exercises
// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Alexei', lastName = 'Forest-Inlet', country = 'South Africa', city = 'Pretoria', age = 26, isMarried = false
const now = new Date()
const year = now.getFullYear()
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))
// Check if type of '10' is equal to 10
console.log('10'===10)
// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')==10)
// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.

// Write three JavaScript statement which provide falsy value.

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 - true
// 4 >= 3 - true
// 4 < 3 - false
// 4 <= 3 - false
// 4 == 4 - true
// 4 === 4 - true
// 4 != 4 - false
// 4 !== 4 - false
console.log(4 !== 4)
// 4 != '4' - false
console.log(4 != '4')
// 4 == '4' - true
console.log(4 == '4')
// 4 === '4' - false
console.log(4 === '4')
// Find the length of python and jargon and make a falsy comparison statement.
let a = 'python', b = 'jargon'
console.log(a.length != b.length)
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 - true
// 4 > 3 && 10 > 12 - false
// 4 > 3 || 10 < 12 - true
// 4 > 3 || 10 > 12 - true
// !(4 > 3) - false
// !(4 < 3) - true
// !(false) - true
// !(4 > 3 && 10 < 12) - false
// !(4 > 3 && 10 > 12) - true
// !(4 === '4') - true
// There is no 'on' in both dragon and python - false

// Use the Date object to do the following activities

// What is the year today?
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth() + 1)
// What is the date today?
console.log(now.getDate())
// What is the day today as a number?
console.log(now.getDay())
// What is the hours now?
console.log(now.getHours())
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now())

// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = prompt('Enter the length of the base', 'Number goes here'), height = prompt('Enter the length of the height', 'Number goes here')
const areaTriangle = (base*height)/2
alert(`The area of the triangle is: ${areaTriangle}`)
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 
let sideA = prompt('Enter the length of side A','Number goes here'), sideB = prompt('Enter the length of side B','Number goes here'), sideC = prompt('Enter the length of side C','Number goes here')
const perimeter = +sideA + +sideB + +sideC
alert(`The perimeter of the triange is: ${perimeter}`)
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter the length of the rectangle','Number goes here'), width = prompt('Enter the width of the rectangle','Number goes here')
const area = (length*width), perimeter = 2*(length + width)
alert(`The area of the rectangle is ${area}, and the perimeter is ${perimeter}`)
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = prompt('Enter the radius of the circle','Number goes here')
const pi = Math.PI, areaCircle = pi*r*r, circumference = 2*pi*r
alert(`The area of the circle is ${areaCircle}, and the circumference is ${circumference}`)
// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2, y1 = 2, x2 = 6, y2 = 10
const m = (y2-y1)/(x2-x1)
alert(`The slope between these two points is ${m}`)
// Compare the slope of above two questions.

// // Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// // Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// // Enter hours: 40
// // Enter rate per hour: 28
// // Your weekly earning is 1120
let hours = prompt('Enter the number of hours you have worked','Number goes here'), rate = prompt('Enter the rate per hour','Number goes here')
const wage = hours*rate
alert(`Your wage for this week is ${wage}`)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
if (firstName.length > 7){
    alert('Your name is pretty long')
} else {
    alert('Your name is pretty short')
}
// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// let firstName = 'Asabeneh', lastName = 'Yetayeh'

if (firstName.length > lastName.length){
    alert(`Your first name, ${firstName} is longer than your family name ${lastName}`)
} else {
    alert(`Your family name, ${lastName} is longer than your first name, ${firstName}`)
}

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
// I am 225 years older than you.
if (myAge > yourAge){
    let diff = myAge - yourAge
    alert(`I am ${diff} years older than you`)
} else if (myAge < yourAge){
    let diff = yourAge - myAge
    alert(`You are ${diff} years older than me`)
} else if (myAge = yourAge){
    alert('We are the same age')
}

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive

const now = new Date(), currentYear = now.getFullYear()
console.log(currentYear)
let birthYear = +prompt('What year were you born?','Enter the year here')
let age = currentYear - birthYear
age > 18
? alert(`You are ${age}. You are old enough to drive`)
: alert(`You are ${age}. You are not old enough to drive`)


// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
const now = new Date(), currentYear = now.getFullYear()
console.log(currentYear)
let birthYear = +prompt('What year were you born?','Enter the year here')
let age = currentYear - birthYear
let ageDifference = 18 - age
ageDifference <= 0
? alert(`You are ${age}. You are old enough to drive`)
: alert(`You are ${age}. You will be allowed to drive in ${ageDifference} years.`)



// Enter number of years you live: 100
// You lived 3153600000 seconds.
// const yearlySeconds = 31536000
let age = +prompt('Enter the number of years you have lived','Number goes here')
let seconds = age*yearlySeconds
alert(`You have lived about ${seconds} seconds`)

// Create a human readable time format using the Date time object
const now = new Date(), year = now.getFullYear(), month = now.getMonth() + 1, day = now.getDate(), hour = now.getHours(), minute = now.getMinutes()
// YYYY-MM-DD HH:mm
alert(`${year}-${month}-${day} ${hour}:${minute}`)
// DD-MM-YYYY HH:mm
alert(`${day}-${month}-${year} ${hour}:${minute}`)
// DD/MM/YYYY HH:mm
alert(`${day}/${month}/${year} ${hour}:${minute}`)

// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
if (hour < 10){
    let h = '0' + hour.toString() 
} else {
    let h = hour
}
if (minute < 10){
    let m = '0' + minute.toString() 
} else {
    let m = minute
}
alert(`${year}-${month}-${day} ${h}:${m}`)