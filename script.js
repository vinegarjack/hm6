(function (){
    "use strict";
    function recur(n){
        if (n>1){
            recur(n-1); 
        }
        return console.log(n);
    }
    recur(10);
})();