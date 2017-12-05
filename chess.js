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
    let fromLet = columns.indexOf(from[0])
    let fromNum = parseInt(from[1])
    let toLet = columns.indexOf(to[0])
    let toNum = parseInt(to[1])
    let columnSteps = fromLet - toLet
    let rowSteps = fromNum - toNum
    let steps = Math.abs(columnSteps) < Math.abs(rowSteps) ? Math.abs(rowSteps) : Math.abs(columnSteps)
  setTimeout(function() {

    let startPosLeft = fromLet * 40
    let startPosTop = (8 - fromNum) * 40
    let endPosLeft = toLet * 40
    let endPosTop = (8 - toNum) * 40

    let toEl = document.getElementById(to)
    let fromEl = document.getElementById(from)
    let pieceType = fromEl.className
    fromEl.className = ''

    chessPiece.classList = pieceType
    chessPiece.style.top = startPosTop + 'px'
    chessPiece.style.left = startPosLeft + 'px'

    for (let step = 0; step < steps; step++) {
        setTimeout( () => {
            let stepX = 0
            let stepY = 0
            if (rowSteps < 0) {
                stepY = -40
                rowSteps += 1
            } else if(rowSteps > 0) {
                stepY = 40
                rowSteps -= 1
            }
            if (columnSteps < 0) {
                stepX = 40
                columnSteps += 1
            } else if (columnSteps > 0) {
                stepX = -40
                columnSteps -= 1
            }
            chessPiece.animate([
                {transform: 'scale(1) translate(0)'},
                {transform: 'scale(1.1, 1.1) translate(' + stepX + 'px, ' + stepY + 'px)'},
                {transform: 'scale(1) translate(' + stepX + 'px, ' + stepY + 'px)'}
            ], 1000)
            setTimeout( () => {
                startPosLeft += stepX
                startPosTop += stepY
                chessPiece.style.top = startPosTop + 'px'
                chessPiece.style.left = startPosLeft + 'px'
            }, 1010)
        }, 1000 * step)
    }

    setTimeout( () => {
        chessPiece.className = ''
        toEl.className = pieceType
    }, 1000 * steps)
  }, time)
  time += 1500 * steps
}

var click = 0
var startPosition
var endPosition

document.getElementById('vakje').onclick = e => {
    if (!startPosition) {
        startPosition = e.target.className != '' ? e.target.id : undefined
    } else {
        makeYourMove(startPosition, e.target.id)
        startPosition = undefined
        time = 0
    }
}

// game begins here
// makeYourMove('E2', 'E4')
//
// makeYourMove('H7', 'H5')
//
// makeYourMove('D2', 'D4')
