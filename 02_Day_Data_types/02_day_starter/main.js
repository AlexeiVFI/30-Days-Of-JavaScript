// Exercise: Level 1

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript'
// Print the string on the browser console using console.log()
console.log(challenge)
// Print the length of the string on the browser console using console.log()
console.log(challenge.length)
// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3,4))
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3))
// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))
// Split the string into an array using split() method
console.log(challenge.split())
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'))
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11))
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g .
let newString = ' 30 Days Of JavaScript '
console.log(newString.trim(' '))
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'))
// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string = '30 Days of'
console.log(string.concat(' ','JavaScript'))
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))


// Exercise Level 2
console.log('Exercise Level 2')
// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('10'=== 10)//false
console.log(+'10' === 10)
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') == 10)//false
console.log(Math.round(parseFloat('9.8')) == 10)
// Check if 'on' is found in both python and jargon
let string1 = 'python', string2 = 'jargon'
console.log(string1.includes('on')==string2.includes('on'))
// I hope this course is not full of jargon. Check if jargon is in the sentence.
let phrase = 'I hope this course is not full of jargon'
console.log(phrase.includes('jargon'))
// Generate a random number between 0 and 100 inclusively.
let num = Math.floor(Math.random()*101)
console.log(num)
// Generate a random number between 50 and 100 inclusively.
let num1 = Math.floor((Math.random()*51)+ 50)
console.log(num1)
// Generate a random number between 0 and 255 inclusively.
let num2 = Math.floor(Math.random()*256)
console.log(num2)
// Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript'
console.log(js[Math.floor(Math.random()*(js.length+1))])
// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substr(30,24))


// Exercises: Level 3
console.log('Exercises: Level 3')
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let phrase1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.', pattern = /love/gi
console.log(phrase1.match(pattern))
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.match(/because/gi))
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const newSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', special = /[%$@&#;]/g
console.log(newSentence.replace(special,''))
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let monthlySalary = 5000, annualBonus = 10000, onlineCourses = 15000
let totalAnnual = (monthlySalary*12) + (onlineCourses*12) + annualBonus
console.log(totalAnnual)