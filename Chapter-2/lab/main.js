window.onload = function() {
    document.getElementById('addingButton').addEventListener('click', addNumbers);
};
function addNumbers(e) {
    var answer = "";
    var one = document.getElementById('inputOne').value;
    var two = document.getElementById('inputTwo').value;
    answer += + one + + two;
    
    alert(answer)
};