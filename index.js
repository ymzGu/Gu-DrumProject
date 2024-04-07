//检测按钮按下：
var allButtons = document.querySelectorAll(".drum");//所有按钮元素

for (let i=0; i<allButtons.length; i++){         // i 不要忘记先定义！！！！！
   allButtons[i].onclick = function(){           //遍历被按的按钮
        makeSound(this.innerText);               //执行发声函数（参数为第i个按钮中的字母文本）
    };                                          // 如 makeSound(w); 
} 
//检测按键按下：
document.onkeydown = function(event){
    makeSound(event.key);          //按下事件的key属性，返回key的键盘符（字符串）   （在键盘事件中，事件对象有一个 key 属性，它代表被按下的键的标识符。
}                                  // 如 makeSound(w); 
function makeSound(key){
    switch(key){ 
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.preload = "auto";
            tom1.play();// .play()不要忘记
            break;
         
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.preload = "auto";
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.preload = "auto";
            tom3.play();
            break; 

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.preload = "auto";
            tom4.play();
            break;
             
        case "j":
            var tom5 = new Audio("sounds/crash.mp3");
          tom5.preload = "auto";
            tom5.play();
            break;
                
        case "k":
            var tom6 = new Audio("sounds/kick-bass.mp3");
          tom6.preload = "auto";
            tom6.play();
            break;    
            
        case "l":
            var tom7 = new Audio("sounds/snare.mp3");
          tom7.preload = "auto";
            tom7.play();
            break; 
        
        default:console.log(buttonInnerText);
    }}
