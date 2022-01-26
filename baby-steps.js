// console.log(process.argv);
const length = process.argv.length;
// console.log(length);
let  sum=0;
let  i =2;
while(i<length) 
{
//  console.log(process.argv[i])
 sum = sum + Number(process.argv[i]);
//  console.log(sum);
i++;
}
 console.log(sum)
