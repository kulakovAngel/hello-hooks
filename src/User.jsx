import {
    useState,
    useEffect,
} from 'react';
import {
    number,
    string,
    bool,
    func,
} from 'prop-types';

export const User = ({id, name, addToFavourites, isFavourite}) => {
    const [data, setData] = useState({});
    const [isActive, setIsActive] = useState(false);

    const handlerClick = () => {
        addToFavourites(id);
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (isActive) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(userData => setData(userData));
        }
    }, [isActive, id]);

    return (
        <li onClick={handlerClick} style={{color: isFavourite && 'red'}}>
            {name}
            {isActive && (
                <div>
                    {data.email}
                </div>
            )}
        </li>
    )
};

User.propTypes = {
    id: number.isRequired,
    name: string.isRequired,
    addToFavourites: func.isRequired,
    isFavourite: bool.isRequired,
};

User.defaultProps = {
  isFavourite: false,
};