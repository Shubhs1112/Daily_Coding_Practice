// Not solved

// Given a matrix, rotate the matrix 90 degrees clockwise.


var matrix = [ [1,2,3],
               [4,5,6],
               [7,8,9]
             ]


function rotateMatrix(arr){
    let newMatrix = [];
    for(let row=matrix.length -1; row >= 0; row--){
        for(let column=0; column < matrix[row].length; column++){
            newMatrix.push(matrix[row][column]);
        }
    }
return newMatrix;
}


console.log(rotateMatrix(matrix));


// [7,4,1]
// [8,5,2]
// [9,6,3]
