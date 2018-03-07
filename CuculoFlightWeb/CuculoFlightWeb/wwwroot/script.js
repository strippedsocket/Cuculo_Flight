/**CUCULO**/
var cuculoPosition = {
    y: 400,
    x: 50
};


$("#main").append('<div class="cuculo"></div>');


$(document).ready(function () {    
    $(document).keydown(function (event) {
        //down
        if ((event.keyCode == 40) && ($(".cuculo").css("bottom") > "0")) {
           $('.cuculo').animate({ bottom: "-=20px" }, "slow");
           //up     
        } else if ((event.keyCode == 38) && ($(".cuculo").css("top") >"0")) {
                
            $(".cuculo").animate({ bottom: "+=20px" }, "slow");
            //cuculoPosition.y += 50;
        }

    });
});

/**BRANCHES**/
var branchesList = [];
//var pB = [];

//poi dinamico
function Branch(x, y, id) {
    this.X = x;
    this.Y = y;
    this.Id = id;

}


function generateBranches() {
    var nOfLoop;
    var numberOfBranches = Math.floor((Math.random() * 3) + 1);
    for (var i = 0; i < numberOfBranches; i++) {
        var positionY = Math.floor((Math.random() * 4) + 0);
        var branch = new Branch();
        $(branch.Y).css("top", "positionY");
        $(branch.X).css("right", "-100");
        branchesList.push(branch);
        
        var positionedBranches = $("#main").append('<div class="branch"></div>');
        //branch.Id = positionedBranches.attr("id");
        // pB.push(positionedBranches.attr("id"));
    }



    //moveBrances();
    return branchesList;
}


function moveBrances() {
    setInterval(function () {
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
