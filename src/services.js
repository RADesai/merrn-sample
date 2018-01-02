import axios from 'axios';

// GET all models from db
export const fetchModels = () => axios.get('/api/models')

// POST model to db
export const addModel = (model) => axios.post('/api/models', model)

// UPDATE given model in db
export const updateModel = (newModel) => axios.put(`/api/models/${newModel.modelId}`, newModel)

// DELETE given model from db
export const deleteModel = (model) => axios.delete(`/api/models/${model.modelId}`)