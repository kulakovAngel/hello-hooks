import {
    useState,
    useEffect,
} from 'react';
import {User} from './User';

export const UsersList = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    return (
        !users.length ? ('No users') : (
            <ul>
                {users.map(user => (
                    <User key={user.id} id={user.id} name={user.name} />
                ))}
            </ul>
        )
    );
};