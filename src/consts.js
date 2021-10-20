import {oneOf} from 'prop-types';

export const SORT_STATES_ = {
    DEFAULT: 'default',
    INCREASE: 'increase',
    DECREASE: 'decrease',
};

export const sortStatesValidator = oneOf(Object.values(SORT_STATES_)).isRequired;