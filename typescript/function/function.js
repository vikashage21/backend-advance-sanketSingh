"use strict";
// function in typescript
function sumTotal(a, b) {
    return a + b;
}
console.log(sumTotal(10, 20));
// void function : - it does not return any value
function print() {
    console.log(`hello world`);
}
print();
function fun() {
    return "fun";
}
let myFun = fun();
console.log(myFun);
function fun_1(para, para2) {
    console.log(para, para2);
}
// if we not provide the para value then it will give an error and will be expected two argument but we have provided only one argument
// fun_1()
fun_1("hello world", "vikash");
// undefined pass as agrument it will accept any type of data and also null 
// fun_1(undefined,undefined)
// fun_1(null,null)
function fun2(...para) {
    console.log(para);
}
fun2(); // []
fun2(100); // [100] 
fun2(undefined, undefined); // [undefined , undefined]
fun2(null, null, undefined); // [null ,null , undefined]
// function test(...para:any , ...para1:any) :void{
// }
// can't accept one than more
function fun_one(para1, ...para) {
    console.log(para1, para);
}
// fun_one()  it will give an error expected agruments
fun_one(100);
fun_one(undefined, undefined);
fun_one(null, null);
fun_one(100, 100);
// default value
function a(para = "vikash") {
    console.log(para);
}
a();
// optional parameters
// we will represent optional parameters with "?" after the parameter name"
function b(para) {
    console.log(para);
}
b();
c();
function c() {
    console.log('function hoisting');
}
// function hoisting
// calling the function before declaration called function function hoisting
// Anonnymous function
// the function without name called  annonymous function
// we can store anonymous functions to variables
// we can overcome function hoisting with help of anonymous functions
let d = function () {
    console.log(`welcome to annoymous functions`);
};
d();
let func = function (para, para2 = 'hello', param3, ...para4) {
    console.log(`the value is ${para}, ${para2} , %{para3} ${para4}`);
};
func('hello');
