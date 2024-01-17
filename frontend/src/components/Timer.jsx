import React, { useEffect, useState } from 'react'

const Timer = ({ checkAnswers, seconds }) => {
    const [countdown, setCountdown] = useState(300);

    function timeFormatter(time) {
        //85sec 1min 25sec
        let minutes = Math.floor(time / 60)
        let seconds = time - (minutes * 60)

        if (seconds < 10) seconds = '0' + seconds;
        if (minutes < 10) minutes = '0' + minutes;

        return minutes + ':' + seconds
    }

    useEffect(() => {
        const countDownInterval = setInterval(testInt, 1000)
        function testInt() {
            if (countdown <= 0) {
                clearInterval(countDownInterval);
                console.log('...')
                checkAnswers();
            } else {
                setCountdown(prev => prev - 1)
            }
        }
        return () => { clearInterval(countDownInterval) }
    }, [countdown])

    return (
        <div className='font-bold text-[20px]'>Timer:<span style={{ color: 'red', marginLeft: '3px' }}>{timeFormatter(countdown)}</span></div>
    )
}

export default Timer