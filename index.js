/*
1- Write a program that allow to user enter number then printit
Example
Input: 5
Output: 5
*/

// var numb =window.prompt();
// document.getElementById("num").innerHTML=numb
// document.getElementById("numberr").innerHTML=`1- Write a program that allow to user enter number then printit
// Example
// Input: 5
// Output: 5`


/*
2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no
Example1
Input: 12 Output Yes 
Example 2
Input: 9 Output No
*/


// var numb =+window.prompt();
// if (numb%3==0 && numb%4==0 ){
//     document.getElementById("num").innerHTML=true
// } else {
//     document.getElementById("num").innerHTML=false
// }




/*
3- Write a program that allows the user to insert 2 integers then print the max
Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10
*/


// var numb =+window.prompt();
// var numb2 =+window.prompt();


// if (numb>numb2){
//     document.getElementById("num").innerHTML=numb
// } else {
//     document.getElementById("num").innerHTML=numb2
// }



/*4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
Example 1
Input: -5
Output negative 
Example2
Input: 10 
Output positive*/



// var numb =+window.prompt();
// if (numb>=0){
//     document.getElementById("num").innerHTML="postive";
// } else {
//     document.getElementById("num").innerHTML="negative"
// }


/*
5- Write a program that take 3 integers from user then print the max element 
and the min element.
Example 1
 Input:7,8,5
Output:
max element = 8 
min element = 5 
Example2
Input: 3 6 9 
Outputs:
Max element = 9 
Min element = 3
*/

// var numb=window.prompt();
// var numb2=window.prompt();
// var numb3=window.prompt();
// var largest =Math.max(numb,numb2,numb3)
// var smallest =Math.min(numb,numb2,numb3)
// document.getElementById("num").innerHTML="Max"+ largest ;
// document.getElementById("num2").innerHTML="min"+ smallest;



/*

6- Write a program that allows the user to insert integer number then 
check If a number is oven or odd
7- Example 1
Input: 8 
Output: even
Example 2
Input: 7
Output: odd
*/

//  var numb=window.prompt();
// if (numb%2==0){
//     document.getElementById("num").innerHTML="Oven"
// }else 
// {
//     document.getElementById("num").innerHTML="Odd"
// }


/*
8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant
Example1
Input: O
Output: vowel 
Example 2
Input: b
Output:
Consonant
*/


// var numb=window.prompt();

// if (numb=='a' || numb=='e' ||numb=='I' || numb=='o' || numb=='u' )
// {
//     document.getElementById("num").innerHTML="vowel"
//  }else 
// {
//     document.getElementById("num").innerHTML="Consonant"
// }




/*
9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to 
that’s number
Example Input 5
Output 1, 2, 3, 4, 5
*/


// var numb=+window.prompt();
// var box=""
// for(var numb2=1;numb2<=numb;numb2++)
// {
//  box+=`
//  <p class="nums" id="nums">`+numb2+`</p>
//  `
// }
// document.getElementById("num").innerHTML=box;



/*
10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
Example 
Input: 5 
Outputs:
5 10 15 20 25 30 35 40 45 50 55 60
.*/


// var numb=+window.prompt();
// var box="";
// for(var numb2=1;numb2<=12;numb2++)
// {

// box+=`<p class="nums" id="nums">`+`${numb2}*${numb}`+`=`+ (numb2 * numb)+`</p>
// `}
// document.getElementById("num").innerHTML=box;

//!********************************
/*11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers 
between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14
*/



// var numb =+window.prompt();
// var box=""
// for (var numb2=1;numb2<=numb;numb2++)
// {
// if(numb2%2==0){
// box+=`<p class="nums" id="nums">`+numb2+`</p>`
// }};
//  document.getElementById('num').innerHTML=box;



/*
12-riteaprogramthattaketwointegersthenprintthepower
Example:
Input: 4 3
Output: 64
Hint how to calculate 4^3 = 4 * 4 * 4 =64
*/


// var numb =+window.prompt();
// var numb3 =+window.prompt();
// var result=numb**numb3;
// document.getElementById('num').innerHTML=result;



/*
12- Write a program to enter marks of five subjects and calculate total, average and 
percentage.
 Example
Input: - Enter Marks of five subjects:
95
76
58
90
89
Output:-.Total marks = 435
 Average Marks =87
Percentage =87
*/


// var numb =+window.prompt();
// var numb2 =+window.prompt();
// var numb3 =+window.prompt();
// var numb4 =+window.prompt();
// var numb5 =+window.prompt();

