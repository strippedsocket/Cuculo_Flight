const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 500;
const BRANCH_HEIGHT = 50;
const BRANCH_WIDTH = 50;
const BOARD_ROWS = BOARD_HEIGHT / BRANCH_HEIGHT;
var randomY = Math.floor((Math.random() * BOARD_ROWS));

function Cuculo() {
    this.Y = randomY* BRANCH_HEIGHT;//BRANCH_HEIGHT * 5;
    this.X = BRANCH_WIDTH * 2;
    this.Id = generateUUID();
    $("#main").append('<div id="' + this.Id + '" class="cuculo"></div>');
    $("#" + this.Id).css({ top: this.Y });
    $("#" + this.Id).css({ left: this.X });
    
};
//add new methods objects constructor
Cuculo.prototype.MoveElement = function (keydown) {       
    //up
    if ((keydown.keyCode == 40) && this.Y < BOARD_HEIGHT - BRANCH_HEIGHT) {
        this.Y = this.Y + BRANCH_HEIGHT;
        //$("#" + this.id).animate({ top: this.Y }, "slow");//.css({ bottom: -20 });
        $("#" + this.Id).css({ top: this.Y });
    } else if ((keydown.keyCode == 38) && this.Y > 0) {
        this.Y = this.Y - BRANCH_HEIGHT;
        $("#" + this.Id).css({ top: this.Y });
        //$("#" + this.id).animate({ bottom: "+=20px" }, "slow");//.css({ bottom: 20 });

    }           
};

cuculo = new Cuculo();
$(document).keydown(function (event) {
    cuculo.MoveElement(event);
});


function Branch(row) {
    this.X = BOARD_WIDTH -BRANCH_WIDTH;
    this.Y = row * BRANCH_HEIGHT;
    this.Id = generateUUID();
    $("#main").append('<div id="' + this.Id + '" class="branch"></div>');
    $("#" + this.Id).css({ top: this.Y });
    $("#" + this.Id).css({ left: this.X });

}

//Branch.prototype.printtPosition = function () {
//    console.log("Branch ID:" + this.Id +" - X:" + this.X + " - Y: " + this.Y);
//}

//add new methods objects constructor
Branch.prototype.moveLeft = function () {
    this.X = this.X - BRANCH_WIDTH;
    if (this.X < 0) {
        //console.log("Branch da nascondere");
        $("#" + this.Id).remove();
    } else {
        //console.log("Sposta elemento su schermo");
        $("#" + this.Id).css({ left: this.X });
        //$("#" + this.Id).animate({ left: this.X }, { duration: 100 });
    }
}


var branchList = [];
function runBranches() {
    var branchIntervalId = setInterval(function () {//setInterval restituisce un id
        //Move previousBranches for interval
        for (var branchIndex in branchList) {
            branchList[branchIndex].moveLeft();
        }


        //Add new Branches for interval -- (multiple branches every interaction)
        //var numberOfNewBranches = Math.floor((Math.random() * 4));
        //var currentBranchesPosition = [];
        //for (var i = 0; i < numberOfNewBranches; i++){
        //    var newRowIndex = generateNewIndexWithoutDupes(BOARD_ROWS,currentBranchesPosition);
        //    branchListNew.push(new Branch(newRowIndex));
        //}

        //Add new Branches for interval -- (single branch every interaction)
        var newRowIndex = Math.floor((Math.random() * BOARD_ROWS));
        branchList.push(new Branch(newRowIndex));
    }, 500);
    return branchIntervalId;
}


//#region Buttons Handlers Methods
var branchIntervalId = null;//To be able to use the clearInterval() method-> use a global variable

$("#stop").click(function () {
    if (branchIntervalId != null) {
        clearInterval(branchIntervalId);
    }
});
$("#start").click(function () {
    branchIntervalId = runBranches();
});

$("#reset").click(function () {
    location.reload();
});

//#endregion



//#region Utils Methods
function generateUUID() {
    return Math.floor(Math.random() * 9e6).toString(36);//The number will show as an hexadecimal value
}

//function generateNewIndexWithoutDupes(maxValue, previousValues) {
//    var newValue = null;
//    do {
//        newValue = Math.floor((Math.random() * maxValue));
//    } while (previousValues.indexOf(newValue) > -1);
//    previousValues.push(newValue);
//    return newValue;
//}
//#endregion