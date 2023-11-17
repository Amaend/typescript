// function sum(a: number, b: number) :number{
//     return a + b;
// }
// sum(1,2)
function divide(num: unknown) {
  return (num as number) / 2;
}
divide(10);
// 数组的定义

let array: Array<number> = [1, 2, 3, 4, 5];
// array.push(6)
// array.push('str')类型“string”的参数不能赋给类型“number”的参数。

// 接口
// interface描述对象类型
// interface Person{
//     readonly name:string;
//     age:number;
// }
// let zs:Person={
//     name:'zs',
//     age:18
// }
// zs.name="张三" 无法为“name”赋值，因为它是只读属性
// interface描述函数类型
interface Func {
  (a: number, b: number): number;
}
const sum: Func = function (a: number, b: number) {
  return a + b;
};
interface likeArray {
  [propName: number]: string;
}
let arr: likeArray = ["1", "2", "3"];
// arr.push(100);类型“likeArray”上不存在属性“push”。

