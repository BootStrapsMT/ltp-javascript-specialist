window.onload = function(){
    document.getElementById('hoursButton').addEventListener('click', runCheckHours);
}
function runCheckHours(e){
    var hoursSlept = document.getElementById('hoursInput').value;
    checkHours(hoursSlept);
}
function checkHours(hoursSlept){
    if(hoursSlept >= 8){
        return alert('alert1')   
    } else {
        return alert('alert2') 
    }
}