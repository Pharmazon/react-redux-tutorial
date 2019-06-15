import {combineReducers} from 'redux';

import {ADD_DATA_IN_DETAILS, TOGGLE_ACTIVE, FILTER, FILTER_DETAILS, START_LOADING, STOP_LOADING, ADD_DATA} from '../Constants';

let gridState = {
    records: [],
    filtered: [],
    loading: false
};

let detailsState = {
    details: [],
    filtered: [],
    loading: false
};

export function grid(state = gridState, action) {
    switch (action.type) {
        case TOGGLE_ACTIVE:
            let newRecords = [...state.records];
            let id = action.value;
            let record = newRecords.find(record => record.id == id);
            record.active = !record.active;
            return Object.assign({}, state, {
                records: newRecords
            });
        case FILTER:
            let filteredOutIds = state.records.filter(
                (record) =>
                    !record.firstName.toUpperCase().includes(
                        action.value.toUpperCase()))
                .map(record => record.id);
            return Object.assign({}, state, {filtered: filteredOutIds});
        case START_LOADING:
            return Object.assign({}, state, {
                loading: true
            });
        case STOP_LOADING:
            return Object.assign({}, state, {
                loading: false
            });
        case ADD_DATA:
            return Object.assign({}, state, {
                records: [...action.value]
            });
        default:
            return gridState
    }
}

export function details(state = detailsState, action) {
    switch (action.type) {
        case FILTER_DETAILS:
            return action.value ? detailsState.details.filter((record) => {
                return record.id == action.value;
            }) : detailsState.details;
        case ADD_DATA_IN_DETAILS:
            return Object.assign({}, state, {
                details: [...action.value]
            });
        default:
            return detailsState
    }
}

export const rootReducer = combineReducers({
    details,
    grid
});

