// Mouseclick
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        conditions(this.innerHTML);
        anime(this.innerHTML);
    });
}


// KeyboardEvent
document.addEventListener("keydown",function(event){
    var buttonconfig = event.key;
    conditions(buttonconfig);
    anime(buttonconfig);

});

function conditions(buttonconfig){
    switch (buttonconfig) {
        case "w":   var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "a":   var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "s":   var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "d":   var snare= new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "j":   var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "k":   var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "l":   var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        default: console.log(buttonconfig);
            break;
    }
}
function anime(buttonconfig){
    switch (buttonconfig) {
        case "w":  anim(buttonconfig);
            break;
        case "a":   anim(buttonconfig);
            break;
        case "s":  anim(buttonconfig);
            break;
        case "d":  anim(buttonconfig);
            break;
        case "j":  anim(buttonconfig); 
            break;
        case "k": anim(buttonconfig);
            break;
        case "l": anim(buttonconfig);
            break;
        default: console.log(buttonconfig);
            break;
    }
    function anim(buttonconfig){
        var selector = document.querySelector ("."+buttonconfig);
        selector.classList.add("pressed");
        setInterval(function () {
            document.querySelector ("."+buttonconfig).classList.remove("pressed");
        },50);
    }
}
