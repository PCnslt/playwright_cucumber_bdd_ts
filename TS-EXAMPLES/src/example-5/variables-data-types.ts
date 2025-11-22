//Part 1 - Basic variables
//Declare a variable with a specific type

let message: string = "Hello, TypeScript";
console.log(message)

//Part2 - Arrays
let numbers: number[]=[1,2,3]
console.log(numbers)

for(let num of numbers){
    console.log(num)
}

enum Colors{Blue, Green, Red}

for(let c in Colors){
    console.log(c)
}