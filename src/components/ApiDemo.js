import React from 'react';
import PropTypes from 'prop-types';
import SampleApiCalls from '../components/SampleApiCalls';
import ModelList from '../components/ModelList';

const ApiDemo = (props) =>
    <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
            <SampleApiCalls
                status={ props.status }
                fetchModelsActionDispatcher={ props.actions.fetchModels }
                addModelActionDispatcher={ props.actions.addModel }
                updateModelActionDispatcher={ props.actions.updateModel }
            />
        </div>
        <div className="col-sm-12 col-lg-6">
            <ModelList
                models={ props.models }
            />
        </div>
    </div>

ApiDemo.propTypes = {
    status: PropTypes.string,
    fetchModelsActionDispatcher: PropTypes.func,
    addModelActionDispatcher: PropTypes.func,
    updateModelActionDispatcher: PropTypes.func,
    models: PropTypes.array
}

export default ApiDemo;