const ftoc = function(f) {
// [°C] = ([°F] − 32) × ​5⁄9
  return parseFloat(((f - 32) * 5 / 9).toFixed(1));
}

const ctof = function(c) {
// [°F] = [°C] × ​9⁄5 + 32
  return parseFloat((c * 9 / 5 + 32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
