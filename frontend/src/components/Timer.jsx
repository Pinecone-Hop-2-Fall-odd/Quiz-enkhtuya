import React, { useEffect, useState } from 'react'

const Timer = ({ seconds }) => {
    const [countdown, setCountdown] = useState(seconds);
    function timeFormatter(time) {
        //85sec 1min 25sec
        let minutes = Math.floor(time / 60) < 10 ? '0' + minutes : minutes;
        let seconds = time - (minutes * 60) < 10 ? '0' + seconds : seconds;
        return minutes + ':' + seconds
    }

    useEffect(() => {
        console.log(typeof countdown)
        const countDownInterval = setInterval(testInt, 1000)

        function testInt() {
            if (countdown <= 0) {
                clearInterval(countDownInterval);
                console.log('...')
            } else {
                setCountdown(prev => prev - 1)
            }
        }
        return () => { clearInterval(countDownInterval) }
    }, [countdown])
    return (
        <div>Timer: {timeFormatter(countdown)}</div>
    )
}

export default Timer

