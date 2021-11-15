import { combineReducers } from 'redux';
import carsReducer from './carsReducer';

const reducers = combineReducers({
    cars: carsReducer
});

export default reducers;