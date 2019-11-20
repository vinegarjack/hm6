(function (){
    "use strict";
    function recur(a, b){
        if (a < b){
            console.log(a);
            recur(a + 1,b);
        }else if(a > b){
            console.log(a);
            recur(a - 1 , b);
        }else{
            console.log(a);
            return;
        }      
    }
    recur(2,5);
})();