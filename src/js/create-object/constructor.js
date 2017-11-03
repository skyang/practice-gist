/**
 * 构造函数模式
 */
export default function (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function () {
        console.log(this.name)
    }
}
