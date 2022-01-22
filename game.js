
window.onload = function () {

    var walls = document.getElementsByClassName("boundary");
    // if cursor is over a wall --> change maze background (class youlose)
    for (var i = 0; i < walls.length-1; i++) {
        walls[i].addEventListener("mouseover", function myFunction () {
        
            for (var i = 0; i < walls.length-1; i++)
                walls[i].className += " youlose";
    
        });
    }
    //end 



}

