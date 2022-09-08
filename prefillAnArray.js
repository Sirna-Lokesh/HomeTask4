function prefill(n, v) {
  let value = parseInt(n);
  if (isNaN(value) || !Number.isInteger(parseFloat(n)) || value < 0) {
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