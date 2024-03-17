import React, { useState } from 'react'
import Timer from './Timer/Timer'
import Counter from './BombsCount/Counter'
import Smile from '../../assets/images/default_emoji-icon.svg'

const InfoBar: React.FC = () => {
    const [time, setTime] = useState<number>(0)
    return (
        <div className='info-bar'>
            <button className='info-bar__counter'>
                <Counter />
            </button>
            <div className='info-bar__status'>
                <img src={Smile} alt='Smile Face' />
            </div>
            <button className='info-bar__counter'>
                <Timer />
            </button>
        </div>
    )
}

export default InfoBar
