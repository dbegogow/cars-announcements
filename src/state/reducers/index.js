import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import filtersReducer from './filtersReducer';

const reducers = combineReducers({
    cars: carsReducer,
    filters: filtersReducer
});

export default reducers;