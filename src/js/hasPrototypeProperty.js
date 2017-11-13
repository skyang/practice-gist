export default function (obj, prop) {
    return !obj.hasOwnProperty(prop) && (prop in obj)
}
