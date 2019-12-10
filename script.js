var p=document.getElementById("elmo");
var o=document.getElementById("bird");
var q=document.getElementById("s");
var r=document.getElementById("count");
var s=document.getElementById("d");
var t=document.getElementById("abby");
var w=document.getElementById("sesa");
var k=document.getElementById("peepee");
var i1 = 0
var i2 = 0
var i3 = 0
var i4 = 0
var i5 = 0
var i6 = 0
var i7 = 0
var audio1 = new Audio('sounds/elmo.mp3');
var audio2 = new Audio('sounds/bigbird.m4a');
var audio3 = new Audio('sounds/oscar.m4a');
var audio4 = new Audio('sounds/count.m4a');
var audio5 = new Audio('sounds/grover.m4a');
var audio6 = new Audio('sounds/abby.m4a');

function stopSound() {
	audio1.currentTime = 0;
	audio2.pause();
	audio2.currentTime = 0;
	audio3.pause();
	audio3.currentTime = 0;
	audio4.pause();
	audio4.currentTime = 0;
	audio5.pause();
	audio5.currentTime = 0;
	audio6.pause();
	audio6.currentTime = 0;
}

if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
	p.style.opacity = "0.2"
}

p.addEventListener("click", changeBird);
function changeBird(){
	p.src = "Images/elmo.gif";
	var audio = new Audio('sounds/elmo.mp3');
	audio.play();
	i2 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
	stopSound();
	audio1.play();
}
o.addEventListener("click", changeElmo);
function changeElmo(){
	o.src = "Images/bigbird.gif";
	var audio = new Audio('sounds/bigbird.m4a');
	audio.play();
	i1 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
	stopSound();
	audio2.play();
}
q.addEventListener("click", changeS);
function changeS(){
	q.src = "Images/giphy.gif";
	var audio = new Audio('sounds/oscar.m4a');
	audio.play();
	i3 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
	stopSound();
	audio3.play();
}
r.addEventListener("click", changeC);
function changeC(){
	r.src = "Images/count.gif";
	var audio = new Audio('sounds/count.m4a');
	audio.play();
	i4 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
	stopSound();
	audio4.play();
}
s.addEventListener("click", changeO);
function changeO(){
	s.src = "Images/grover.gif";
	var audio = new Audio('sounds/grover.m4a');
	audio.play();
	i5 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
		
	}
	stopSound();
	audio5.play();
}
t.addEventListener("click", changeA);
function changeA(){
	t.src = "Images/abby.gif";
	var audio = new Audio('sounds/abby.m4a');
	audio.play();
	i6 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
	stopSound();
	audio6.play();
}
w.addEventListener("click", changeSesa);
function changeSesa(){
	w.src = "Images/sesa.png";
	var audio = new Audio('');
	audio.play();
	i7 = 1
	if(i1 == 1 && i2 == 1 && i3 == 1 && i4 == 1 && i5 == 1 && i6 == 1 && i7==1){
		p.style.display = "none"
		o.style.display = "none"
		q.style.display = "none"
		r.style.display = "none"
		s.style.display = "none"
		t.style.display = "none"
		w.style.display = "none"
		k.style.display = "flex"
	}
}