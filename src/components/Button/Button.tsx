import React, { ReactNode } from 'react'
import { CellState, CellValue } from '../../types'
import SvgTemplate from '../SvgTemplate'

interface ButtonProps {
    col: number
    row: number
    state: CellState
    value: CellValue
}
const Button: React.FC<ButtonProps> = ({ row, col, state, value }) => {
    const renderContent = (): React.ReactNode => {
        if (state === CellState.visible) {
            if (value === CellValue.bomb) {
                return <SvgTemplate name='bomb' />
            } else if (value !== CellValue.none) {
                return value
            }
        } else if (state === CellState.flagged) {
            return <SvgTemplate name='flag' />
        }
    }
    return <div className={`Button ${state === CellState.visible ? 'visible' : ''} value-${value}`}>{renderContent()}</div>
}

export default Button
