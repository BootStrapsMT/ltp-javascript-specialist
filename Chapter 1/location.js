function respond(e) {
    alert("Hello!");
    //document.getElementById('buttom').style.display = "none";
}

window.onload = function () {
    document.getElementById('buttom').addEventListener('click', respond);
}