import {useState} from 'react';

import {UsersList} from './UsersList';
import {SortButton} from './SortButton';
import {SORT_STATES_} from './consts';

export const App = () => {
    const [sortBy, setSortBy] = useState(SORT_STATES_.DEFAULT);

    const handleChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <>
            <SortButton value={sortBy} setValue={handleChange}/>
            <UsersList sortBy={sortBy} />
        </>
    );
};