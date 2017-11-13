/**
 * 组合使用构造函数模式和原型模式
 * 构造函数用于定义实例属性，原型用于构造共享属性和方法
 */
function Person (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.friends = ['aaa', 'bbb']
}

Person.prototype.sayName = function () {
    console.log(this.name)
}
export default Person
