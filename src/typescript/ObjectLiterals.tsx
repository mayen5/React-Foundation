interface Address {
    country: string;
    city: string;
    zip: string;
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean; // Optional property
}

export const ObjectLiterals = () => {

    const person: Person = {
        firstName: 'Carmelo',
        lastName: 'Mayén',
        age: 35,
        isAlive: true,
        address: {
            country: 'Guatemala',
            city: 'Guatemala',
            zip: '010101'
        }
    }

    return (
        <>
            <h2>Object Literals</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    )
}
