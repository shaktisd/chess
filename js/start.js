
function initGame() {
//alert('Inside initGame');
//--- start example JS ---
var board,
  game = new Chess();
  //var loadStatus = game.load('k6r/8/8/8/8/8/8/K3R3');
  //console.log(loadStatus + " FEN Loaded \n" + game.ascii());

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

var onDragStart = function(source, piece) {
  // do not pick up pieces if the game is over
  // or if it's not that side's turn
/*  if (game.game_over() === true ||
      (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false;
  }*/
};


var onDrop = function(source, target) {
  removeGreySquares();

  // see if the move is legal
  /*
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });
*/
  // illegal move
  //if (move === null) return 'snapback';
};

var onMouseoverSquare = function(square, piece) {
  // get list of possible moves for this square
  /*var moves = game.moves({
    square: square,
    verbose: true
  });*/
  var allMoves = listMoves(square,piece);
  console.log("All Moves " +  allMoves);

  //console.log(moves)

  // exit if there are no moves available for this square
  if (allMoves.length === 0) return;

  // highlight the square they moused over
  greySquare(square);

  // highlight the possible squares for this piece
  for (var i = 0; i < allMoves.length; i++) {
    greySquare(allMoves[i]);
  }
};

var onMouseoutSquare = function(square, piece) {
  removeGreySquares();
};

var onSnapEnd = function() {
  board.position(game.fen());
};


var cfg = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onMouseoutSquare: onMouseoutSquare,
  onMouseoverSquare: onMouseoverSquare,
  onSnapEnd: onSnapEnd
};
/*
var cfg =
{
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
};*/

board = ChessBoard('board', cfg);
//--- end example JS ---

}; // end init()
