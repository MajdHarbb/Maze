
window.onload = function () {


    
    score = 0;
    var walls = document.getElementsByClassName("boundary");

    document.getElementById("start").addEventListener("mouseover",ResetHover);
    document.getElementById("start").addEventListener("mouseleave",ResetHover);
    document.getElementById("start").addEventListener("click",ResetClick);
    document.getElementById("end").addEventListener("mouseover", YouWon);



    

    // if cursor is over a wall --> change maze background (class youlose)
    
    for (var i = 0; i < walls.length - 1; i++) {
        
        walls[i].addEventListener("mouseover", YouLost,false);

    }
    //end 


    // +10 points to the old score
    function YouWon(){
        
        score = score +10;
        document.getElementById("status").innerHTML = "You Won! :) +5 points ";
        document.getElementsByClassName("example")[0].innerHTML = score;
        for(var i = 0; i < walls.length-1; i++){
            walls[i].className += " youwon";
        }

    }
    //end function YouWon()
    
    // --> append "youlose" class, -10 score
    function YouLost() {


        var local_score = 0;
        for (var i = 0; i < walls.length - 1; i++) {
            walls[i].className += " youlose";            
        }
        document.getElementById("status").innerHTML = "You Lost :( -10 points";
        local_score = score - 10 ;
        score = local_score;
        document.getElementsByClassName("example")[0].innerHTML = score;

    }
    //end function YouLost()

    // when hovering Start ---> remove red background
    function ResetHover() {

        document.getElementById("status").innerHTML = "Beat the Maze, don't touch the walls!";
        for (var i = 0; i < walls.length - 1; i++) {
            walls[i].classList.remove("youlose");
            walls[i].classList.remove("youwon");
        }
        


    }
    // end function
    

    // -10 points and play again with keeping the score
    function ResetClick(){
        ResetHover();
        score = 0;
        document.getElementById("status").innerHTML = "Begin by moving your mouse over the \"S\" ";
        document.getElementsByClassName("example")[0].innerHTML = "";

    }
    //end function



}

