module.exports = function solveEquation(equation) {

  var strArray = equation.split('x'); // разбивает на куски

  var str = strArray[0];
  var a = parseInt(str, 10);
  
  str = strArray[1];
  str = str[3] + str.substr(5);
  var b = parseInt(str, 10);

  str = strArray[2];
  str = str[1] + str.substr(3);
  var c = parseInt(str, 10);
  
  var D = b*b - 4*a*c;
  var res_arr = [];
  var x = (-b + Math.sqrt(D)) / (2*a);
  res_arr.push(Math.round(x));
  x = (-b - Math.sqrt(D)) / (2*a);
  if (x > res_arr[0]){
    res_arr.push(Math.round(x));
  } else{
    res_arr.unshift(Math.round(x));
  }
  
   
  return res_arr;
}
