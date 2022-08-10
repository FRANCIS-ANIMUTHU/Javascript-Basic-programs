var n=5;
var a=0, b=1, nextterm;
console.log('fibonacci series=');
for(let i=1;i<=n;i++){
    console.log(a);
    console.log('\t');
    nextterm=a+b;
    a=b;
    b=nextterm;
}
