//in una fase successiva dovrei generarla...
var gameBoard = [
    ["#11", "#12", "#13", "#14", "#15", "#16", "#17", "#18"],//mettere con $(#11) etc
    ["#21", "#22", "#23", "#24", "#25", "#26", "#27", "#28"],
    ["#31", "#32", "#33", "#34", "#35", "#36", "#37", "#38"],
    ["#41", "#42", "#43", "#44", "#45", "#46", "#47", "#48"],
    ["#51", "#52", "#53", "#54", "#55", "#56", "#57", "#58"]
    
];

/**CUCULO**/
var cuculoPosition = {
    y: Math.floor((Math.random() * 4) + 0),
    x: 0//Math.floor((Math.random() * 7) + 0)
};

$(gameBoard[cuculoPosition.y][cuculoPosition.x]).append('<div class="cuculo"></div>');

$(document).ready(function () {

    $(document).keydown(function (event) {
        if (event.keyCode == 40) {
            cuculoPosition.y += 1;
            $(".cuculo").prependTo($(gameBoard[cuculoPosition.y][cuculoPosition.x]));
        } else if (event.keyCode == 38) {
            cuculoPosition.y -= 1;
            $(".cuculo").prependTo($(gameBoard[cuculoPosition.y][cuculoPosition.x]));
        }
    });
});

/**BRANCHES**/
var branchesList = [];

function Branch(x,y) {
    this.X = 7;//poi dinamico
    this.Y = y;
   
   
}

var numberOfBranches = Math.floor((Math.random() * 30) + 10);
var branch = new Branch();
function generateBranches() {
    
    var positionY = Math.floor((Math.random() * 4) + 0);
    branch.Y = positionY;
    $(gameBoard[branch.Y][branch.X]).append('<div class="branch"></div>');
    //moveBrances();
    //for (var i = 0; i < numberOfBranches; i++) {
    //    var branche = new Branche();
        
    //}
}

//riprendere da qui
function moveBrances() {
    $(document).ready(function () {
        for (var i = 7; i >= 0; i--) {
            if (branch.X == 0) {
                branch.X = branch.X;//momentaneo
            } else {
                branch.X -= 1;
                $(".branch").prependTo($(gameBoard[branch.Y][branch.X]).delay(2000));//questo non funziona-trovare altro metodo
            }
        
        }
        });
}
generateBranches();
