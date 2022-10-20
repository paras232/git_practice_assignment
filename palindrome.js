//code for prime no. check!
// let num=57;
// let count=0;
// for(i=1;i<num;i++);
//   if num%i==o {
//     count++
//   }

// if(count==0){
//   console.lognum,"is prime";
// }else{
//   condsole.lognum,"is not prime";
// }

//code for palindrome!

// let str="padap";
// let flag=0;
// for(i=0;i<str;i++){
//   if(i!=str[str.length-1-i]){
//     flag=1;
//   }
// }




/*<---- Corrected(Fixed Code) By Gulam Murtuza ------>*/

/*
For Prime Number
*/;
let num= 57;
let count=0;
// Since, 1 is neither prime nor composite is number. So, iterating the loop from 2 
for(i=2;i<num;i++){
  if (num%i === 0) {
    count++
  }
}
if(count === 0){
  console.log(num,"is prime");
} else {
  console.log(num,"is not prime");
}

/*
for palindrome check
 */

let str="padap";
let flag="";
for(i=str.length-1; i>=0 ;i--){
  flag+=str[i];
}
if(flag == str){
  console.log(str,"is palindrome!");
} else {
  console.log(str,"is not palindrome!");
}