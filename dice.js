
// determine winner
function result() {
    
    var ranNum1 = Math.floor(Math.random() * 6) + 1;
    var ranNum2 = Math.floor(Math.random() * 6) + 1;
    scrImg1 = "./images/dice" + ranNum1 +".png";
    scrImg2 = "./images/dice" + ranNum2 +".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", scrImg1);

    //set img2

    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", scrImg2);
    if (ranNum1 > ranNum2){
        document.querySelector("h3").textContent = "Player 1 win!";
    }
    else if (ranNum1 === ranNum2) {
        document.querySelector("h3").textContent = "It's a DRAW!";
    }
    else {
        document.querySelector("h3").textContent = "Player 2 win!";
    }
}
