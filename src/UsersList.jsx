import {
    useState,
    useEffect,
} from 'react';

import {User} from './User';
import {
    SORT_STATES_,
    sortStatesValidator,
} from './consts';

export const UsersList = ({sortBy}) => {
    const [users, setUsers] = useState([]);
    const [favourites, setFavourites] = useState({});

    const handler = () => {
        switch (sortBy) {
            case SORT_STATES_.INCREASE:
                setUsers(prevUsers => {
                    const newUsers = [...prevUsers];
                    newUsers.sort(
                        (a, b) => a.name.localeCompare(b.name)
                    );
                    return newUsers;
                });
                break;
            case SORT_STATES_.DECREASE:
                setUsers(prevUsers => {
                    const newUsers = [...prevUsers];
                    newUsers.sort(
                        (a, b) => b.name.localeCompare(a.name)
                    );
                    return newUsers;
                });
                break;
            case SORT_STATES_.DEFAULT:
            default:
                break;
        }
    };
    useEffect(handler, [sortBy]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    const addToFavourites = id => {
        setFavourites({
            ...favourites,
            [id]: true,
        });
    };

    return (
        !users.length ? ('No users') : (
            <ul>
                {users.map(user => (
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        addToFavourites={addToFavourites}
                        isFavourite={!!favourites[user.id]}
                    />
                ))}
            </ul>
        )
    );
};

UsersList.propTypes = {
    sortBy: sortStatesValidator,
};

UsersList.defaultProps = {
    sortBy: SORT_STATES_.DEFAULT,
};