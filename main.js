const solveNQueens = function (n) {
  const chessBoard = new Array(n);
  for (let i = 0; i < n; i++) {
    chessBoard[i] = new Array(n).fill(".");
  }

  const result = [];

  const isValidQueen = function (row, col) {
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
      if (chessBoard[i][j] === "Q") return false;
    }
    return true;
  };

  const backtrack = function (row) {
    if (row === n) {
      result.push([...chessBoard].map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValidQueen(row, col)) {
        chessBoard[row][col] = "Q";
        backtrack(row + 1);
        chessBoard[row][col] = ".";
      }
    }
  };
  
  const printResult = ()=> {
    let str = '' 
    result.forEach((solution, index) => {
        str = str.concat(`${index > 0 ? "\n" : ''}// Solution ${index + 1} \n`)
        str = str.concat(solution.join("\n").concat("\n"));
    })
    return str
  }

  backtrack(0);
  return printResult(result);
};

console.log(solveNQueens(8))