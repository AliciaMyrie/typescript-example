
let firstName:string = "Alicia"
let age:number = 32
let active:boolean = true

// let names: string[] = [1,2,3,4] // gives us an error
let names: string[] = ["Carla, Bridgette, Cisco"] 

enum studentTypes {
    pending,
    active,
    almostdone,
    graduated,
    tas,
    teachers
}

let mystatus = studentTypes.graduated


// switch(Number(mystatus)) {
//     case Number(studentTypes.active):
//         break;
//         case Number(studentTypes.graduated):
//             console.log("Student is graduated")
//             break;
//             default:
//                 console.log("perplexed")
// }

// console.log("mystatus is", mystatus)
// if (mystatus == studentTypes.graduated) {
// // const graduated = mystatus === studentTypes.graduated
// console.log(`the student is graduated`)
// }

// let code: string | number = 11
// code = "aa11"
// // code = false // not string or number
// console.log(`my entry code is: ${code}`)

// function sum(arr: number[]) {
// return arr.reduce((total: number, num: number) => total + num)
// arr.reduce((previousValue:number, currentValue:number)=> {return previousValue + currentValue})
// }

// let numbers: number [] = [1,2,3,4,5,6]
// console.log(sum(numbers))

let complexItem: any = { name: "Alicia"}

// complexItem = { title: "student"}
// complexItem = "its a string"
// complexItem = 22

// console.log("complexItem", complexItem)



enum bloodType {
    aPositive,
    bPositive,
    oNegative,
    oPositive,
}

interface human {
    name: string,
    age: number,
    height: number,
    bloodType?: bloodType,
}

const me : human = {
    name: "bobby",
    age: 17,
    bloodType: bloodType.aPositive,
    height: 6 * 12,
}