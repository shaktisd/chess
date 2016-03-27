
function initGame() {
//alert('Inside initGame');
//--- start example JS ---
var board;

var removeGreySquares = function() {
  $('#board .square-55d63').css('background', '');
};

var greySquare = function(square) {
  var squareEl = $('#board .square-' + square);
  var background = '#a9a9a9';
  if (squareEl.hasClass('black-3c85d') === true) {
    background = '#696969';
  }
  squareEl.css('background', background);
};

var onDragStart = function(source, piece, position, orientation) {

};


var onDrop = function(source, target, piece, newPos, oldPos, orientation) {
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + ChessBoard.objToFen(newPos));
  console.log("Old position: " + ChessBoard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("--------------------");

  removeGreySquares();
  // get list of possible moves for this square
  var allMoves = listMoves(target,piece);
  //console.log("All Moves " +  allMoves);
  // exit if there are no moves available for this square
  if (typeof allMoves == 'undefined' || allMoves.length === 0) return;
  // highlight the square they moused over
  greySquare(target);
  // highlight the possible squares for this piece
  for (var i = 0; i < allMoves.length; i++) {
    greySquare(allMoves[i]);
  }


};


var onMouseoverSquare = function(square, piece) {
    removeGreySquares();
// get list of possible moves for this square
    var allMoves = listMoves(square,piece);
    //console.log("All Moves " +  allMoves);
    // exit if there are no moves available for this square
    if (typeof allMoves == 'undefined' || allMoves.length === 0) return;
    // highlight the square they moused over
    greySquare(square);
    // highlight the possible squares for this piece
    for (var i = 0; i < allMoves.length; i++) {
      greySquare(allMoves[i]);
    }
};

var onMouseoutSquare = function(square, piece) {
  //removeGreySquares();
};

var onSnapEnd = function() {
  //board.position(game.fen());
  //removeGreySquares();
};

/*
var cfg = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onMouseoutSquare: onMouseoutSquare,
  onMouseoverSquare: onMouseoverSquare,
  onSnapEnd: onSnapEnd
};*/

var cfg =
{
  draggable: true,
  onDragStart: onDragStart,
  onDrop: onDrop,
  onMouseoutSquare: onMouseoutSquare,
  onMouseoverSquare: onMouseoverSquare,
  dropOffBoard: 'trash',
  onSnapEnd: onSnapEnd,
  sparePieces: true
};

board = ChessBoard('board', cfg);
//--- end example JS ---

}; // end init()
