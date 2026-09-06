const powerbutton=document.getElementById("power-button");

const window1=document.getElementById("window1");
const window2=document.getElementById("window2");

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

const builderCancel=document.getElementById("builder-cancel");
const builderCard=document.getElementById("builder-card");

const projectCancel=document.getElementById("project-cancel");
const projectCard=document.getElementById("project-card");

const contactCancel=document.getElementById("contact-cancel");
const contactCard=document.getElementById("contact-card");

const settingsCancel=document.getElementById("settings-cancel");
const settingsCard=document.getElementById("settings-card");

const builderBtn=document.getElementById("builder-btn");
const projectBtn=document.getElementById("project-btn");
const contactBtn=document.getElementById("contact-btn");
const settingsBtn=document.getElementById("settings-btn");

builderBtn.addEventListener("click",function(){
    builderCard.style.display="block";
});
builderCancel.addEventListener("click",function(){
    builderCard.style.display="none";
});

projectBtn.addEventListener("click",function(){
    projectCard.style.display="block";
});
projectCancel.addEventListener("click",function(){
    projectCard.style.display="none";
});

contactBtn.addEventListener("click",function(){
    contactCard.style.display="block";
});
contactCancel.addEventListener("click",function(){
    contactCard.style.display="none";
});

settingsBtn.addEventListener("click",function(){
    settingsCard.style.display="block";
});
settingsCancel.addEventListener("click",function(){
    settingsCard.style.display="none";
});


const root=document.documentElement;

document.querySelector(".day-theme").onclick=()=>{
    root.style.setProperty("--card","white")
    root.style.setProperty("--text","black")
    root.style.setProperty("--brightboders","black")
    root.style.setProperty("--panels","#f1ddc3")
    root.style.setProperty("--online","red")
    root.style.setProperty("--primary","#f3d2aa")
}

document.querySelector(".current-theme").onclick=()=>{
    root.style.setProperty("--card","#151c2e")
    root.style.setProperty("--brightboders","#4A5CFF")
    root.style.setProperty("--text","white")
    root.style.setProperty("--panels","#0B1230")
    root.style.setProperty("--online","green")
    root.style.setProperty("--primary","#020617")
}

document.querySelector(".green-theme").onclick=()=>{
    root.style.setProperty("--card","#84aa60")
    root.style.setProperty("--brightboders","#65f306")
    root.style.setProperty("--text","blue")
    root.style.setProperty("--panels","#0dac77")
    root.style.setProperty("--online","red")
    root.style.setProperty("--primary","#0ec518")
}

document.querySelector(".reset-btn").onclick=()=>{
    root.style.setProperty("--card","#151c2e")
    root.style.setProperty("--brightboders","#4A5CFF")
    root.style.setProperty("--text","white")
    root.style.setProperty("--panels","#0B1230")
    root.style.setProperty("--online","green")
    root.style.setProperty("--primary","#020617")
    window3.style.backgroundImage="url(assets/images/background.png)";
}

const muteBtn=document.getElementById("mute-btn");
muteBtn.addEventListener("click",function(){
     mainMusic.pause();
     muteBtn.textContent="MUTED";
});

const text="welcome to my builder page";
const mainWelcome=document.getElementById("main-welcome");

let i=0;

function typeText(){
    if(i < text.length){
        mainWelcome.textContent+= text[i];
        i++;
        setTimeout(typeText,500);
    }
}
typeText();

const mainNavigate=document.getElementById("main-navigate");
setTimeout(function(){
    mainNavigate.style.display="none";
},10000);

const bgNight=document.getElementById("bg-night");
bgNight.addEventListener("click",function(){
    window3.style.backgroundImage="url(assets/images/background.png)";
});

const bgNature=document.getElementById("bg-nature");
bgNature.addEventListener("click",function(){
    window3.style.backgroundImage="url(assets/images/bg3.jpg)";
});

const bgCar=document.getElementById("bg-car");
bgCar.addEventListener("click",function(){
    window3.style.backgroundImage="url(assets/images/bg4.jpg)";
});

const text2="POWER UP THE BUILDER";
const welcomeText=document.getElementById("boot-window-text");

let e=0;
function typeText2(){
    if(e < text2.length){
        welcomeText.textContent+=text2[e];
        e++;
        setTimeout(typeText2,100);
    }
}
typeText2();