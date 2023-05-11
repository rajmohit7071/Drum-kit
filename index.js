var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var button=this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    });
}

// Detecting keyPress.
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "w":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "w":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "w":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "w":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;        
        case "w":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "w":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;      

        default:console.log(button);

    }
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}