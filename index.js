

// for(let i = 0 ; i < document.querySelectorAll("button").length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click" , function()
//     {
//             var audio = new Audio('sounds/crash.mp3');
//             audio.play();
//         // alert("i am clicked"); 
//     });
// }
// document.querySelector(".w").addEventListener("click" , function(){
//     document.querySelector(".w").style.backgroundColor = "red";
//     // alert('how are u ? ')


// });

for(let i = 0 ; i < document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        let value = this.innerHTML;
        playSong(value);
        addAnimation(value);
    });
}
document.addEventListener("keypress",function(event)
{
    playSong(event.key);
    addAnimation(event.key);
});


function playSong(key){
    
    switch(key){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
                     audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-3.mp3');
                  audio.play();   
            break;
        
        case 's':
            var audio = new Audio('sounds/tom-2.mp3');
                  audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/crash.mp3');
                  audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/kick-bass.mp3');
                  audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/snare.mp3');
                  audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3');
                  audio.play();
            break;
        default :
        break;

    }
    
    // // this.style.color = "white";
}

function addAnimation(key){
    let value = document.querySelector("."+key);
    value.classList.add("pressed");
    setTimeout(function(){
        value.classList.remove("pressed");
    },100);
}


// function multiply(num1 , num2 ){
//     return num1 * num2;
// }
// function add(num1 , num2 ){
//     return num1 + num2 ;
// }
// function calculator (num1 , num2 , operator){
//     return operator(num1,num2);

// }

// calculator(2,3,add);