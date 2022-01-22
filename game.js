
window.onload = function () {

    var walls = document.getElementsByClassName("boundary");
    score = 0;
    // if cursor is over a wall --> change maze background (class youlose)
    for (var i = 0; i < walls.length - 1; i++) {
        
        walls[i].addEventListener("mouseover", YouLost,false);

    }
    //end 
    document.getElementById("start").addEventListener("mouseover",ResetHover);
    // --> append "youlose" class, 
    function YouLost() {
        var local_score = 0;
        for (var i = 0; i < walls.length - 1; i++) {
            walls[i].className += " youlose";            
        }
        document.getElementById("status").innerHTML = "You Lost :(";
        local_score = score - 10 ;
        score = local_score;
        document.getElementsByClassName("example")[0].innerHTML = score;

    }


    function ResetHover() {

        for (var i = 0; i < walls.length - 1; i++) {
            walls[i].classList.remove("youlose");
            
        }


    }

    function ResetClick(){
        ResetHover();

    }



}

