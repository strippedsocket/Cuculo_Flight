/**CUCULO**/
//var cuculoPosition = {
//    y: 400,
//    x: 50
//};


//$("#main").append('<div class="cuculo"></div>');
const BOARD_WIDTH = 800;
const BRANCH_HEIGHT = 70;
const BRANCH_WIDTH = 70;

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

function generateUUID() {
    return (0 | Math.random() * 9e6).toString(36);
}




var Branch = function (row) {
    this.X = BRANCH_WIDTH - BRANCH_WIDTH;
    this.Y = row * BRANCH_HEIGHT;
    this.Id = generateUUID();
}
Branch.prototype.printtPosition = function () {
    console.log("X:" + this.X + " - Y: " + this.Y);
}
Branch.prototype.moveLeft = function () {
    this.X = this.X - BRANCH_WIDTH;
}

var branch1 = new Branch(1);
var branch2 = new Branch(2);
var branch3 = new Branch(3);
branch1.printtPosition();
branch1.moveLeft();
branch1.printtPosition();
branch1.moveLeft();
branch1.printtPosition();
branch1.moveLeft();
branch1.printtPosition();


//poi dinamico
function Branch(x, y, id) {
    this.X = x;
    this.Y = y;
    this.Id = id;

}


function generateBranches() {
    var nOfLoop;
    var numberOfBranches = Math.floor((Math.random() * 3) + 1);
    var branchesIdList = ["b1", "b2","b3", "b4"];
    for (var i = 0; i <= numberOfBranches; i++) {
        var positionY = Math.floor(Math.random() * (300 - 20 + 1) + 20);
        var branch = new Branch();
        //var branch = new Branch(0,0, null);
        //$(branch).css("top", "positionY");
        //$(branch).css("right", "20");
       var id= branchesIdList.shift();
        branch.Id = id;
        var positionedBranches = $("#main").append('<div id="' + branch.Id + '" class="branch"></div>');

        //#region testConsoleLog
        //prove su console
        //console.log("val branch");
        //console.log(Object.getOwnPropertyNames(branch));
        //const descriptor1 = Object.getOwnPropertyDescriptor(branch, 'X');
        //console.log(descriptor1.value);
        //branch.Id = positionedBranches.attr("id");
        //#endregion

        //$("#" + branch.Id).attr(x, branch.X);//lego l'elemento html all'oggetto js
        //$("#" + branch.Id).attr(branch.Y);
        //$("#" + branch.Id).attr(y, branch.Y);
        //$("#" + branch.Id).css("right", "20");
        // pB.push(positionedBranches.attr("id"));
        $("#" + branch.Id).css({ top: positionY });
        $("#" + branch.Id).css({ right: 20 });
        branchesList.push(branch);
    }



    moveBrances();
    return branchesList;
}


function moveBrances() {
    for()
    setInterval(function () {
    //$("#start").click(function () {
    //    do {
        $(".branch").css("right", $(".branch").css("right") + 10);

        if ($(".branch").css("right") >= "800") {
            $(".branch").css("display", "none");
        }

            //});
            //$(".branch").animate({ right: "+800px" }, {
            //    duration: 4000
            //});
    //    } while ($(".branch").css("right") < "800");
    //});
    //    $(".branch").css("display", "none");
//    $("#start").click(function () {
//        if ($(".branch").css("right") < "800") {

//            $(".branch").animate({ right: "+800px" }, {
//                duration: 4000
//            });
//        } else {
//            $(".branch").css("display", "none");
//        }
        

//});
     
           
        

    
        //$("#start").click(function () {
        //    $(".branch").animate({ right: "+800px" }, {
        //        duration: 4000
        //    });
        ////}
            
        //});
            
        
    }, 100);
       
        
}
generateBranches();
$("#stop").click(function () {
    $(".branch").stop();
});

//$("#start").click(function () {
//    $(".branch").animate({ right: "+800px" }, {
//        duration: 4000
//    });
//});
