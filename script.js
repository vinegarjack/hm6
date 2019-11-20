(function (){
    "use strict";
    function recur(n){
        //console.log(n);
        console.log(n%10);
        if(n/10<=1){
            return;
        }
        
        return recur(Math.round(n/10));
    } 
    recur(12348);  
})();