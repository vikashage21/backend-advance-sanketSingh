// function in typescript

function sumTotal(a: number, b: number): number {
  return a + b;
}

console.log(sumTotal(10, 20));

// void function : - it does not return any value


function print():void{
    console.log(`hello world`)
}

print()


function fun():string{
    return "fun"
}

let myFun:string = fun();

console.log(myFun)



function fun_1(para:string , para2:string):void{
    console.log(para , para2)
}


// if we not provide the para value then it will give an error and will be expected two argument but we have provided only one argument


// fun_1()

fun_1("hello world" , "vikash")


// undefined pass as agrument it will accept any type of data and also null 


// fun_1(undefined,undefined)

// fun_1(null,null)



function fun2(...para:any) :void{

    console.log(para)

}

fun2()   // []

fun2(100) // [100] 

fun2(undefined , undefined) // [undefined , undefined]

fun2(null  , null , undefined) // [null ,null , undefined]




// function test(...para:any , ...para1:any) :void{



// }


// can't accept one than more


function fun_one(para1:any , ...para:any):void {
    console.log(para1 , para)
}


// fun_one()  it will give an error expected agruments

fun_one(100)
fun_one(undefined, undefined) 
fun_one(null ,null)                                                                                                                                                                                  
fun_one(100,100)



// default value

function a(para:string="vikash"):void{
    console.log(para)
}


a()


// optional parameters
// we will represent optional parameters with "?" after the parameter name"


function b(para?:string):void{
    console.log(para)
}


b()



c()

function c():void{
    console.log('function hoisting')
}


// function hoisting

// calling the function before declaration called function function hoisting




// Anonnymous function

// the function without name called  annonymous function

// we can store anonymous functions to variables

// we can overcome function hoisting with help of anonymous functions


let d =function():void{
    console.log(`welcome to annoymous functions`)
}

d()



let func = function(para:string,para2:string='hello', param3?:string,...para4:any):void{
    console.log(`the value is ${para}, ${para2} , %{para3} ${para4}`)

}

func('hello')