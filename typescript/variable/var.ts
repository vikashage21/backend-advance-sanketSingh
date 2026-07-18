// string
// collection of characters called as string
// 1 ""
//2 ) ''
//3 `` (backtick)

// `` (backtick) used to concatenate two strings and define paragraps
// backtick is introduced in es6

// defining a string in typescript

var sub:string = "hello world";
console.log(sub);


// number : - define the number defined in typescript
// integer, float and double 
// hexadecimal, octal, binary


var decimal:number = 100
const double:number=100.1245;
const hexadecimal:number = 0x123ABC
const octal:number = 0o76
const binary:number = 0b101

console.log(decimal);
// console.log(double);
// console.log(hexadecimal);
// console.log(octal);


// boolean

var isTrue:boolean=true; 


// unioun type

var _myVar:string| number = 'hello' 

_myVar = 100


console.log(_myVar);


// number array

let myArr:number[] = [1,2,3]

//other syntax for defining an array

var arr2:Array<number> = [4,5,6
]

// forEach loop in typescript

// for....of()


arr2.forEach((E:number , index:number)=>{
    console.log(E , myArr[index])
})


// any - data type in typescript

// if we want to store any type of data then use any

var data:any = `hello world` ;

console.log(data)


// JSON - JavaScript Object Notation

// JSON is a lightweight data-interchange format

// data type of json is any 

// json is used to transfer data between server and web app

// objects --- {}

// arrays --- []

// data ---- key and value paris

// key and value separated by using ':'


var obj:any = {
    "sub_one" :'react'
}


console.log(obj.sub_one)