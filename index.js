console.log("hello world")

// Comment = (//) at the beginning of a line to make a single line coment 

// Multi-Line comment = (/*INPUT MULTI LINE COMMENT */)

/*
I am a comment
that has multiple 
lines and is really
cool 
*/


// Var Keyword - we can declare a variable without giving in a value

var firstName;
// Similar to Print Function
console.log(firstName)

// We can assign the variable a value

firstName = "JavanSmalls"
console.log(firstName)

// We can declare and assign a variable

var firstName;
console.log(firstName);
firstName = "Javan";
console.log(firstName);

var lastName = 'Bush';
console.log(lastName);


// Redclaring

var lastName;
console.log(lastName); // Not undefinded , get the value 'Bush' from above - due to variable hoisting

var lastName = "smalls"
console.log(firstName,lastName)  // now we have overwritten the original variable lastName

// Bad Practice AVOID not using variable keyword such as VAR,LET,CONST
message = "Do not do this "
console.log(message) //still works but dont do it like this !!!!!!!!!!!!!!!!

// Statement termination
// to write multiple statements on the same line, you have to use semicolons between teh statements, or just a new line

console.log(firstName);console.log(lastName);

// on multiple lines (the semi colons are now optional)
console.log(firstName);
console.log(firstName)
console.log(lastName);
console.log(lastName)

// This will not work
// console.log(firstName) console.log(firstName)

// Strings - similar to python , you can use single or double quotes(no Triple quotes)
var myString1 = "this is a string";
var myString2 = 'This is also a string';
var myString3 = "John's string with an apostrophe";
var myString4 = 'John\'s string with an apostrophe';
var myString5 = 

console.log(myString1)
console.log(myString2)
console.log(myString3)
console.log(myString4)
console.log(myString5)

// String Concatenation - with a plus sign

var fullName = firstName + " " + lastName
console.log(fullName)

// Access Charachters in String

console.log(firstName[0])
console.log(firstName[1])
console.log(firstName[25]) // Not an error but undefined
console.log(firstName[-1]) // we do not get an error with a negative integer, undefined

// String methods

// Convert to UPPERCASE
console.log(fullName)
console.log(fullName.toUpperCase())

// Convert to lowercase

console.log(fullName);
console.log(fullName.toLowerCase())

// finding length

fullName

console.log(fullName.length)

//Slicing 

console.log(firstName)

console.log(firstName.slice(2,3))

console.log(fullName.slice(5))

// Using negative indices

console.log(firstName.slice(-5))

console.log(fullName.slice(2,-2))

console.log(fullName[-1]);
console.log(fullName.slice(-1))

// Negative index does NOt work with bracket notation,



// In class Exercise 1

var compoundString;

compoundString = 'hereinbefore';
console.log(compoundString.slice(4,6))

// Replacing Substrings

console.log(fullName);

console.log(fullName.replace('Jsmuvv','Javan'));

console.log(fullName.replace(/[aeiou]/g,m=>m.toUpperCase()))


string = 'my_name_is_javan';
string.replace(/[-_ ][A-Za-z]/g, m => m.slice(-1).toUpperCase())

// Template literal - similar to f-strings

var stringMultiLine = `this is a string
that is written
on multiple lines`

console.log(stringMultiLine)

var funckMan = `This is the best funk musician of his time was ${fullName}` // Must use `` marks, $ == F in F string

console.log(funckMan)

var funckInfo = `The best funck musician  of his time was ${lastName},${firstName}: ${fullName.toUpperCase()}`

console.log(funckInfo)


// in class Exercise

best_friend = "Johnny Test"
describe_1 = "Funny"
describe_2 = "dumb"
describe_3 = "cool"

var Charachter = `My friend ${best_friend.toUpperCase()} is really ${describe_2} but hes ${describe_1} and ${describe_3}`
console.log(Charachter)

// types 

console.log(typeof 'Hello world')

// Numeric type

var someint = 123;
console.log(typeof 123)
console.log(typeof someint)

