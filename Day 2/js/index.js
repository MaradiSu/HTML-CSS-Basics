var Myvar = 'Suresh';
var Myvar ='Maradi';
/*Firstly you can redeclare the variables with var but you cant with let*/
let letvar ='Rajesh';
//let letvar ='karadi';/*Error will be thrown*/

//alert(Myvar);

//alert(letvar);

//alert(Hi_message);
var Hi_message='Hi message';/* you cn use  it before declaring it*/
//alert(Hi_message);

var temporary;

tmporary ='Suresh Maradi';

/*------------Dynamically typed language-----------------------*/
let myAge = 27; //variable type number

myAge = 27.015;

let myName ='Suresh Maradi'; //variable type strings

myName ="Suresh Maradi"; //variable type strings

let varBool = true;

varBool = false;//variable type Boolean

varBool = 27 < 27.015;  //variable type Boolean

/*Arrays*/


let myArray = ['Suresh' , 'Maradi'];

alert("My first name is " + myArray[1]);

let myArrayNum =[10 , 20 , 30 ];
alert("My third num is " + myArrayNum[2]);//Disaplays 30
/*------------------------------------------------------ */


/*Objects */

let employee = {
   name : 'Suresh',
   sal : 125.59,
   place: 'Blore',
   desgn : 'Devops'

};


employee.desgn='Developer';

alert("Value changed to " + employee.desgn);


console.log( typeof employee.desgn ); // type will be string here


employee.desgn=75;

console.log( typeof employee.desgn ); // type will be number here



/*Constants */

const myCost = 'Suresh';


myCost ='Maradi';








