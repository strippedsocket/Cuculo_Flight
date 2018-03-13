const BOARD_HEIGHT = 500;
const BOARD_WIDTH = 800;
const EL_HEIGHT = 50;
const EL_WIDTH = 50;
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


Branch.prototype.MoveBranches = function () {
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

            branchesList[branchIndex].MoveBranches();
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