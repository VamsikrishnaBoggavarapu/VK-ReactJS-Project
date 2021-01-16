import { combineReducers } from 'redux';
import rooterState from './rooterState';
import pageReducer from './pageReducer';
import responseReducer from './responseReducer';

const rootReducer = combineReducers({
    rooterState,
    page: pageReducer,
    response: responseReducer
});

export default rootReducer;
