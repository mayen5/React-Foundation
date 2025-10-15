export const BasicFunctions = () => {

    const sum = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <h2>Basic Functions</h2>
            <span>The sum result is: {sum(5, 10)}</span>

        </>
    )
}