var someFloat = 3.14;
console.log(someFloat);
console.log(typeof someFloat);


// Mathmatical Operations

var sum = 5 + 5
console.log(sum)

sum += 5
console.log(sum) // sum = sum + 5

sum++;
console.log(sum) // sum + 1


// Subtraction

var diff = 10 - 5;
console.log(diff)

diff -= 2;
console.log(diff); // diff = diff -2

diff--;
console.log(diff) // diff = diff -1

// Multiplcation

var prod = 5*5
console.log(prod);

prod *= 5;
console.log(prod) // prod = prod * 5

//  division

var quotient = 88 / 22;
console.log(quotient)
console.log(typeof quotient)

quotient /= 8; // quotient = quotient / 8
console.log(quotient);
console.log(typeof quotient)

// exponents

var square = 5**2
console.log(square);

square **=2; // square = ssquare ** 2
console.log(square) 

// Floor division

//In python we did 5//2 = 2

var floor = Math.floor(5/2)
console.log(floor)

// ceiling division

var ceiling = Math.ceil(5/2)
console.log(ceiling);

// prefixing & postfixing ++

var prefixPlus = 1;
console.log(++prefixPlus); // 2
console.log(prefixPlus); // 2

var postfixPlus = 1;
console.log(postfixPlus++); // 1
console.log(postfixPlus); // 2


// prefixing & postfixing --

var prefixMinus = 1;
console.log(--prefixMinus); // 0
console.log(prefixMinus); // 0

var postfixMinus = 1;
console.log(postfixMinus--); // 1
console.log(postfixMinus); // 0

//Post
var i = 0;
while (i < 10){
    console.log(i++)
}

//Pre
var j = 0;
while (j < 10) {
    console.log(++j);
}
//Modulo

var mod = 37 % 8;
console.log(mod); // rounds up

mod %= 2;
console.log(mod)

// Type conversions

var stringNum = '76';
console.log(typeof stringNum);

var myNum = parseInt(stringNum);
console.log(myNum);
console.log(typeof myNum);

var someNumber = '43.23';
console.log(typeof someNumber);

var someInt = parseInt(someNumber); // changes it to a integer/number
console.log(someInt);

var someFloat = parseFloat(someNumber); // Changes it to a float
console.log(someFloat)

var aNumber = 324;
console.log(typeof aNumber);

// Use the number.toString() method
var aStringNumber = aNumber.toString();
console.log(aStringNumber);
console.log(typeof aStringNumber);


// interactions with Strings

var coolStuff = 3.14 + '7';
console.log(coolStuff) // ends up being 3.147
console.log(typeof coolStuff) // ends up being a string

var coolStuff2 = 3.14 + parseInt("7") // must change it tp an INTEGER using parseInt()
console.log(coolStuff2) // 10.14

var coolStuff3 = 3.14.toString() + '7';
console.log(coolStuff)
console.log(typeof coolStuff)

var coolStuff2 = 3.14 + parseFloat("7.9") // must change it tp an INTEGER using parseInt()
console.log(coolStuff2);
console.log(typeof coolStuff);


// Boolean type
var myBool1 = true;
console.log(myBool1);
console.log(typeof myBool1);

var myBool2 = false;
console.log(myBool2);
console.log(typeof myBool2);

// Comparison Operators


console.log(1 < 2) // True
console.log(1 > 2) // False
console.log(10 >= 10) // True
console.log(10 <= 2) // False
console.log(1 == 2) // False
console.log(1 != 2) // True


// Strict eqaulity , (===), must be the same type
// Loose equality, (==), converts to same type

var numb1 = 1;
var strOne = '1';

console.log(numb1 == strOne); // True , same value , different data type, LOOSE
console.log(numb1 === strOne); // False, same value but because differetn data type gives FALSE , STRICT

// Negating booleans, (-=) does not equal

console.log(numb1 != strOne); // False , because they are the same values even tthough type is different 
console.log(numb1 !== strOne); // True , because they dont have the same data type

