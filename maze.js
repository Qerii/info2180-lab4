// JavaScript Document


//SECTION#1-------------------------------------------------------------
function leftDiv()
{
	
	var myEl = document.getElementById("boundary1");
	myEl.addEventListener("mouseover", outOfBound);
}

function outOfBound(){
	var myEl = document.getElementById("boundary1");
	myEl.setAttribute("class", "boundary youlose");
}


//SECTION#2-------------------------------------------------------------
function outBound()
{
	var allBoundary = document.querySelectorAll(".boundary");
	for( var i = 0; i<allBoundary.length; i++){
		allBoundary[i].addEventListener("mouseover", error);
	}
		
}
function error () {
	var allBoundary = document.querySelectorAll(".boundary");
	for (var x = 0; x<allBoundary.length; x++){
		allBoundary[x].setAttribute("class", "boundary youlose");
	}
}


//SECTION#3-------------------------------------------------------------

window.onload = function completeMaze(){
	var endEl = document.getElementById("end");
	endEl.addEventListener("mouseover", function(){
		alert("you won!!");
		});
	var allBoundary = document.querySelectorAll(".boundary");
	for( var i = 0; i<allBoundary.length; i++){
		allBoundary[i].addEventListener("mouseover", error);
	}
}


//SECTION#4-------------------------------------------------------------




