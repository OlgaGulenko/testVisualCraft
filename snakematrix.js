var matrix = [];
var rows = 4, cols = 6;
var m = 1;
// var left = 1;
var isLeft = true;

for(var i=0; i<rows; i++ ){
    var line = [];
    for( var b=0; b<cols; b++ ){
        isLeft ? line.push(m++) : line.unshift(m++);
    }
    matrix[i] = line;
    isLeft = !isLeft;
}

var s = '<div class="matrix"><table width="600px" height="300px">';
for( var i=0;i<matrix.length;i++ ){
    s+= "<tr>";
    for( var b=0;b<matrix[i].length;b++ )
        s+= "<td>"+matrix[i][b]+"</td>";
    s+="</tr>"
}
s+="</table></div>";
document.body.innerHTML = s;

//=================================================
// var matrix = [];
// var rows = 4, cols = 6;
// var m = 1;
// var left = 1;
//
// for(var i=0,curr; i<rows; i++ ){
//     curr = matrix[i] = [];
//
//     for( var b=0; b<cols; b++ ){
//         curr[ left ? "push":"unshift" ]( m++ );
//     }
//     left = left == false;
// }
//
// var s = '<div class="matrix"><table width="600px" height="300px">';
// for( var i=0;i<matrix.length;i++ ){
//     s+= "<tr>";
//     for( var b=0;b<matrix[i].length;b++ )
//         s+= "<td>"+matrix[i][b]+"</td>";
//     s+="</tr>"
// }
// s+="</table></div>";
// document.body.innerHTML = s;
