/**
 * 动态原型模式
 * 只在第一次初始化prototype
 * @constructor
 */
export default function Person (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.friends = ['aaa', 'bbb']
    
    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name)
        }
    }
}
