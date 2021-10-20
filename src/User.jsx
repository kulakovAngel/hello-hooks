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
import styled from 'styled-components';

const StyledUser = styled.li`
    color: ${({isFavourite}) => isFavourite ? 'red' : 'blue'};
`;

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
        <StyledUser onClick={handlerClick} isFavourite={isFavourite}>
            {name}
            {isActive && (
                <div>
                    {data.email}
                </div>
            )}
        </StyledUser>
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