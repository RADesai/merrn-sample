// import { ACTION_NAME } from '../constants';
import { FETCH_MODELS, PENDING, FULFILLED, REJECTED } from '../constants';

const initialState = {
    status: ''
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_MODELS}_${PENDING}`:
            return {
                ...state,
                status: PENDING
            }
        case `${FETCH_MODELS}_${FULFILLED}`:
            return {
                ...state,
                status : FULFILLED,
                models: action.payload.data
            }
        case `${FETCH_MODELS}_${REJECTED}`:
            return {
                ...state,
                status : REJECTED
            }
        default:
            return state;
    }
}