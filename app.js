let time = document.querySelector(".time");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let lap = document.querySelector(".lap");
let div = document.querySelector(".watch")

//setTimeout, clearTimeout --> 1 udaa ajillana
//setIntervalc--> hyzgargui udaa

let second = 0 , minute = 0 , hour = 0,doil =0;

//ternary operator 

function watch(){
    doil++
    if(doil==100){
        doil = 0;
        second++;
        if(second==60){
            second=0;
            minute++
            if(minute==60){
                minute=0;
                hour++
            }
        }
    }

        let d = doil <10 ? "0" + doil :doil;
        let s = second < 10 ? "0" + second : second;
        let m = minute < 10 ? "0" + minute : minute;
        let h = hour < 10 ? "0" + hour : hour;
        time.innerText = h+":"+m+":"+s+":"+d;
}
let ehlel;
start.addEventListener('click',()=>{
    ehlel = setInterval(watch,10)
})

stop.addEventListener('click',()=>{
    clearInterval(ehlel)    
})  
reset.addEventListener('click',()=>{
    second = 0 , minute = 0 , hour = 0,doil =0;
    d = doil <10 ? "0" + doil :doil;
    s = second < 10 ? "0" + second : second;
    m = minute < 10 ? "0" + minute : minute;
    h = hour < 10 ? "0" + hour : hour;
    time.innerText = h+":"+m+":"+s+":"+d;
    clearInterval(ehlel)
})
lap.addEventListener('click',()=>{
    let p = document.createElement('p');
    div.appendChild(p);
    d = doil <10 ? "0" + doil :doil;
    s = second < 10 ? "0" + second : second;
    m = minute < 10 ? "0" + minute : minute;
    h = hour < 10 ? "0" + hour : hour;
    p.innerText = h+":"+m+":"+s+":"+d;
})