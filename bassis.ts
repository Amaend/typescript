// 声明一个变量a，同时指定它的类型为number
let a:number;
// a的类型设置为number，在以后的使用过程中a的值只能是数字
a=11;
// a='abc' 此行代码会报错，以为变量a的类型是number，不能赋值为字符串

// 声明完变量直接进行赋值
// let c:boolean=true;

// 如果变量的声明和赋值是同时进行的，TS可以自动进行数据类型的检测
let c=false;
// JS的函数是不考虑参数的类型和个数的
// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,2));

// 在TS中可以个参数设置类型
function sum(a:number,b:number){
    return a+b
}
console.log(sum(1,2));