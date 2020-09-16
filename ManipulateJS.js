var s1 = "ThisIsAString"
s2 = s1.replace(/([A-Z])\w{0}/g, s => ' ' + s).trim()
console.log(s1)
console.log(s2)

var s1 ="This"
var s2 = "Is"
var s3 = s1.concat(s2)
console.log(s3)

var s1 = "ThisIsAStringAndAlsoIsAdefghiLetter"
var s2 = s1.search("Is")
console.log(s2)

var s2 = s1.search(/([d-i])\w*/g)
console.log(s2)

var s2 = s1.charAt(4)
console.log(s2)

var s1 = "ThisIsAStringAndAlsoIsAdefghiLetter"
var s2 = s1.slice(7,13)
console.log(s2)

var s1 = "TryMe"
var s2 = Array.from(s1)
console.log(s2)

var arr1 = ["Lisbon", "Denver", "Tokyo", "Nairobi", "Moscow", "Helsinquia"]
var arr2 = arr1.copyWithin(1,2,3)
console.log(arr2)
var iterator = arr1.entries()
console.log(iterator.next().value)
console.log(iterator.next().value)

var arr1 = ["127", "256", "512", "1024", "2048", "4096"]
const isAboveHundred = (currentValue) => currentValue > 100
console.log(arr1.every(isAboveHundred))

var arr1 = ["127", "256", "512", "1024", "2048", "4096"]
console.log(arr1.fill(2048,1,1))

var arr1 = ["Lisbon", "Denver", "Tokyo", "Nairobi", "Moscow", "Helsinquia"]
var arr2 = arr1.filter(currentValue => currentValue.length > 6)
console.log(arr2)
//const isKeyLengthAboveFive = (currentValue) => currentValue.length > 5

var arr1 = [2, 4, 8, 16, 32, 64]
var arr2 = arr1.map(x => x * 2 *2)
console.log(arr2)

var arr1 = ["Lisbon", "Denver", "Tokyo", "Nairobi", "Moscow", "Helsinquia"]
arr1.push("Berlin")
console.log(arr1)

var arr1 = ["Lisbon", "Denver", "Tokyo", "Nairobi", "Moscow", "Helsinquia"]
arr1.shift()
console.log(arr1)
arr1.unshift("Lisbon")
console.log(arr1)
arr1.splice(1,0,"Professor")
console.log(arr1)

var arr1 = [4, 6, 8]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr1.reduce(reducer))

