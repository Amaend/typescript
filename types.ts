// object表示一个js对象
let a:object;
a={}
a=function(){}
// 都表示为一个对象

// {}用来指定对象可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后边加上?,表示是可选的
let b:{name:string,age?:number}
b={name:'张三',age:18}

// [propName:string]:any 表示任意类型的属性
let c:{name:string,[propName:string]:any}
c={name:'张三',age:18,gender:'男'}

/*
设置函数结构的类型声明：
语法:(形参：类型，形参：类型)=>返回值
*/ 
let d:(a:number,b:number)=>number
d=function(a,b){
    return a+b  
}

/*
数组的声明方式
类型[]
Array<类型>
*/ 
let e:number[]
e=[1,2,3,4,]

let f:Array<number>
f=[1,2,3,4,]

/**
 * 元组，元组就是固定长度的数组
 * 语法：[类型，类型]
 */
let g:[string,number]
g=['张三',18]

/**
 * 枚举；enum
 */
// 创建一个枚举
enum Gender{Man,Woman}
let h:{name:string,age:number,gender:Gender}
h={
    name:'张三',
    age:18,
    gender:Gender.Man
}

// 类型的别名
type Mytype = 1|2|3|4|5
let i:Mytype