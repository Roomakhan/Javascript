//chapter # 1
//Task # 1
alert("Welcome to the website")

//Task # 2
alert("Error! Please enter a valid password")

//Task # 3
alert("Welcome to JS Land" + "\n" + "Happy Coding!")

//Task # 4
var a = "Welcome to JS Land... ";
alert(a);

var b = "Prevent this page from creating additional dialogues ";
alert(b);

//Task # 5
var b = "Hello... I can run JS through my web browser's console";
alert(b);

//Task # 6
alert("Welcome to the website") 







//chapter # 2
//Task # 1
var username;

//Task # 2
var myName = "Rooma Khan";

//Task # 3
var message = "Hello World";
alert(message)

//Task # 4
var student_name = "Jhone Doe";
var student_age = "15 years old"
var student_achievements = "Certified Mobile Application Development"
alert(student_name)
alert(student_age)
alert(student_achievements)

//Task # 5
var a = "PIZZA";
alert(a + "\n" +a.slice(0,4) + "\n" + a.slice(0,3) + "\n" +a.slice(0,2) + "\n" +a.slice(0,1));

//Task # 6
var email = "roomakh08@gamil.com";
alert("My email address is " + email);

//Task # 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

//Task # 8
document.write("yeah! I can write HTML content through JavaScript");

//Task # 9
var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(string)
document.write("\n" + string);









//chapter # 3
//Task # 1
var age ="20";
alert("I am " + age + " years old")

//Task # 2                                                   //incomp
var N = 0;
var J = N++
alert("You have visited this site " +  N + " times")

//Task # 3
var birthYear = "1998";
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number");

//Task # 4
var Name = prompt("Enter your name: ");
var Product_title = prompt("Enter product name: ");
var Quantity = prompt("Enter Quantity: "); 
document.write(Name + " ordered " + Quantity + " " + Product_title + " on XYZ Clothing store");









// CHAPTER 4
//Task # 1
var name, place, animal;

//Task # 2
var name, $name, _name, userName, $age;
// var document, -alert, var, 1write, console;

