import { FETCH_MODELS, FULFILLED } from '../constants';

const initialState = {}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_MODELS}_${FULFILLED}`:
            return {
                ...state,
                models: action.payload.data
            }
        default:
            return state;
    }
}