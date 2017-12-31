import { FETCH_MODELS, ADD_MODEL, PENDING, FULFILLED, REJECTED } from '../constants';

const initialState = {}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_MODELS}_${PENDING}`:
        case `${ADD_MODEL}_${PENDING}`:
            return {
                status: PENDING
            }
        case `${FETCH_MODELS}_${FULFILLED}`:
        case `${ADD_MODEL}_${FULFILLED}`:
            return {
                status: FULFILLED
            }
        case `${FETCH_MODELS}_${REJECTED}`:
        case `${ADD_MODEL}_${REJECTED}`:
            return {
                status: REJECTED
            }
        default:
            return state;
    }
}