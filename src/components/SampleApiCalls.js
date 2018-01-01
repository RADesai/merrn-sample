import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import { Field, reduxForm } from 'redux-form'
import '../assets/scss/SampleApiCalls.scss';

const SampleApiCalls = (props) => {
    const {
        status, fetchModelsActionDispatcher, addModelActionDispatcher, updateModelActionDispatcher,
        handleSubmit, pristine, reset, submitting } = props;

    const getGetCallButton = () => 
        <button
            type="button"
            className="btn btn-api-call"
            onClick={ fetchModelsActionDispatcher }>GET Call
        </button>

    const getForm = () => {        
        return (
            <form onSubmit={handleSubmit((form) => addModelActionDispatcher(form) )}>
                <div>
                    <label>Name</label>
                    <Field name="modelName" component="input" type="text" placeholder="Name your object"/>
                </div>
                <div className="btn-group" role="group" aria-label="POST-example">
                    <button type="submit" disabled={ pristine || submitting } className="btn btn-api-call">
                        Submit
                    </button>
                    <button type="button" disabled={ pristine || submitting } onClick={ reset } className="btn btn-api-call">
                        Reset
                    </button>
                </div>
            </form>
        )
    }
    
    const getUpdateModelForm = () => {
        return (
            <form onSubmit={handleSubmit((form) => updateModelActionDispatcher(form) )}>
                <div>
                    <label>Model ID</label>
                    <Field name="modelId" component="input" type="text" placeholder="Model ID"/>
                </div>
                <div>
                    <label>Name</label>
                    <Field name="newModelName" component="input" type="text" placeholder="Model Name"/>
                </div>
                <div className="btn-group" role="group" aria-label="POST-example">
                    <button type="submit" disabled={ pristine || submitting } className="btn btn-api-call">
                        Submit
                    </button>
                    <button type="button" disabled={ pristine || submitting } onClick={ reset } className="btn btn-api-call">
                        Reset
                    </button>
                </div>
            </form>
        )
    }

    return (
        <div className="row justify-content-center">
            <div className="col-10 col-lg-6 landing text-center">
                <div>GET CALL</div>
                <div>{ getGetCallButton() }</div>
                <br />
                <div>POST CALL</div>
                <div>{ getForm() }</div>
                <br />
                <div>UPDATE CALL</div>
                <div>{ getUpdateModelForm() }</div>
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
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
}

const fields = ['modelName', 'modelId', 'newModelName'];

export default reduxForm({
    form: 'sample',
    fields
})(SampleApiCalls)