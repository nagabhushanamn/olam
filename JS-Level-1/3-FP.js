/**
 * http://usejsdoc.org/
 */

/*

 * 
 * Functional Programming ( FP ) 
 * ------------------------------
 * 
 * Principles
 * 
 *  - A function can be stored in a variable or value 
 *  - The return value of a function can be a function 
 *  - A parameter of a function can be a function
 * 
 * 
 */

// -----------------------------------------------------------------------
/*
 * // How to create function in .js-lang ?
 * 
 * 2 ways
 * 
 * 1. function declaration
 * 
 *  => Named function 
 *  => function-obj created ate scope-creation phase 
 *  => always get hoist with function-object
 * 
 * 2. function expression
 * 
 *  => anonymous function 
 *  => function-obj created ate scope-execution phase 
 *  => we can invoke after expression
 * 
 */

// -----------------------------------------------------------------------

// 1. function declaration
//
// console.log(add(12,13));
//
// function add(n1,n2){
// return n1+n2;
// }
// console.log(add(12,13));
// -----------------------------------------------------------------------
// 2. function expression
// console.log(add(12,13)); // error
// var add=function(n1,n2){
// return n1+n2;
// };
// console.log(add(12,13));

// -----------------------------------------------------------------------
//
//
// var userType;
// var action;
// function login(){
// userType="admin"; // 'guest'
// }
// login();
// if(userType==="admin"){
// action=function(){console.log('admin action');}
// }else{
// action=function(){console.log('guest action');}
// }
// action();

// -----------------------------------------------------------------------
// - A function can be stored in a variable or value
// -----------------------------------------------------------------------

//
// function greet(){
// console.log('Hello..');
// }
//
// let sayHello=greet;
// sayHello();
//
// -----------------------------------------------------------------------
// - A parameter of a function can be a function
// -----------------------------------------------------------------------

//function greet(f) {
//
//	if (f) {
//		f();
//		return;
//	}
//	console.log('hello...');
//
//}
//greet();
//let tnGreet = function() {
//	console.log('Vanakkam')
//}
//greet(tnGreet);
//
////e.g
//
//let nums=[1,3,5,7,9,2,4,6,8,10];
//nums.sort();
//let asc=function(a,b){return a-b;};
//nums.sort(asc);


//-----------------------------------------------------------------------
//The return value of a function can be a function
//-----------------------------------------------------------------------

//
//function teach(){
//	console.log('teaching..');
//	let learn=function(){
//		console.log('learning..')
//	}
//	//learn();
//	console.log('teaching ends..');
//	return learn;
//}
//
//let learnFunc=teach();
//learnFunc();
//learnFunc();


//-----------------------------------------------------------------------
// Function with params
//-----------------------------------------------------------------------

/*
 * by default , .js function params optional
 * 
 */
//
//function func(a,b,c){
//	console.log(a);
//	console.log(b);
//	console.log(c);
//	console.dir(arguments);
//}
//
//func(10,20,30,40,50);


// e.g
//
//
//function sum(){
//	let result=0
//	    i=0,
//	    len=arguments.length;
//	while(i<len){
//		result+=arguments[i];
//		i++
//	}
//	return result;
//}


// can  we overload function in .js-lang by params ? No

//function getFood(){
//	return "No Food";
//}
//function getFood(pay){
//	if(arguments.length===0)return "No Food";
//	return "biryani";
//}
//console.log(getFood());




//-----------------------------------------------------------------------
// Function with default-params  ( ES6 )
//-----------------------------------------------------------------------




//function func(a=1,b=2){
//	
//	//if(!a)a=1
//	//if(!b)b=2
//	
//	// or
//		
//	//	a=a||1;
//	//	b=b||2;
//	
//	console.log(a)
//	console.log(b)
//}
//func(undefined,20);
//
//

//-----------------------------------------------------------------------
//Function with rest-param  ( ES6 )
//-----------------------------------------------------------------------
//
//function func(a,b,...rest){
//	console.log(a);
//	console.log(b);
//	console.log(rest);
//}
//func(1,2,3,4,5,6,7,8,9);










