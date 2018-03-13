const BOARD_HEIGHT = 500;
const BOARD_WIDTH = 800;
const EL_HEIGHT = 100;
const EL_WIDTH = 100;
const BOARD_ROWS = BOARD_HEIGHT / EL_HEIGHT;

var randomY = Math.floor((Math.random() * BOARD_ROWS));

function Cuculo() {
    this.Y = randomY * EL_HEIGHT;
    this.X = EL_WIDTH * 2;
    this.Id = generateRandomId();
    $("#main").append('<div id="' + this.Id + '" class="cuculo"> </div>');
    $("#" + this.Id).css({ top: this.Y });
    $("#" + this.Id).css({ left: this.X });
}

function generateRandomId() {
    return Math.floor(Math.random() * 9e6).toString(36);

}


//aggiungo metodo a oggetto
Cuculo.prototype.MoveCuculo = function (keydown) {
    //down
    if ((keydown.keyCode == 40) && this.Y < BOARD_HEIGHT - EL_HEIGHT) {
        this.Y = this.Y + EL_HEIGHT;
        $("#" + this.Id).css({ top: this.Y });
        //up
    } else if ((keydown.keyCode == 38) && this.Y > 0) {
        this.Y = this.Y - EL_HEIGHT;
        $("#" + this.Id).css({ top: this.Y });
    }
};


cuculo = new Cuculo();

$(document).keydown(function (event) {
    cuculo.MoveCuculo(event);
});

//passo row per settare la posizione in y
function Branch(row) {
    this.Y = row * EL_HEIGHT;
    this.X = BOARD_WIDTH - EL_WIDTH;
    this.Id = generateRandomId();
    $("#main").append('<div id="' + this.Id + '" class="branch"> </div>');
    $("#" + this.Id).css({ top: this.Y });
    $("#" + this.Id).css({ left: this.X });
}


Branch.prototype.Move = function () {
    this.X = this.X - EL_WIDTH;
    if (this.X < 0) {
        $("#" + this.Id).remove()
    } else {
        $("#" + this.Id).css({ left: this.X });
    }
}

var branchesList = [];

var indexSetInterval = null;


function run()   {

    indexSetInterval = setInterval(function () {

        for (var branchIndex in branchesList) {

            branchesList[branchIndex].Move();
            if ((branchesList[branchIndex].Y == cuculo.Y) && (branchesList[branchIndex].X == cuculo.X)) {
                Lose();
                break;
            }
        }
        var generetedRow = Math.floor((Math.random() * BOARD_ROWS));

        branchesList.push(new Branch(generetedRow));
        if (branchesList.length == 50) {
            WinG();
        }






    }, 500);

    return indexSetInterval;
}


function Lose() {
    clearInterval(indexSetInterval);  
    $("#myModal").show();
    $('#closeBtn').click(function () {
        //$("#myModal").hide();
        location.reload();
    });
    console.log("Looser!!");
}

function WinG() {
    clearInterval(indexSetInterval);
    $("#winModal").show();
    $('#closeBtn2').click(function () {
        location.reload();
    });
    console.log("You Win!!!");
}

$("#start").click(function () {
    indexSetInterval = run();
});
$("#stop").click(function () {
    if (indexSetInterval != null) {
        clearInterval(indexSetInterval);
    }
});

$("#reset").click(function () {
    location.reload();
});

/*
*   TO DO:
*   -COLLISIONE -> FINE GIOCO
*   -SUPERATI N BRANCH -> CASO VITTORIA
*   -SISTEMARE SFONDO
*   -GRAFICA
*
*/


var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = '../img/repeatedBG1200x500.jpg';
var CanvasXSize = 800;
var CanvasYSize = 500;
var speed = 30; // lower is faster
var scale = 1.05;
var y = -4.5; // vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function () {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        // image larger than canvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // image width larger than canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        // image height larger than canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // get canvas context
    ctx = document.getElementById('canvas').getContext('2d');

    // set refresh rate
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

    // if image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        // reset, start from beginning
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        // draw additional image1
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        // draw additional image2
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    // image is > Canvas Size
    else {
        // reset, start from beginning
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // draw aditional image
        if (x > (CanvasXSize - imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    // draw image
    ctx.drawImage(img, x, y, imgW, imgH);
    // amount to move
    x += dx;
}