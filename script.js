const slider1 = document.querySelector("#slider1");
const slider2 = document.querySelector("#slider2");
const slider3 = document.querySelector("#slider3");
const slider4 = document.querySelector("#slider4");
const slider5 = document.querySelector("#slider5");


var sliderSelection1 = document.querySelectorAll(".slider__selection1");
var sliderSelectionLast1 = sliderSelection1[sliderSelection1.length-1];

var sliderSelection2 = document.querySelectorAll(".slider__selection2");
var sliderSelectionLast2 = sliderSelection2[sliderSelection2.length-1];

var sliderSelection3 = document.querySelectorAll(".slider__selection3");
var sliderSelectionLast3 = sliderSelection3[sliderSelection3.length-1];

var sliderSelection4 = document.querySelectorAll(".slider__selection4");
var sliderSelectionLast4 = sliderSelection4[sliderSelection4.length-1];

var sliderSelection5 = document.querySelectorAll(".slider__selection5");
var sliderSelectionLast5 = sliderSelection5[sliderSelection5.length-1];


const btnLeft1 = document.querySelector(".slider__btn-left1");
const btnRight1 = document.querySelector(".slider__btn-right1");

const btnLeft2 = document.querySelector(".slider__btn-left2");
const btnRight2 = document.querySelector(".slider__btn-right2");

const btnLeft3 = document.querySelector(".slider__btn-left3");
const btnRight3 = document.querySelector(".slider__btn-right3");

const btnLeft4 = document.querySelector(".slider__btn-left4");
const btnRight4 = document.querySelector(".slider__btn-right4");

const btnLeft5 = document.querySelector(".slider__btn-left5");
const btnRight5 = document.querySelector(".slider__btn-right5");

if(btnLeft1 != null && btnRight1 != null){
    btnLeft1.addEventListener("click", imagenAnterior1);
    btnRight1.addEventListener("click", proximaImagen1);
}

if(btnLeft2 != null && btnRight2 != null){
    btnRight2.addEventListener("click", proximaImagen2);
    btnLeft2.addEventListener("click", imagenAnterior2);
}

if(btnLeft3 != null && btnRight3 != null){
    btnRight3.addEventListener("click", proximaImagen3);
    btnLeft3.addEventListener("click", imagenAnterior3);
}

if(btnLeft4 != null && btnRight4 != null){
    btnRight4.addEventListener("click", proximaImagen4);
    btnLeft4.addEventListener("click", imagenAnterior4);
}

if(btnLeft5 != null && btnRight5 != null){
    btnRight5.addEventListener("click", proximaImagen5);
    btnLeft5.addEventListener("click", imagenAnterior5);
}
if(slider1 != null && slider2 != null && slider3 != null && slider4 != null && slider5 != null){
    slider1.insertAdjacentElement("afterbegin",sliderSelectionLast1);
    slider2.insertAdjacentElement("afterbegin",sliderSelectionLast2);
    slider3.insertAdjacentElement("afterbegin",sliderSelectionLast3);
    slider4.insertAdjacentElement("afterbegin",sliderSelectionLast4);
    slider5.insertAdjacentElement("afterbegin",sliderSelectionLast5);
}

function proximaImagen1() {
    var sliderSelectionFirst1 = document.querySelectorAll(".slider__selection1")[0];
    slider1.style.marginLeft = "-100%";
    slider1.style.transition = "all 0.5s";

    setTimeout(()=>{
        slider1.style.transition = "none";
        slider1.insertAdjacentElement("beforeend", sliderSelectionFirst1);
        slider1.style.marginLeft = "-100%";
    },500)
}

function imagenAnterior1() {
    var sliderSelection1 = document.querySelectorAll(".slider__selection1");
    var sliderSelectionLast1 = sliderSelection1[sliderSelection1.length -1];
    slider1.style.marginLeft = "0%";
    slider1.style.transition = "all 0.5s";

    setTimeout(()=>{
        slider1.style.transition = "none";
        slider1.insertAdjacentElement("afterbegin", sliderSelectionLast1);
        slider1.style.marginLeft = "-100%";
    },500)
}

