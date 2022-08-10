let n=345;
let rem=0,reverse=0;

while(n!=0){
    rem=n%10;
    reverse=reverse*10+rem;
    n=n-n%10;
    n=n/10;

}
console.log(reverse);