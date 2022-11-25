let minutes =25;
let seconds=00;
function start(){
    interval=setInterval(()=>{
        if(seconds==00){seconds=59;minutes--;}
        seconds--;
        if(minutes==00 && seconds==00){
            stop();
            alert("Tims up! Take a Break");
        }
        displayTime(minutes,seconds);

    },1000);
}
function stop(){
    clearInterval(interval)
}
function reset(){
   stop();
   minutes=25;
   seconds="00";
   displayTime(minutes,seconds);
}
function displayTime(minutes,seconds){
    document.getElementById("time").innerHTML=`${minutes}:${seconds}`;
}