console.log(true) //True
console.log(!true) // False
console.log(!false) // True

//  Convert values to Booleans

console.log(Boolean('false')) // prints true because a string with a value is considered True
console.log(Boolean()) // prints false because an empty string is considered false 
console.log(Boolean(1)) // prints true because any number other that 0 is true
console.log(Boolean(0)) // prints False because 0 is alwasy false

// undefined adn nul convert to false
console.log(Boolean(undefined)) // False
console.log(Boolean(null)) // False

//Double Negation

var myName = "Eddy Murphy";
console.log(myName);

// Note: using one! gives us the opposite output we would have gotten that if we passed the value to the Boolean wrapper
console.log(!myName);

// Here , we use the negation once to convert to a boolean and then again to return it back to its correct value
console.log(!!myName)



// chanining Booleans
// and = && , || = or

true || true // True

true || false // true

false || false // False

false || true // true

true && true // True

true && false // False, both need to be tru

false && false // False

false && true // False

// short circuiting

function t1 () {
    console.log('t1 is running'); // stops here because returns false
    return false;
}

function t2 () {
    console.log('t2 is running');
    return true;
}

function t3 () {
    console.log('t3 is running');
    return false;
}

t1()&&t2()&&t3() // && runs each one at a time

function t4 () {
    console.log('t4 is running'); // returns true goes to the next one
    return true;
}

function t5 () {
    console.log('t5 is running'); // returns true goes to the next one
    return true;
}

function t6 () {
    console.log('t6 is running'); // returns false so final output is false
    return false;
}

t4()&&t5()&&t6()

t1()||t2()||t3() // Stops at t2 because t2 is True

t4()||t5()||t6() // Sto[s at t4 because t4 is true


// null vs undefined

var myNull = null
var myUndefined1 = undefined
var myUndefined2 

console.log(myNull)
console.log(myUndefined1)
console.log(myUndefined2)
console.log('\ntypes: \n')
console.log(typeof myNull) // null is an object!
console.log(typeof myUndefined2)
console.log(typeof myUndefined2)

// Let and const

var myVariable = 'hello'
console.log(myVariable)
// Changes the variable
var myVariable = 'world'
console.log(myVariable)


let mylet = 'hello';
console.log(mylet)
//Throws an error on redeclaration; saves us from ourseleves
// let mylet = 'world'
// console.log(mylet)

const myConst = 'hello'
console.log(myConst)
//Throws an error on redeclaration; saves us from ourseleves
// const myConst  = 'world'
// console.log(myConst)

let myOtherLet = 'javan';
console.log(myOtherLet);
// Allowed to do this, think of it as it will "let" you do what you want
myOtherLet = "smalls";
console.log(myOtherLet);

const myOtherConst = "coding";
console.log(myOtherConst)

//mot allowed/ Throws error as a const can never change, think of it as "Constant"
// myOtherConst = 'temple'
// console.log(myOtherConst);

//  let and const have a different scoping than variables
// block scoping

if (true) {
    var testVariable = 'test'; // var is global
    console.log("Inside Block", testVariable)
}

console.log("Outside Block", testVariable)

if (true) {
    let testLet = 'test'; // let is block scoped
    console.log("Inside Block:", testLet);
}

// console.log("Outside Block:",testLet) // Reference error: testLet is not defined

if (true) {
    let anotherLet = 'another test';
    console.log('Inside Block', anotherLet);
    if (true) {
        console.log('Nested Block',anotherLet); // will print , but if it was outside this block such as ^ it wouldnt print and would bring an error
    }
}

if (true){
    const testConst = 'test'; // const is block scoped
    console.log("Inside block:", testConst);
}

// console.log('Outside Block:', testConst); // reference Error: testConst is not defined

//let can be declared without a value
let myUndefinedLet;

// const must be declared with a value
// const myUndefinedConst; // must have a value

console.log(Names); // Undefined

var Names = "JavanSmalls";

console.log(Names)

// console.log(today) // Reference error

