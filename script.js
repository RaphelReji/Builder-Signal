const powerbutton=document.getElementById("power-button");

const window1=document.getElementById("window1");
const window2=document.getElementById("window2")

powerbutton.addEventListener("click",function(){
    window1.style.display="none";
    window2.style.display="block";
});