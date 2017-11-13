/**
 * 共享原型链，属性更改时对所有实例都改变
 * @constructor
 */
function Super () {
    this.property = true
    this.colors = ['red', 'green']
}

function Sub () {
    this.property = false
}

Sub.prototype = new Super()

export {
    Super,
    Sub
}
