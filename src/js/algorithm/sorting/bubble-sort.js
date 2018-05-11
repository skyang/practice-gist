export default function bubbleSort (lists) {
    if (Object.prototype.toString.call(lists) !== '[object Array]') return []
    
    const length = lists.length
    if (length <= 1) return lists
    for (let i = length; i > 1; i--) {
        for (let j = 0; j < i; j++) {
            if (lists[j] > lists[j + 1]) {
                let temp = lists[j]
                lists[j] = lists[j + 1]
                lists[j + 1] = temp
            }
        }
    }
    return lists
}
