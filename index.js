(function(){
    var hour =document.querySelector('.hour');
    var minute =document.querySelector('.minute');
    var sec =document.querySelector('.sec');

    var startbtn = document.querySelector('.start')
    var stopbtn = document.querySelector('.stop')
    var resetbtn=document.querySelector('.reset')

    var countdownTimer=null;
    startbtn.addEventListener('click', function(){
        if(hour.value==0 && minute.value==0 && sec.value==0) 
        return 

        function startInterval(){
            startbtn.style.display='none'
            stopbtn.style.display='initial'

            countdownTimer=setInterval(()=>{
             timer()
            },1000)
         }
         startInterval()
        
    })

    function stopInterval(state){
        startbtn.innerHTML=state==='pause' ? 'Continue' : 'start';
        startbtn.style.display='none'
            stopbtn.style.display='initial'
        clearInterval(countdownTimer)
    }


    function timer(){


         if(sec.value>60){
             minute.value++;
             sec.value=parseInt(sec.value)-59;
         }
         
         if(minute.value>60){
            hour.value++;
            minute.value=parseInt(minute.value)-60;
        }

        if(hour.value==0 && minute.value==0 && sec.value==0){
            hour.value="";
            minute.value="";
            sec.value="";
            stopInterval()
        } else if (sec.value!=0){
            sec.value=`${sec.value <=10?"0":""}${sec.value-1}`
        }else if(minute.value!=0 && sec.value==0){
            sec.value=59
            minute.value=`${minute.value <=10?"0":""}${minute.value-1}`
        }else if(hour.value!=0 && minute.value==0){
            sec.value=60
            hour.value=`${hour.value <=10?"0":""}${hour.value-1}`
        }


    }

    stopbtn.addEventListener('click', function(){
        stopInterval('pause')
    })

    resetbtn.addEventListener('click', function(){
        hour.value="";
        minute.value="";
        sec.value="";
        stopInterval()

    });

})();