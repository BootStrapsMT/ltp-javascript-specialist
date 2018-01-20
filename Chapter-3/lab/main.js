window.onload = function () {
    //alert("Rock, paper, scissors!");
    document.getElementById('playButton').addEventListener('click', randomNumber);
};

function randomNumber(e) {
    var computerAnswer = Math.floor((Math.random() * 3) + 1);
    console.log(computerAnswer);
    switch(computerAnswer){
        case  1:
            alert('Scissors')
            break;
        case 2:
            alert('Paper!')
            break;
        case 3:
            alert('Rock')
    }
};
