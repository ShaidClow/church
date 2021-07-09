// Change image on click
function imgSlider(anything){
    document.querySelector('.home').src = anything;
}

//change background 
function changeBgColor(color){
    const bg = document.querySelector('.bg');
    bg.style.background = color; 
}

//ocultar mostrar
function myFunction() {
    var x = document.getElementById("button");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function ocultar(){
    document.getElementById("button").style.display = "none";
    }

function mostrar(){
    document.getElementById("button2").style.display = "block";
    }

// add class active
let el = document.querySelectorAll('.thumb li');
for (let i=0; i < el.length; i++){
    el[i].onclick = function(){
        var c = 0;
        while (c < el.length){
            el[c++].className = 'check';
        }
        el[i].className = 'check active';
    }
}