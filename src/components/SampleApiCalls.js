import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import { PENDING, FULFILLED } from '../constants';
import { Field, reduxForm } from 'redux-form'
import '../assets/scss/SampleApiCalls.scss';

const SampleApiCalls = (props) => {
    const {
        status, fetchModelsActionDispatcher, addModelActionDispatcher,
        handleSubmit, pristine, reset, submitting } = props;

    const getButtonStyle = () => {
        return status === PENDING
            ? { border: '1px solid #fff' }
            : status === FULFILLED ? { border: '1px solid #7AB58D' } : { border: '1px solid #A70B0B' }
    }

    const getGetCallButton = () => 
        <button
            type="button"
            className="btn btn-outline-primary"
            onClick={ fetchModelsActionDispatcher }
            style={ getButtonStyle() }>GET Call
        </button>

    const getForm = () => {        
        return (
            <form onSubmit={handleSubmit((form) => addModelActionDispatcher(form) )}>
                <div>
                    <div>
                    <label>Model Name</label>
                        <Field name="modelName" component="input" type="text" placeholder="Name your object"/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={ pristine || submitting }>
                        Submit
                    </button>
                    <button type="button" disabled={ pristine || submitting } onClick={ reset }>
                        Reset
                    </button>
                </div>
            </form>
        )
    }

    return (
        <div className="row justify-content-center">
            <div className="col-10 col-lg-6 landing text-center">
                <div>
                    { getGetCallButton() }
                </div><br />
                <div>
                    { getForm() }
                </div>
                <Loader status={ status }/>
            </div>
        </div>
    )
}

SampleApiCalls.propTypes = {
    status: PropTypes.string,
    fetchModelsActionDispatcher: PropTypes.func,
    addModelActionDispatcher: PropTypes.func,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
}

const fields = ['modelName'];

export default reduxForm({
    form: 'sample',
    fields
})(SampleApiCalls)