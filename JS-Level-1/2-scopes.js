/**
 * http://usejsdoc.org/
 */


/*

	 Execution-context / scope
	 ----------------------------
	 
	 memory/stack-frame with given args & locals to execute instructions in seq
	 
	 phase-1 : creation / push
	 
	 		   ==> any variable declared with 'var' keyword, 
	 		       always get hoisted with default value ( undefined )	
	 
	 phase-2 : execution / pop
	 
	 			==> instructions will exe in seq
	 			
	 ----------------------------------------------------------------
	 
	 imp-note :

		==> every javascript runtime, has 1 global-scope by default
		
		==> every function invocation also creates new-scope 
		    which is child of in which scope function has declared/created

	 ----------------------------------------------------------------
*/

//
//
//var v=12;
//console.log(v);



//----------------------------------------------------------------

//
//
//
//var v=12;
//function f1(){
//	console.log(v);
//	var v=13;
//}
//f1(); // f1-scope   <-- global-scope

//----------------------------------------------------------------

// Quiz
//
//
//
//var v=12;
//function f1(){
//	function f2(){
//		console.log(v);
//	}
//	f2();
//	var v=13;
//}
//f1();


//----------------------------------------------------------------
//var v=12;
//var v=13;
//----------------------------------------------------------------

//var v=100;
//if(true){
//	var v=200;
//}
//console.log(v);

//----------------------------------------------------------------


/*
 * 
 * problems with 'var' keyword
 * 
 * 
 * ==> variables get hoist
 * ==> can re-declare same variable withn scope
 * ==> No block-scope to variables
 * 
 * 
 *  soln :
 *  
 *  using 'let' & 'const' keywords with block-scope  ( es6 )
 * 
 */


//----------------------------------------------------------------

//
//console.log(v);
//let v=12;


//----------------------------------------------------------------


//----------------------------------------------------------------
//var v=12;
//let v=13;
//----------------------------------------------------------------


//var v=100;
//if(true){
//	let v=200;
//}
//console.log(v);


//----------------------------------------------------------------

//
//const trainer={
//		name:'Nag'
//};
////trainer=null; // error
//trainer.name="olam";


//----------------------------------------------------------------


// summary 

/*
 * 
 *  let  ==> for mutable-reference variables
 *  const ==> for immutable-reference variable
 *  
 *  best-practice :
 *  
 *  var    ==> try to avoid
 * 
 * 
 */







