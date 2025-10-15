import { useState } from 'react';

interface Options {
    initialValue?: number;
}

export const useCounter = ({ initialValue = 10 }: Options) => {
    const [ count, setCount ] = useState<number>(initialValue);

    const increaseBy = (value: number) => {
        const newValue = count + value;
        if (newValue < 0) return;
        setCount(prevCount => prevCount + value)
    };
    const reset = () => {
        setCount(0)
    };

    return {
        // Properties
        count,

        // Methods
        increaseBy,
        reset
    }

}
