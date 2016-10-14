// JavaScript Doc
window.onload = function (){

//SECTION#1-------------------------------------------------------------
topLeftDiv = function()
{
	var myEl = document.getElementById("boundary1");
	myEl.addEventListener("mouseover", outOfBound);
}

outOfBound = function(){
	var myEl = document.getElementById("boundary1");
	myEl.setAttribute("class", "boundary youlose");
}


//SECTION#2-------------------------------------------------------------
var outBound = function()
{
	var allBoundary = document.querySelectorAll(".boundary");
	for( var i = 0; i<allBoundary.length; i++){
		allBoundary[i].addEventListener("mouseover", error);
	}
		
}
var error = function() {
	var allBoundary = document.querySelectorAll(".boundary");
	for (var x = 0; x<allBoundary.length; x++){
		allBoundary[x].setAttribute("class", "boundary youlose");
		lost = true;
	}
}


//SECTION#3-------------------------------------------------------------
var endFunc = function(){
	//var status = getElementById("status");
	if(lost){
		document.getElementById("status").innerHTML = "you lose!!"//exercise #5: On-page status update 
		//alert("you lost!!");
	}else{
		//alert("you won!!");
		document.getElementById("status").innerHTML = "you won!!" //exercise #5: On-page status update 
		}
 }
 
var lost = false;
var completeMaze = function(){
	var start = document.getElementById("start");
	start.addEventListener("click", startFunc);
	var end = document.getElementById("end");
	end.addEventListener("mouseover", endFunc);
	var allBoundary = document.querySelectorAll(".boundary");
	
	for( var i = 0; i<allBoundary.length; i++){
		allBoundary[i].addEventListener("mouseover", error);
		
	}
}
	


//SECTION#4-------------------------------------------------------------
startFunc = function(){
	lost = false;
	var allBoundary = document.querySelectorAll(".boundary");
	for( var i = 0; i<allBoundary.length; i++){
		//alert("boom");
		allBoundary[i].setAttribute("class", "boundary");
		
		}
}




	completeMaze();
}



