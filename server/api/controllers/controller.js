const SampleModel = require('../models/SampleModel.js');

module.exports = {
    addModel: (req, res) => {
        let model = new SampleModel();
        model.name = req.body.name;
        model.save((err) => {
            err
                ? res.send(err)
                : res.json({message: 'Model created!'})
        });
    },
    getModels: (req, res) => {
        SampleModel.find((err, models) => {
            err
                ? res.send(err)
                : res.json(models);
        });
    }
}