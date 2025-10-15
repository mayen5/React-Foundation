import { useCounter } from '../hooks';

export const CounterWithHook = () => {

    const counter = useCounter({ initialValue: 0 });
    const { count, increaseBy, reset } = counter;

    return (
        <>
            <h2>Counter with Hook: <small>{count}</small></h2>
            <div>
                <button onClick={() => increaseBy(1)}>+1</button>
                &nbsp;
                <button onClick={() => increaseBy(-1)}>-1</button>
                &nbsp;
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}
