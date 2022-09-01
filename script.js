var projAnimDone = false;
function startAnimation() {
        if (projAnimDone) {
                return;
        }
        var prj = document.getElementById("p-screen");
        prj.style.setProperty("cursor", "default");
        prj.innerHTML += '<div class="projects-sweep-one"></div>';
        prj.innerHTML += '<div class="projects-sweep-two"></div>';
        prj.innerHTML += '<div class="projects-sweep-three"></div>';
        prj.innerHTML += '<div class="projects-sweep-four"></div>';
        prj.innerHTML += '<div class="projects-box-one" id="box1" type ="button" onclick="boxOneFlip()"><div class="projects-box-one-text">UNITY 3D GAME (2018)</div></div>';
        prj.innerHTML += '<div class="projects-box-two" id="box2" type ="button" onclick="boxTwoFlip()"><div class="projects-box-two-text">PYTHON ROGUE-LIKE GAME (2020)</div></div>';
        prj.innerHTML += '<div class="projects-box-three" id="box3" type ="button" onclick="boxThreeFlip()"><div class="projects-box-three-text">PYTHON PATHFINDING VISUALISER (2022)(WIP)</div></div>';
        prj.innerHTML += '<div class="projects-box-four" id="box4" type ="button" onclick="boxFourFlip()"><div class="projects-box-four-text">PERSONAL WEBSITE (2022)(WIP)</div></div>';
        projAnimDone = true;
}
function boxOneFlip() {
        var box1 = document.getElementById("box1");
        box1.children[0].style.opacity = "1";
        box1.style.filter = "brightness(80%)";
        box1.style.animationDelay="0s";
        box1.style.animation="0.5s ease-in 0s 1 normal forwards running box-flip";
        box1.outerHTML += '<div class="projects-box-one-flip"><div class="projects-screen-icons"><a class="projects-screen-download" href="downloads/Unity_3D_Game.zip" download></a><a class="projects-screen-github" target="_blank" href="https://github.com/eklavya-joshi/Unity-3D-Game"></a></div><div class="flip1">I made this video game in 2018 as a High School Assignment. It was made using the Unity Engine and written in C#. You can download the game or view it on Github.</div></div>';
}
function boxTwoFlip() {
        var box2 = document.getElementById("box2");
        box2.children[0].style.opacity = "1";
        box2.style.filter = "brightness(80%)";
        box2.style.animationDelay="0s";
        box2.style.animation="0.5s ease-in 0s 1 normal forwards running box-flip";
        box2.outerHTML += '<div class="projects-box-two-flip"><div class="projects-screen-icons"><a class="projects-screen-download" href="downloads/Python_Roguelike.zip" download></a><a class="projects-screen-github" target="_blank" href="https://github.com/eklavya-joshi/Python-Roguelike-Game"></a></div><div class="flip2">I made this video game in 2020 as a High School Assignment. You can download the game or view it on Github.</div></div>';
}
function boxThreeFlip() {
        var box3 = document.getElementById("box3");
        box3.children[0].style.opacity = "1";
        box3.style.filter = "brightness(80%)";
        box3.style.animationDelay="0s";
        box3.style.animation="0.5s ease-in 0s 1 normal forwards running box-flip";
        box3.outerHTML += '<div class="projects-box-three-flip"><div class="projects-screen-icons"><a class="projects-screen-download" href="downloads/Python_Pathfinder.zip" download></a><a class="projects-screen-github" target="_blank" href="https://github.com/eklavya-joshi/Python-Pathfinder"></a></div><div class="flip3">This project is a work in progress. You can download it or view it on Github.</div></div>';
}
function boxFourFlip() {
        var box4 = document.getElementById("box4");
        box4.children[0].style.opacity = "1";
        box4.style.filter = "brightness(80%)";
        box4.style.animationDelay="0s";
        box4.style.animation="0.5s ease-in 0s 1 normal forwards running box-flip";
        box4.outerHTML += '<div class="projects-box-four-flip"><a class="projects-screen-icons"><a class="projects-screen-download" href="downloads/website.zip"></a><a class="projects-screen-github" target="_blank" href="https://github.com/eklavya-joshi/Personal-Website"></a></div><div class="flip4">If you\'re reading this then you\'re using this project right now! You can download the source code or view it on Github.</div></div>';
}