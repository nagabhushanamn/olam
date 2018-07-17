/**
 * http://usejsdoc.org/
 */

/*

    data-types
    -----------------

    2 types
    
    1. simple / primitives ==> values

        a. string
        b. number
        c. boolean
        d. undefined
    
    2. complex / referenece ==> objects

*/

//---------------------------------------------------
// 1. simple / primitives ==> values
//---------------------------------------------------

// a. string

var name = "Nag";
var selection = 'abc';
// var dynamicString = "the trainer " + name;
// or
var dynamicString = `the trainer ${name}`;
var resultString = `the sum os 1 and 2 is ${12 + 13}`;
var multiLineString = `
    i love veg items
    i love non-veg items
`;

//---------------------------------------------------

// b. number

var count = 12;
var cost = 12.12;

//---------------------------------------------------

// c. boolean

var found = true;

// imp-note :  falsy values  ==> false,0,"",null,undefined,NAN

// ref : https://dorey.github.io/JavaScript-Equality-Table/

//---------------------------------------------------

// d. undefined

var v;

//---------------------------------------------------

// 2. complex / reference ==> objects / user-defined types

//---------------------------------------------------

/*

    how to create object?
    
    syntax:

    var ref=new Constructor();

    imp-note : All .js objects are extensible & configurable

*/


//var config = new Object(); 
//config.url = "http://";
//config.httpMethod = 'GET';
//config.onSuccess = function () {
//    console.log('im executing on success');
//}
//delete config.httpMethod;

//......


//-------------------------------------------------------------------
// Literal-style object ( object which we can create without 'new' operator )
//-------------------------------------------------------------------

// 1. Object

var config = new Object(); 
config.url = "http://";
config.httpMethod = 'GET';
config.onSuccess = function () {
    console.log('im executing on success');
};

// or   ( literal style _

var newConfig={
		url:"http://",
		httpMethod:'GET',
		onSuccess:function(){
			console.log('im executing on success');
		}
};


//-------------------------------------------------------------------

// 2. Array

var arr=new Array();
arr[0]="item-1";
arr[1]="item-2";
arr.push("item-3");

// or ( Literal style )

var newArr=["item-1","item-2","item-3"];

//-------------------------------------------------------------------

// 3. RegExp

var adharCardPattern=new RegExp("\\d{4}-\\d{4}-\\d{4}");
// or ( Literal style )
var adharCardPatternNew=/\d{4}-\d{4}-\d{4}/;

//-------------------------------------------------------------------

// 4.  Function

var add=new Function("n1","n2","var result=n1+n2;return result;");
// or ( Literal style )
function add(n1,n2){
	var result=n1+n2;
	return result;
}

//-------------------------------------------------------------------



// How to access obj's properties ?

/*
 *  2 ways
 *  
 *  way-1 : '.' , if property dont have dash or space
 *  else
 *  way-2 : '[]' 
 * 
 */

var person={
		name:'Nag',
		"home-address":"chennai"
};

person.name="Nag N";
console.log(person.name);

person['home-address']="bengalore";
console.log(person['home-address']);








