var n=31,b=0;
for(i=2; i<n; i++){
    if(n%i==0){
        b=1;
        break;
    }
}
console.log(b);
if(b==1){
    console.log(n,'is not a prime number');
}
else{
    console.log(n,'is a prime number');
}