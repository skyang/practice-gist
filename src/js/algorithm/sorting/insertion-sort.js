export default function insertionSort (lists) {
    if (Object.prototype.toString.call(lists) !== '[object Array]') return []
    
    const length = lists.length
    if (length <= 1) return lists
    
    for (let i = 1; i < length; i++) {
        let pivot = lists[i]
        for (let j = 0; j < i; j++) {
            if (lists[j] > pivot) {
                lists.splice(j, 0, lists[i])
                lists.splice(i + 1, 1)
                break
            }
        }
    }
    return lists
}