// let today = "Wedensday"

// console.log(today)


// ARRAY!!

// Declaring

let people = ['Tayler Swift', "Harry styles","Beyonce","Billie Eilish"]
console.log(people);
console.log(typeof people);

// Accesing

console.log(people[0])
console.log(people[1])
console.log(people[2])

// Negative indexing does not wokr
// console.log(people[-1]) // undefined

//length property

console.log(people.length) // 4

// .push method

let returnValue = people.push('lady Gaga');
console.log(people);
console.log(returnValue);

// .pop method , removes the last element from an array

let popReturn = people.pop()

console.log(people)
console.log(popReturn)

// Array.pop only removes the last item does not accept an optional arg for index like python

people.pop(1) // argument aas no effect, still took out the last element

people.push("javanSmalls")
console.log(people)

// Array Destructuring Assignment 

console.log(people)

let [tayler,harry,beyonce,javan] = people;

console.log(tayler)
console.log(harry)
console.log(beyonce)
console.log(javan)

let [a1,b1] = [1,2,3];
console.log(a1);
console.log(b1);

let [a2,b2,c2,d2] = [1,2,3];
console.log(a2)
console.log(b2)
console.log(c2)
console.log(d2)

//  Rest Operator, (...) 

let colors = ['red','orange','yellow','green','blue','indigo','violet'];

let [r,o,y,...others] = colors

console.log(r,typeof r)
console.log(o,typeof o)
console.log(y,typeof y)

console.log(others, typeof others)

// .unshift Method, adds to the beginning of an array , returns the new length of the Array

console.log(people);

let unShiftReturn = people.unshift("JayZ")

console.log(people);
console.log(unShiftReturn);

// Shift method, removes from the beginning of the list

let shiftReturn = people.shift()

console.log(people);

console.log(shiftReturn);

//  index of method, finds a memeber of a list

console.log(people)

console.log(people.indexOf('Beyonce'))

console.log(people.indexOf('JayZ'))

// For each method

people.forEach((person) => console.log(`${person} has the best live performances`))

function callBackFunction(element,index,arr){
    console.log('Element:',element);
    console.log('Index:',index);
    console.log('Array:',arr);
    console.log('\n')
    return true
}

people.forEach(callBackFunction)

function rockOut(person){
    console.log(`${person} rocks out`)
}

people.forEach(rockOut)

people.forEach((person) => console.log(`${person} rocks out`))

// Filter method
// filter array of poeple whose name begins with b

const bnames = people.filter((person) => person[0].toUpperCase() === 'B')
console.log(bnames)

function callbackFilter(e,i,a){
    return i % 2; // return true if index is odd, false if it is even
};

people.filter(callbackFilter)

console.log(people)

// .map method

// capitalize every memebr of our array

console.log(people)

let allCaps = people.map( (person) => person.toUpperCase() )

console.log(allCaps)

function callbackMap (el,ind,arr){
    return `${el} -- ${ind}`
}

let mapReturn1 = people.map(callbackMap)

console.log(mapReturn1)

// foreach

people.forEach(callBackFunction)

//filter

people.filter(callBackFunction)

//map

people.map(callBackFunction)

// .reduce method 

let numbers = [2,3,4,6,7,9,5,8,3]

function reducer(acc,nextNum){
    console.log('++++++++++++++++++++++++++++++++++++++++++====')
    console.log('Accumulator:', acc);
    console.log('Next Num:', nextNum);
    console.log('Returns:', acc + nextNum);
    return acc + nextNum
};

numbers.reduce(reducer)


// lets turn our list of names into a coma delimited string
// people.redeuce( (accString,nextPerson) => accString += `,${nextPerson}` )

// .toString method

console.log(people.toString())

//.join

console.log(people.join('..'))

// List Slicing

// with a start and end
numbers = [2,3,4,6,7,9,5,8,3]

console.log(numbers.slice(2,-1))


// List splicing

console.log(people)