function proximaImagen2() {
    var sliderSelectionFirst2 = document.querySelectorAll(".slider__selection2")[0];
    slider2.style.marginLeft = "-100%";
    slider2.style.transition = "all 0.5s";
    

    setTimeout(()=>{
        slider2.style.transition = "none";
        slider2.insertAdjacentElement("beforeend", sliderSelectionFirst2);
        slider2.style.marginLeft = "-100%";
    },500)
    
}

function imagenAnterior2() {
    var sliderSelection2 = document.querySelectorAll(".slider__selection2");
    var sliderSelectionLast2 = sliderSelection2[sliderSelection2.length -1];
    slider2.style.marginLeft = "0%";
    slider2.style.transition = "all 0.5s";

    setTimeout(()=>{
        slider2.style.transition = "none";
        slider2.insertAdjacentElement("afterbegin", sliderSelectionLast2);
        slider2.style.marginLeft = "-100%";
    },500)
}

function proximaImagen3() {
    var sliderSelectionFirst3 = document.querySelectorAll(".slider__selection3")[0];
    slider3.style.marginLeft = "-100%";
    slider3.style.transition = "all 0.5s";
    
    setTimeout(()=>{
        slider3.style.transition = "none";
        slider3.insertAdjacentElement("beforeend", sliderSelectionFirst3);
        slider3.style.marginLeft = "-100%";
    },500)
}

function imagenAnterior3() {
    var sliderSelection3 = document.querySelectorAll(".slider__selection3");
    var sliderSelectionLast3 = sliderSelection3[sliderSelection3.length -1];
    slider3.style.marginLeft = "0%";
    slider3.style.transition = "all 0.5s";

    setTimeout(()=>{
        slider3.style.transition = "none";
        slider3.insertAdjacentElement("afterbegin", sliderSelectionLast3);
        slider3.style.marginLeft = "-100%";
    },500)
} 
        
function proximaImagen4() {
    var sliderSelectionFirst4 = document.querySelectorAll(".slider__selection4")[0];
    slider4.style.marginLeft = "-100%";
    slider4.style.transition = "all 0.5s";
    
    setTimeout(()=>{
        slider4.style.transition = "none";
        slider4.insertAdjacentElement("beforeend", sliderSelectionFirst4);
        slider4.style.marginLeft = "-100%";
    },500)
}
        
function imagenAnterior4() {
    var sliderSelection4 = document.querySelectorAll(".slider__selection4");
    var sliderSelectionLast4 = sliderSelection4[sliderSelection4.length -1];
    slider4.style.marginLeft = "0%";
    slider4.style.transition = "all 0.5s";

    setTimeout(()=>{
        slider4.style.transition = "none";
        slider4.insertAdjacentElement("afterbegin", sliderSelectionLast4);
        slider4.style.marginLeft = "-100%";
    },500)
}     

function proximaImagen5() {
    var sliderSelectionFirst5 = document.querySelectorAll(".slider__selection5")[0];
    slider5.style.marginLeft = "-100%";
    slider5.style.transition = "all 0.5s";
    
    setTimeout(()=>{
        slider5.style.transition = "none";
        slider5.insertAdjacentElement("beforeend", sliderSelectionFirst5);
        slider5.style.marginLeft = "-100%";
    },500)
}
        
function imagenAnterior5() {
    var sliderSelection5 = document.querySelectorAll(".slider__selection5");
    var sliderSelectionLast5 = sliderSelection5[sliderSelection5.length -1];
    slider5.style.marginLeft = "0%";
    slider5.style.transition = "all 0.5s";

    setTimeout(()=>{
        slider5.style.transition = "none";
        slider5.insertAdjacentElement("afterbegin", sliderSelectionLast5);
        slider5.style.marginLeft = "-100%";
    },500)
} 

//***************** SECTOR PARA NOSOTROS.HTML *************************

var boton = document.querySelector(".icono");
boton.addEventListener("click", subirArriba);

function subirArriba() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}


function changeColorBlue(element) {
    var currentColor = element.style.color;
    if(currentColor == "blue"){
        element.style.color = "white";
    }else{
        element.style.color = "blue";
    }
}

function changeColorYellow(element){
    var currentColor = element.style.color;
    if(currentColor == "yellow"){
        element.style.color = "white";
    }else{
        element.style.color = "yellow";
    }
}

function changeColorCian(element){
    var currentColor = element.style.color;
    if(currentColor == "skyblue"){
        element.style.color = "white";
    }else{
        element.style.color = "skyblue";
    }
}