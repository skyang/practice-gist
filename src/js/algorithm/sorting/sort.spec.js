import quicksort from './quick-sort'
import bubblesort from './bubble-sort'
import insertionsort from './insertion-sort'
import selectionsort from './selection-sort'

describe('QuickSort Test', function () {
    describe('#bubblesort()', function () {
        it('should return [] when sort a value which is not an Array', function () {
            assert.deepEqual([], quicksort(null))
            assert.deepEqual([], quicksort(undefined))
            assert.deepEqual([], quicksort({}))
            assert.deepEqual([], quicksort('string'))
        })
        it('should return array itself when the input array\'s length <= 1', function () {
            assert.deepEqual([], quicksort([]))
            assert.deepEqual([1], quicksort([1]))
        })
        it('should return sorted array when input an array', function () {
            assert.deepEqual([1, 2, 3, 4, 5], quicksort([5, 4, 1, 3, 2]))
            assert.deepEqual([1, 2, 3, 4, 5], quicksort([1, 2, 3, 4, 5]))
            assert.deepEqual([1, 2, 3, 4, 5], quicksort([5, 4, 3, 2, 1]))
        })
    })
})

describe('BubbleSort Test', function () {
    describe('#bubblesort()', function () {
        it('should return [] when sort a value which is not an Array', function () {
            assert.deepEqual([], bubblesort(null))
            assert.deepEqual([], bubblesort(undefined))
            assert.deepEqual([], bubblesort({}))
            assert.deepEqual([], bubblesort('string'))
        })
        it('should return array itself when the input array\'s length <= 1', function () {
            assert.deepEqual([], bubblesort([]))
            assert.deepEqual([1], bubblesort([1]))
        })
        it('should return sorted array when input an array', function () {
            assert.deepEqual([1, 2, 3, 4, 5], bubblesort([5, 4, 1, 3, 2]))
            assert.deepEqual([1, 2, 3, 4, 5], bubblesort([1, 2, 3, 4, 5]))
            assert.deepEqual([1, 2, 3, 4, 5], bubblesort([5, 4, 3, 2, 1]))
        })
    })
})

describe('InsertionSort Test', function () {
    describe('#insertionsort()', function () {
        it('should return [] when sort a value which is not an Array', function () {
            assert.deepEqual([], insertionsort(null))
            assert.deepEqual([], insertionsort(undefined))
            assert.deepEqual([], insertionsort({}))
            assert.deepEqual([], insertionsort('string'))
        })
        it('should return array itself when the input array\'s length <= 1', function () {
            assert.deepEqual([], insertionsort([]))
            assert.deepEqual([1], insertionsort([1]))
        })
        it('should return sorted array when input an array', function () {
            assert.deepEqual([1, 2, 3, 4, 5], insertionsort([5, 4, 1, 3, 2]))
            assert.deepEqual([1, 2, 3, 4, 5], insertionsort([1, 2, 3, 4, 5]))
            assert.deepEqual([1, 2, 3, 4, 5], insertionsort([5, 4, 3, 2, 1]))
        })
    })
})

describe('SelectionSort Test', function () {
    describe('#selectionsort()', function () {
        it('should return [] when sort a value which is not an Array', function () {
            assert.deepEqual([], selectionsort(null))
            assert.deepEqual([], selectionsort(undefined))
            assert.deepEqual([], selectionsort({}))
            assert.deepEqual([], selectionsort('string'))
        })
        it('should return array itself when the input array\'s length <= 1', function () {
            assert.deepEqual([], selectionsort([]))
            assert.deepEqual([1], selectionsort([1]))
        })
        it('should return sorted array when input an array', function () {
            assert.deepEqual([1, 2, 3, 4, 5], selectionsort([5, 4, 1, 3, 2]))
            assert.deepEqual([1, 2, 3, 4, 5], selectionsort([1, 2, 3, 4, 5]))
            assert.deepEqual([1, 2, 3, 4, 5], selectionsort([5, 4, 3, 2, 1]))
        })
    })
})
