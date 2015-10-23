export default function (n, width, z = '0') {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
