// var index = 2;
// var sum = 0;
// while(process.argv[index]){
//   sum = sum + parseInt(process.argv[index]);
//   ++index;
// }
// console.log(sum);

var result = 0;

for (var i = 2; i < process.argv.length; i++){
  result += Number(process.argv[i]);
}
console.log(result);
// console.log(result);