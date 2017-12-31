import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import statusReducer from './statusReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    sampleReducer,
    statusReducer,
    form: formReducer
})

export default rootReducer;