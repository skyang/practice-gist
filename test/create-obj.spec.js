import factoryCreate from '../src/js/create-object/factory'
import PersonCtr from '../src/js/create-object/construct'
import PersonProto from '../src/js/create-object/proto-object'

describe('Factory Pattern', function () {
    it('factory', function () {
        let testObj = factoryCreate('Hu', 20, 'Engineer')
        assert.isObject(testObj, 'create an object')
        assert.containsAllKeys(testObj, ['name', 'age', 'job'], 'a person object with name,age and job')
    })
})

describe('Constructor Pattern', function () {
    it('constructor', function () {
        let testObj = new PersonCtr('Hu', 20, 'Engineer')
        assert(testObj.constructor === PersonCtr, 'constructor')
        assert.isObject(testObj, 'create an object')
        assert.instanceOf(testObj, Object, 'assert testObj instanceof Object')
        assert.containsAllKeys(testObj, ['name', 'age', 'job'], 'a person object with name,age and job')
    })
})

describe('Prototype Pattern', function () {
    it('proto', function () {
        let testObj = new PersonProto()
        assert(testObj.constructor === PersonProto, 'constructor')
        assert.isObject(testObj, 'create an object')
        assert.instanceOf(testObj, Object, 'assert testObj instanceof Object')
        assert.doesNotHaveAnyKeys(testObj, ['name', 'age', 'job'], 'a person object without name,age and job')
        assert(PersonProto.prototype.isPrototypeOf(testObj))
        assert.equal(Object.getPrototypeOf(testObj), PersonProto.prototype)
        assert.equal(testObj.name, 'Hu')
        assert.isNotTrue(testObj.hasOwnProperty('name'))
        testObj.name = 'Li'
        assert.equal(testObj.name, 'Li')
        assert.isTrue(testObj.hasOwnProperty('name'))
    })
})
