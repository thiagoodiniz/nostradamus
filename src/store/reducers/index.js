import { combineReducers } from 'redux';
import trainingReducer from './trainingReducer';
import alertReducer from './alertReducer';

export default combineReducers({
    alertReducer,
    trainingReducer
});