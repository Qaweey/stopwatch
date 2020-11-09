 
 let hrs=0;
 let min=0;
 let sec=0;
 let centisec=0;
 let validId;
 let HOURS=document.querySelector("#hour");
 let MINUTES=document.querySelector("#minute");
 let SECONDS=document.querySelector("#second");
 let CENTISECONDS=document.querySelector("#centisecond");
let text ="Start"
 document.querySelector("#startbutton").addEventListener("click", PlayOrPause);
 document.querySelector("#Resetbutton").addEventListener("click",Stopstopwatch);


  
 
 
 function Pausestopwatch(){
    clearInterval(validId);
    text = "Start";
    document.querySelector("#startbutton").innerHTML= text;
 }
  function StatStopwatchsetting(){
    validId=setInterval(watchsetting,10);
    
    
    text = "Pause"
    document.querySelector("#startbutton").innerHTML= text;
  }


function PlayOrPause(){
   if(text === "Start"){
    StatStopwatchsetting()
   }else if(text === "Pause"){
    Pausestopwatch()
   }

}

   function Stopstopwatch(){
    clearInterval(validId);
    centisec=0;
    sec=0;
    min=0;
    hrs=0; 
    
    document.querySelector("#startbutton").innerHTML= "Start"
    HOURS.innerHTML= "00";
    MINUTES.innerHTML="00" ;
    SECONDS.innerHTML= "00";
    CENTISECONDS.innerHTML= "00";
   }
      
  
      function watchsetting(){
        
        CENTISECONDS.innerHTML=++centisec;
        if(centisec==99){
          centisec=0;
          centisec++;
          SECONDS.innerHTML= ++sec;
          if(sec< 10){
            SECONDS.innerHTML= "0"+sec;
          }
        }
         if(sec==60){
          sec=0;
          sec++;
         
          MINUTES.innerHTML=++min;
          
        }
        if(min==60){
          min=0;
          min=min++;
          HOURS.innerHTML=++hrs;
        }
          
          

      }    
        

