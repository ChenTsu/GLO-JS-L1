'use strict';

let num = prompt('Введите число', '33721');
let res;
//считаем что на вход всегда попадают правильные данные

num = num.split('');
res = num[0];

for (let i=1; i<num.length; i++){
  res *= num[i];
}
console.log(res);

res = res*res*res;
console.log(res);


alert( res.toString().slice(0,2) );