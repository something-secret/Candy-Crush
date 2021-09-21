var clickStart;
var clickStop;
const board = [
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
];
const bufferBoard = [
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
  ["0","0","0","0","0","0","0","0","0","0"],
];
var count = 0;
var totalMoves = 0;
var level = 0;
var score = 0;
var requiredScore = -1;

function cell0_0() {
  if (document.getElementById("0-0").style.color == "red") {
    clickStop = "0-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-0";
    const possibleMoves = [0 + "-" + (0 + 1), (0 + 1) + "-" + 0];
    for (var i = 0; i < 2; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_1() {
  if (document.getElementById("0-1").style.color == "red") {
    clickStop = "0-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-1";
    const possibleMoves = [0 + "-" + (1 - 1), 0 + "-" + (1 + 1), (0 + 1) + "-" + 1];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_2() {
  if (document.getElementById("0-2").style.color == "red") {
    clickStop = "0-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-2";
    const possibleMoves = [0 + "-" + (2 - 1), 0 + "-" + (2 + 1), (0 + 1) + "-" + 2];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_3() {
  if (document.getElementById("0-3").style.color == "red") {
    clickStop = "0-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-3";
    const possibleMoves = [0 + "-" + (3 - 1), 0 + "-" + (3 + 1), (0 + 1) + "-" + 3];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_4() {
  if (document.getElementById("0-4").style.color == "red") {
    clickStop = "0-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-4";
    const possibleMoves = [0 + "-" + (4 - 1), 0 + "-" + (4 + 1), (0 + 1) + "-" + 4];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_5() {
  if (document.getElementById("0-5").style.color == "red") {
    clickStop = "0-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-5";
    const possibleMoves = [0 + "-" + (5 - 1), 0 + "-" + (5 + 1), (0 + 1) + "-" + 5];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_6() {
  if (document.getElementById("0-6").style.color == "red") {
    clickStop = "0-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-6";
    const possibleMoves = [0 + "-" + (6 - 1), 0 + "-" + (6 + 1), (0 + 1) + "-" + 6];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_7() {
  if (document.getElementById("0-7").style.color == "red") {
    clickStop = "0-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-7";
    const possibleMoves = [0 + "-" + (7 - 1), 0 + "-" + (7 + 1), (0 + 1) + "-" + 7];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_8() {
  if (document.getElementById("0-8").style.color == "red") {
    clickStop = "0-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-8";
    const possibleMoves = [0 + "-" + (8 - 1), 0 + "-" + (8 + 1), (0 + 1) + "-" + 8];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell0_9() {
  if (document.getElementById("0-9").style.color == "red") {
    clickStop = "0-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "0-9";
    const possibleMoves = [0 + "-" + (9 - 1), (0 + 1) + "-" + 9];
    for (var i = 0; i < 2; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/************************************************************************************************************************************/

function cell1_0() {
  if (document.getElementById("1-0").style.color == "red") {
    clickStop = "1-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-0";
    const possibleMoves = [(1 - 1) + "-" + 0, 1 + "-" + (0 + 1), (1 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_1() {
  if (document.getElementById("1-1").style.color == "red") {
    clickStop = "1-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-1";
    const possibleMoves = [1 + "-" + (1 - 1), (1 - 1) + "-" + 1, 1 + "-" + (1 + 1), (1 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_2() {
  if (document.getElementById("1-2").style.color == "red") {
    clickStop = "1-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-2";
    const possibleMoves = [1 + "-" + (2 - 1), (1 - 1) + "-" + 2, 1 + "-" + (2 + 1), (1 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_3() {
  if (document.getElementById("1-3").style.color == "red") {
    clickStop = "1-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-3";
    const possibleMoves = [1 + "-" + (3 - 1), (1 - 1) + "-" + 3, 1 + "-" + (3 + 1), (1 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_4() {
  if (document.getElementById("1-4").style.color == "red") {
    clickStop = "1-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-4";
    const possibleMoves = [1 + "-" + (4 - 1), (1 - 1) + "-" + 4, 1 + "-" + (4 + 1), (1 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_5() {
  if (document.getElementById("1-5").style.color == "red") {
    clickStop = "1-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-5";
    const possibleMoves = [1 + "-" + (5 - 1), (1 - 1) + "-" + 5, 1 + "-" + (5 + 1), (1 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_6() {
  if (document.getElementById("1-6").style.color == "red") {
    clickStop = "1-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-6";
    const possibleMoves = [1 + "-" + (6 - 1), (1 - 1) + "-" + 6, 1 + "-" + (6 + 1), (1 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_7() {
  if (document.getElementById("1-7").style.color == "red") {
    clickStop = "1-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-7";
    const possibleMoves = [1 + "-" + (7 - 1), (1 - 1) + "-" + 7, 1 + "-" + (7 + 1), (1 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_8() {
  if (document.getElementById("1-8").style.color == "red") {
    clickStop = "1-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-8";
    const possibleMoves = [1 + "-" + (8 - 1), (1 - 1) + "-" + 8, 1 + "-" + (8 + 1), (1 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell1_9() {
  if (document.getElementById("1-9").style.color == "red") {
    clickStop = "1-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "1-9";
    const possibleMoves = [1 + "-" + (9 - 1), (1 - 1) + "-" + 9, (1 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/******************************************************************************************************************************************/

function cell2_0() {
  if (document.getElementById("2-0").style.color == "red") {
    clickStop = "2-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-0";
    const possibleMoves = [(2 - 1) + "-" + 0, 2 + "-" + (0 + 1), (2 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_1() {
  if (document.getElementById("2-1").style.color == "red") {
    clickStop = "2-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-1";
    const possibleMoves = [2 + "-" + (1 - 1), (2 - 1) + "-" + 1, 2 + "-" + (1 + 1), (2 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_2() {
  if (document.getElementById("2-2").style.color == "red") {
    clickStop = "2-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-2";
    const possibleMoves = [2 + "-" + (2 - 1), (2 - 1) + "-" + 2, 2 + "-" + (2 + 1), (2 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_3() {
  if (document.getElementById("2-3").style.color == "red") {
    clickStop = "2-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-3";
    const possibleMoves = [2 + "-" + (3 - 1), (2 - 1) + "-" + 3, 2 + "-" + (3 + 1), (2 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_4() {
  if (document.getElementById("2-4").style.color == "red") {
    clickStop = "2-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-4";
    const possibleMoves = [2 + "-" + (4 - 1), (2 - 1) + "-" + 4, 2 + "-" + (4 + 1), (2 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_5() {
  if (document.getElementById("2-5").style.color == "red") {
    clickStop = "2-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-5";
    const possibleMoves = [2 + "-" + (5 - 1), (2 - 1) + "-" + 5, 2 + "-" + (5 + 1), (2 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_6() {
  if (document.getElementById("2-6").style.color == "red") {
    clickStop = "2-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-6";
    const possibleMoves = [2 + "-" + (6 - 1), (2 - 1) + "-" + 6, 2 + "-" + (6 + 1), (2 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_7() {
  if (document.getElementById("2-7").style.color == "red") {
    clickStop = "2-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-7";
    const possibleMoves = [2 + "-" + (7 - 1), (2 - 1) + "-" + 7, 2 + "-" + (7 + 1), (2 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_8() {
  if (document.getElementById("2-8").style.color == "red") {
    clickStop = "2-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-8";
    const possibleMoves = [2 + "-" + (8 - 1), (2 - 1) + "-" + 8, 2 + "-" + (8 + 1), (2 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell2_9() {
  if (document.getElementById("2-9").style.color == "red") {
    clickStop = "2-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "2-9";
    const possibleMoves = [2 + "-" + (9 - 1), (2 - 1) + "-" + 9, (2 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/*****************************************************************************************************************************/

function cell3_0() {
  if (document.getElementById("3-0").style.color == "red") {
    clickStop = "3-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-0";
    const possibleMoves = [(3 - 1) + "-" + 0, 3 + "-" + (0 + 1), (3 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_1() {
  if (document.getElementById("3-1").style.color == "red") {
    clickStop = "3-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-1";
    const possibleMoves = [3 + "-" + (1 - 1), (3 - 1) + "-" + 1, 3 + "-" + (1 + 1), (3 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_2() {
  if (document.getElementById("3-2").style.color == "red") {
    clickStop = "3-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-2";
    const possibleMoves = [3 + "-" + (2 - 1), (3 - 1) + "-" + 2, 3 + "-" + (2 + 1), (3 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_3() {
  if (document.getElementById("3-3").style.color == "red") {
    clickStop = "3-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-3";
    const possibleMoves = [3 + "-" + (3 - 1), (3 - 1) + "-" + 3, 3 + "-" + (3 + 1), (3 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_4() {
  if (document.getElementById("3-4").style.color == "red") {
    clickStop = "3-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-4";
    const possibleMoves = [3 + "-" + (4 - 1), (3 - 1) + "-" + 4, 3 + "-" + (4 + 1), (3 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_5() {
  if (document.getElementById("3-5").style.color == "red") {
    clickStop = "3-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-5";
    const possibleMoves = [3 + "-" + (5 - 1), (3 - 1) + "-" + 5, 3 + "-" + (5 + 1), (3 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_6() {
  if (document.getElementById("3-6").style.color == "red") {
    clickStop = "3-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-6";
    const possibleMoves = [3 + "-" + (6 - 1), (3 - 1) + "-" + 6, 3 + "-" + (6 + 1), (3 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_7() {
  if (document.getElementById("3-7").style.color == "red") {
    clickStop = "3-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-7";
    const possibleMoves = [3 + "-" + (7 - 1), (3 - 1) + "-" + 7, 3 + "-" + (7 + 1), (3 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_8() {
  if (document.getElementById("3-8").style.color == "red") {
    clickStop = "3-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-8";
    const possibleMoves = [3 + "-" + (8 - 1), (3 - 1) + "-" + 8, 3 + "-" + (8 + 1), (3 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_9() {
  if (document.getElementById("3-9").style.color == "red") {
    clickStop = "3-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-9";
    const possibleMoves = [3 + "-" + (9 - 1), (3 - 1) + "-" + 9, (3 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/*********************************************************************************************************************/

function cell3_0() {
  if (document.getElementById("3-0").style.color == "red") {
    clickStop = "3-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-0";
    const possibleMoves = [(3 - 1) + "-" + 0, 3 + "-" + (0 + 1), (3 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_1() {
  if (document.getElementById("3-1").style.color == "red") {
    clickStop = "3-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-1";
    const possibleMoves = [3 + "-" + (1 - 1), (3 - 1) + "-" + 1, 3 + "-" + (1 + 1), (3 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_2() {
  if (document.getElementById("3-2").style.color == "red") {
    clickStop = "3-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-2";
    const possibleMoves = [3 + "-" + (2 - 1), (3 - 1) + "-" + 2, 3 + "-" + (2 + 1), (3 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_3() {
  if (document.getElementById("3-3").style.color == "red") {
    clickStop = "3-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-3";
    const possibleMoves = [3 + "-" + (3 - 1), (3 - 1) + "-" + 3, 3 + "-" + (3 + 1), (3 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_4() {
  if (document.getElementById("3-4").style.color == "red") {
    clickStop = "3-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-4";
    const possibleMoves = [3 + "-" + (4 - 1), (3 - 1) + "-" + 4, 3 + "-" + (4 + 1), (3 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_5() {
  if (document.getElementById("3-5").style.color == "red") {
    clickStop = "3-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-5";
    const possibleMoves = [3 + "-" + (5 - 1), (3 - 1) + "-" + 5, 3 + "-" + (5 + 1), (3 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_6() {
  if (document.getElementById("3-6").style.color == "red") {
    clickStop = "3-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-6";
    const possibleMoves = [3 + "-" + (6 - 1), (3 - 1) + "-" + 6, 3 + "-" + (6 + 1), (3 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_7() {
  if (document.getElementById("3-7").style.color == "red") {
    clickStop = "3-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-7";
    const possibleMoves = [3 + "-" + (7 - 1), (3 - 1) + "-" + 7, 3 + "-" + (7 + 1), (3 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_8() {
  if (document.getElementById("3-8").style.color == "red") {
    clickStop = "3-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-8";
    const possibleMoves = [3 + "-" + (8 - 1), (3 - 1) + "-" + 8, 3 + "-" + (8 + 1), (3 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell3_9() {
  if (document.getElementById("3-9").style.color == "red") {
    clickStop = "3-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "3-9";
    const possibleMoves = [3 + "-" + (9 - 1), (3 - 1) + "-" + 9, (3 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/******************************************************************************************************************/

function cell4_0() {
  if (document.getElementById("4-0").style.color == "red") {
    clickStop = "4-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-0";
    const possibleMoves = [(4 - 1) + "-" + 0, 4 + "-" + (0 + 1), (4 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_1() {
  if (document.getElementById("4-1").style.color == "red") {
    clickStop = "4-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-1";
    const possibleMoves = [4 + "-" + (1 - 1), (4 - 1) + "-" + 1, 4 + "-" + (1 + 1), (4 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_2() {
  if (document.getElementById("4-2").style.color == "red") {
    clickStop = "4-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-2";
    const possibleMoves = [4 + "-" + (2 - 1), (4 - 1) + "-" + 2, 4 + "-" + (2 + 1), (4 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_3() {
  if (document.getElementById("4-3").style.color == "red") {
    clickStop = "4-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-3";
    const possibleMoves = [4 + "-" + (3 - 1), (4 - 1) + "-" + 3, 4 + "-" + (3 + 1), (4 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_4() {
  if (document.getElementById("4-4").style.color == "red") {
    clickStop = "4-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-4";
    const possibleMoves = [4 + "-" + (4 - 1), (4 - 1) + "-" + 4, 4 + "-" + (4 + 1), (4 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_5() {
  if (document.getElementById("4-5").style.color == "red") {
    clickStop = "4-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-5";
    const possibleMoves = [4 + "-" + (5 - 1), (4 - 1) + "-" + 5, 4 + "-" + (5 + 1), (4 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_6() {
  if (document.getElementById("4-6").style.color == "red") {
    clickStop = "4-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-6";
    const possibleMoves = [4 + "-" + (6 - 1), (4 - 1) + "-" + 6, 4 + "-" + (6 + 1), (4 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_7() {
  if (document.getElementById("4-7").style.color == "red") {
    clickStop = "4-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-7";
    const possibleMoves = [4 + "-" + (7 - 1), (4 - 1) + "-" + 7, 4 + "-" + (7 + 1), (4 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_8() {
  if (document.getElementById("4-8").style.color == "red") {
    clickStop = "4-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-8";
    const possibleMoves = [4 + "-" + (8 - 1), (4 - 1) + "-" + 8, 4 + "-" + (8 + 1), (4 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell4_9() {
  if (document.getElementById("4-9").style.color == "red") {
    clickStop = "4-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "4-9";
    const possibleMoves = [4 + "-" + (9 - 1), (4 - 1) + "-" + 9, (4 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/**********************************************************************************************************************/

function cell5_0() {
  if (document.getElementById("5-0").style.color == "red") {
    clickStop = "5-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-0";
    const possibleMoves = [(5 - 1) + "-" + 0, 5 + "-" + (0 + 1), (5 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_1() {
  if (document.getElementById("5-1").style.color == "red") {
    clickStop = "5-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-1";
    const possibleMoves = [5 + "-" + (1 - 1), (5 - 1) + "-" + 1, 5 + "-" + (1 + 1), (5 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_2() {
  if (document.getElementById("5-2").style.color == "red") {
    clickStop = "5-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-2";
    const possibleMoves = [5 + "-" + (2 - 1), (5 - 1) + "-" + 2, 5 + "-" + (2 + 1), (5 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_3() {
  if (document.getElementById("5-3").style.color == "red") {
    clickStop = "5-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-3";
    const possibleMoves = [5 + "-" + (3 - 1), (5 - 1) + "-" + 3, 5 + "-" + (3 + 1), (5 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_4() {
  if (document.getElementById("5-4").style.color == "red") {
    clickStop = "5-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-4";
    const possibleMoves = [5 + "-" + (4 - 1), (5 - 1) + "-" + 4, 5 + "-" + (4 + 1), (5 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_5() {
  if (document.getElementById("5-5").style.color == "red") {
    clickStop = "5-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-5";
    const possibleMoves = [5 + "-" + (5 - 1), (5 - 1) + "-" + 5, 5 + "-" + (5 + 1), (5 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_6() {
  if (document.getElementById("5-6").style.color == "red") {
    clickStop = "5-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-6";
    const possibleMoves = [5 + "-" + (6 - 1), (5 - 1) + "-" + 6, 5 + "-" + (6 + 1), (5 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_7() {
  if (document.getElementById("5-7").style.color == "red") {
    clickStop = "5-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-7";
    const possibleMoves = [5 + "-" + (7 - 1), (5 - 1) + "-" + 7, 5 + "-" + (7 + 1), (5 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_8() {
  if (document.getElementById("5-8").style.color == "red") {
    clickStop = "5-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-8";
    const possibleMoves = [5 + "-" + (8 - 1), (5 - 1) + "-" + 8, 5 + "-" + (8 + 1), (5 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell5_9() {
  if (document.getElementById("5-9").style.color == "red") {
    clickStop = "5-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "5-9";
    const possibleMoves = [5 + "-" + (9 - 1), (5 - 1) + "-" + 9, (5 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/*************************************************************************************************************************************/

function cell6_0() {
  if (document.getElementById("6-0").style.color == "red") {
    clickStop = "6-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-0";
    const possibleMoves = [(6 - 1) + "-" + 0, 6 + "-" + (0 + 1), (6 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_1() {
  if (document.getElementById("6-1").style.color == "red") {
    clickStop = "6-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-1";
    const possibleMoves = [6 + "-" + (1 - 1), (6 - 1) + "-" + 1, 6 + "-" + (1 + 1), (6 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_2() {
  if (document.getElementById("6-2").style.color == "red") {
    clickStop = "6-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-2";
    const possibleMoves = [6 + "-" + (2 - 1), (6 - 1) + "-" + 2, 6 + "-" + (2 + 1), (6 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_3() {
  if (document.getElementById("6-3").style.color == "red") {
    clickStop = "6-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-3";
    const possibleMoves = [6 + "-" + (3 - 1), (6 - 1) + "-" + 3, 6 + "-" + (3 + 1), (6 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_4() {
  if (document.getElementById("6-4").style.color == "red") {
    clickStop = "6-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-4";
    const possibleMoves = [6 + "-" + (4 - 1), (6 - 1) + "-" + 4, 6 + "-" + (4 + 1), (6 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_5() {
  if (document.getElementById("6-5").style.color == "red") {
    clickStop = "6-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-5";
    const possibleMoves = [6 + "-" + (5 - 1), (6 - 1) + "-" + 5, 6 + "-" + (5 + 1), (6 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_6() {
  if (document.getElementById("6-6").style.color == "red") {
    clickStop = "6-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-6";
    const possibleMoves = [6 + "-" + (6 - 1), (6 - 1) + "-" + 6, 6 + "-" + (6 + 1), (6 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_7() {
  if (document.getElementById("6-7").style.color == "red") {
    clickStop = "6-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-7";
    const possibleMoves = [6 + "-" + (7 - 1), (6 - 1) + "-" + 7, 6 + "-" + (7 + 1), (6 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_8() {
  if (document.getElementById("6-8").style.color == "red") {
    clickStop = "6-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-8";
    const possibleMoves = [6 + "-" + (8 - 1), (6 - 1) + "-" + 8, 6 + "-" + (8 + 1), (6 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell6_9() {
  if (document.getElementById("6-9").style.color == "red") {
    clickStop = "6-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "6-9";
    const possibleMoves = [6 + "-" + (9 - 1), (6 - 1) + "-" + 9, (6 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/****************************************************************************************************************/

function cell7_0() {
  if (document.getElementById("7-0").style.color == "red") {
    clickStop = "7-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-0";
    const possibleMoves = [(7 - 1) + "-" + 0, 7 + "-" + (0 + 1), (7 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_1() {
  if (document.getElementById("7-1").style.color == "red") {
    clickStop = "7-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-1";
    const possibleMoves = [7 + "-" + (1 - 1), (7 - 1) + "-" + 1, 7 + "-" + (1 + 1), (7 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_2() {
  if (document.getElementById("7-2").style.color == "red") {
    clickStop = "7-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-2";
    const possibleMoves = [7 + "-" + (2 - 1), (7 - 1) + "-" + 2, 7 + "-" + (2 + 1), (7 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_3() {
  if (document.getElementById("7-3").style.color == "red") {
    clickStop = "7-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-3";
    const possibleMoves = [7 + "-" + (3 - 1), (7 - 1) + "-" + 3, 7 + "-" + (3 + 1), (7 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_4() {
  if (document.getElementById("7-4").style.color == "red") {
    clickStop = "7-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-4";
    const possibleMoves = [7 + "-" + (4 - 1), (7 - 1) + "-" + 4, 7 + "-" + (4 + 1), (7 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_5() {
  if (document.getElementById("7-5").style.color == "red") {
    clickStop = "7-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-5";
    const possibleMoves = [7 + "-" + (5 - 1), (7 - 1) + "-" + 5, 7 + "-" + (5 + 1), (7 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_6() {
  if (document.getElementById("7-6").style.color == "red") {
    clickStop = "7-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-6";
    const possibleMoves = [7 + "-" + (6 - 1), (7 - 1) + "-" + 6, 7 + "-" + (6 + 1), (7 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_7() {
  if (document.getElementById("7-7").style.color == "red") {
    clickStop = "7-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-7";
    const possibleMoves = [7 + "-" + (7 - 1), (7 - 1) + "-" + 7, 7 + "-" + (7 + 1), (7 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_8() {
  if (document.getElementById("7-8").style.color == "red") {
    clickStop = "7-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-8";
    const possibleMoves = [7 + "-" + (8 - 1), (7 - 1) + "-" + 8, 7 + "-" + (8 + 1), (7 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell7_9() {
  if (document.getElementById("7-9").style.color == "red") {
    clickStop = "7-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "7-9";
    const possibleMoves = [7 + "-" + (9 - 1), (7 - 1) + "-" + 9, (7 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/***********************************************************************************************************************/

function cell8_0() {
  if (document.getElementById("8-0").style.color == "red") {
    clickStop = "8-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-0";
    const possibleMoves = [(8 - 1) + "-" + 0, 8 + "-" + (0 + 1), (8 + 1) + "-" + 0];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_1() {
  if (document.getElementById("8-1").style.color == "red") {
    clickStop = "8-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-1";
    const possibleMoves = [8 + "-" + (1 - 1), (8 - 1) + "-" + 1, 8 + "-" + (1 + 1), (8 + 1) + "-" + 1];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_2() {
  if (document.getElementById("8-2").style.color == "red") {
    clickStop = "8-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-2";
    const possibleMoves = [8 + "-" + (2 - 1), (8 - 1) + "-" + 2, 8 + "-" + (2 + 1), (8 + 1) + "-" + 2];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_3() {
  if (document.getElementById("8-3").style.color == "red") {
    clickStop = "8-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-3";
    const possibleMoves = [8 + "-" + (3 - 1), (8 - 1) + "-" + 3, 8 + "-" + (3 + 1), (8 + 1) + "-" + 3];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_4() {
  if (document.getElementById("8-4").style.color == "red") {
    clickStop = "8-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-4";
    const possibleMoves = [8 + "-" + (4 - 1), (8 - 1) + "-" + 4, 8 + "-" + (4 + 1), (8 + 1) + "-" + 4];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_5() {
  if (document.getElementById("8-5").style.color == "red") {
    clickStop = "8-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-5";
    const possibleMoves = [8 + "-" + (5 - 1), (8 - 1) + "-" + 5, 8 + "-" + (5 + 1), (8 + 1) + "-" + 5];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_6() {
  if (document.getElementById("8-6").style.color == "red") {
    clickStop = "8-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-6";
    const possibleMoves = [8 + "-" + (6 - 1), (8 - 1) + "-" + 6, 8 + "-" + (6 + 1), (8 + 1) + "-" + 6];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_7() {
  if (document.getElementById("8-7").style.color == "red") {
    clickStop = "8-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-7";
    const possibleMoves = [8 + "-" + (7 - 1), (8 - 1) + "-" + 7, 8 + "-" + (7 + 1), (8 + 1) + "-" + 7];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_8() {
  if (document.getElementById("8-8").style.color == "red") {
    clickStop = "8-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-8";
    const possibleMoves = [8 + "-" + (8 - 1), (8 - 1) + "-" + 8, 8 + "-" + (8 + 1), (8 + 1) + "-" + 8];
    for (var i = 0; i < 4; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell8_9() {
  if (document.getElementById("8-9").style.color == "red") {
    clickStop = "8-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "8-9";
    const possibleMoves = [8 + "-" + (9 - 1), (8 - 1) + "-" + 9, (8 + 1) + "-" + 9];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}

/***************************************************************************************************************************/

function cell9_0() {
  if (document.getElementById("9-0").style.color == "red") {
    clickStop = "9-0";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-0";
    const possibleMoves = [(9 - 1) + "-" + 0, 9 + "-" + (0 + 1)];
    for (var i = 0; i < 2; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_1() {
  if (document.getElementById("9-1").style.color == "red") {
    clickStop = "9-1";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-1";
    const possibleMoves = [9 + "-" + (1 - 1), (9 - 1) + "-" + 1, 9 + "-" + (1 + 1)];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_2() {
  if (document.getElementById("9-2").style.color == "red") {
    clickStop = "9-2";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-2";
    const possibleMoves = [9 + "-" + (2 - 1), (9 - 1) + "-" + 2, 9 + "-" + (2 + 1)];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_3() {
  if (document.getElementById("9-3").style.color == "red") {
    clickStop = "9-3";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-3";
    const possibleMoves = [9 + "-" + (3 - 1), (9 - 1) + "-" + 3, 9 + "-" + (3 + 1)];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_4() {
  if (document.getElementById("9-4").style.color == "red") {
    clickStop = "9-4";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-4";
    const possibleMoves = [9 + "-" + (4 - 1), (9 - 1) + "-" + 4, 9 + "-" + (4 + 1)];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_5() {
  if (document.getElementById("9-5").style.color == "red") {
    clickStop = "9-5";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-5";
    const possibleMoves = [9 + "-" + (5 - 1), (9 - 1) + "-" + 5, 9 + "-" + (5 + 1)];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_6() {
  if (document.getElementById("9-6").style.color == "red") {
    clickStop = "9-6";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-6";
    const possibleMoves = [9 + "-" + (6 - 1), (9 - 1) + "-" + 6, 9 + "-" + (6 + 1)];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_7() {
  if (document.getElementById("9-7").style.color == "red") {
    clickStop = "9-7";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-7";
    const possibleMoves = [9 + "-" + (7 - 1), (9 - 1) + "-" + 7, 9 + "-" + (7 + 1)];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_8() {
  if (document.getElementById("9-8").style.color == "red") {
    clickStop = "9-8";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-8";
    const possibleMoves = [9 + "-" + (8 - 1), (9 - 1) + "-" + 8, 9 + "-" + (8 + 1)];
    for (var i = 0; i < 3; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}
function cell9_9() {
  if (document.getElementById("9-9").style.color == "red") {
    clickStop = "9-9";
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickEvent();
  } else {
    var x = document.getElementsByClassName("cell");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "#aeaeae88";
      x[i].style.backgroundColor = "#aeaeae88";
    }
    clickStart = "9-9";
    const possibleMoves = [9 + "-" + (9 - 1), (9 - 1) + "-" + 9];
    for (var i = 0; i < 2; i++) {
      document.getElementById(possibleMoves[i]).style.color = "red";
    }
    document.getElementById(clickStart).style.backgroundColor = "#ae3df4dd";
  }
}




function move(rowStart, columnStart, rowStop, columnStop) {
  let buffer;
  buffer = board[rowStart][columnStart];
  board[rowStart][columnStart] = board[rowStop][columnStop];
  board[rowStop][columnStop] = buffer;
  render();
}

function returnType(cells) {
  const colour = cells.split("_");
  return colour[1];
}

function horizontal(x, y) {
  score = score + 30;
  for (var i = 0; i < 10; i++) {
    if (returnType(board[x][i]) == "vertical")
      vertical(x, i);
    if (returnType(board[x][i]) == "packet")
      packet(x, i);
    if (board[x][i] == "colour_bomb")
      colourBomb(returnColour(board[x][i]), x, i);
    bufferBoard[x][i] = "0";
    score = score + 10;
  }
}

function vertical(x, y) {
  score = score + 30;
  for (var i = 0; i < 10; i++) {
    if (returnType(board[i][y]) == "horizontal")
      horizontal(i, y);
    if (returnType(board[i][y]) == "packet")
      packet(i, y);
    if (board[i][y] == "colour_bomb")
      colourBomb(returnColour(board[i][y]), i, y);
    bufferBoard[i][y] = "0";
    score = score + 10;
  }
}

function packet(x, y) {
  score = score + 50;
  const cells = [
    [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
    [x, y - 1], [x, y], [x, y + 1],
    [x + 1, y - 1], [x + 1, y], [x + 1, y + 1],
  ];
  for (var i = 0; i < 9; i++) {
    if (cells[i][0] < 0)
      cells[i][0]++;
    if (cells[i][0] > 9)
      cells[i][0]--;
    if (cells[i][1] < 0)
      cells[i][1]++;
    if (cells[i][1] > 9)
      cells[i][1]--;
    if (returnType(board[cells[i][0]][cells[i][1]]) == "_horizontal")
      horizontal(cells[i][0], cells[i][1]);
    if (returnType(board[cells[i][0]][cells[i][1]]) == "_vertical")
      vertical(cells[i][0], cells[i][0]);
    if (board[cells[i][0]][cells[i][1]] == "colour_bomb")
      colourBomb(returnColour(board[cells[i][0]][cells[i][1]]), i, j);
    bufferBoard[cells[i][0]][cells[i][1]] = "0";
    score = score + 10;
  }
}

function colourBomb(colour, x, y, turnTo) {
  score = score + 100;
  board[x][y] = "0";
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (returnColour(board[i][j]) == colour) {
        if (turnTo == "normal") {
          if (returnType(board[i][j]) == "horizontal")
            horizontal(i, j);
          if (returnType(board[i][j]) == "vertical")
            vertical(i, j);
          if (returnType(board[i][j]) == "packet")
            packet(i, j);
          board[i][j] = "0";
          score = score + 10;
        } else if (turnTo == "horizontal") {
          board[i][j] = returnColour(board[i][j]) + "_horizontal";
          horizontal(i, j);
        } else if (turnTo == "packet") {
          board[i][j] = returnColour(board[i][j]) + "_packet";
          packet(i, j);
        } else if (turnTo == "vertical") {
          board[i][j] = returnColour(board[i][j]) + "_vertical";
          vertical(i, j);
        }
      }
    }
  }
  for (var i = 0; i < 10; i++)
    for (var j = 0; j < 10; j++)
      if (bufferBoard[i][j] == 0)
        board[i][j] = bufferBoard[i][j];
}

function action(x, y, moveCase, physics_true) {
  const case5_0 = [[x - 2, y], [x - 1, y], [x, y], [x, y - 1], [x, y - 2]];
  const case5_1 = [[x - 2, y], [x - 1, y], [x, y], [x, y + 1], [x, y + 2]];
  const case5_2 = [[x + 2, y], [x + 1, y], [x, y], [x, y - 1], [x, y - 2]];
  const case5_3 = [[x + 2, y], [x + 1, y], [x, y], [x, y + 1], [x, y + 2]];
  const case5_4 = [[x - 1, y], [x + 1, y], [x, y], [x, y - 1], [x, y - 2]];
  const case5_5 = [[x - 2, y], [x + 1, y], [x, y], [x, y + 1], [x, y + 2]];
  const case5_6 = [[x + 2, y], [x + 1, y], [x, y], [x, y - 1], [x, y + 1]];
  const case5_7 = [[x - 2, y], [x - 1, y], [x, y], [x, y - 1], [x, y + 1]];
  const case5_8 = [[x + 2, y], [x + 1, y], [x, y], [x - 1, y], [x - 2, y]];
  const case5_9 = [[x, y - 2], [x, y - 1], [x, y], [x, y + 1], [x, y + 2]];
  const case4_0 = [[x - 1, y], [x, y], [x + 1, y], [x + 2, y]];
  const case4_1 = [[x - 2, y], [x - 1, y], [x, y], [x + 1, y]];
  const case4_2 = [[x, y - 1], [x, y], [x, y + 1], [x, y + 2]];
  const case4_3 = [[x, y - 2], [x, y - 1], [x, y], [x, y + 1]];
  const case3_0 = [[x - 2, y], [x - 1, y], [x, y]];
  const case3_1 = [[x - 1, y], [x, y], [x + 1, y]];
  const case3_2 = [[x, y], [x + 1, y], [x + 2, y]];
  const case3_3 = [[x, y - 2], [x, y - 1], [x, y]];
  const case3_4 = [[x, y - 1], [x, y], [x, y + 1]];
  const case3_5 = [[x, y], [x, y + 1], [x, y + 2]];
  switch (moveCase) {
    case 1:
      const colour0 = board[x][y].split("_");
      for (var i = 0; i < 4; i++) {
        if (returnType(board[case4_0[i][0]][case4_0[i][1]]) == "horizontal")
          horizontal(case4_0[i][0], case4_0[i][1]);
        if (returnType(board[case4_0[i][0]][case4_0[i][1]]) == "vertical")
          vertical(case4_0[i][0], case4_0[i][1]);
        if (returnType(board[case4_0[i][0]][case4_0[i][1]]) == "packet")
          packet(case4_0[i][0], case4_0[i][1]);
        board[case4_0[i][0]][case4_0[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour0[0] + "_vertical";
      break;
    case 2:
      const colour1 = board[x][y].split("_");
      for (var i = 0; i < 4; i++) {
        if (returnType(board[case4_1[i][0]][case4_1[i][1]]) == "horizontal")
          horizontal(case4_1[i][0], case4_1[i][1]);
        if (returnType(board[case4_1[i][0]][case4_1[i][1]]) == "vertical")
          vertical(case4_1[i][0], case4_1[i][1]);
        if (returnType(board[case4_1[i][0]][case4_1[i][1]]) == "packet")
          packet(case4_1[i][0], case4_1[i][1]);
        board[case4_1[i][0]][case4_1[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour1[0] + "_vertical";
      break;
    case 3:
      const colour2 = board[x][y].split("_");
      for (var i = 0; i < 4; i++) {
        if (returnType(board[case4_2[i][0]][case4_2[i][1]]) == "horizontal")
          horizontal(case4_2[i][0], case4_2[i][1]);
        if (returnType(board[case4_2[i][0]][case4_2[i][1]]) == "vertical")
          vertical(case4_2[i][0], case4_2[i][1]);
        if (returnType(board[case4_2[i][0]][case4_2[i][1]]) == "packet")
          packet(case4_2[i][0], case4_2[i][1]);
        board[case4_2[i][0]][case4_2[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour2[0] + "_horizontal";
      break;
    case 4:
      const colour3 = board[x][y].split("_");
      for (var i = 0; i < 4; i++) {
        if (returnType(board[case4_3[i][0]][case4_3[i][1]]) == "horizontal")
          horizontal(case4_3[i][0], case4_3[i][1]);
        if (returnType(board[case4_3[i][0]][case4_3[i][1]]) == "vertical")
          vertical(case4_3[i][0], case4_3[i][1]);
        if (returnType(board[case4_3[i][0]][case4_3[i][1]]) == "packet")
          packet(case4_3[i][0], case4_3[i][1]);
        board[case4_3[i][0]][case4_3[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour3[0] + "_horizontal";
      break;
    case 5:
      for (var i = 0; i < 3; i++) {
        if (returnType(board[case3_0[i][0]][case3_0[i][1]]) == "horizontal")
          horizontal(case3_0[i][0], case3_0[i][1]);
        if (returnType(board[case3_0[i][0]][case3_0[i][1]]) == "vertical")
          vertical(case3_0[i][0], case3_0[i][1]);
        if (returnType(board[case3_0[i][0]][case3_0[i][1]]) == "packet")
          packet(case3_0[i][0], case3_0[i][1]);
        board[case3_0[i][0]][case3_0[i][1]] = "0";
        score = score + 10;
      }
      break;
    case 6:
      for (var i = 0; i < 3; i++) {
        if (returnType(board[case3_1[i][0]][case3_1[i][1]]) == "horizontal")
          horizontal(case3_2[i][0], case3_1[i][1]);
        if (returnType(board[case3_1[i][0]][case3_1[i][1]]) == "vertical")
          vertical(case3_2[i][0], case3_1[i][1]);
        if (returnType(board[case3_1[i][0]][case3_1[i][1]]) == "packet")
          packet(case3_2[i][0], case3_1[i][1]);
        board[case3_1[i][0]][case3_1[i][1]] = "0";
        score = score + 10;
      }
      break;
    case 7:
      for (var i = 0; i < 3; i++) {
        if (returnType(board[case3_2[i][0]][case3_2[i][1]]) == "horizontal")
          horizontal(case3_2[i][0], case3_2[i][1]);
        if (returnType(board[case3_2[i][0]][case3_2[i][1]]) == "vertical")
          vertical(case3_2[i][0], case3_2[i][1]);
        if (returnType(board[case3_2[i][0]][case3_2[i][1]]) == "packet")
          packet(case3_2[i][0], case3_2[i][1]);
        board[case3_2[i][0]][case3_2[i][1]] = "0";
        score = score + 10;
      }
      break;
    case 8:
      for (var i = 0; i < 3; i++) {
        if (returnType(board[case3_3[i][0]][case3_3[i][1]]) == "horizontal")
          horizontal(case3_3[i][0], case3_3[i][1]);
        if (returnType(board[case3_3[i][0]][case3_3[i][1]]) == "vertical")
          vertical(case3_3[i][0], case3_3[i][1]);
        if (returnType(board[case3_3[i][0]][case3_3[i][1]]) == "packet")
          packet(case3_3[i][0], case3_3[i][1]);
        board[case3_3[i][0]][case3_3[i][1]] = "0";
        score = score + 10;
      }
      break;
    case 9:
      for (var i = 0; i < 3; i++) {
        if (returnType(board[case3_4[i][0]][case3_4[i][1]]) == "horizontal")
          horizontal(case3_4[i][0], case3_4[i][1]);
        if (returnType(board[case3_4[i][0]][case3_4[i][1]]) == "vertical")
          vertical(case3_4[i][0], case3_4[i][1]);
        if (returnType(board[case3_4[i][0]][case3_4[i][1]]) == "packet")
          packet(case3_4[i][0], case3_4[i][1]);
        board[case3_4[i][0]][case3_4[i][1]] = "0";
        score = score + 10;
      }
      break;
    case 10:
      for (var i = 0; i < 3; i++) {
        if (returnType(board[case3_5[i][0]][case3_5[i][1]]) == "horizontal")
          horizontal(case3_5[i][0], case3_5[i][1]);
        if (returnType(board[case3_5[i][0]][case3_5[i][1]]) == "vertical")
          vertical(case3_5[i][0], case3_5[i][1]);
        if (returnType(board[case3_5[i][0]][case3_5[i][1]]) == "packet")
          packet(case3_5[i][0], case3_5[i][1]);
        board[case3_5[i][0]][case3_5[i][1]] = "0";
        score = score + 10;
      }
      break;
    case 11:
      const colour10 = board[x][y].split("_");
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_0[i][0]][case5_0[i][1]]) == "horizontal")
          horizontal(case5_0[i][0], case5_0[i][1]);
        if (returnType(board[case5_0[i][0]][case5_0[i][1]]) == "vertical")
          vertical(case5_0[i][0], case5_0[i][1]);
        if (returnType(board[case5_0[i][0]][case5_0[i][1]]) == "packet")
          packet(case5_0[i][0], case5_0[i][1]);
        board[case5_0[i][0]][case5_0[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour10[0] + "_packet";
      break;
    case 12:
      const colour11 = board[x][y].split("_");
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_1[i][0]][case5_1[i][1]]) == "horizontal")
          horizontal(case5_1[i][0], case5_1[i][1]);
        if (returnType(board[case5_1[i][0]][case5_1[i][1]]) == "vertical")
          vertical(case5_1[i][0], case5_1[i][1]);
        if (returnType(board[case5_1[i][0]][case5_1[i][1]]) == "packet")
          packet(case5_1[i][0], case5_1[i][1]);
        board[case5_1[i][0]][case5_1[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour11[0] + "_packet";
      break;
    case 13:
      const colour12 = board[x][y].split("_");
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_2[i][0]][case5_2[i][1]]) == "horizontal")
          horizontal(case5_2[i][0], case5_2[i][1]);
        if (returnType(board[case5_2[i][0]][case5_2[i][1]]) == "vertical")
          vertical(case5_2[i][0], case5_2[i][1]);
        if (returnType(board[case5_2[i][0]][case5_2[i][1]]) == "packet")
          packet(case5_2[i][0], case5_2[i][1]);
        board[case5_2[i][0]][case5_2[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour12[0] + "_packet";
      break;
    case 14:
      const colour13 = board[x][y].split("_");
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_3[i][0]][case5_3[i][1]]) == "horizontal")
          horizontal(case5_3[i][0], case5_3[i][1]);
        if (returnType(board[case5_3[i][0]][case5_3[i][1]]) == "vertical")
          vertical(case5_3[i][0], case5_3[i][1]);
        if (returnType(board[case5_3[i][0]][case5_3[i][1]]) == "packet")
          packet(case5_3[i][0], case5_3[i][1]);
        board[case5_3[i][0]][case5_3[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour13[0] + "_packet";
      break;
    case 15:
      const colour14 = board[x][y].split("_");
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_4[i][0]][case5_4[i][1]]) == "horizontal")
          horizontal(case5_4[i][0], case5_4[i][1]);
        if (returnType(board[case5_4[i][0]][case5_4[i][1]]) == "vertical")
          vertical(case5_4[i][0], case5_4[i][1]);
        if (returnType(board[case5_4[i][0]][case5_4[i][1]]) == "packet")
          packet(case5_4[i][0], case5_4[i][1]);
        board[case5_4[i][0]][case5_4[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour14[0] + "_packet";
      break;
    case 16:
      const colour15 = board[x][y].split("_");
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_5[i][0]][case5_5[i][1]]) == "horizontal")
          horizontal(case5_5[i][0], case5_5[i][1]);
        if (returnType(board[case5_5[i][0]][case5_5[i][1]]) == "vertical")
          vertical(case5_5[i][0], case5_5[i][1]);
        if (returnType(board[case5_5[i][0]][case5_5[i][1]]) == "packet")
          packet(case5_5[i][0], case5_5[i][1]);
        board[case5_5[i][0]][case5_5[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour15[0] + "_packet";
      break;
    case 17:
      const colour16 = board[x][y].split("_");
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_6[i][0]][case5_6[i][1]]) == "horizontal")
          horizontal(case5_6[i][0], case5_6[i][1]);
        if (returnType(board[case5_6[i][0]][case5_6[i][1]]) == "vertical")
          vertical(case5_6[i][0], case5_6[i][1]);
        if (returnType(board[case5_6[i][0]][case5_6[i][1]]) == "packet")
          packet(case5_6[i][0], case5_6[i][1]);
        board[case5_6[i][0]][case5_6[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour16[0] + "_packet";
      break;
    case 18:
      const colour17 = board[x][y].split("_");
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_7[i][0]][case5_7[i][1]]) == "horizontal")
          horizontal(case5_7[i][0], case5_7[i][1]);
        if (returnType(board[case5_7[i][0]][case5_7[i][1]]) == "vertical")
          vertical(case5_7[i][0], case5_7[i][1]);
        if (returnType(board[case5_7[i][0]][case5_7[i][1]]) == "packet")
          packet(case5_7[i][0], case5_7[i][1]);
        board[case5_7[i][0]][case5_7[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = colour17[0] + "_packet";
      break;
    case 19:
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_8[i][0]][case5_8[i][1]]) == "horizontal")
          horizontal(case5_8[i][0], case5_8[i][1]);
        if (returnType(board[case5_8[i][0]][case5_8[i][1]]) == "vertical")
          vertical(case5_8[i][0], case5_8[i][1]);
        if (returnType(board[case5_8[i][0]][case5_8[i][1]]) == "packet")
          packet(case5_8[i][0], case5_8[i][1]);
        board[case5_8[i][0]][case5_8[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = "colour_bomb";
      break;
    case 20:
      for (var i = 0; i < 5; i++) {
        if (returnType(board[case5_9[i][0]][case5_9[i][1]]) == "horizontal")
          horizontal(case5_9[i][0], case5_9[i][1]);
        if (returnType(board[case5_9[i][0]][case5_9[i][1]]) == "vertical")
          vertical(case5_9[i][0], case5_9[i][1]);
        if (returnType(board[case5_9[i][0]][case5_9[i][1]]) == "packet")
          packet(case5_9[i][0], case5_9[i][1]);
        board[case5_9[i][0]][case5_9[i][1]] = "0";
        score = score + 10;
      }
      board[x][y] = "colour_bomb";
      break;
  }
  for (var i = 0; i < 10; i++)
    for (var j = 0; j < 10; j++)
      if (bufferBoard[i][j] == 0 && returnType(board[i][j]) == "normal")
        board[i][j] = bufferBoard[i][j];
  render();
  levelGen();
  if (physics_true == 1)
    setTimeout(physics, 750);
}

function randomGen() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      let x = Math.floor(Math.random() * 7);
      switch (x) {
        case 0:
          board[i][j] = "blue_normal";
          break;
        case 1:
          board[i][j] = "orange_normal";
          break;
        case 2:
          board[i][j] = "purple_normal";
          break;
        case 3:
          board[i][j] = "red_normal";
          break;
        case 4:
          board[i][j] = "yellow_normal";
          break;
        case 5:
          board[i][j] = "sky_normal";
          break;
        case 6:
          board[i][j] = "green_normal";
          break;
      }
      if (board[Math.abs(i - 1)][j] == board[i][j] && board[Math.abs(i - 2)][j] == board[i][j] && i != 1) {
        board[i][j] = 0;
        j--;
      }
      if (board[i][Math.abs(j - 1)] == board[i][j] && board[i][Math.abs(j - 1)] == board[i][j] && j != 1) {
        board[i][j] = 0;
        j--;
      }
    }
  }
  for (var i = 0; i < 10; i++)
    for (var j = 0; j < 10; j++)
      bufferBoard[i][j] = board[i][j];
  render();
  levelGen();
}

function render() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (board[i][j] == "0") {
        document.getElementById(i + "-" + j).innerHTML = "";
      } else {
        document.getElementById(i + "-" + j).innerHTML = '<image src="assets/' + board[i][j] + '.png" class="cell-contents">';
      }
    }
  }
  document.getElementById("score").innerHTML = score + "/" + requiredScore;
}

function returnColour(cells) {
  const colour = cells.split("_");
  return colour[0];
}

function moveCheck(x, y) {
  x = parseInt(x);
  y = parseInt(y);
  const case5_0 = [[x - 2, y], [x - 1, y], [x, y], [x, y - 1], [x, y - 2]];
  const case5_1 = [[x - 2, y], [x - 1, y], [x, y], [x, y + 1], [x, y + 2]];
  const case5_2 = [[x + 2, y], [x + 1, y], [x, y], [x, y - 1], [x, y - 2]];
  const case5_3 = [[x + 2, y], [x + 1, y], [x, y], [x, y + 1], [x, y + 2]];
  const case5_4 = [[x - 1, y], [x + 1, y], [x, y], [x, y - 1], [x, y - 2]];
  const case5_5 = [[x - 2, y], [x + 1, y], [x, y], [x, y + 1], [x, y + 2]];
  const case5_6 = [[x + 2, y], [x + 1, y], [x, y], [x, y - 1], [x, y + 1]];
  const case5_7 = [[x - 2, y], [x - 1, y], [x, y], [x, y - 1], [x, y + 1]];
  const case5_8 = [[x + 2, y], [x + 1, y], [x, y], [x - 1, y], [x - 2, y]];
  const case5_9 = [[x, y - 2], [x, y - 1], [x, y], [x, y + 1], [x, y + 2]];
  const case4_0 = [[x - 1, y], [x, y], [x + 1, y], [x + 2, y]];
  const case4_1 = [[x - 2, y], [x - 1, y], [x, y], [x + 1, y]];
  const case4_2 = [[x, y - 1], [x, y], [x, y + 1], [x, y + 2]];
  const case4_3 = [[x, y - 2], [x, y - 1], [x, y], [x, y + 1]];
  const case3_0 = [[x - 2, y], [x - 1, y], [x, y]];
  const case3_1 = [[x - 1, y], [x, y], [x + 1, y]];
  const case3_2 = [[x, y], [x + 1, y], [x + 2, y]];
  const case3_3 = [[x, y - 2], [x, y - 1], [x, y]];
  const case3_4 = [[x, y - 1], [x, y], [x, y + 1]];
  const case3_5 = [[x, y], [x, y + 1], [x, y + 2]];
  var invalid5_0 = false;
  var invalid5_1 = false;
  var invalid5_2 = false;
  var invalid5_3 = false;
  var invalid5_4 = false;
  var invalid5_5 = false;
  var invalid5_6 = false;
  var invalid5_7 = false;
  var invalid5_8 = false;
  var invalid5_9 = false;
  var invalid4_0 = false;
  var invalid4_1 = false;
  var invalid4_2 = false;
  var invalid4_3 = false;
  var invalid3_0 = false;
  var invalid3_1 = false;
  var invalid3_2 = false;
  var invalid3_3 = false;
  var invalid3_4 = false;
  var invalid3_5 = false;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 2; j++) {
      if (case5_0[i][j] < 0 || case5_0[i][j] > 9)
        invalid5_0 = true;
      if (case5_1[i][j] < 0 || case5_1[i][j] > 9)
        invalid5_1 = true;
      if (case5_2[i][j] < 0 || case5_2[i][j] > 9)
        invalid5_2 = true;
      if (case5_3[i][j] < 0 || case5_3[i][j] > 9)
        invalid5_3 = true;
      if (case5_4[i][j] < 0 || case5_4[i][j] > 9)
        invalid5_4 = true;
      if (case5_5[i][j] < 0 || case5_5[i][j] > 9)
        invalid5_5 = true;
      if (case5_6[i][j] < 0 || case5_6[i][j] > 9)
        invalid5_6 = true;
      if (case5_7[i][j] < 0 || case5_7[i][j] > 9)
        invalid5_7 = true;
      if (case5_8[i][j] < 0 || case5_8[i][j] > 9)
        invalid5_8 = true;
      if (case5_9[i][j] < 0 || case5_9[i][j] > 9)
        invalid5_9 = true;
    }
  }
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 2; j++) {
      if (case4_0[i][j] < 0 || case4_0[i][j] > 9)
        invalid4_0 = true;
      if (case4_1[i][j] < 0 || case4_1[i][j] > 9)
        invalid4_1 = true;
      if (case4_2[i][j] < 0 || case4_2[i][j] > 9)
        invalid4_2 = true;
      if (case4_3[i][j] < 0 || case4_3[i][j] > 9)
        invalid4_3 = true;
    }
  }
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
      if (case3_0[i][j] < 0 || case3_0[i][j] > 9)
        invalid3_0 = true;
      if (case3_1[i][j] < 0 || case3_1[i][j] > 9)
        invalid3_1 = true;
      if (case3_2[i][j] < 0 || case3_2[i][j] > 9)
        invalid3_2 = true;
      if (case3_3[i][j] < 0 || case3_3[i][j] > 9)
        invalid3_3 = true;
      if (case3_4[i][j] < 0 || case3_4[i][j] > 9)
        invalid3_4 = true;
      if (case3_5[i][j] < 0 || case3_5[i][j] > 9)
        invalid3_5 = true;
    }
  }
  var occured_case;

  if (invalid5_8 == false && returnColour(board[case5_8[0][0]][case5_8[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_8[1][0]][case5_8[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_8[2][0]][case5_8[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_8[3][0]][case5_8[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_8[4][0]][case5_8[4][1]]) == returnColour(board[x][y])) {
    occured_case = 19;
  } else if (invalid5_9 == false && returnColour(board[case5_9[0][0]][case5_9[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_9[1][0]][case5_9[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_9[2][0]][case5_9[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_9[3][0]][case5_9[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_9[4][0]][case5_9[4][1]]) == returnColour(board[x][y])) {
    occured_case = 20;
  } else if (invalid5_1 == false && returnColour(board[case5_1[0][0]][case5_1[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_1[1][0]][case5_1[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_1[2][0]][case5_1[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_1[3][0]][case5_1[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_1[4][0]][case5_1[4][1]]) == returnColour(board[x][y])) {
    occured_case = 12;
  } else if (invalid5_2 == false && returnColour(board[case5_2[0][0]][case5_2[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_2[1][0]][case5_2[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_2[2][0]][case5_2[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_2[3][0]][case5_2[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_2[4][0]][case5_2[4][1]]) == returnColour(board[x][y])) {
    occured_case = 13;
  } else if (invalid5_3 == false && returnColour(board[case5_3[0][0]][case5_3[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_3[1][0]][case5_3[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_3[2][0]][case5_3[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_3[3][0]][case5_3[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_3[4][0]][case5_3[4][1]]) == returnColour(board[x][y])) {
    occured_case = 14;
  } else if (invalid5_4 == false && returnColour(board[case5_4[0][0]][case5_4[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_4[1][0]][case5_4[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_4[2][0]][case5_4[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_4[3][0]][case5_4[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_4[4][0]][case5_4[4][1]]) == returnColour(board[x][y])) {
    occured_case = 15;
  } else if (invalid5_5 == false && returnColour(board[case5_5[0][0]][case5_5[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_5[1][0]][case5_5[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_5[2][0]][case5_5[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_5[3][0]][case5_5[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_5[4][0]][case5_5[4][1]]) == returnColour(board[x][y])) {
    occured_case = 16;
  } else if (invalid5_6 == false && returnColour(board[case5_6[0][0]][case5_6[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_6[1][0]][case5_6[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_6[2][0]][case5_6[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_6[3][0]][case5_6[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_6[4][0]][case5_6[4][1]]) == returnColour(board[x][y])) {
    occured_case = 17;
  } else if (invalid5_7 == false && returnColour(board[case5_7[0][0]][case5_7[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_7[1][0]][case5_7[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_7[2][0]][case5_7[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_7[3][0]][case5_7[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_7[4][0]][case5_7[4][1]]) == returnColour(board[x][y])) {
    occured_case = 18;
  } else if (invalid4_0 == false && returnColour(board[case4_0[0][0]][case4_0[0][1]]) == returnColour(board[x][y]) && returnColour(board[case4_0[1][0]][case4_0[1][1]]) == returnColour(board[x][y]) && returnColour(board[case4_0[2][0]][case4_0[2][1]]) == returnColour(board[x][y]) && returnColour(board[case4_0[3][0]][case4_0[3][1]]) == returnColour(board[x][y])) {
    occured_case = 1;
  } else if (invalid4_1 == false && returnColour(board[case4_1[0][0]][case4_1[0][1]]) == returnColour(board[x][y]) && returnColour(board[case4_1[1][0]][case4_1[1][1]]) == returnColour(board[x][y]) && returnColour(board[case4_1[2][0]][case4_1[2][1]]) == returnColour(board[x][y]) && returnColour(board[case4_1[3][0]][case4_1[3][1]]) == returnColour(board[x][y])) {
    occured_case = 2;
  } else if (invalid4_2 == false && returnColour(board[case4_2[0][0]][case4_2[0][1]]) == returnColour(board[x][y]) && returnColour(board[case4_2[1][0]][case4_2[1][1]]) == returnColour(board[x][y]) && returnColour(board[case4_2[2][0]][case4_2[2][1]]) == returnColour(board[x][y]) && returnColour(board[case4_2[3][0]][case4_2[3][1]]) == returnColour(board[x][y])) {
    occured_case = 3;
  } else if (invalid4_3 == false && returnColour(board[case4_3[0][0]][case4_3[0][1]]) == returnColour(board[x][y]) && returnColour(board[case4_3[1][0]][case4_3[1][1]]) == returnColour(board[x][y]) && returnColour(board[case4_3[2][0]][case4_3[2][1]]) == returnColour(board[x][y]) && returnColour(board[case4_3[3][0]][case4_3[3][1]]) == returnColour(board[x][y])) {
    occured_case = 4;
  } else if (invalid5_0 == false && returnColour(board[case5_0[0][0]][case5_0[0][1]]) == returnColour(board[x][y]) && returnColour(board[case5_0[1][0]][case5_0[1][1]]) == returnColour(board[x][y]) && returnColour(board[case5_0[2][0]][case5_0[2][1]]) == returnColour(board[x][y]) && returnColour(board[case5_0[3][0]][case5_0[3][1]]) == returnColour(board[x][y]) && returnColour(board[case5_0[4][0]][case5_0[4][1]]) == returnColour(board[x][y])) {
    occured_case = 11;
  } else if (invalid3_0 == false && returnColour(board[case3_0[0][0]][case3_0[0][1]]) == returnColour(board[x][y]) && returnColour(board[case3_0[1][0]][case3_0[1][1]]) == returnColour(board[x][y]) && returnColour(board[case3_0[2][0]][case3_0[2][1]]) == returnColour(board[x][y])) {
    occured_case = 5;
  } else if (invalid3_1 == false && returnColour(board[case3_1[0][0]][case3_1[0][1]]) == returnColour(board[x][y]) && returnColour(board[case3_1[1][0]][case3_1[1][1]]) == returnColour(board[x][y]) && returnColour(board[case3_1[2][0]][case3_1[2][1]]) == returnColour(board[x][y])) {
    occured_case = 6;
  } else if (invalid3_2 == false && returnColour(board[case3_2[0][0]][case3_2[0][1]]) == returnColour(board[x][y]) && returnColour(board[case3_2[1][0]][case3_2[1][1]]) == returnColour(board[x][y]) && returnColour(board[case3_2[2][0]][case3_2[2][1]]) == returnColour(board[x][y])) {
    occured_case = 7;
  } else if (invalid3_3 == false && returnColour(board[case3_3[0][0]][case3_3[0][1]]) == returnColour(board[x][y]) && returnColour(board[case3_3[1][0]][case3_3[1][1]]) == returnColour(board[x][y]) && returnColour(board[case3_3[2][0]][case3_3[2][1]]) == returnColour(board[x][y])) {
    occured_case = 8;
  } else if (invalid3_4 == false && returnColour(board[case3_4[0][0]][case3_4[0][1]]) == returnColour(board[x][y]) && returnColour(board[case3_4[1][0]][case3_4[1][1]]) == returnColour(board[x][y]) && returnColour(board[case3_4[2][0]][case3_4[2][1]]) == returnColour(board[x][y])) {
    occured_case = 9;
  } else if (invalid3_5 == false && returnColour(board[case3_5[0][0]][case3_5[0][1]]) == returnColour(board[x][y]) && returnColour(board[case3_5[1][0]][case3_5[1][1]]) == returnColour(board[x][y]) && returnColour(board[case3_5[2][0]][case3_5[2][1]]) == returnColour(board[x][y])) {
    occured_case = 10;
  } else {
    occured_case = 0;
  }
  return occured_case;
}

function physics() {
  for (var h = 0; h < 10; h++) {
    for (var i = 0; i < 10; i++) {
      for (var j = 9; j >= 0; j--) {
        if (j == 0 && board[j][i] == 0) {
          let x = Math.floor(Math.random() * 7);
          switch (x) {
            case 0:
              board[j][i] = "blue_normal";
              break;
            case 1:
              board[j][i] = "orange_normal";
              break;
            case 2:
              board[j][i] = "purple_normal";
              break;
            case 3:
              board[j][i] = "red_normal";
              break;
            case 4:
              board[j][i] = "yellow_normal";
              break;
            case 5:
              board[j][i] = "sky_normal";
              break;
            case 6:
              board[j][i] = "green_normal";
              break;
          }
        } else if (board[j][i] == 0) {
          board[j][i] = board[j - 1][i];
          board[j - 1][i] = 0;
        }
      }
    }
  }
  for (var i = 0; i < 10; i++)
    for (var j = 0; j < 10; j++)
      bufferBoard[i][j] = board[i][j];
  render();
  setTimeout(checkFull, 750);
}

function checkFull() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (board[i][j] != 0) {
        let moveCase = moveCheck(i, j);
        if (moveCase == 7) {
          let moveCase = moveCheck(i + 2, j);
          action(i + 2, j, moveCase, 1);
        } else if (moveCase == 10) {
          let moveCase = moveCheck(i, j + 2);
          action(i, j + 2, moveCase, 1);
        }
      }
    }
  }
}

function clickEvent() {
  var speicalCase = 0;
  var rowStart = clickStart.slice(0,1);
  var columnStart = clickStart.slice(2,3);
  var rowStop = clickStop.slice(0,1);
  var columnStop = clickStop.slice(2,3);
  move(rowStart, columnStart, rowStop, columnStop);
  moveCount();
  levelGen();
  if (returnType(board[rowStop][columnStop]) == "packet" && returnType(board[rowStart][columnStart]) == "horizontal") {
    speicalCase = 1;
    board[rowStop][columnStop] = "0";
    board[rowStart][columnStart] = "0";
    horizontal(parseInt(rowStop), parseInt(columnStop));
    if (parseInt(rowStop) + 1 < 10)
      horizontal(parseInt(rowStop) + 1, parseInt(columnStop));
    if (parseInt(rowStop) - 1 > -1)
      horizontal(parseInt(rowStop) - 1, parseInt(columnStop));
    for (var i = 0; i < 10; i++)
      for (var j = 0; j < 10; j++)
        if (bufferBoard[i][j] == 0 && returnType(board[i][j]) == "normal")
          board[i][j] = bufferBoard[i][j];
    render();
  } else if (returnType(board[rowStop][columnStop]) == "horizontal" && returnType(board[rowStart][columnStart]) == "packet") {
    speicalCase = 1;
    board[rowStop][columnStop] = "0";
    board[rowStart][columnStart] = "0";
    horizontal(parseInt(rowStart), parseInt(columnStart));
    if (parseInt(rowStart) + 1 < 10)
      horizontal(parseInt(rowStart) + 1, parseInt(columnStart));
    if (parseInt(rowStart) - 1 > -1)
      horizontal(parseInt(rowStart) - 1, parseInt(columnStart));
    for (var i = 0; i < 10; i++)
      for (var j = 0; j < 10; j++)
        if (bufferBoard[i][j] == 0 && returnType(board[i][j]) == "normal")
          board[i][j] = bufferBoard[i][j];
    render();
  } else if (returnType(board[rowStop][columnStop]) == "packet" && returnType(board[rowStart][columnStart]) == "vertical") {
    speicalCase = 1;
    board[rowStop][columnStop] = "0";
    board[rowStart][columnStart] = "0";
    vertical(parseInt(rowStop), parseInt(columnStop));
    if (parseInt(columnStop) + 1 < 10)
      vertical(parseInt(rowStop), parseInt(columnStop) + 1);
    if (parseInt(columnStop) - 1 > -1)
      vertical(parseInt(rowStop), parseInt(columnStop) - 1);
    for (var i = 0; i < 10; i++)
      for (var j = 0; j < 10; j++)
        if (bufferBoard[i][j] == 0 && returnType(board[i][j]) == "normal")
          board[i][j] = bufferBoard[i][j];
    render();
  } else if (returnType(board[rowStop][columnStop]) == "vertical" && returnType(board[rowStart][columnStart]) == "packet") {
    speicalCase = 1;
    board[rowStop][columnStop] = "0";
    board[rowStart][columnStart] = "0";
    vertical(parseInt(rowStart), parseInt(columnStart));
    if (parseInt(columnStart) + 1 < 10)
      vertical(parseInt(rowStart), parseInt(columnStart) + 1);
    if (parseInt(columnStart) - 1 > -1)
      vertical(parseInt(rowStart), parseInt(columnStart) - 1);
    for (var i = 0; i < 10; i++)
      for (var j = 0; j < 10; j++)
        if (bufferBoard[i][j] == 0 && returnType(board[i][j]) == "normal")
          board[i][j] = bufferBoard[i][j];
    render();
  } else if (board[rowStop][columnStop] == "colour_bomb") {
    speicalCase = 1;
    colourBomb(returnColour(board[rowStart][columnStart]), rowStop, columnStop, returnType(board[rowStart][columnStart]));
  } else if (board[rowStart][columnStart] == "colour_bomb") {
    speicalCase = 1;
    colourBomb(returnColour(board[rowStop][columnStop]), rowStart, columnStart, returnType(board[rowStop][columnStop]));
  }
  if (speicalCase == 0) {
    let caseStart = moveCheck(rowStart, columnStart);
    let caseStop = moveCheck(rowStop, columnStop);
    if (caseStart != 0)
      action(parseInt(rowStart), parseInt(columnStart), caseStart, 0);
    if (caseStop != 0)
      action(parseInt(rowStop), parseInt(columnStop), caseStop, 0);
    if (speicalCase == 0 && caseStart == 0 && caseStop == 0) {
      setTimeout(function() {move(rowStop, columnStop, rowStart, columnStart);}, 300);
    }
  }
  levelGen();
  setTimeout(physics, 750);
}

function moveCount() {
  count++;
}

var iDoNothing = 0;

function levelGen() {
  if (totalMoves == 0 || score >= requiredScore) {
    if (iDoNothing == 1)
      alert("level complete");
    count = 0;
    score = 0;
    iDoNothing = 1;
    level++;
    totalMoves = Math.round((((Math.random() + 2) * (Math.random() + 1) * level) + level) * 4);
    requiredScore = (totalMoves * 10) + Math.round((Math.random()) * 100);
    requiredScore = requiredScore - (requiredScore % 10);
    document.getElementById("pogress-record").innerHTML = "Moves Left: " + totalMoves;
    document.getElementById("level").innerHTML = level;
    render();
  } else {
    pogressBar(totalMoves - count, totalMoves);
  }
}

function pogressBar(x, y) {
  var width = x / y * 100;
  document.getElementById("pogress").style.width = width + "%";
  document.getElementById("pogress-record").innerHTML = "Moves Left: " + x;
}