let deletedValues = people.splice(1,0,"Ariana Grande")
console.log(people);
console.log(deletedValues)

console.log(people)

let deletedValues2 = people.splice(1,1,"mulatto");
console.log(people);
console.log(deletedValues2);

// inserting and removing

let deletedValues3 = people.splice(2,2,"Nomfundo Noh","UNcle waffles")
console.log(people)
console.log(deletedValues3)


// In class exercise 

let favoriteFoods = ["apples","crab","proten shakes","Beef"]
console.log(favoriteFoods)

let unshiftFoods = favoriteFoods.unshift("Mock Mchermel")

console.log(favoriteFoods)

let pushFavoriteFoods = favoriteFoods.push("fried Tarantulas")

console.log(favoriteFoods)

console.log(favoriteFoods.slice(1,5))

// Functions 

// format
//  function name(parameter)
// {dostuff
// return}

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2
};

console.log(addNums)
console.log(typeof addNums)

console.log(addNums())


// Using parameters

function addNums2(num1,num2){
    return num1 + num2
};

console.log(addNums2)
console.log(addNums2(40,95))

// doesnt require all parameters

console.log(addNums2(10)) //NaN

function logArgs(a,b){
    console.log("a is:",a)
    console.log("b is:",b)
}

logArgs(10)

logArgs(b=100,a="abc")

function Aname(firstName,lastName){
    firstName = "bo"
    lastName = "jackson"
    console.log(`hello ${firstName} ${lastName}`)
}
Aname()


// Arrow Function

// The most basic arrow function

const doNothing = () => {}

console.log(doNothing);
console.log(typeof doNothing);

// Implicit Return
// when only one line of code can make it simple ash like this 
const addNums3 = (num1,num2) => num1 + num2 

console.log(addNums3)
console.log(typeof addNums3)
console.log(addNums3(662,300))

// explicit Return
// Here, we still have one line inside the function so an implicit return makes sense
const cubed = (number) => number ** 3
console.log(cubed(3))

// Here our function body is multi lined, so the explicit return is neccesary
const cubedLogger = (number) => {
    console.log('We are cubing', number)
    console.log(number ** 3)
};

cubedLogger(3)

//  With one (and only one) parameter the parentheses are optional

const squared = (num) => num**2
console.log(squared(5))

// in class exercises

const IAm = () => "I am Beautiful"

console.log(IAm())

// In the cells provided, write me a function using the keyword function and AGAIN as an arrow function that takes in 3 parameters: one of a name, of an age, and a multiplier, and returns a string that says:
// `If I multiply [PERSON's NAME]'s age by [muiltiplier] I get [age x multiplier]`

// So if we have `'Steve'` and his age is `20` and the multiplier is `4`, the output will be
// `"If I multiply Steve's age by 4 I get 80"`

function work(Name,Age,multiplier){
    console.log(`If i multiply ${Name}'s age by ${multiplier}. I get ${multiplier*Age}`)
};

work("Javan",22,3)

const works = (names,age,Multiplier) => `If i multiply ${names}'s age by ${Multiplier}. I get ${Multiplier*age}`

console.log(works("Steve",25,3))

// Spread Operator

// Rest Operator
let [x,d,...z] = [1,2,3,4,5,6,7,8,9,10]

console.log(x)
console.log(d)
console.log(z)

// Spread

function useSpread(arg1,arg2,arg3){
    console.log('Arg1',arg1)
    console.log('Arg2',arg2)
    console.log('Arg3',arg3)
    console.log(arg1 + arg2 + arg3)
}

let myTestArr = [22,44,66]

useSpread(22,44,66)

useSpread(myTestArr[0],myTestArr[1],myTestArr[2])

// Using spread Operator
useSpread(...myTestArr)

let copySpread = [...myTestArr];

console.log(copySpread)

let spreadPlus = [...myTestArr,'helloWorld']
console.log(spreadPlus)

// flow Control

//  if Statement

