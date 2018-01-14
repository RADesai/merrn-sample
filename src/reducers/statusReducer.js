import { FETCH_MODELS, ADD_MODEL, UPDATE_MODEL, DELETE_MODEL, PENDING, FULFILLED, REJECTED } from '../constants';

const initialState = {}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_MODELS}_${PENDING}`:
        case `${ADD_MODEL}_${PENDING}`:
        case `${UPDATE_MODEL}_${PENDING}`:
        case `${DELETE_MODEL}_${PENDING}`:
            return {
                ...state,
                status: PENDING
            }
        case `${ADD_MODEL}_${FULFILLED}`:
        case `${UPDATE_MODEL}_${FULFILLED}`:
        case `${DELETE_MODEL}_${FULFILLED}`:
            return {
                status: FULFILLED,
                serviceMessage: action.payload.data.message
            }
        case `${FETCH_MODELS}_${FULFILLED}`:
            return {
                status: FULFILLED
            }
        case `${FETCH_MODELS}_${REJECTED}`:
        case `${ADD_MODEL}_${REJECTED}`:
        case `${UPDATE_MODEL}_${REJECTED}`:
        case `${DELETE_MODEL}_${REJECTED}`:
            return {
                status: REJECTED,
                serviceMessage: action.payload.response.data
            }
        default:
            return state;
    }
}