const SampleModel = require('../models/SampleModel.js');

module.exports = {
    getModels: (req, res) => {
        SampleModel.find((err, models) => {
            err
                ? res.status(500).send(err)
                : res.status(200).json(models);
        });
    },
    addModel: (req, res) => {
        let model = new SampleModel();
        model.name = req.body.modelName;
        model.save(err => {
            err
                ? res.status(500).send(err)
                : res.json({message: `"${req.body.modelName}" Created!`})
        });
    },
    updateModel: (req, res) => {
        SampleModel.findById(req.params.id, (err, model) => {
            if (err) {
                res.status(500).send(err)
            } else {
                let previousName = model.name;
                model.name = req.body.modelName || 'Anonymous';
                model.save((error) => {
                    error
                        ? res.status(500).send(error)
                        : res.json({message: `"${previousName}" updated to "${req.body.modelName}"!`})
                });
            }
        })
    },
    deleteModel: (req, res) => {
        SampleModel.findByIdAndRemove(req.params.id, err => {
            err
                ? res.status(500).send(err)
                : res.json({message: 'Successfully Deleted!'})
        })
    }
}