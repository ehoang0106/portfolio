
const $img = $("#bowl");
const $openButton = $("#open");
const $closeButton = $("#close");
const $shuffleButton = $("#shuffle")


let originalPosition = true;
let movedUp = true;

const moveDistance = 300;
const speed = 600;

function moveBowlUp(){
    $img.animate({
        bottom: moveDistance + "px"
    }, speed);
}

function moveBowlDown() {
    $img.animate({
        bottom: "0px"
    }, speed);
}

$openButton.on("click", function() {
    if(originalPosition){
        moveBowlUp();
        originalPosition = false;
    } 
});

$closeButton.on("click", function() {
    if(!originalPosition){
        moveBowlDown();
        originalPosition = true;
    }

});

$shuffleButton.on("click", function(){
    rollCube();
});

//roll dice cube

function rollCube () {
    var cubes = ["ca", "cua", "bau", "ga", "huu", "tom"];
    var cubeClasses = [".first", ".second", ".third"];
    
    for (var i = 0; i < cubeClasses.length; i++) {
        var ranIndex = Math.floor(Math.random() * cubes.length);
        var srcCube = "./image/" + cubes[ranIndex] + ".png";
        $(cubeClasses[i]).attr("src", srcCube);
    }

}

//alert box

var closeBgColor = "#f8d7da";
var closeTextColor = "#721c24";

var openBgColor = "#C1F2B0";
var openTextColor = "#339900";

function showAlert(id, textColor, bgColor) {
    

    $(`#${id}`).css("backgroundColor", bgColor);
    $(`#${id}`).css("color", textColor);


    $(`#${id}`).fadeIn();
    
    setTimeout(() => {
        $(`#${id}`).fadeOut();
    }, 1000);
}




$("#open").on("click", function(){
    showAlert("alertOpen", openTextColor, openBgColor);
});

$("#close").on("click", function(){
    showAlert("alertClose", closeTextColor, closeBgColor);
});

$("#shuffle").on("click", function(){
    showAlert("shuffleOpen", openTextColor, openBgColor);
});


$shuffleButton.on("click", function () {
    rollCube();
});
