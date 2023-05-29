function arrayDiff(a, b) {
    let result = a;

    for (let num of b) {
        if (result.includes(num)) {
            result = result.filter(elem => elem !== num)
        }
    }
    return result
}