import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    seconds: 0
}
export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        startTimer: (state) => {
            const timer = setInterval(() => {
                state.seconds += 1
            }, 1000)
            return () => {
                clearInterval(timer)
            }
        }
    }
})

export const { startTimer } = timerSlice.actions
export default timerSlice.reducer
