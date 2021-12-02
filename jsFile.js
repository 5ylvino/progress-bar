
function finish() {

    var element = document.getElementsByClassName("bar");
    
    for(var i = 0; i < element.length; i++) {
        var targetElement = element[i].querySelector("#value");
        targetElement.innerText = "100%"; 
        targetElement.style.width = "100%";
    }

}