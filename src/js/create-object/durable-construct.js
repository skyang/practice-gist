/**
 * 稳妥构造函数模式
 * 内部数据只能被内部方法访问
 * @return {Object}
 */
export default function (name, age, job) {
    let o = new Object()
    
    o.name = name
    o.age = age
    o.job = job
    o.friends = ['aaa', 'bbb']
    
    o.sayName = function () {
        console.log(name)
    }
    
    return o
}
