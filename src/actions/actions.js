import { FETCH_MODELS, ADD_MODEL, UPDATE_MODEL, DELETE_MODEL } from '../constants';
import * as service from '../services'

const actions = {
    fetchModels: () => ({
        type: FETCH_MODELS,
        payload: service.fetchModels()
    }),
    addModel: (model) => ({
        type: ADD_MODEL,
        payload: service.addModel(model)
    }),
    updateModel: (model) => ({
        type: UPDATE_MODEL,
        payload: service.updateModel(model)
    }),
    deleteModel: (model) => ({
        type: DELETE_MODEL,
        payload: service.deleteModel(model)
    })
};

export default actions;