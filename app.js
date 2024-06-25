// const firstName = "stephen"
// const lastName = "Alu"
// const job = "Software Developer"
// const school = "Gomycode"
// let salary = 200000000
// salary = 300000000
// const sentence = `My Name is ${lastName} ${firstName} i'm a ${job} student at ${school} and i earn ${salary} monthly `
// console.log(sentence);

// let age = 18

// age >= 18 ? console.log("eligible to vote") : console.log("not eligible"); 

// let shoeSize = prompt("enter your shoe size")

// let shoe = (shoeSize >= 44) ? "Timberland" : "Crocs"

// console.log(`You should be getting a ${shoe}`);


// let a = 0
// let b = (a === 0) ? console.log("zero") : (a > 0) ?  console.log("positive number") : console.log("negative number");
// console.log(b);

// const areaOfCicle = (r) => {
//     let a = Math.PI * r
//     return a
// }

// console.log(areaOfCicle(5));

// const areaOfSphere = () => {
//   let y = prompt("enter the value for r")
//     let a = 4 * Math.PI * y**2
//    return a
// }
// console.log(areaOfSphere());

const num = [1, 2, 3, "food", null]
const [dml, ola, ...rest] = num

console.log(rest);

// const inecAgeChecker = () => {
//     let age = prompt("enter value for age")
//    let aged = (age < 18) ? console.log("food for free") :(age >= 18 && age <= 29) ? console.log("20% discount to get food" ) : (age >= 30 && age <= 45) ? console.log("10% discount to get food") :  console.log("no discount for you");
//    return aged
// }
// console.log(inecAgeChecker());




const minutes = (min) => {
    return min/60
}
console.log(minutes(200));


const gram = (g) =>  g / 1000
console.log(gram(2000));   

// const jobe = () => {
     
//      let job = prompt('enter your job')
//     let you = (job === "doctor")?  console.log("700k") : (job === "police")? console.log("55k") : (job === "lawyer")? console.log("200k") : (job === "developer")? console.log("1.75m") :console.log("33k");
//     return you
// }

// jobe()

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
const arr3 = [...arr1, ...arr2]
console.log(arr3);


// const people = [{
//     name : "stephen",
//     job : "developer",
//     wage : 2000000
// },

// {
//     name: "oreva",
//     job : "frontend engineer",
//     wage : 1000000
// },

// {
//    name : "olamide",
//    job : "ui/ux designer",
//    wage : 1500000

// },

// {
//     name : "cm",
//     job : "business man",
//     wage : 400000

// }
// ]

// const findPerson = (wage) => {
//   return people.find((egg) => egg.wage === wage)
// }

// console.log(findPerson(400000))


// const word = ["srtegfdg", "suytr", "alu"]

// let result = word.filter((bread) => bread.length <= 3)

// console.log(result);



// const showName = (name) => people.forEach((bread) => alert(bread.name) )

// showName();

// const showJob = (job) => people.forEach((cm) => alert(cm.job))

// showJob();

// const filterPeople = () => people.filter((carrot) => carrot.wage > 450000)

// console.log(filterPeople());


// const findMySal = (name) => people.find((sal) => sal.name === name )

// console.log(findMySal("stephen"));


// const filt = (arr) => arr.filter((word) => word.length > 5)

// let total = ["stephen", "maryme", "skimmer", "ajuks", "loma"]
// console.log(filt(total));


const array1 = [1,2,3,4,5]

console.log(Math.max(...array1));


// let student1 = {name:"John"}
// let student2 = {name:"Mary"}
// let newObject = {
//  ...student1,
//  ...student2,
//  name: "Daniel"
// }

// console.log(newObject);

// let student1 = {name:"John"}
// let student2 = {name:"Mary"}
// let newObject = {
//  student1, student2
// }

// console.log(newObject);

// let newObjec = {
//     name: 'Daniel',
//     name: 'John',
//    }

//    console.log(newObjec);

//    let student1 = {name:"John"}
// let student2 = {name:"Mary"}
// let newObject = {
//  ...student1,
//  ...student2,
// }

// console.log(newObject);