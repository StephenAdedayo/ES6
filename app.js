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

const areaOfSphere = () => {
  let y = prompt("enter the value for r")
    let a = 4 * Math.PI * y**2
   return a
}
console.log(areaOfSphere());

// const num = [1, 2, 3, "food", null]
// const [dml, ola, ...rest] = num

// console.log(rest);

const inecAgeChecker = () => {
    let age = prompt("enter value for age")
   let aged = (age < 18) ? console.log("food for free") :(age >= 18 && age <= 29) ? console.log("20% discount to get food" ) : (age >= 30 && age <= 45) ? console.log("10% discount to get food") :  console.log("no discount for you");
   return aged
}
console.log(inecAgeChecker());


