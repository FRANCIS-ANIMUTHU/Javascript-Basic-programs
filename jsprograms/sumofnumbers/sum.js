let x=3451;
let sum=0;
while(x!=0){
    rem=x%10;
    sum=sum+rem;
    x=x-rem;
    x=x/10;
}
console.log('sum of numbers=',sum);