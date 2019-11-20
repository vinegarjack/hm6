(function (){
    "use strict";
    function recur(n){
        //console.log(n);
        if ( Math.round(n/10) < 1){
            return n%10;
        }
        
        return (n%10 + recur(Math.round(n/10)) );
    }
    console.log(recur(1234));
})();