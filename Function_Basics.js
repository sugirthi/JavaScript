// function Exercises
// task 1
function findLargest(a=10000, b=4000, c=3600) {
    if (a > b && a > c) {
      return a;
    } else if (b > c) {
      return b;
    } else {
      return c;
    }
  }
  console.log(findLargest());
// task 2
function findTriangleType(a=30, b=30, c=30) {
    if (a==b && a==c) {
      console.log("Equilateral Triangle");
    } else if (a==b || b==c || c==a) {
      console.log("isoceles Triangle");
    } else {
      console.log("Scalene Triangle");
    }
  }
  console.log(findTriangleType());
  // task 3
  function checkInRange(a=15,start=11,range=30 ){
    if(a>=start && a<=range){
        console.log("Between the range");
    }
    else{
         console.log("outside the range");
    }
    }
checkInRange()
  // task 4
  evalNumbers(9,8,"add");
evalNumbers(30,6,"divide");
evalNumbers(9,2,"modulus");
evalNumbers(2,3,"power");
function evalNumbers(num1, num2, operation) 
{
  if (operation === "add")
  {
    console.log(num1 + num2);
  } 
  else if (operation === "subtract")
  {
    console.log(num1 - num2);
  } 
  else if (operation === "multiply")
  {
    console.log(num1 * num2);
  }
  else if (operation === "divide")
  {
    console.log(num1 / num2);
  }
  else if (operation === "modulus")
  {
    console.log(num1 % num2);
  }
  else
  {
    console.log("Invalid operation");
  }
}
 // task 5
 function checkLeapYear(a=2023){
    if(a%400==0){
        console.log("It is a leap year");
    }
    else{
         console.log("not a leap year");
    }
    }
checkLeapYear()
 // task 6
 function findGrade(marks=70)
{
  if (marks >= 90 && marks <= 100)
  {
    console.log("S grade");
  } 
  else if (marks >= 80 && marks < 90)
  {
    console.log("A grade");
  } 
  else if (marks >= 70 && marks < 80)
  {
    console.log("B grade");
  }
  else if (marks >= 60 && marks < 70)
  {
    console.log("C grade");
  } 
  else if (marks >= 50 && marks < 60)
  {
    console.log("D grade");
  } 
  else if (marks >= 40 && marks < 50)
  {
    console.log("E grade");
  } 
  else if (marks >= 0 && marks < 40) 
  {
    console.log("Student has failed");
  } 
  else
  {
    console.log("Invalid marks");
  }
}
findGrade()
 // task 7
 function findDaysInMonth(month=2,year=2012){
    if (month>12)
    console.log("invalid month");
    else if(month==2 && year%4==0){
     console.log("The month has 29 days");   
    }
    else if(month==2 && year%4!=0){
     console.log("The month has 28 days");   
    }
    else if(month==4||month==6||month==9||month==11){
      console.log("The month has 30 days");     
    }
    else{
       console.log("The month has 31 days");   
    }
}
console.log(findDaysInMonth());
