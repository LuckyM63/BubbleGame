

var bubbleNum=Math.floor(Math.random()*1000)
function makeBubble(){
    var clutter=" "

for(var i=1; i<bubbleNum; ++i){
    clutter+=  `<div class="bubble">${Math.floor(Math.random()*10)}</div>` 
}

document.querySelector("#pBottom").innerHTML= clutter
}

var timerVal=60 
function runTimer(){
    var timerr=  setInterval(function() {

        if(timerVal>0){
            timerVal--;
            document.querySelector(".timer").textContent=timerVal;
        }
        else{
            clearInterval(timerr)
            document.querySelector("#pBottom").innerHTML = `<h1>GAME OVER</h1>`
        }
       
    },1000)
}

var hval=0;
function hitVal(){

     hval= Math.floor(Math.random()*10)
    document.querySelector(".hitValue").textContent= hval
}

var score=0
function increaseScore(){
     score+= 10;
     document.querySelector(".Scoreval").textContent= score

}

document.querySelector("#pBottom").addEventListener("click", function(bubbleVal){
    var clickedNum = Number(bubbleVal.target.textContent)

    if(clickedNum == hval){
        increaseScore()
        makeBubble()
        hitVal()
    }
   
})
makeBubble();
runTimer();
hitVal();
increaseScore();
