import { FETCH_MODELS, ADD_MODEL } from '../constants';
import * as services from '../services'

const actions = {
    fetchModels: () => ({
        type: FETCH_MODELS,
        payload: services.fetchModels()
    }),
    addModel: (model) => ({
        type: ADD_MODEL,
        payload: services.addModel(model)
    })
};

export default actions;