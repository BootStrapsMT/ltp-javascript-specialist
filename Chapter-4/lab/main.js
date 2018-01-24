window.onload = function() {
                document.getElementById("findNameBtn").addEventListener("click", lookForName);
            };

            function lookForName(e) {

                var myName = "Fred";
                var timesFound = [];
                var text = document.getElementById("inputNameBox").value

                for (var i = 0; i < text.length; i++) {
                    if (text[i] === "F") {
                        for (var y = i; y < (myName.length + i); y++) {
                            timesFound.push(text[y]);
                        }
                    }
                }
                if (timesFound.length === 0) {
                    alert("Your name wasn't found!");
                } else {
                    alert(timesFound);
                }
            }