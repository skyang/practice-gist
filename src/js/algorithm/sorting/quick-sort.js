export default function quicksort (lists) {
    if (Object.prototype.toString.call(lists) !== '[object Array]') return []
    
    const length = lists.length
    if (length <= 1) return lists
    let left = [], right = []
    let pivot = [lists[0]]
    for (let i = 1; i < length; i++) {
        const li = lists[i]
        if (lists[i] < pivot[0]) {
            left.push(li)
        } else {
            right.push(li)
        }
    }
    return quicksort(left).concat(pivot.concat(quicksort(right)))
}
