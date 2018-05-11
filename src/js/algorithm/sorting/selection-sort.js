export default function selectionSort (lists) {
    if (Object.prototype.toString.call(lists) !== '[object Array]') return []
    
    const length = lists.length
    if (length <= 1) return lists
    
    for (let i = 0; i < length; i++) {
        let min = i
        for (let j = i + 1; j < length; j++) {
            if (lists[min] > lists[j]) min = j
        }
        let temp = lists[i]
        lists[i] = lists[min]
        lists[min] = temp
    }
    
    return lists
}
