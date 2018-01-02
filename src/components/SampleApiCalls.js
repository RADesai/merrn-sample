import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import Form from '../components/Form';
import { ADD_MODEL, UPDATE_MODEL, DELETE_MODEL, CRUD_METHODS } from '../constants';
import '../assets/scss/SampleApiCalls.scss';

const SampleApiCalls = (props) => {
    const {
        status,
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
        if (selectedCrudOperation === 'CREATE') {
            return getAddModelForm()
        } else if (selectedCrudOperation === 'READ') {
            return getGetCallButton()
        } else if (selectedCrudOperation === 'UPDATE') {
            return getUpdateModelForm()
        } else if (selectedCrudOperation === 'DELETE') {
            return getDeleteModelForm()
        } else return null
    }

    const getGetCallButton = () => 
        <button
            type="button"
            className="btn btn-api-call"
            onClick={ fetchModelsActionDispatcher }>GET Call
        </button>

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
            <div className="col-10 col-lg-6 sample-calls text-center">
                { getCrudButtons() }
                <div className="crud-operations">
                    { getCrudOperation() }
                 </div>
                <Loader status={ status }/>
                <br />
            </div>
        </div>
    )
}

SampleApiCalls.propTypes = {
    status: PropTypes.string,
    selectedCrudOperation: PropTypes.string,
    setCrudOperation: PropTypes.func,
    fetchModelsActionDispatcher: PropTypes.func,
    addModelActionDispatcher: PropTypes.func,
    updateModelActionDispatcher: PropTypes.func,
    deleteModelActionDispatcher: PropTypes.func,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
}

export default SampleApiCalls;