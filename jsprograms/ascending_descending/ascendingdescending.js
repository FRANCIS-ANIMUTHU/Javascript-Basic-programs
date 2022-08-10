 //Ascending
 var x=3456;
 var y=1234;
 var z=5423;
console.log('Given Order = ',x,y,z);
console.log('Ascending Order');
if(x>y && x>z && y>z){
console.log(z,y,x);
}
else if (x>y && x>z && z>y){
console.log(y,z,x);
}
else if(x>y && x<z && y<z){
console.log(y,x,z);
}
else if(x<y && y>z && x>z){
console.log(z,x,y);
}
else if(x<y && y>z && x<z){
console.log(x,z,y);
}
else
console.log(x,y,z);

//descending
 var x=3456;
 var y=1234;
 var z=5423;
console.log('Given Order = ',x,y,z);
console.log('Descending order');
if(x<y && x<z && y<z){
console.log(z,y,x);
}
else if (x<y && x<z && z<y){
console.log(y,z,x);
}
else if(x<y && x>z && y>z){
console.log(y,x,z);
}
else if(x>y && y<z && x<z){
console.log(z,x,y);
}
else if(x>y && y<z && x>z){
console.log(x,z,y);
}
else
console.log(x,y,z);
 
 
     
 