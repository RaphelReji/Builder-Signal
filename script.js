const powerbutton=document.getElementById("power-button");

const window1=document.getElementById("window1");
const window2=document.getElementById("window2")

const progressBar =document.getElementById("progressBar");
const progressText =document.getElementById("progressText");
const window3=document.getElementById("window3");
const bootMusic=document.getElementById("bootmusic");
const mainMusic=document.getElementById("mainmusic");
const bootText=document.getElementById("bootText");

powerbutton.addEventListener("click",function(){

    bootMusic.play();
    window1.style.display="none";
    window2.style.display="flex";

    let progress = 0;
    const loading=setInterval(function(){
        progress++;

        progressBar.style.width=progress +"%";
        progressText.textContent=progress +"%";

        if(progress>=100){
            clearInterval(loading);

            window2.style.display="none";
            window3.style.display="flex";

            bootMusic.pause();
            bootMusic.currentTime = 0;

            mainMusic.play();
        }
    },50);

    bootText.textContent="INITIALIZING...";
    setTimeout(function(){
        bootText.textContent=" LOADING BUILDER..."
    },800);

    setTimeout(function(){
        bootText.textContent="DRINKING JUICE..."
    },1600);

    setTimeout(function(){
        bootText.textContent="WARMING UP..."
    },2400);

    setTimeout(function(){
        bootText.textContent="LOOKING SLACK FOR NEW PINGS..."
    },3200);

    setTimeout(function(){
        bootText.textContent="ALMOST THERE..."
    },4000);

    setTimeout(function(){
        bootText.textContent="CHARGING COMPLETE..."
    },4800);
    
});

