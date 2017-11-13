/**
 * 寄生继承模式
 */
function inheritProto (sub, sup) {
    let proto = Object.create(sup.prototype)
    proto.constructor = sub
    sub.prototype = proto
}

function Super (name) {
    this.name = name
    this.age = 18
}

Super.prototype.sayName = function () {
    console.log(this.name)
}

function Sub (name, job) {
    Super.call(this, name)
    this.job = job
}

inheritProto(Sub, Super)

Sub.prototype.sayJob = function () {
    console.log(this.job)
}

let ins = new Sub('Hu', 'Engineer')

console.log(Super.prototype.isPrototypeOf(ins))
console.log(Sub.prototype.isPrototypeOf(ins))
