import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import { ADD_MODEL, UPDATE_MODEL, DELETE_MODEL } from '../constants';
import '../assets/scss/Form.scss';

const Form = (props) => {
    const {
        actionDispatcher,
        actionType,
        handleSubmit,
        pristine,
        reset,
        submitting
    } = props;

    const getMethodHeader = (methodType) => {
        const headers = {
            ADD_MODEL: <div className="http-method">Create<br /><small>(POST)</small></div>,
            UPDATE_MODEL: <div className="http-method">Update<br /><small>(PUT)</small></div>,
            DELETE_MODEL: <div className="http-method">Delete<br /><small>(DELETE)</small></div>
        };
        return headers[methodType]
    }

    const getIdField = () => 
        <div className="form-field">
            <Field name="modelId" component="input" type="text" placeholder="Model ID"/>
        </div>

    const getNameField = () =>
        <div className="form-field">
            <Field name="modelName" component="input" type="text" placeholder="Model Name"/>
        </div>

    return (
        <div className="form-container">
            { getMethodHeader(actionType) }
            <form onSubmit={ handleSubmit(form => actionDispatcher(form)) }>
                { actionType === UPDATE_MODEL || actionType === DELETE_MODEL ? getIdField() : null }
                { actionType === ADD_MODEL || actionType === UPDATE_MODEL ? getNameField() : null }
                <div className="btn-group" role="group" aria-label="example">
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

Form.propTypes = {
    actionDispatcher: PropTypes.func,
    actionType: PropTypes.string,
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
}

const fields = ['modelName', 'modelId'];

export default reduxForm({
    form: 'sample',
    fields
})(Form)