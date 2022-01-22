
window.onload = function () {
    //var reds = document.getElementsByClassName("boundary");

    /*for(var i=0; i<reds.length;i++){
            reds[i].style.backgroundColor = "red";
            console.log(i);
    }*/

    var classname = document.getElementsByClassName("boundary");

    var myFunction = function () {
        alert("hey");
        
    };

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener("mouseover", myFunction);
    }



}

