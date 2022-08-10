var h=47;
for(i=1;i<=h;i++){
let a=0;
for(j=2;j<i;j++){
if(i%j==0) {
a=1;
}  
}
if(a==0){
console.log(i);
}
}