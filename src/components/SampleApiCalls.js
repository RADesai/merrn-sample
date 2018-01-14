import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import { ADD_MODEL, UPDATE_MODEL, DELETE_MODEL, CRUD_METHODS } from '../constants';
import '../assets/scss/SampleApiCalls.scss';

const SampleApiCalls = props => {
    const {
        fetchModelsActionDispatcher,
        addModelActionDispatcher,
        updateModelActionDispatcher,
        deleteModelActionDispatcher,
        selectedCrudOperation,
        setCrudOperation,
    } = props;

    const getCrudButton = (methodType) =>
            <button
                key={ methodType }
                type="button"
                className="btn btn-crud-operation"
                onClick={ () => setCrudOperation(methodType) }
            >
                { methodType[0] }
            </button>

    const getCrudButtons = () =>
        <div className="btn-group btn-group-lg" role="group" aria-label="CRUD-operation-choices">
            { CRUD_METHODS.map((crudMethod) =>
                getCrudButton(crudMethod)
            )}
        </div>

    const getCrudOperation = () => {
        const crudOps = {
            'CREATE': getAddModelForm,
            'READ': getGetCallButton,
            'UPDATE': getUpdateModelForm,
            'DELETE': getDeleteModelForm
        };
        return crudOps[selectedCrudOperation] ? crudOps[selectedCrudOperation]() : null;
    }

    const getGetCallButton = () =>
        <div>
            <div className="http-method">Retrieve<br /><small>(GET)</small></div>
            <button
                type="button"
                className="btn btn-api-call"
                onClick={ fetchModelsActionDispatcher }>Fetch
            </button>
        </div>

    const getAddModelForm = () =>
        <Form
            actionDispatcher={ addModelActionDispatcher }
            actionType={ ADD_MODEL }
        />
    
    const getUpdateModelForm = () =>
        <Form
            actionDispatcher={ updateModelActionDispatcher }
            actionType={ UPDATE_MODEL }
        />

    const getDeleteModelForm = () =>
        <Form
            actionDispatcher={ deleteModelActionDispatcher }
            actionType={ DELETE_MODEL }
        />

    return (
        <div className="row justify-content-center">
            <div className="sample-calls">
                { getCrudButtons() }
                <div className="crud-operations">
                    { getCrudOperation() }
                </div>
            </div>
        </div>
    )
}

SampleApiCalls.propTypes = {
    selectedCrudOperation: PropTypes.string,
    setCrudOperation: PropTypes.func,
    fetchModelsActionDispatcher: PropTypes.func,
    addModelActionDispatcher: PropTypes.func,
    updateModelActionDispatcher: PropTypes.func,
    deleteModelActionDispatcher: PropTypes.func
}

export default SampleApiCalls;