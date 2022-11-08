score=0;
cross=true;

let audio=new Audio('videogame.mp3');
let audiogo = new Audio('gameover.wav');

setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown=function(e){
    console.log("Key code is :",e.keyCode)
    if(e.keyCode == 38){
        man=document.querySelector('.man');
        man.classList.add('animateMan');
        setTimeout(() => {
            man.classList.remove('animateMan');
        }, 700);
    }
    if(e.keyCode == 39){
        man=document.querySelector('.man');
        manx=parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
        man.style.left=manx+112+"px";
    }
    if(e.keyCode == 37){
        man=document.querySelector('.man');
        manx=parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
        man.style.left=(manx-112)+"px";
    }
}

setInterval(() => {
    man=document.querySelector('.man');
    gameOver=document.querySelector(".gameOver");
    obstacle=document.querySelector(".obstacle");

    mx=parseInt(window.getComputedStyle(man,null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(man,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(mx-ox);
    offsetY=Math.abs(my-oy);

    // console.log(offsetX);
    // console.log(offsetX);

    if(offsetX< 73 && offsetY<52){
        gameOver.innerHTML="Game Over - Reload to play again";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX <145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation.duration'));
            newDur = aniDur - 0.2;
            obstacle.style.animationDuration = newDur +'s';
        }, 500);
    }
}, 10);

function updateScore(score){
    scoreCont.innerHTML="Your Score : "+score;
}