import {SORT_STATES_} from './consts';

export const SortButton = ({value, setValue}) => (
    <select value={value} onChange={setValue}>
        <option disabled value={SORT_STATES_.DEFAULT}>Sort by</option>
        <option value={SORT_STATES_.INCREASE}>Increase</option>
        <option value={SORT_STATES_.DECREASE}>Decrease</option>
    </select>
);