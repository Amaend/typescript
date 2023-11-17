// 类的声明
abstract class Animal {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
    public abstract sayHi(): void;
  }
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
    public sayHi() {
      console.log("wangwang");
    }
  }
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
    public sayHi() {
      console.log("miao");
    }
  }
  let dog = new Dog("小黑");
  let cat = new Cat("小白");
  console.log(cat);
  console.log(dog);
  
  // interface用来描述class的类型
  interface PersonInter {
    name:string;
    age:number;
    say(): void; //必须包含say方法
  }
  // 想要实现person类实现接口类型必须使用implements关键字
  class Person implements PersonInter {
    public name: string;
    public age: number;
    constructor(name: string,age:number) {
      this.name = name;
      this.age=age
    }
    public say() {
      console.log(this.name);
    }
  }

//   使用 implements 只能约束类实例上的属性和方法，要约束构造函数和静态属性，需要这么写。
interface CircleStatic {
    new (radius: number): void
    pi: number
}
 
const Circle:CircleStatic = class Circle {
    static pi: 3.14
    public radius: number
    public constructor(radius: number) {
        this.radius = radius
    }
}
  