import { useState } from 'react';

interface Options {
    initialValue?: number;
}

export const useCounter = ({ initialValue = 10 }: Options) => {
    const [ count, setCount ] = useState<number>(initialValue);

    const increaseBy = (value: number) => {
        setCount(prevCount => {
            const newValue = prevCount + value;
            if (newValue < 0) return prevCount;
            return newValue;
        });
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
