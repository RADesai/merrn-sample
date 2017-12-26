const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name: String
});

const SampleModel = mongoose.model('SampleModel', modelSchema);
module.exports = SampleModel;