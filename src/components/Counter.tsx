import { useState } from 'react';

export const Counter = () => {

    const [ count, setCount ] = useState(10);

    const increaseBy = (value: number) => setCount(prevCount => prevCount + value);

    return (
        <>
            <h2>Counter: <small>{count}</small></h2>
            <div>
                <button onClick={() => increaseBy(1)}>+1</button>
                &nbsp;
                <button onClick={() => increaseBy(-1)}>-1</button>
            </div>
        </>
    )
}
