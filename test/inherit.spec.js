import { Super, Sub } from '../src/js/inherit/proto-inherit'

describe('Inherit based on Prototype', function () {
    it('create sub instance', function () {
        let subIns = new Sub()
        
        assert.equal(subIns.property, false, 'sub instance has its own property')
        assert.isTrue(subIns.constructor === Super, 'Sub原型指向Super的原型，Super原型对象的constructor指向Super')
        assert.isNotTrue(subIns.constructor === Sub, 'Sub原型指向Super的原型，Super原型对象的constructor指向Super')
        assert.isTrue(subIns instanceof Sub, 'subIns是由Sub构造函数生成，是其实例')
        assert.isTrue(subIns instanceof Super, '由于原型链的关系，Sub的实例也是Super的实例')
        assert.isTrue(Sub.prototype.isPrototypeOf(subIns), '或使用isPrototypeOf方法判断')
        assert.isTrue(Super.prototype.isPrototypeOf(subIns))
        
    })
})
