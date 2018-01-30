window.onload = function () {
    var arr = [5, 2, 9, 4];
    var mostFrequent = 1;
    var notFrequent = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {
        console.log("i: "+ i);
        for (var j = i; j < arr.length; j++) {
            console.log(arr[i]);
            if (arr[i] === arr[j])
                notFrequent++;
                item = arr[i];
                if (mostFrequent < notFrequent) {
                    mostFrequent = notFrequent;
                    item = arr[i];
                    console.log(i);
                }
        }
        notFrequent = 0;
    }
    alert(item + " appears " + mostFrequent + " times");
}
