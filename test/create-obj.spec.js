import factoryCreate from '../src/js/create-object/factory'
import Person from '../src/js/create-object/construct'

describe('Factory Pattern', function () {
    it('factory', function () {
        let testObj = factoryCreate('Hu', 20, 'Engineer')
        assert.isObject(testObj, 'create an object')
        assert.containsAllKeys(testObj, ['name', 'age', 'job'], 'a person object with name,age and job')
    })
})

describe('Constructor Pattern', function () {
    it('constructor', function () {
        let testObj = new Person('Hu', 20, 'Engineer')
        assert(testObj.constructor === Person, 'constructor')
        assert.isObject(testObj, 'create an object')
        assert.containsAllKeys(testObj, ['name', 'age', 'job'], 'a person object with name,age and job')
    })
})
