/**
 * http://usejsdoc.org/
 */


/*

	what is object ?
	
		- info,data,prop,attr     ==> State
		- func,method,oprns,work  ==> Behav
		- addr,refere,location    ==> Identity

		obj ==> SBI
		
		
		similar objects  ==> obj's template ( S & B )  ==> class
		
		
		class ==> instances / objects
		
		
		//-------------------------------------------------------
		
		OO concepts
		
		1.Abstraction / Interface
			why we need ?
			=> Easy to use/learn  by dependent
			=> Loose coupling
		
		2.Encapsulation / Implementation
			why we need ?
		    => hide complexity		
		3. Inheritance
	    4. Polymorphism		
	
		//-------------------------------------------------------    

*/



// ES5 ==> class


//function Person(name,age){
//	// state
//	this.name=name;
//	this.age=age;
//	// behav
//}
//Person.prototype.sayName=function(){
//	console.log('im '+this.name);
//}
//Person.prototype.sayAge=function(){
//	console.log('im '+this.age +" old");
//}


// Es6  => class

class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	sayName(){
		console.log('im '+this.name);
	}
	sayAge(){
		console.log('im '+this.age +" old");
	}
}

// idendity
let p1=new Person('Nag',34)
let p2=new Person('Ria',3)














