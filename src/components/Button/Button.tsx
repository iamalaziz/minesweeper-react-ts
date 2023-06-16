import React from 'react';
import { CellState, CellValue } from '../../types';

interface ButtonProps {
  col: number;
  row: number;
  state: CellState;
  value: CellValue;
}
const Button: React.FC<ButtonProps> = ({ row, col, state, value }) => {
  return (
    <div className={`Button ${state === CellState.visible ? 'visible' : ''}`}>
      {CellState.visible && value}
    </div>
  );
};

export default Button;
