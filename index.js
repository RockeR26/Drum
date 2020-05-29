var rand2 = Math.floor(Math.random()*6+1);

var rand1 = Math.floor(Math.random()*6+1);

document.querySelector(".btn").addEventListener("click",btn);


function btn(){
        document.querySelector("h2").innerHTML="Player 1 tap the dice";
        document.querySelector(".img1").addEventListener("click",ran1); 
}

function ran1(){
        document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");
        document.querySelector("h2").innerHTML="Player 2 tap the dice";
        document.querySelector(".img2").addEventListener("click",ran2);
}

function ran2(){
        document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");
        if(rand1>rand2){
            document.querySelector("h2").innerHTML="🚩 Player 1 Wins 🎉";
        }
        else if(rand1===rand2){
            document.querySelector("h2").innerHTML="Its a Tie 🤣🤣";
        }
        else{
            document.querySelector("h2").innerHTML=" 🚩 Player 2 Wins 🎉 ";
        }
        document.querySelector(".para").innerHTML="Tap the Reset button to start again";
        
        document.querySelector(".img2").removeEventListener("click",ran2);
        document.querySelector(".img1").removeEventListener("click",ran1); 
        
}




