window.onload = function () {

    var score = 0;
    var scores = document.getElementsByClassName("example")[0];
    var walls = document.getElementsByClassName("boundary");
    var game = document.getElementById("game");

    // Lose if the curses touches a wall
    for (var i = 0; i < walls.length - 1; i++) {
        walls[i].addEventListener("mouseover", YouLost);
    }

    // Win if the cursor reaches E
    document.getElementById("end").addEventListener("mouseover", YouWon);

    // start when cursor passes the S  
    document.getElementById("start").addEventListener("mouseover", ResetHover);
    document.getElementById("start").addEventListener("mouseleave", ResetHover);
    document.getElementById("start").addEventListener("click", ResetClick);

    // Making sure that the player won't cheat (don't count a win unless cursor is inside the maze)
    game.addEventListener("mouseleave", outOfBound);

    //scoring system
    scores.innerHTML = score;

    // Hover to reset colors and start a new round with keeping the score 
    function ResetHover() {

        document.getElementById("status").innerText = "Beat the game! Don't hit the walls.";
        for (var i = 0; i < walls.length - 1; i++) {
            walls[i].classList.remove("youlose");
            walls[i].classList.remove("youwon");
            walls[i].style.backgroundColor = "";
        }

    }

    // click to reset everything 
    function ResetClick() {
        score = 0;
        document.getElementById("status").innerText = "Begin by moving your mouse over the \"S\".";
        scores.innerHTML = score;
    }

    // change background to red and -10 pts
    function YouLost() {
        if (document.getElementById("status").innerText != "Stay inside the maze!"
            && document.getElementById("status").innerText != "You Lost :( -10 point"
            && document.getElementById("status").innerText != "You Won! :) +5 points") {
            for (var i = 0; i < walls.length - 1; i++) {
                walls[i].classList.add("youlose");
            }
            document.getElementById("status").innerText = "You Lost :( -10 point";
            score = score - 10;
            scores.innerHTML = score;
        }
    }

    // change background to green, add 5 pts
    function YouWon() {
        if (document.getElementById("status").innerText != "Stay inside the maze!"
            && document.getElementById("status").innerText != "You Lost :( -10 point"
            && document.getElementById("status").innerText != "You Won! :) +5 points") {
                for (var i = 0; i < walls.length - 1; i++) {
                    walls[i].className += " youwon";
                    green();
    
                }
            document.getElementById("status").innerText = "You Won! :) +5 points";
            score = score + 5;
            scores.innerHTML = score;
        }

    }

    function green() {
        var elements = document.getElementsByClassName('youwon'); // get all elements
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "green";
        }
    }

    /*function check() {
        if (document.getElementById("status").innerText != "You Lost :( -10 point"
            && document.getElementById("status").innerText != "You Won! :) +5 points"
            && document.getElementById("status").innerText != "Stay inside the maze!") {
            return true;
        }
    }
    */

    function outOfBound() {
        document.getElementById("status").innerText = "Stay inside the maze!";

    }


}