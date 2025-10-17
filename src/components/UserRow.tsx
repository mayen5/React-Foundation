import type { User } from '../interfaces';

interface Props {
    user: User;
}

export const UsersRow = ({ user }: Props) => {

    const { id, first_name, last_name, email, avatar } = user;

    return (
        <tr>
            <td>{id}</td>
            <td><img alt={first_name} src={avatar} style={{ width: 35, borderRadius: 100 }} /></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )
}
