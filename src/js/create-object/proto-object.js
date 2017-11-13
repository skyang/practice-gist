function Person () {
}

Person.prototype.name = 'Hu'
Person.prototype.age = 20
Person.prototype.job = 'Enginerr'
Person.prototype.sayName = function () {
    console.log(this.name)
}

export default Person
