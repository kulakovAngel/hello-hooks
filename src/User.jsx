import {
    useState,
    useEffect,
} from 'react';

export const User = ({id, name}) => {
    const [data, setData] = useState({});
    const [isActive, setIsActive] = useState(false);

    const handlerClick = () => {
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
        <li onClick={handlerClick}>
            {name}
            {isActive && (
                <div>
                    {data.email}
                </div>
            )}
        </li>
    )
};