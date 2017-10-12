import add from '../src/js/add'

const assert = require('assert')
describe('Base Function Test', function () {
    describe('#add()', function () {
        it('should return 2 when 1 + 1', function () {
            assert.equal(2, add(1, 1))
        })
    })
})
