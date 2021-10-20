import {
    SORT_STATES_,
    sortStatesValidator,
} from './consts';
import {
    func,
} from 'prop-types';

export const SortButton = ({value, setValue}) => (
    <select value={value} onChange={setValue}>
        <option disabled value={SORT_STATES_.DEFAULT}>Sort by</option>
        <option value={SORT_STATES_.INCREASE}>Increase</option>
        <option value={SORT_STATES_.DECREASE}>Decrease</option>
    </select>
);

SortButton.propTypes = {
  value: sortStatesValidator,
  setValue: func.isRequired,
};

SortButton.defaultProps = {
    value: SORT_STATES_.DEFAULT,
};