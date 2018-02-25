module.exports = function getZerosCount(number) {
  let res = Math.floor(number/5);
  let p = 25;
while(number > 0 && p < number)
{
  res += Math.floor(number/p);
  p *= 5;
}
return res;
}
