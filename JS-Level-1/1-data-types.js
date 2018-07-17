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

// 2. complex / referenece ==> objects / user-defined types

//---------------------------------------------------

/*

    how to create object?
    
    syntax:

    var ref=new Constructor();

    imp-note : All .js objects are extensible & configurable

*/


var config = new Object(); 
config.url = "http://";
config.httpMethod = 'GET';
config.onSuccess = function () {
    console.log('im executing on success');
}
delete config.httpMethod;

//......