//Task # 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<br><br>");
document.write("Variable names can only contain number, $ and _ .For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
document.write("Variable names are case senstive<br>");
document.write("Variable names should not be JS keywords<br>");








//chapter # 5
//Task # 1
var num1 = +prompt("Enter 1st number: ");
var num2 = +prompt("Enter 2nd number: ");
var result = (+num1) + (+num2);
document.write("Sum of " + num1 + " and " + num2 + " is " + result);

//Task # 2
//Subtraction
var num1 = +prompt("Enter 1st number: ");
var num2 = +prompt("Enter 2nd number: ");
var result = (num1 - num2);
document.write("Subtraction of " + num1 + " and " + num2 + " is " + result);

//Multiplication
var num1 = +prompt("Enter 1st number: ");
var num2 = +prompt("Enter 2nd number: ");
var result = (num1 * num2);
document.write("Multiplication of " + num1 + " and " + num2 + " is " + result);

//Division
var num1 = +prompt("Enter 1st number: ");
var num2 = +prompt("Enter 2nd number: ");
var result = (num1 / num2);
document.write("Division of " + num1 + " and " + num2 + " is " + result);

//Modulus
var num1 = +prompt("Enter 1st number: ");
var num2 = +prompt("Enter 2nd number: ");
var result = (num1 % num2);
document.write("Modulus of " + num1 + " and " + num2 + " is " + result);

//Task # 3
var a;
document.write("Value after variable declaration is " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a = a + 1;
document.write("Value after increment is: " + a + "<br>");
a = a + 7;
document.write("Value after addition is: " + a + "<br>");
a = a - 1;
document.write("Value after decrement is: " + a + "<br>");
a= a % 3;
document.write("The remainder is: " + a );

//Task # 4
var cost = "600";
var Quantity = +prompt("How many tickets you want to buy?");
var Total = (cost * Quantity);
document.write("Total cost to buy " + Quantity + " tickets to a movie is " + Total);

//Task # 5
var n = +prompt("Enter a number");
document.write("Table of  " + n + "<br>");
for (var i=1; i<=10; i++){
    document.write(n + " x " + i + " = " + n*i +  "<br>");
}

 //Task # 6
 var Celsius = +prompt("Enter Celsius temperature ");
 var Fahrenheit = +prompt("Enter Fahrenheit temperature ");
 var f= ((Celsius*9/5)+(+32));
 var c= ((Fahrenheit-32)*5/9);
 document.write(Celsius+ "°C is " + f + " °F" + "<br>");
 document.write(Fahrenheit+ "°F is " + c + " °C");

//Task # 7
var item1 = "650";
var item2 = "100";
document.write("Price of item 1 is " + item1 + "<br>");
var qty1=+prompt("Enter Quantity of item 1");
document.write("quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
var qty2=+prompt("Enter Quantity of item 2");
document.write("quantity of item 2 is " + qty2+ "<br>");
document.write("Shipping charges 100" + "<br>");

var total = ((item1*qty1) + (item2*qty2) + 100);
document.write("Total cost of your order is " + total);


//Task # 8
document.write("Marks sheet" + "<br>");
var TM = +prompt("Enter Total marks");
var OM = +prompt("Enter Obtained marks");
document.write("Total Marks: " + TM + "<br>");
document.write("Marks Obtained: " + OM + "<br>");
var per = (OM/TM *100);
document.write("Percentage: " + per);

//Task # 9
document.write("Currency in PKR" + "<br>");
var dollar = "104.80";
var Riyal = "28";
var D = +prompt("Enter Dollars");
var R = +prompt("Enter Riyal");
var total = ((dollar*D) + (Riyal*R));
document.write("Total Currency in PKR: " + total);

//Task # 10
var a = "10";
var total = ((((+a) + (+5)) * 10)/2);
document.write(total);

//Task # 11
document.write("Age Calculator" + "<br>");
var C_year = +prompt("Enter Current year");
document.write("Current year: " + C_year +"<br>");
var B_year = +prompt("Enter your Birth year");
document.write("Birth year: " + B_year + "<br>");
var age = (C_year - B_year);
document.write("They are either " + age + " or " + ((+age)+(+1)) + " years old");

//Task # 12
var radius = +prompt("Enter Radius");
var pi = "3.142";
var C = (2* pi* radius);
document.write("The circumference is " + C +"<br>");
var area = (pi * (radius* radius));
document.write("The area is " + area);

//Task # 13
var fav_snack = prompt("Enter your favorite snack");
var Days = "365";
var C_age = +prompt("Enter Current age");
var maxAge = +prompt("Enter Maximun age");
var amountPerDay = +prompt("Enter estimated amount per day");
var R_age = (maxAge - C_age);
var total = (R_age*Days*amountPerDay);
document.write("You will need " + total + " to last you until the ripe old age of " + R_age );








// CHAPTER 6 - 9
//Task # 1

var a = 10;

document.write("Result:"+"<br>"+"<br>");
document.write("The value of a is ",a+"<br>");
document.write("-----------------------------------"+"<br>"+"<br>");
++a;
document.write("The value of ++a is ",a+"<br>");
document.write("Now the value of a is ",a+"<br>"+"<br>");
document.write("The value of a++ is ",a+"<br>");
a++;
document.write("Now the value of a is ",a+"<br>"+"<br>");
--a;
document.write("The value of --a is ",a+"<br>");
document.write("Now the value of a is ",a+"<br>"+"<br>");
document.write("The value of a-- is ",a+"<br>");
a--;
document.write("Now the value of a is ",a+"<br>"+"<br>");

//Task # 2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("Result: "+result+"<br>"+"<br>");

var a = 2, b = 1;
--a;
document.write("--a: "+a+"<br>");

--b;

var c = a - b;
document.write("--a - --b: "+c+"<br>");

++b;

c = c + b;
document.write("--a - --b + ++b: "+c+"<br>");


c = c + b--;
document.write("--a - --b + ++b + b++: "+c+"<br>");


//Task # 3

var a = prompt("Your Name: ");
document.write("Welcome "+a);


//Task # 5

var num = prompt("Enter Number: ");
var b;
if(num != ""){
    for(var i = 1; i <= 10; i++){
        b = num * i;
        document.write(num+" x "+i+" = "+b+"<br>");
    }
}
else{
    num = 5;
    for(var i = 1; i <= 10; i++){
        b = num * i;
        document.write(num+" x "+i+" = "+b+"<br>");
    }
}

//Task # 6

var sub1 = prompt("Subject 1: ");
var sub2 = prompt("Subject 2: ");
var sub3 = prompt("Subject 3: ");
var max = 100;
var obt1 = prompt("Obtained marks of Subject1: ");
var obt2 = prompt("Obtained marks of Subject2: ");
var obt3 = prompt("Obtained marks of Subject3: ");
var total = 300;
var total_obt = (+obt1) + (+obt2) + (+obt3);
var per1 = (obt1/max)*100;
var per2 = (obt2/max)*100;
var per3 = (obt3/max)*100;
var Percentage = (total_obt/total)*100;
document.write("<table>");

document.write("<tr>");
document.write("<td>");
document.write("<b>Subject</b>");
document.write("</td>");
document.write("<td>");
document.write("<b>Total Marks</b>");
document.write("</td>");
document.write("<td>");
document.write("<b>Obtained Marks</b>");
document.write("</td>");
document.write("<td>");
document.write("<b>Percentage</b>");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(sub1);
document.write("</td>");
document.write("<td>");
document.write(max);
document.write("</td>");
document.write("<td>");
document.write(obt1);
document.write("</td>");
document.write("<td>");
document.write(per1+"%");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(sub2);
document.write("</td>");
document.write("<td>");
document.write(max);
document.write("</td>");
document.write("<td>");
document.write(obt2);
document.write("</td>");
document.write("<td>");
document.write(per2+"%");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(sub3);
document.write("</td>");
document.write("<td>");
document.write(max);
document.write("</td>");
document.write("<td>");
document.write(obt3);
document.write("</td>");
document.write("<td>");
document.write(per3+"%");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write("<b>Total</b>");
document.write("</td>");
document.write("<td>");
document.write(total);
document.write("</td>");
document.write("<td>");
document.write(total_obt);
document.write("</td>");
document.write("<td>");
document.write(Percentage+"%");
document.write("</td>");
document.write("</tr>");

document.write("</table>");









// CHAPTER 9 - 11
//Task # 1
var city = prompt("City: ");
if(city == "Karachi"){
    document.write("Welcome to the city of light!");

}
else{
    document.write("Welcome");
}

//Task # 2
var gen = prompt("Gender: ");
if(gen == "male"){
    document.write("Good Morning Sir!");
}
else{
    document.write("Good Morning Ma'am!");
}

//Task # 3
var color = prompt("signal: ");
if(color == "Red"){
    document.write("Must Stop!");
}
else if(color == "Yellow"){
    document.write("Ready to Move");
}
else{
    document.write("Move Now");
}

//Task # 4
var fuel = prompt("Remaining fuel (in litre): ");
if(fuel < 0.25){
    document.write("Please refill the fuel in your car");

}
else{
    document.write("Enough fuel")
}

//Task # 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

//Task # 6
var sub1 = prompt("Subject 1: ");
var sub2 = prompt("Subject 2: ");
var sub3 = prompt("Subject 3: ");
var max = 100;
var obt1 = prompt("Obtained marks of Subject1: ");
var obt2 = prompt("Obtained marks of Subject2: ");
var obt3 = prompt("Obtained marks of Subject3: ");
var total = 300;
var total_obt = (+obt1) + (+obt2) + (+obt3);
var per1 = (obt1/max)*100;
var per2 = (obt2/max)*100;
var per3 = (obt3/max)*100;
var Percentage = (total_obt/total)*100;

document.write("<h1>Mark Sheet</h1>");

if(Percentage >= 80){
    document.write("Total Marks: "+total+"<br>");
    document.write("Obtained Marks: "+total_obt+"<br>");
    document.write("Percentage: "+Percentage+"%"+"<br>");
    document.write("Grade: A+"+"<br>");
    document.write("Remarks: Excellent"+"<br>");
}
else if(Percentage >= 70){
    document.write("Total Marks: "+total+"<br>");
    document.write("Obtained Marks: "+total_obt+"<br>");
    document.write("Percentage: "+Percentage+"%"+"<br>");
    document.write("Grade: A"+"<br>");
    document.write("Remarks: Good"+"<br>");
}
else if(Percentage >= 60){
    document.write("Total Marks: "+total+"<br>");
    document.write("Obtained Marks: "+total_obt+"<br>");
    document.write("Percentage: "+Percentage+"%"+"<br>");
    document.write("Grade: B"+"<br>");
    document.write("Remarks: You Need To Improve"+"<br>");
}
else{
    document.write("Total Marks: "+total+"<br>");
    document.write("Obtained Marks: "+total_obt+"<br>");
    document.write("Percentage: "+Percentage+"%"+"<br>");
    document.write("Grade: F"+"<br>");
    document.write("Remarks: Sorry"+"<br>");
}


//Task # 7
var ran = 7;
var guess = prompt("Guess Number: ");
if(guess == ran){
    document.write("Bingo! Correct answer");
}
else if((+guess)+1 == ran){
    document.write("Close enough to the correct answer");
}
else{
    document.write('Try again');
}

//Task # 8
var num = prompt("Number: ");
var div = num%3;
if(div == 0){
    document.write(num+" is divisible by 3");
}
else{
    document.write(num+" is not divisible by 3");
}

//Task # 9
var num = prompt("Number: ");
var div = num%2;
if(div == 0){
    document.write(num+" is EVEN");
}
else{
    document.write(num+" is ODD");
}

//Task # 10
var T = prompt("Temparature: ");

if(T > 40){
    document.write("It is too hot outside"+"<br>");
    
}
else if(T > 30){
    document.write("The Weather today is Normal."+"<br>");
    
}
else if(T > 20){
    document.write("Today’s Weather is cool"+"<br>");
    
}
else{
    document.write("OMG! Today’s weather is so Cool"+"<br>");
    
}


//Task # 11
var op1 = prompt("First Number: ");
var op2 = prompt("Second Number: ");
var sign = prompt("Operation (+,-,*,/,%): ");
var result;
if(sign == "+"){
    result = (+op1) + (+op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}
else if(sign == "-"){
    result = (op1) - (op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}

else if(sign == "*"){
    result = (op1) * (op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}
else if(sign == "/"){
    result = (op1) / (op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}
else if(sign == "%"){
    result = (op1) % (op2);
    document.write(op1+" "+sign + " "+ op2+" = "+result)
}









// CHAPTER 12 - 13
//Task # 1

var char = prompt("Character: ");
var count;
if(char >= 'A' && char <= 'Z'){
    document.write("UpperCase character");  
}
else if (char >= 'a' && char <= 'z')  {
    document.write("LowerCase character" );  

}


//Task # 2
var op1 = prompt("First Number: ");
var op2 = prompt("Second Number: ");
if ( op1 > op2){
    document.write(op1+" is Larger" );  
}
else if ( op1 < op2){
    document.write(op2+" is Larger" );  
}

else if ( op1 == op2){
    document.write("Equal" );  
}

//Task # 3
var op1 = prompt("Number: ");

if ( op1 > 0){
    document.write(op1+" is Positive" );  
}
else if ( (+op1) < 0){
    document.write(op1+" is Negative" );  
}

else if ( op1 == 0){
    document.write("Equal to Zero" );  
}

//Task # 4
var char = prompt("Character: ");
if(char == 'a' || char == 'e' || char == 'i' || char == 'o'|| char == 'u' || char == 'A'|| char == 'E' || char == 'I'|| char == 'O' || char == 'U'){
    document.write("Vowel Letter");  
}
else{
    document.write(" Not a Vowel Letter" );  

}

//Task # 5
var password = "1234";
var pass = prompt("Enter Your Password: ");
if(password == pass){
    document.write("Correct! The password you entered matches the original password" );
}
else if(pass == ""){
    document.write("Please enter your password" );
}
else{
    document.write("Incorrect password" );
}

//Task # 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
document.write(greeting);
}
else{
greeting = "Good evening";
document.write(greeting);
}

//Task # 7
var time = prompt("Time: ");
if(time>=0000 && time<1200){
    document.write("Good morning!");
}
else if(time>=1200 && time<1700){
    document.write("Good afternoon!");
}
else if(time>=1700 && time<2100){
    document.write("Good evening!");
}
else if(time>=2100 && time<2359){
    document.write("Good night!");
}








// CHAPTER 14 - 16
//Task # 1
var myList = [];

//Task # 2
var myList = Object();

//Task # 3
var arr = ['izkah','rooma'];

//Task # 4
var arr = [1,2,3,4,5,6,7];

//Task # 5
var arr = [true,false];

//Task # 6
var arr = ['izkah','rooma',1,2,3,true,false];

//Task # 7
var arr = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phill.','PhD'];
document.write("<h1>Qualification</h1>")
for(var i = 0; i<=arr.length-1;i++){
    document.write("("+(i+1)+") "+arr[i]+"<br>");
}

//Task # 8
var arr1 = ['Micheal','John','Tony'];
var arr2 = [320,230,480];
for(var i = 0; i<=arr1.length-1;i++){
        var per = (arr2[i]/500)*100;
        document.write("Score of "+arr1[i]+" is "+arr2[i]+".Percentage: "+per+"%"+"<br>");
    }

//Task # 9
var color = ['red','blue','green','pink'];
var a = prompt("Color: ");
color.unshift(a);
document.write(color);


color.push(a);
document.write(color);

color.unshift('green','orange');
document.write(color);

color.shift();
document.write(color);

color.pop();
document.write(color);

var a = prompt("Color: ");
var b = prompt("Index: ");
color.splice(b,1,a);
document.write(color);


var b = prompt("Index: ");
var c = prompt("Qty: ")
var upd_color = [];
for(var i = 1; i<=c; i++){
    var a = prompt("Color: ");
    upd_color.push(a);
}
for(var j=0; j<=upd_color.length-1;j++){
    color.splice(b,1,upd_color[j]);
    b = b+1;
}
document.write(color);



var b = prompt("Index: ");
var c = prompt("Qty: ")
color.splice(b,c);
    
document.write(color);

//Task # 10
var score = [320,230,480,120];
document.write("Score of Students: "+score+"<br>");
var sort = score.sort();
document.write("Ordered Score of Students: "+sort);

//Task # 11
var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
var selectedCities = [];
selectedCities = cities.slice(2,4);
document.write("Cities:"+"<br>")
document.write(selectedCities+"<br>"+"<br>")
document.write("Selected Cities:"+"<br>")
document.write(selectedCities);


//Task # 12
var arr = ["This ", "is ", "my ", "cat. "];
var arr1 = arr.join("");
document.write(arr1);

//Task # 13
var newArr = ['keyboard','mouse','printer','monitor'];
document.write("Devices: <br>"+newArr+"<br>"+"<br>")
for(i=0;i<=newArr.length-1;i++){
    document.write("OUT: <br>");
    document.write(newArr[i]+"<br>")
}

//Task # 14
var newArr = ['keyboard','mouse','printer','monitor'];
document.write("Devices: <br>"+newArr+"<br>"+"<br>")
for(i=newArr.length-1;i>=0;i--){
    document.write("OUT: <br>");
    document.write(newArr[i]+"<br>")
}

//Task # 15
var arr = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'];
document.write("<select>");
for(var i = 0 ; i<=arr.length-1 ; i++){
    document.write("<option>"+arr[i]+"</option>");
}
document.write("</select>");








// CHAPTER 17 - 20
//Task # 1
var multi_arr = [[],[],[]];

//Task # 2
var multi_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i = 0; i<=multi_arr.length-1;i++){
    for(var j = 0;j<multi_arr[i].length;j++){
        document.write("<b>"+multi_arr[i][j]+"</b>");
    }
    document.write("<br>");
}

//Task # 3
for(var i = 1; i <= 10 ; i++){
    document.write(i+"<br>")
}

//Task # 4
var num = prompt("Enter Number: ");
var l = prompt("Enter Length: ");
var b;

    for(var i = 1; i <= l; i++){
        b = num * i;
        document.write(num+" x "+i+" = "+b+"<br>");
    }

//Task # 5
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(var i = 0;i<=fruits.length-1;i++){
    document.write(fruits[i]+"<br>");
}
document.write("<br>");

for(var i = 0;i<=fruits.length-1;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

//Task # 6
var i,j,k,l,m;
document.write("Counting:"+"<br>");
for(i = 1; i <= 15 ; i++){
        document.write(i+", ");
    }
    document.write("<br>");
document.write("Reverse Counting:"+"<br>");
for(j = 10; j >= 1 ; j--){
        document.write(j+", ");
    }
    document.write("<br>");
document.write("Even:"+"<br>");
for(k = 0; k <= 20 ; k=k+2){
        document.write(k+", ");
    }
    document.write("<br>");
document.write("Odd:"+"<br>");
for(l = 1; l <= 20 ; l=l+2){
        document.write(l+", ");
    }
    document.write("<br>");
document.write("Series:"+"<br>");
for(m = 2; m <= 20 ; m=m+2){
        document.write(m+"k, ");
    }
    document.write("<br>");

//Task # 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("What Do You Want? ");

for(var i = 0;i<=A.length-1;i++){
    if(A[i] == b){
        document.write(b+" is available at index "+A.indexOf(b)+" in our bakery");
    }
    else{
        document.write("We are sorry, "+b+" is not availbale in our bakery.");
        break;
    }
    
}

//Task # 8
var array = [24,53,78,91,12];
document.write("Array Items: ",array+"<br>")
var arr = array.sort();
var largest= array[array.length-1];


document.write("Largest Number: "+largest);

//Task # 9
var array = [24,53,78,91,12];
document.write("Array Items: ",array+"<br>")
var arr = array.sort();
var Small = arr[0];


document.write("Smallest Number: "+Small);


//Task # 10
for(var i = 5;i <= 100;i = i + 5 ){
    document.write(i+" ,");
}