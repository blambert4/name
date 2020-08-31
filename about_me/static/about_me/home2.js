function six() {
			var jr = document.getElementsByTagName('button');
			if(jr[1].style.visibility == 'visible') {
				jr[1].style.visibility = 'hidden'; jr[0].style.color = 'grey';  
				jr[1].style.backgroundColor = 'lightgrey';
			}
			else {
				jr[1].style.visibility = 'visible';
				jr[1].style.color = 'white';  
				jr[1].style.backgroundColor = 'lightblue'
			}
			};

function seven() {
			var jr = document.getElementsByTagName('button');
			if(jr[2].style.visibility == 'visible') {
				jr[2].style.visibility = 'hidden'; jr[0].style.color = 'grey';  
				jr[2].style.backgroundColor = 'lightgrey';
			}
			else {
				jr[2].style.visibility = 'visible';
				jr[2].style.color = 'white';  
				jr[2].style.backgroundColor = 'lightblue'
			}
			};

function eight() {
			var jr = document.getElementsByTagName('button');
			if(jr[3].style.visibility == 'visible') {
				jr[3].style.visibility = 'hidden'; jr[0].style.color = 'grey';  
				jr[3].style.backgroundColor = 'lightgrey';
			}
			else {
				jr[3].style.visibility = 'visible';
				jr[3].style.color = 'white';  
				jr[3].style.backgroundColor = 'lightblue'
			}
			};		

function ex1() {
	var ex1 = document.querySelector('.changes');
	var box = document.querySelector('.explanation');
	if(ex1.innerHTML = ' place your curser over a topic and i will explain ') {
	ex1.innerHTML = 'this google maps api uses a lot of different things in it but mostly javascript and css';
	ex1.style.color = 'white';
	box.style.backgroundColor = 'black';
	box.style.border = 'solid lightblue 5px';
	}
}

function ex2() {
	var ex2 = document.querySelector('.changes');
	var box = document.querySelector('.explanation');
	if(ex2.innerHTML = ' place your cursor over a topic and i will explain ') {
	ex2.innerHTML = 'this game was made because i really like megaman and i thought it would be fun. Uses A LOT of javascript and css';
	ex2.style.color = 'white';
	box.style.backgroundColor = 'black';
	box.style.border = 'solid lightblue 5px';
	}	
}

function ex3() {
	var ex3 = document.querySelector('.changes');
	var box = document.querySelector('.explanation');
	if(ex3.innerHTML = ' place your cursor over a topic and i will explain ') {
	ex3.innerHTML = 'super converter that allows you to do popular conversions in a click of a button. heavily uses the back-end programming language python'
	ex3.style.color = 'white';
	box.style.backgroundColor = 'black';
	box.style.border = 'solid lightblue 5px';
	}	
}

function ex4() {
	var ex4 = document.querySelector('.changes');
	var box = document.querySelector('.explanation');
	if(ex4.innerHTML = ' place your cursor over a topic and i will explain ') {
	ex4.innerHTML = 'this is a sample landing site that a business would want to use. basic HTML CSS and javascript';
	ex4.style.color = 'white'
	box.style.backgroundColor = 'black';
	box.style.border = 'solid lightblue 5px';
	}	
}

function stop() {
	var ex5 = document.querySelector('.changes');
	var box = document.querySelector('.explanation');
	ex5.innerHTML = ' place your cursor over a topic and i will explain ';
	ex5.style.color = 'white';
	box.style.backgroundColor = "grey";
	box.style.borderColor = 'white';
}