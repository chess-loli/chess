'use strict'

const boardDisplay = document.getElementById('board')

const chessPiece = document.getElementById('chessPiece')

var time = 1000

var Board = {
  A: {1:'r',2:'p',3:' ',4:' ',5:' ',6:' ',7:'P',8:'R'},
  B: {1:'n',2:'p',3:' ',4:' ',5:' ',6:' ',7:'P',8:'N'},
  C: {1:'b',2:'p',3:' ',4:' ',5:' ',6:' ',7:'P',8:'B'},
  D: {1:'q',2:'p',3:' ',4:' ',5:' ',6:' ',7:'P',8:'Q'},
  E: {1:'k',2:'p',3:' ',4:' ',5:' ',6:' ',7:'P',8:'K'},
  F: {1:'b',2:'p',3:' ',4:' ',5:' ',6:' ',7:'P',8:'B'},
  G: {1:'n',2:'p',3:' ',4:' ',5:' ',6:' ',7:'P',8:'N'},
  H: {1:'r',2:'p',3:' ',4:' ',5:' ',6:' ',7:'P',8:'R'}
}

var columns = Object.keys(Board)

var displayField = function() {
  var playingField = ''
  for(var i = 0; i < 8; i++) {
    playingField += '<tr>'
    for(var j = 0; j < 8; j++) {
      playingField += '<td id="' + columns[j] + [8-i] + '" class="' + Board[columns[j]][8-i] + '"></td>'
    }
    playingField += '</tr>'
  }
  vakje.innerHTML = playingField
}

displayField()

function makeYourMove(from, to) {
  setTimeout(function() {
    let fromEl = document.getElementById(from)
    let pieceType = fromEl.className

    let fromLet = from[0]
    let fromNum = from[1]
    let goLet = to[0]
    let goNum = to[1]

    chessPiece.className = pieceType
    chessPiece.style.top = (8 - fromNum) * 40 + 'px'
    chessPiece.style.left = (columns.indexOf(fromLet)) * 40 + 'px'

//
// solve the problem with more then 1 block movement
// make it execute in order
// set sideways animation somehow
    if (fromNum > goNum) {
      chessPiece.classList.add('movePieceDown')
    } else if (fromNum < goNum) {
      chessPiece.classList.add('movePieceUp')
    }
    if (columns.indexOf(fromLet) > columns.indexOf(goLet)) {
      chessPiece.classList.add('movePieceLeft')
    } else if (columns.indexOf(fromLet) < columns.indexOf(goLet)) {
      chessPiece.classList.add('movePieceRight')
    }

    Board[goLet][goNum] = Board[fromLet][fromNum];
    Board[fromLet][fromNum] = ' ';
    displayField();

    setTimeout( () => {
      chessPiece.className = ''
    }, time-1000)

  }, time)
  time += 1000
}
console.log(chessPiece);
makeYourMove('A2', 'B3')
// makeYourMove('A3', 'A4')
// game begins here
// makeYourMove('E2', 'E4')
//
// makeYourMove('H7', 'H5')
//
// makeYourMove('D2', 'D4')
