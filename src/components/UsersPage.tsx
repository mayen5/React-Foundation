import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import type { ReqUserListResponse, User } from '../interfaces'

const loadUsers = async (page: number = 1): Promise<User[]> => {

    try {
        const { data } = await axios.get<ReqUserListResponse>('https://reqres.in/api/users', {
            params: { page: page },
            headers: { "x-api-key": "reqres-free-v1" }
        });
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }


}

export const UsersPage = () => {

    const [ users, setUsers ] = useState<User[]>([]);

    const currentPageRef = useRef(1);


    useEffect(() => {
        loadUsers(currentPageRef.current)
            .then(users => setUsers(users));
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current <= 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current++;
        }
    }

    // fetch('https://reqres.in/api/users?page=2',
    //     {
    //         method: 'GET',
    //         headers: { "x-api-key": "reqres-free-v1" }
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }, [])

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

interface Props {
    user: User;
}

export const UsersRow = ({ user }: Props) => {

    const { id, first_name, last_name, email, avatar } = user;

    return (
        <tr key={id}>
            <td>{id}</td>
            <td><img alt={first_name} src={avatar} style={{ width: 35, borderRadius: 100 }} /></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )
}
