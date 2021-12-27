import React, { useState } from 'react';

interface ITime {
    time: string
}

const Time: React.FunctionComponent = () => {

    const [time, setTime] = useState('');

    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

    return (
        <div>
        Current Time: {time}
        </div>
    )
}


export default Time;