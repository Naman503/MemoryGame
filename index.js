
function randGenerator(){
    var random=Math.floor(Math.random()*4)+1;
    if(random==3){
        random=5;
    }
    return random;
}

var play=new Audio("play play.mp3");

// var ding=new Audio("ding-idea-40142.mp3");

function setClass(){
    var numberByRandom=randGenerator();
    var className=".bi-"+numberByRandom+"-square";
    
    $(className).addClass("set");
     setTimeout( great, 200,className);
    
    arr2=arr2+numberByRandom;
    console.log(arr2+ "   arr");
   
}
function great(className){
    $(className).removeClass("set");
    
}
var lavel=1;
var x;
var x2=0;
var arr='';
var arr2='';
what();

function what(aa){
    $("h1").text("Press 'Y' to Play. 'N' To stop");
    if(aa=='y'){
        play.play();
        lavel=1;
        arr='';
        clearTimeout(s);
        game();
    }
    else if(aa=='n'){
        $("h1").text("Game by Naman->ThankYou");
        arr='';
        lavel=1;
        clearTimeout(s);
        play.pause();
        return;
    }
    else{
      var s=setTimeout(function(){
            $("h1").text("Make up your mind");
        },8000);
    }
    
}

function game(){
    
    
    $("h1").text("Lavel "+lavel);
    x=1+lavel;
    $("h3").text("NO: "+x);
    var timer=(400*x)+200;
    arr2='';
    
    var t=setInterval(setClass,400);
    setTimeout(clearInterval,timer,t);
    
    arr='';
    x2=0;
    
}


$(".bi").click(function (event) { 
    add(this);
    condition();
})
$("h1").click(function(event){
    what("y");
})
$("h3").click(function(event){
    what("n");
})
$(document).keypress(function (event) {
    if(event.key=='y'||event.key=='Y'){
       what("y");
       return;
   }
   else if(event.key=='n'||event.key=='N'){
       what("n");
       return;
   }
    perform(event.key); 
    condition();
    
});

function perform(key){
    if(key==1){
        arr=arr+'1';
    }
    else if(key==2){
        arr=arr+'2';
    }
    else if(key==4){
        arr=arr+'4';
    }
    else if(key==5){
        arr=arr+'5';
    }

    else{
        $("h1").html("Select the NO. shown");
        return;
    }
    x2++;
    console.log(arr+"  arr key");
}
function add(argument){
    arr=arr+(argument.className.slice(6,7));
    console.log(arr);
    x2++;

}

function condition(){
    if(x2>=x){
        if(arr==arr2){
        lavel++;
        $("h1").text("! conguratiolation !");
        arr='';
        setTimeout(game,3000);

    }
    else{
        $("h1").text("sorry... "+arr2);
        lavel=1;
        arr='';
        arr2='';
        setTimeout(what,4000);
        // i=25;
    }
}
else{
    
    console.log("conditions");
    
}

}
























// $("h1").text("Press any key");

// $(document).keypress(function(event){
//     var i=1;
// var leaval=1;
// var counter,counter2=0;
// var arr;
// var result=false;
// while(i--){
   
    
//     counter=leaval+1;
//     counter2=leaval+1;
  
//     $("h1").text("Leavel "+leaval);

//     arr='';
//     while(counter>0){
//          setClass();
//          counter--;
//     }
//     var j=0;
//     while(counter2>0){
         
   
//         console.log(j);
//         if(event.key==arr[j]){
//             j++;
//             result=true;
          
//         }
//         else if(event.key!=arr[j]){
//             $("h1").text("WRONG");
//             result=false;
//             return 0;
//         }
//     counter2--;
// }
//     if(result==false){
//         break;
//     }
    
//     if(result){
//         leaval++;
//         i++;
//     }
//     else{
//         leaval=0;
//         i=-1;
//         break;
//     }
// }
// })



