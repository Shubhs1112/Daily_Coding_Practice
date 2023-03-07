// Given a matrix, if any of the cells in the matrix is 0, set all the elements in its row and column to 0.

const setZeros = (r,c, matrix) =>{
    for(let i=0; i<matrix.length; i++){
        matrix[i][c] = 0;
    }

    for(let i=0; i<matrix[0].length; i++){
        matrix[r][i] = 0;
    }
}
function rowColumnZero(matrix){
    const resultArr = [];
    for(let r=0; r<matrix.length; r++){
        for(let c=0; c<matrix[r].length; c++){
            if(matrix[r][c]===0){
                resultArr.push([r,c]);
            }
        }
    }
    for(let address of resultArr){
        let row = address[0];
        let col = address[1];
        setZeros(row,col,matrix);
    }
    console.table(matrix);
}

rowColumnZero([[1, 1, 1],
               [1, 0, 1],
               [1, 1, 1]]);

rowColumnZero([[1, 1, 0],
               [1, 1, 1],
               [0, 1, 1]]);