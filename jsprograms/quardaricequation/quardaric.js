//Quardaric equation
let a=1;
let b=-3;
let c=-10;
let y;
y=(b*b)-(4*a*c);
s=Math.sqrt(y);
x1=(-b+s)/(2*a);
x2=(-b-s)/(2*a);
console.log(`${y}\n${s}\n${x1}\n${x2}`);