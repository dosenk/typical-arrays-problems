exports.min = function min(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((prevItem, item) => {
        return item < prevItem ? item : prevItem;
    })
}

exports.max = function max(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((prevItem, item) => {
        return item > prevItem ? item : prevItem;
    })
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((prevItem, item) => {
        return item + prevItem;
    }) / array.length;
}