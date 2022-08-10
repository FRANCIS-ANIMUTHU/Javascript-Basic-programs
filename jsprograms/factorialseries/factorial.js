let a=6;
let b=factorial(a);
console.log('factorial value=');
function factorial(a){
    if(a==0 || a==1){
        return 1;
    }
    else{
        return a*factorial(a-1);
}
}
console.log(b);

