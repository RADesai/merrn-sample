import { FETCH_MODELS, SET_CRUD_OPERATION, FULFILLED } from '../constants';

const initialState = {
    selectedCrudOperation: ''
}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case `${SET_CRUD_OPERATION}`:
            return {
                ...state,
                selectedCrudOperation: action.payload
            }
        case `${FETCH_MODELS}_${FULFILLED}`:
            return {
                ...state,
                models: action.payload.data
            }
        default:
            return state;
    }
}