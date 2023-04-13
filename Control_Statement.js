// function basics
// task 1
function getNationalBird(){
    return "peacock";
}
console.log("The national bird of India is the "+getNationalBird());
console.log(getNationalBird());
// task 2
function greet() {
    return "Hello! Have a nice day";
  }
  console.log(greet());
// task 3
function sum(a=20,b=10) 
{
  return a + b;
}
console.log(sum());
// task 4
function sum(a=2,b=4,c=(a+b)/2) 
{
  return c;
}
console.log(sum());
// task 5
function greetWithName(personName = "Aravindh kumar") {
    return "Hi " + personName;
  }
  console.log(greetWithName());
// task 6
function conv(a=10,b=a*60)
{
    return b;
}
console.log(conv());
