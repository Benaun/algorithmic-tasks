const firstBoard = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const secondBoard = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const space = ".";

function isValidSudoku(board: string[][]): boolean {
  const rows = Array(9)
    .fill(0)
    .map(() => new Set());
  const cols = Array(9)
    .fill(0)
    .map(() => new Set());
  const boxes = Array(9)
    .fill(0)
    .map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      const indexOfBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (cell === space) continue;

      if (rows[i].has(cell) || cols[j].has(cell) || boxes[indexOfBox].has(cell))
        return false;

      rows[i].add(cell);
      cols[j].add(cell);
      boxes[indexOfBox].add(cell);
    }
  }
  return true;
}
// O(1) время, O(1) память

console.log(isValidSudoku(firstBoard)); // true
console.log(isValidSudoku(secondBoard)); // false
