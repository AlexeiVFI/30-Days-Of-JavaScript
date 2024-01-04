// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')


// // 💻 Exercise
// // Exercise: Level 1
// // const countries = [
// //   'Albania',
// //   'Bolivia',
// //   'Canada',
// //   'Denmark',
// //   'Ethiopia',
// //   'Finland',
// //   'Germany',
// //   'Hungary',
// //   'Ireland',
// //   'Japan',
// //   'Kenya'
// // ]

// // const webTechs = [
// //   'HTML',
// //   'CSS',
// //   'JavaScript',
// //   'React',
// //   'Redux',
// //   'Node',
// //   'MongoDB'
// // ]
// // Declare an empty array;
// // const arr = []
// // Declare an array with more than 5 number of elements
// const countries1 = [
//       'Albania',
//       'Bolivia',
//       'Canada',
//       'Denmark',
//       'Ethiopia',
//       'Finland',
//       'Germany',
//       'Hungary',
//       'Ireland',
//       'Japan',
//       'Kenya'
//     ]
// // Find the length of your array
// let arrayLength = countries1.length
// // Get the first item, the middle item and the last item of the array
// console.log(countries1[0]) //first item
// let middle = Math.ceil(countries1.length/2) -1
// console.log(countries1[middle]) // middle item
// let lastIndex = countries1.length-1
// console.log(countries1[lastIndex])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]
console.log(arr.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    'Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'
]
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log(itCompanies[0]) //first item
let middle = Math.ceil(itCompanies.length/2) -1
console.log(itCompanies[middle]) // middle item
let lastIndex = itCompanies.length-1
console.log(itCompanies[lastIndex])
// Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
// Change each company name to uppercase one by one and print them 
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let itCompany = prompt('Enter the name of a company', 'Type the name here')
itCompanies.includes(itCompany)
? alert(itCompany)
: alert('This company does not Exist within the array')
// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(lastIndex,-3))
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(middle,1))
// Remove the first IT company from the array
console.log(itCompanies.shift())
// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(middle,1))
// Remove the last IT company from the array
console.log(itCompanies.pop())
// Remove all IT companies
console.log(itCompanies.splice())

// Exercise: Level 2



// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
// In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]


// Exercise: Level 3
// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.



