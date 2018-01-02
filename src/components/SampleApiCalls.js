import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import { Field, reduxForm } from 'redux-form'
import { ADD_MODEL, UPDATE_MODEL, DELETE_MODEL } from '../constants';
import '../assets/scss/SampleApiCalls.scss';

const SampleApiCalls = (props) => {
    const {
        status, fetchModelsActionDispatcher, addModelActionDispatcher, updateModelActionDispatcher, deleteModelActionDispatcher,
        handleSubmit, pristine, reset, submitting } = props;

    const getGetCallButton = () => 
        <button
            type="button"
            className="btn btn-api-call"
            onClick={ fetchModelsActionDispatcher }>GET Call
        </button>

    const getIdField = () => 
        <div>
            <label>Model ID</label>
            <Field name="modelId" component="input" type="text" placeholder="Model ID"/>
        </div>

    const getNameField = () =>
        <div>
            <label>Name</label>
            <Field name="modelName" component="input" type="text" placeholder="Model Name"/>
        </div>

    const getForm = (actionDispatcher, actionType) => {        
        return (
            <div>
                <div>{ actionType === ADD_MODEL ? 'POST Call' : '' }</div>
                <div>{ actionType === UPDATE_MODEL ? 'PUT Call' : '' }</div>
                <div>{ actionType === DELETE_MODEL ? 'DELETE Call' : '' }</div>
                <form onSubmit={ handleSubmit((form) => actionDispatcher(form)) }>
                    { actionType === UPDATE_MODEL || actionType === DELETE_MODEL ? getIdField() : <div /> }
                    { actionType === ADD_MODEL || actionType === UPDATE_MODEL ? getNameField() : <div /> }
                    <div className="btn-group" role="group" aria-label="POST-example">
                        <button type="submit" disabled={ pristine || submitting } className="btn btn-api-call">
                            Submit
                        </button>
                        <button type="button" disabled={ pristine || submitting } onClick={ reset } className="btn btn-api-call">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    const getAddModelForm = () => getForm(addModelActionDispatcher, ADD_MODEL);
    
    const getUpdateModelForm = () => getForm(updateModelActionDispatcher, UPDATE_MODEL);

    const getDeleteModelForm = () => getForm(deleteModelActionDispatcher, DELETE_MODEL);
    
    return (
        <div className="row justify-content-center">
            <div className="col-10 col-lg-6 landing text-center">
                <div>GET CALL</div>
                <div>{ getGetCallButton() }</div>
                <br />{ getAddModelForm() }
                <br />{ getUpdateModelForm() }
                <br />{ getDeleteModelForm() }
                <Loader status={ status }/>
                <br />
            </div>
        </div>
    )
}

SampleApiCalls.propTypes = {
    status: PropTypes.string,
    fetchModelsActionDispatcher: PropTypes.func,
    addModelActionDispatcher: PropTypes.func,
    updateModelActionDispatcher: PropTypes.func,
    deleteModelActionDispatcher: PropTypes.func,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
}

const fields = ['modelName', 'modelId'];

export default reduxForm({
    form: 'sample',
    fields
})(SampleApiCalls)