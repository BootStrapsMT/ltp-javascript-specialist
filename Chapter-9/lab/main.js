window.onload = function(){ 
    var sentence = "kulla purus elit, lacinia nec ante vel, gravida bibendum enim.";

    function capWord(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }  
    
    alert(capWord(sentence));
}