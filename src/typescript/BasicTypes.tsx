export const BasicTypes = () => {

    const name: string = 'Carmelo';
    const age: number = 35;
    const isDeveloper: boolean = true;

    const powers: string[] = [ 'React', '.NET', 'SQL Server' ];

    return (
        <>
            <h2>Basic Types</h2>
            {name} - {age} - {isDeveloper ? 'Si' : 'No'}
            <br />
            {powers.join(', ')}
        </>
    )
}
