// control statement
// task 1
var a=3;
var b=-10;
var c=2;
var product=(a*b*c);
if(product>0)
{
    alert("the sign is +")
}
else{
    alert("the sign is -")
}
// task 2
var end=15;
for(var st=0;st<=end;st++)
{   
    if(st%2==0)
    {
        console.log(st+" is even");
    }
    else
    {
        console.log(st+" is odd");
    }
}
// task 3
var a=1;
var b=2;
if (a>b)
{
    console.log(a + " is largest");
}
else if(b>a)
{
    console.log(b + " is largest");
}
else
{
    console.log("a and b are equal");
}
// task 4
var a = 0;
for (var b = 0; b < 10; b++)
{
  if (b% 3==0 || b% 5==0)
    {
       a += b;
       console.log(a);
    }
}
// task 5
var end=100;
for(var st=0;st<=end;st++)
{   
    if(st%3==0)
    {
        console.log(st+" fizz");
    }
    else if(st%5==0)
    {
        console.log(st+" buzz");
    }
    else if(st%3==0 && st%5==0)
    {
        console.log(st+" fizzbuzz");
    }
    else{
        console.log(st);
    }
}
// task 6
function gcd(a, b) {
    var divisor;
    for (var c = 1; c <= a && c <= b; c++) {
      if( a % c == 0 && b % c == 0) {
            divisor = c;
      }
    }
    return divisor;
}
var result = gcd(100, 300);
console.log(result);

