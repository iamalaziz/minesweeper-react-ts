import React, { useState } from 'react'
import { generateCells } from '../../utils'
import Button from '../Button/Button'

const Board: React.FC = () => {
    const [cells, setCells] = useState(generateCells())

    const renderCells = (): React.ReactNode => {
        return cells.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
                <Button row={rowIndex} col={colIndex} value={cell.value} state={cell.state} key={`${rowIndex}-${colIndex}`} />
            ))
        )
    }
    return <div className='board'>{renderCells()}</div>
}

export default Board
