﻿/**CUCULO**/
//var cuculoPosition = {
//    y: 400,
//    x: 50
//};


//$("#main").append('<div class="cuculo"></div>');

var cuculo = {
    y: 0,
    x: 0,
    id: null,
    CreateElement: function () {
        this.id = Date.now();
        var cuculoEl = $('<div id="' + this.id + '" class="cuculo"></div>');
        $("#main").append(cuculoEl);
    },
    MoveElement: function (keydown) {
       
        if ((keydown.keyCode == 40) && ($("#" + this.id).css("bottom") > "0.5")) {
                $("#" + this.id).animate({ bottom: "-=20px" }, "slow");//.css({ bottom: -20 });
                //up
        } else if ((keydown.keyCode == 38) && ($("#" + this.id).css("top") > "1")) {

                $("#" + this.id).animate({ bottom: "+=20px" }, "slow");//.css({ bottom: 20 });

            }

        
        }
            
};

cuculo.CreateElement();


$(document).keydown(function (event) {
    cuculo.MoveElement(event);
});
//$(document).keydown(cuculo.MoveElement(event));
//$(document).ready(function () {    
//    $(document).keydown(function (event) {
//        //down
//        if ((event.keyCode == 40) && ($(".cuculo").css("bottom") > "0")) {
//           $('.cuculo').animate({ bottom: "-=20px" }, "slow");
//           //up     
//        } else if ((event.keyCode == 38) && ($(".cuculo").css("top") >"0")) {
                
//            $(".cuculo").animate({ bottom: "+=20px" }, "slow");
//            //cuculoPosition.y += 50;
//        }

//    });
//});

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
//generateBranches();
