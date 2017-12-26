import { FETCH_MODELS } from '../constants';
import * as service from '../services'

const actions = {
    fetchModels: () => ({
        type: FETCH_MODELS,
        payload: service.fetchModels()
    })
};

export default actions;