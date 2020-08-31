function one() {
			 var tl = document.getElementsByClassName('top_left');
			 if(tl[0].style.filter == 'grayscale(0%)') 
			 	{tl[0].style.filter = 'grayscale(100%)'; tl[0].style.color = 'grey'; 
			     tl[0].style.border ='solid grey 2px'; }
			 else {tl[0].style.filter = 'grayscale(0%)'; tl[0].style.color = 'lightblue'; 
			       tl[0].style.border = 'solid lightblue 3px';}


			};
function two() {
			 var tl = document.getElementsByClassName('top_right');
			 if(tl[0].style.filter == 'grayscale(0%)') 
			 	{tl[0].style.filter = 'grayscale(100%)'; tl[0].style.color = 'grey'; 
			     tl[0].style.border ='solid grey 2px'; }
			 else {tl[0].style.filter = 'grayscale(0%)'; tl[0].style.color = 'lightblue'; 
			       tl[0].style.border = 'solid lightblue 3px';}

			};	
function three() {
			 tl = document.getElementsByClassName('bot_left');
			 if(tl[0].style.filter == 'grayscale(0%)') 
			 	{tl[0].style.filter = 'grayscale(100%)'; tl[0].style.color = 'grey'; 
			     tl[0].style.border ='solid grey 2px'; }
			 else {tl[0].style.filter = 'grayscale(0%)'; tl[0].style.color = 'lightblue'; 
			       tl[0].style.border = 'solid lightblue 3px';
			     }
			};	 
function four() {
			 var tl = document.getElementsByClassName('bot_right');
			 if(tl[0].style.filter == 'grayscale(0%)') 
			 	{tl[0].style.filter = 'grayscale(100%)'; tl[0].style.color = 'grey'; 
			     tl[0].style.border ='solid grey 2px'; }
			 else {tl[0].style.filter = 'grayscale(0%)'; tl[0].style.color = 'lightblue'; 
			       tl[0].style.border = 'solid lightblue 3px';}

			};
function five() {
			var jr = document.getElementsByTagName('button');
			if(jr[0].style.visibility == 'visible') {
				jr[0].style.visibility = 'hidden'; jr[0].style.color = 'grey';  
				jr[0].style.backgroundColor = 'lightgrey';
			}
			else {
				jr[0].style.visibility = 'visible';
				jr[0].style.color = 'white';  
				jr[0].style.backgroundColor = 'lightblue'
			}
			};


