interface TSVGName {
    name: string
}
const SvgTemplate = ({ name }: TSVGName) => {
    switch (name) {
        case 'flag':
            return (
                <svg width='8' height='10' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='3.66257' width='0.915642' height='8.6986' fill='black' />
                    <rect y='7.32514' width='7.32514' height='1.83128' fill='#010000' />
                    <rect x='1.83129' y='6.4095' width='3.66257' height='0.915642' fill='#010000' />
                    <rect x='2.7469' width='1.83128' height='4.57821' fill='#FC0D1B' />
                    <rect x='0.915609' y='0.915642' width='1.83128' height='2.74693' fill='#FC0D1B' />
                    <rect y='1.83128' width='0.915642' height='0.915642' fill='#FC0D1B' />
                </svg>
            )
        case 'defused-bomb':
            return (
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='7.8938' y='3' width='0.815642' height='10.6034' fill='black' />
                    <rect x='13.6033' y='7.8938' width='0.815642' height='10.6034' transform='rotate(90 13.6033 7.8938)' fill='black' />
                    <rect x='6.26245' y='4.63135' width='4.07821' height='7.34078' fill='black' />
                    <rect x='11.9722' y='6.26245' width='4.07821' height='7.34078' transform='rotate(90 11.9722 6.26245)' fill='black' />
                    <rect x='5.44702' y='5.44702' width='5.7095' height='5.7095' fill='black' />
                    <rect x='11.1565' y='4.63135' width='0.815642' height='0.815642' fill='black' />
                    <rect x='11.1565' y='11.1565' width='0.815642' height='0.815642' fill='black' />
                    <rect x='4.63135' y='4.63135' width='0.815642' height='0.815642' fill='black' />
                    <rect x='4.63135' y='11.1565' width='0.815642' height='0.815642' fill='black' />
                    <rect x='6.26245' y='6.26245' width='1.63128' height='1.63128' fill='white' />
                    <g clip-path='url(#clip0_54_9086)'>
                        <rect width='0.923077' height='1' transform='translate(2.25 13.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(3.1731 13.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(3.1731 12.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(4.09619 12.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(4.09619 11.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(5.01929 11.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(5.01929 10.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(5.94238 10.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(5.94238 9.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(6.86548 9.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(6.86548 8.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(7.78857 8.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(8.71143 8.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(8.71143 9.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(9.63452 9.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(9.63452 10.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(10.5576 10.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(10.5576 11.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(11.4807 11.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(11.4807 12.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(12.4038 12.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(12.4038 13.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='translate(13.3269 13.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 14.25 3.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 13.3269 3.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 13.3269 4.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 12.4038 4.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 12.4038 5.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 11.4807 5.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 11.4807 6.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 10.5576 6.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 10.5576 7.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 9.63452 7.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 9.63452 8.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 8.71143 8.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 7.78857 8.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 7.78857 7.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 6.86548 7.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 6.86548 6.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 5.94238 6.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 5.94238 5.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 5.01929 5.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 5.01929 4.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 4.09619 4.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 4.09619 3.6001)' fill='#FC0D1B' />
                        <rect width='0.923077' height='1' transform='matrix(-1 0 0 -1 3.1731 3.6001)' fill='#FC0D1B' />
                    </g>
                    <defs>
                        <clipPath id='clip0_54_9086'>
                            <rect width='12' height='12' fill='white' transform='translate(2.25 2.6001)' />
                        </clipPath>
                    </defs>
                </svg>
            )
        case 'bomb':
            return (
                <svg className='bomb-icon' width='30' height='30' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='7.8938' y='3' width='0.815642' height='10.6034' fill='black' />
                    <rect x='13.6033' y='7.8938' width='0.815642' height='10.6034' transform='rotate(90 13.6033 7.8938)' fill='black' />
                    <rect x='6.26245' y='4.63135' width='4.07821' height='7.34078' fill='black' />
                    <rect x='11.9722' y='6.26245' width='4.07821' height='7.34078' transform='rotate(90 11.9722 6.26245)' fill='black' />
                    <rect x='5.44702' y='5.44702' width='5.7095' height='5.7095' fill='black' />
                    <rect x='11.1565' y='4.63135' width='0.815642' height='0.815642' fill='black' />
                    <rect x='11.1565' y='11.1565' width='0.815642' height='0.815642' fill='black' />
                    <rect x='4.63135' y='4.63135' width='0.815642' height='0.815642' fill='black' />
                    <rect x='4.63135' y='11.1565' width='0.815642' height='0.815642' fill='black' />
                    <rect x='6.26245' y='6.26245' width='1.63128' height='1.63128' fill='white' />
                </svg>
            )

        default:
            return <svg></svg>
    }
}

export default SvgTemplate
