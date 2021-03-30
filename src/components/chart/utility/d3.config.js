export const getEndPoint = val => {
    let count = Math.floor(val).toString.length - 1
    let step = Math.pow(10, count)

    if (val / step < 5) {
        step = step / 2
    }
    count = Math.ceil(val/step)

    return count * step
}