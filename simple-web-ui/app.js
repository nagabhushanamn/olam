/**
 * http://usejsdoc.org/
 */

console.log('-app.js-');

// Using DOM API

let alertBox = document.getElementsByClassName('alert')[0];
let hideBtn = document.getElementsByClassName('btn-danger')[0];
let showBtn = document.getElementsByClassName("btn-primary")[0];
let greetBtn = document.getElementsByClassName("btn-success")[0];

hideBtn.addEventListener('click', function() {
	alertBox.style.display = 'none';
});
showBtn.addEventListener('click', function() {
	alertBox.style.display = '';
});
greetBtn.addEventListener('click', function(e) {
	alertBox.innerText = "good noon";
});

// Using Timer API
let imgEle = document.getElementById("panda");
let idx = 0;
setInterval(function() {
	idx++;
	let imagePath = `images/${idx}.jpeg`;
	imgEle.src = imagePath;
	if (idx === 2)
		idx = 0;
}, 1000);


// using XHR/Fetch API


// plain-js with fetch API
//
//let usersBtn=document.getElementsByClassName("btn-dark")[0];
//let usersBox=document.getElementsByClassName('jumbotron')[0];
//usersBtn.addEventListener("click", function(e) {
//	let apiUrl="https://jsonplaceholder.typicode.com/users?_limit=1";
//	let promise=fetch(apiUrl); // Non blocking IO
//	promise
//	.then(function(response){return response.json()})
//	.then(function(users){
//		usersBox.innerText=JSON.stringify(users);
//	})
//	
//});
//

// using Jquery

$('#userBtn').click(function(){
	let apiUrl="https://jsonplaceholder.typicode.com/users?_limit=1";
	$.getJSON(apiUrl,function(users){
		console.log(users);
		$('.jumbotron').text(JSON.stringify(users))
	})
});











