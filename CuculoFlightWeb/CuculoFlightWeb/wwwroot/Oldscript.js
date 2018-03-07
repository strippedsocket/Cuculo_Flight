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
//var pB = [];
//poi dinamico
function Branch(x,y, id) {
    this.X = 7;
    this.Y = y;
    this.Id = id;
  
}


function generateBranches() {
    var numberOfBranches = Math.floor((Math.random() * 3) + 1);
    for (var i = 0; i < numberOfBranches; i++) {
        var branch = new Branch();
        branchesList.push(branch);
        var positionY = Math.floor((Math.random() * 4) + 0);
        branch.Y = positionY;
        var positionedBranches = $(gameBoard[branch.Y][branch.X]).append('<div class="branch"></div>');
        branch.Id=positionedBranches.attr("id");
       // pB.push(positionedBranches.attr("id"));
    }
   

    
    moveBrances();
    return branchesList;
}


function moveBrances() {
    setInterval(function ()
    {
        for (var b of branchesList) {
            if (b.X == 0) {
                b.X = b.X;//momentaneo
            } else {
                b.X -= 1;
                $("#" + b.Id).children().prependTo($(gameBoard[b.Y][b.X]));
                b.Id -= 1;

            }
        }
            
        
        
    }, 2000);
}
generateBranches();
