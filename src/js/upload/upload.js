var spark = new SparkMD5.ArrayBuffer()

var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
var chunkSize = 1024 * 50 // 50KB一块
var chunks
var currentChunk = 0
var file, fileSize, fileHash

var fReader = new FileReader()

var startTime, loadTime, hashTime, endTime

var files = document.querySelector('#files')

function sliceChunks () {
    var start = currentChunk * chunkSize
    var end = (start + chunkSize > fileSize) ? fileSize : (start + chunkSize)
    
    return blobSlice.call(file, start, end)
}

files.addEventListener('change', function (e) {
    console.log(files.files)
    file = files.files[0]
    fReader.readAsArrayBuffer(file)
    fileSize = file.size
    chunks = Math.ceil(fileSize / chunkSize)
}, false)

fReader.onloadstart = function (e) {
    console.log('load start: ', e)
    startTime = Date.now()
    console.log(startTime)
}

fReader.onload = function (e) {
    loadTime = Date.now()
    console.log(loadTime - startTime)
    console.log('load: ', e)
    
    // calculate md5
    spark.append(e.target.result)
    fileHash = spark.end()
    console.log('file: ', file)
    console.log('fileSize: ', fileSize)
    console.log('fileHash: ', fileHash)
    
    // slice chunks
    getChunkFile()
    
    hashTime = Date.now()
    console.log(hashTime - loadTime)
}

fReader.onloadend = function (e) {
    console.log('load end: ', e)
    endTime = Date.now()
    console.log(endTime - hashTime)
}

fReader.onerror = function (err) {
    console.log('wrong: ', err)
}

function doRequest (blob, counter) {
    console.log({
        chunk: blob,
        counter: counter,
        fileHash: fileHash
    })
}

function getChunkFile () {
    while (currentChunk < chunks) {
        // TODO: ajax blob upload
        doRequest(sliceChunks(), currentChunk)
        currentChunk++
    }
}
