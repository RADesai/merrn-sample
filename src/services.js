import axios from 'axios';

// TODO: Send error in response when this error is returned on service timeout: {"name":"MongoError","message":"failed to
// reconnect after 30 attempts with interval 1000 ms"}
export const fetchModels = () => axios.get('/api/models')