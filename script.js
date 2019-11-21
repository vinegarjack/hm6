(function (){
    "use strict";
    function recur(n){
        if (Math.floor(n/10) === 0 && n%10 !==0){  
            return console.log(n%10);                    
        }else {
            console.log(n%10);
    
            return recur(Math.floor(n/10));
        }   
    }
    recur(20008);  
    //recur(1234);
})();