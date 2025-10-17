import { useUsers } from '../hooks';
import { UsersRow } from './UserRox';

export const UsersPage = () => {

    const { users, nextPage, prevPage } = useUsers();

    return (
        <>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UsersRow key={user.id} user={user} />
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </>
    )

}