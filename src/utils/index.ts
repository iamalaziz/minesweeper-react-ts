import { MAX_COLS, MAX_ROWS, NO_OF_BOMBS } from '../constants';
import { CellState, CellValue, Cell } from '../types';

export const generateCells = (): Cell[][] => {
  const cells: Cell[][] = [];

  // generate all Cells
  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({
        value: CellValue.none,
        state: CellState.open,
      });
    }
  }

  // randomly put 40 bombs
  let bombsPlaced = 0;
  while(bombsPlaced < NO_OF_BOMBS) {
    break;
  }


  return cells;
};
