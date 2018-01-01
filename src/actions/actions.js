import { FETCH_MODELS, ADD_MODEL, UPDATE_MODEL } from '../constants';
import * as services from '../services'

const actions = {
    fetchModels: () => ({
        type: FETCH_MODELS,
        payload: services.fetchModels()
    }),
    addModel: (model) => ({
        type: ADD_MODEL,
        payload: services.addModel(model)
    }),
    updateModel: (model) => ({
        type: UPDATE_MODEL,
        payload: services.updateModel(model)
    })
};

export default actions;