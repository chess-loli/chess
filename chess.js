'use strict'

const boardDisplay = document.getElementById('board')

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

var displayField = function() {
  var playingField = ''
  for(var i = 0; i < 8; i++) {
    playingField += '<tr>'
    for(var j = 0; j < 8; j++) {
      playingField += '<td id="' + Board[Object.keys(Board)[j]][8-i] + '"></td>'
    }
    playingField += '</tr>'
  }
  vakje.innerHTML = playingField
}

displayField()

function makeYourMove(fromLet, fromNum, goLet, goNum) {
  setTimeout(function() {
    Board[goLet][goNum] = Board[fromLet][fromNum];
    Board[fromLet][fromNum] = ' ';
    displayField();
  }, time);
  time += 1000
};

makeYourMove('E', 2, 'E', 4)

makeYourMove('H', 7, 'H', 5)

makeYourMove('D', 2, 'D', 4)
