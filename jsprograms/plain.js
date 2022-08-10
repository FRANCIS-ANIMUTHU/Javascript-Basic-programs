  //addition
var a=567;
var b=56;
var c;
function add(x,y)
{
    c=(x+y);
    console.log('a value is=',a);
    console.log('b valueis=',b);
    console.log('addition=',c);
}
add(a,b)

//subtraction
var a=75;
var b=44;
var c;
function subtraction(x,y)
{
    c=(a-b);
    console.log('a value is=',a);
    console.log('b value is=',b);
    console.log('subtraction=',c);
}
subtraction(a,b)

//multiplication
var a=67;
var b=34;
var c;
function multiplication(x,y)
{
    c=(x*y);
    console.log('a value is=',a);
    console.log('b value is=',b);
    console.log('multiplication=',c);
}
multiplication(a,b)

//division
var a=768;
var b=45;
var c;
function division(x,y)
{
    c=(x/y);
    console.log('a value is=',a);
    console.log('b value is=',b);
    console.log('division=',c);
}
division(a,b)

//Area of circle
 var r=14;
area=Math.PI*Math.pow(r,2);
console.log('circle=',area);

//Area of triangle
let b1=23;
let h=12;
area=0.5*(b1*h);
console.log('triangle=',area);

//Simple interest
let p=10000;
let n=60;
let r1=5;
I=(p*n*r1)/100;
console.log('simple interest=',I);

//square
let a1=40;
let j;
j=Math.pow(a1,2);
console.log('square area=',j);
j=4*a1;
console.log('square circum=',j);



//swap
let x1='34';
let y1='67';
console.log('x1=',y1.replace(x1));
console.log('y1=',x1.replace(y1));

//total to average
let g=345;
let v=456;
let u=390;
let s1;
s1=(g+v+u)/3;
console.log('average=',s1);


//positive or negative
let d1=-76;
if(d1>0){
    console.log('Positive number');
}
else if(d1<0){
    console.log('Negative number');
}
else{
    console.log('Zero');
}

//Greater than 10
let k1=90;
if(k1<10){
    console.log('k1 is Not greater than 10');
}
else if(k1>10){
    console.log('k1 is Greater than 10');
}
else{
    console.log('k1 is Equal to 10');
}

//Even or Odd
let c1=11;
if(c1==0){
    console.log('Zero');
}
else if(c1%2!=0){
    console.log('Odd number');
}
else{
    console.log('Even number');
}

//Divisible of 5
let t1=56;
if(t1==0){
    console.log('It is Zero');
}
else if(t1%5==0){
    console.log('It is divisible 5');
}
else{
    console.log('It is not divisible 5');
}

//Multiple of 7
let v1=84;
if(v1==0){
    console.log('It is Zero');
}
else if(v1%7==0){
    console.log('It is multiple of 7');
}
else{
    console.log('It is not multiple of 7');
}

//Quardaric equation
let w1=567;
let l1=433;
let o1=760;
let f=(b*b-4*w1*o1);
if(f>0){
    f1=(-l1+Math.sqrt(f/(2*w1)));
    f2=(-l1-Math.sqrt(f/(2*w1)));
    console.log(f1,f2);
}
else if(f==0){
    f1=(-li/(2*w1));
    f2=(-li/(2*w1));
    console.log(f1,f2);
}
else{
    console.log('No totals');
}

//Student mark of grade
let q1=88;
 if(q1<=34){
    console.log('fail');
}
else if(q1<=50){
    console.log('Grade D');
}
else if(q1<=70){
    console.log('Grade C');
}
else if(q1<=85){
    console.log('Grade B');
}
else{
    console.log('Grade A');
}


//let a=Math.floor(Math.random()*6)+1;
//console.log(a)