// var total=numb+numb2+numb3+numb4+numb5;
// var averagee=(total/5);
// var precentagee=((total/500)*100);
// document.getElementById('num').innerHTML='average marks = '+averagee ;
// document.getElementById('num2').innerHTML='Total marks = '+total;
// document.getElementById('num3').innerHTML='precentagee marks = '+precentagee;



/*
13-Write a program to input month number and print number of days in that 
month.
Example:
Input: - Month Number: 1
 Output:-. Days in Month: 31
*/
//54477889

// var month=window.prompt();
// if(month==1 ||month==3 ||month==4||month==5||month==6||month==7)
// {
// var result=30;
// } else if  (month==8||month==9||month==10||month==11||month==12){
// var result=29;

// }else {
// var result="not a manth";
// };
// document.getElementById('num').innerHTML=result;
// //console.log(result);



/*
14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade 
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F
*/


// var numb =+window.prompt("Physics");
// var numb2 =+window.prompt("Chemistry");
// var numb3 =+window.prompt("Biology");
// var numb4 =+window.prompt("Mathematics");
// var numb5 =+window.prompt("Computer");

// var total=numb+numb2+numb3+numb4+numb5;
// var precentagee=((total/500)*100);
// if (precentagee >= 90)
// grade = 'A';
// else if (precentagee >= 80 && precentagee < 90)
// grade = 'B';
// else if (precentagee >= 70 && precentagee < 80)
// grade = 'C';
// else if (precentagee >= 60 && precentagee < 70)
// grade = 'D';
// else if (precentagee >= 40 && precentagee < 60)
// grade = 'E';
// else
// grade = 'F';

// document.getElementById('num').innerHTML="grade ="+grade;





/********************************* Using switch case*******************************/
//15- Write a program to print total number of days in month 



// var numb=+window.prompt();
// var days ;
// switch (numb)
// {
//  case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:days=29
//     break;
//     case 7:
//         case 8:
//         case 9:
//         case 10:
//         case 11:
//         case 12:days=31
//         break;
//         default:days= "not a month "
// };
// //console.log(days);
// document.getElementById('num').innerHTML="month ="+days;



/*
16- Write a program to check whether an alphabet is vowel or consonant*/


// var numb =window.prompt();
// var alphabettypee;
// switch (numb) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u": alphabettypee = "vowel"
//         break;
//     case "b":
//     case "c":
//     case "d":
//     case "f":
//     case "g":
//     case "h":
//     case "j":
//     case "k":
//     case "l":
//     case "m":
//     case "n":
//     case "p":
//     case "q":
//     case "r":
//     case "s":
//     case "t":
//     case "v":
//     case "x":
//     case "y":
//     case "z":alphabettypee = "consonant"
//         break;
//     default: alphabettypee = "not a alphabet "
// };
// //console.log(days);
// document.getElementById('num').innerHTML = "alphabettype is " + alphabettypee;



/*17- Write a program to find maximum between two numbers */


// var numb=+window.prompt(); 
// var numb2=+window.prompt();
// var result=Math.max(numb,numb2);
// var numm
// switch(result) 
// {
// case numb:numm=+numb
//     break;
//     case numb2:numm=+numb2
// }
// document.getElementById('num').innerHTML=numm;


/*18- Write a program to check whether a number is even or odd */

// var numb=+window.prompt();
// var num2=(numb%2);
// var numm
// switch  (num2){
// case 0:numm="odd";
//     break;
//     case 1:numm="even"
// }
// document.getElementById('num').innerHTML=numm;


//19- Write a program to check whether a number is positive or negative or zero 

var numb = +window.prompt();
numbertyp =(numb>0)?1:(numb<0)?2:3;
var result;

switch(numbertyp){
case    1:result="Positive Number";break;

case 2:result="Negative Number";break;  

case 3:result="Zero";break;

}
document.getElementById('num').innerHTML = result;


/* Write a program to create Simple Calculator /*/



// var numb=+window.prompt("الرقم الاول");
// var operato=window.prompt("العملية الحسابية");
// var numb2=+window.prompt("الرقم الثانى");
// var result
// switch(operato)
// {
// case "+":  result=+numb+numb2; break;
// case "-": result=numb-numb2; break;
// case  "*":result=numb*numb2   ;break;
//  case "/":result=numb/numb2; break;


// }

// document.getElementById('num').innerHTML=result;