function listMoves(square, piece) {
var SIZE = 8;
console.log("move gen " + square + " " + piece);
if(!piece){
return }
var row = square.split("")[0].charCodeAt()-97;
var col = parseInt(square.split("")[1])-1;
var p = piece.split("")[1];
var result = [];
//ROOK
if(p.toUpperCase() === "R"  ||  p.toUpperCase() === "Q"){
for(var x = 0 ;x<SIZE ;x++){
    var y = col;
    result.push({x,y});
}
for(var y = 0 ;y<SIZE ;y++){
    var x = row ;
    result.push({x,y});
}
}
//BISHOP
if(p.toUpperCase() === "B" || p.toUpperCase() === "Q"){
for (var x = row, y = col; (x < SIZE && y < SIZE); x++, y++) {
    result.push({x,y});
}

for (var x = row, y = col; (x >= 0 && y < SIZE); x--, y++) {
    result.push({x,y});
}

for (var x = row, y = col; (x >= 0 && y >= 0); x--, y--) {
    result.push({x,y});
}

for (var x = row, y = col; (x < SIZE && y >= 0); x++, y--) {
    result.push({x,y});
}
}
//KNIGHT
if(p.toUpperCase() === "N"){
var x = row-1;
var y = col-2;
if( x >= 0 &&  y >= 0 ) {
    result.push({x,y});
}

x = row-2;
y = col-1;
if(x >= 0 && y >= 0){
    result.push({x,y});
}

 x = row-2;
 y = col+1;
if(x >= 0 && y < SIZE) {
    result.push({x,y});
}

x = row-1;
y = col+2;
if(x >= 0 && y < SIZE){
    result.push({x,y});
}

x = row+1;
y = col-2;

if(x < SIZE && y >= 0){
    result.push({x,y});
}

x = row+1;
y = col+2;

if(x < SIZE && y < SIZE){
    result.push({x,y});
}

x = row+2;
y = col-1;
if(x < SIZE && y >= 0){
    result.push({x,y});
}

x = row + 2;
y = col + 1;
if(x < SIZE && y < SIZE){
    result.push({x,y});
}
}
//KING
if(p.toUpperCase() === "K"){
for(var i=-1 ;i<=1 ;i++){
    for(var j=-1; j<=1 ; j++){
        if(!(row + i < 0 || row + i > SIZE-1 || col + j < 0 || col + j > SIZE-1 )){
            var x = row+i;
            var y = row+j;
            result.push({x,y});
        }
    }
}
}
console.log(result)

var newresult = [];
for(var r = 0 ; r < result.length; r++ ){
    var pos = String.fromCharCode(result[r].x + 97) + (result[r].y + 1);
    newresult.push(pos);
}

console.log("NEW RESULT ");
console.log(newresult);

return newresult

}