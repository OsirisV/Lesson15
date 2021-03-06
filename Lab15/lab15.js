var timer1 = null;
        var el = null;
        var score = 0; // number of 'hits'
        var shots = 0; // total 'shots'
        
        function moveIt() {

            if (parseInt(el.style.top) > (screen.height - 50)) el.style.top = 0;
            el.style.top = parseInt(el.style.top) + 6 + 'px';
             el.style.left = 100 + (80 * Math.sin(parseInt(el.style.top)/50)) + 'px';

             // set the timer
            timer1 = setTimeout(moveIt, 25);
        }
        
        function scoreUp() {
            // increment the player's score
            score++;
        }
        function scoreboard() {
            // display the scoreboard
            document.getElementById("score").innerHTML = "Shots: " + shots + " Score: " + score;
        }
        window.onload = function() {
            el = document.getElementById("img1");
            // onClick handler calls scoreUp()
            // when the image is clicked
            el.onclick = scoreUp;
            // update total number of shots
            // for every click within play field
            document.getElementById("range").onclick = function() {
                shots++;
                // update scoreboard
                scoreboard();
                }

            // initialize game
            scoreboard();
            el.style.top = '50px';
            el.style.left = '50px';
            moveIt();
        }