import React from 'react';
import PropTypes from 'prop-types';
// import '../assets/scss/ModelList.scss'; TODO: Add styles for model list

export default function ModelList(props) {
    const { models } = props;

    return models && models.length > 0 ?  
        <ul className="list-group">
            { models.map((model) =>
            <li key={ model._id } className="list-group-item">
                Name: { model.name }
                <br />
                id: { model._id }
            </li>
            )}
        </ul >
        : <div />
}

ModelList.propTypes = {
    models: PropTypes.array
}
