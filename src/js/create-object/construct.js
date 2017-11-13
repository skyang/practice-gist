/**
 * 构造函数模式
 * 文件名为`constructor.js`时，会报错`.default is not a constructor`
 *
 * `new` 操作符创建对象过程：
 * 1. 创建一个新对象；
 * 2. 将构造函数的作用域赋给新对象（this指向新对象）
 * 3. 执行构造函数内部的代码（给新对象增加属性）
 * 4. 返回新对象
 */
export default function (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function () {
        console.log(this.name)
    }
}
