const SampleModel = require('../models/SampleModel.js');

module.exports = {
    getModels: (req, res) => {
        SampleModel.find((err, models) => {
            err
                ? res.send(err)
                : res.json(models);
        });
    },
    addModel: (req, res) => {
        let model = new SampleModel();
        model.name = req.body.modelName;
        model.save((err) => {
            err
                ? res.send(err)
                : res.json({message: 'Model created!'})
        });
    },
    updateModel: (req, res) => {
        SampleModel.findById(req.params.id, (err, model) => {
            err
                ? res.send(err)
                : model.name = req.body.newModelName;
            model.save((error) => {
                error
                    ? res.send(error)
                    : res.json({message: 'Model updated!'})
            });
        })
    }
}