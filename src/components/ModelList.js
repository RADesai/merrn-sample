import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/ModelList.scss';

export default function ModelList(props) {
    const { models } = props;

    return models && models.length > 0 ?  
        <ul className="list-group">
            { models.map((model) =>
            <li key={ model._id } className="list-group-item">
                { model.name }
                <br />
                <small>id - { model._id }</small>
            </li>
            )}
        </ul >
        : null
}

ModelList.propTypes = {
    models: PropTypes.array
}