function canVote(birthyear){
    let age = 2024 - birthyear;
    if (age >= 18){
        console.log('congrats on being able to vote');
        console.log("you can vote!")
    } else {
        console.log("You cant vote")
    }
}
canVote(2000)

canVote(2020)

// else if

function getGeneration(birthYear){
    if (birthYear >= 1946 && birthYear <=1964){
        console.log('Boomer')
    } else if (birthYear <= 1979){
        console.log("gen X")
    } else if (birthYear <= 1994){
        console.log('Millenial')
    } else {
        console.log('Zoomer')
    }
}

getGeneration(1950)
getGeneration(2001)

function equalstring(string1,string2){
    let String1lower = string1.toLowerCase()
    let String2lower = string2.toLowerCase()
    if (String1lower === String2lower){
        console.log("these are the same")
    } else {
        console.log("these are not the same")
    }
}

equalstring("STEVE","steve")
equalstring("john","Steve")


// ternary If Statement 

let x1 = 10;
let y1 = 20;

let value1 = (x1 < y1) ? 'Hello':"goodbye"
console.log(value1)

let value2 = (x1 > y1) ? 'Hello':"goodbye"
console.log(value2)

BirthYear = 2001
let myGeneration;
myGeneration = (BirthYear <= 1964) ? 'Boomer' : (BirthYear <= 1979) ? 'Gen X' : (BirthYear <= 1994) ? 'Millenial' : 'Zoomer'
console.log(myGeneration)

//  Traditional For Loops

// Example

for (let i = 0; i <= 5; i++){
    console.log(i)
};
console.log("========================")

for (let j = 10; j <= 100; j+=10){
    console.log(j)
}

console.log("=========================")

for (let k=10; k>0;k--){
    console.log(k)
};

//  for loop with an array

console.log("==========================")

let letterList = ["a","b","c","d"]
for (let i=0; i < letterList.length;i++){
    console.log(i,letterList[i])
}

// decrementing for loops

console.log("==========================")

for (let i = letterList.length-1; i>=0;i--){
    console.log(i, letterList[i])
}


console.log("==========================")

for (let i = 1; i < letterList.length; i+=2){
    console.log(i, letterList[i])
};

// in class Exercise 

// In the cell provided, create a list of 9 of your favorite candies, and loop over that list printing every 3 members of the list, (so items at indices 2, 5 and 8).

// Input

// ```["Snikers","Take 5","Whatchamacallit","Twix","Sprees","Sweetarts","Runts","Haribo Gummy Bears","Sour Patch Kids"]```

// Expected output:

// ```
// Whatchamacallit
// Sweetarts
// Sour Patch Kids```


console.log("==========================")


let myFavoriteCandies = ["Snikers","Take 5","Whatchamacallit","Twix","Sprees","Sweetarts","Runts","Haribo Gummy Bears","Sour Patch Kids"]

for (let i =2; i < myFavoriteCandies.length; i+=3){
    console.log(i, myFavoriteCandies[i])
}


console.log("==========================")

// For of Loops

for (letter of letterList){
    console.log(letter)
}

let countries = ['United states',"Mexico","CAnada","brazil","egypt"]

for (let c of countries){
    console.log(c)
};

// for ..in will loop over an Obejts properties
// an array is a special type of object where the indices are the properties


console.log("==========================")

for (let c in countries){
    console.log(c)
};

console.log("==========================")

let sentence  = 'The quick brown fox jumps over the lazy dog';

for (let char of sentence){
    console.log(char)
};

// While LOOps

console.log("==========================")

let myCounter = 0
while (myCounter<4){
    console.log(myCounter)
    myCounter++
}

console.log("==========================")

console.log(Math.ceil(Math.random() * 10))

console.log("==========================")

// Break and Continue 

let myCounter1 = 0
while (myCounter1 <4){
    if(myCounter1 == 2){
        break
    }
    console.log(myCounter1)
    myCounter1++
}

// State Of an Application

letacolor = "red"
for (i = 0;i<5;i++){
    acolor = "Blue"
    console.log(i)
}