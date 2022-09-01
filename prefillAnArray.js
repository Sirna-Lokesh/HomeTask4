function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) {
        throw new TypeError(`${n} is invalid`);
    }
    else if (n == 0) {
        return [];
    }
    else {
        let array = new Array(n);
        array.fill(v);
        return array;
    }
}