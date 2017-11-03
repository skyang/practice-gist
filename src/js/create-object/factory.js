/**
 * 工厂模式
 */
export default function (name, age, job) {
    let obj = new Object()
    obj.name = name
    obj.age = age
    obj.job = job
    obj.sayName = function () {
        console.log(this.name)
    }
    return obj
}
