// program to check an Armstrong number of three digits
var a=345;
var sum=0;
var n=a;
while (n > 0) {
    let remainder = n % 10;
    sum =sum + (remainder * remainder * remainder);
    n=n-remainder;
    n=n/10;
    console.log(sum);
}
if (sum == a) {
    console.log(a, 'is an Armstrong number');
}
else {
    console.log(a,'is not an Armstrong number');
}