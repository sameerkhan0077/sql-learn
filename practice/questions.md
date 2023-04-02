01. Write a JavaScript program to display the current day and time in the following format;
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
```
let date = new Date();
let days = ['Sunday','Monday' , 'Tuesday' , 'Wednesday', 'Thursday', 'Friday' , 'Saturday' ];
let today = date.getDay();
console.log(`Today is : ${days[today]}.`);

let hh = date.getHours() , mm = date.getMinutes(), ss = date.getSeconds();

var p = hh >= 12 ? 'pm' : 'am';
hh = hh % 12; // eg 5%2 = 1
hh = hh ? hh : 12 ;
mm = mm < 10 ? '0'+mm : mm;

console.log(`Current time is :${hh} ${p} : ${mm} : ${ss}`);
```
02.  Write a JavaScript program to print the contents of the current window.
```
function printPage(){
    window.print()
}

printPage()
```

03.  Write a JavaScript program to get the current date. 
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

```
let date = new Date()
console.log(`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`);
console.log(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);
console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
  ```

  4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
  ```
    let h = 6 , p = 7 , b = 5;
    let area  = (1/2)*b*h;
    console.log(area);
  ```
  5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
  ```

  ```
  6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
  ```
  let year = 1600;
if(year%100==0 | year%4==0 | year%400==0){
console.log("Leap Year");
}else {
    console.log("full year");
}
  ```
  7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
  ```
    for(var i=2014;i<=2050; i++ ){
   const d = new Date(i ,0 , 1)
    if(d.getDay()===0){
    console.log(i);
    }
    }

  ```
  8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  
  ```
  let num = Number(prompt("Enter a num"));
let guess = 5;
let rnum = Math.floor(Math.random()*10);
if(rnum== guess)
{
    console.log("good work");
}
else{
    console.log("Try again");
}
  
  ```
  9. Write a JavaScript program to calculate days left until next Christmas. 
  ```
  
  ```
  10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
  ```
  let num1 = Number(prompt("Enter a num"));
let num2 = Number(prompt("Enter a num"));
let res ;
let op = prompt("Enter operator");
if(op=='+') res = num1+num2;
if(op=='-') res = num1-num2;
if(op=='*') res = num1*num2;
if(op=='/') res = num1/num2;
if(op=='%') res = num1%num2;

if(num1 && num2 < 0) 
res = "enter positive value"
console.log(res);

  ```