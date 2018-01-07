import React from 'react'
import SampleApiCalls from '../components/SampleApiCalls'
import Loader from '../components/Loader'
import ModelList from '../components/ModelList'
import '../assets/scss/ApiDemo.scss'
import { PENDING, REJECTED, FULFILLED } from '../constants'
import Error from './Error';

const ApiDemo = (props) =>
    <div className="container">
        <div className="row text-center">
            <div className="col-sm-12 col-md-6 col-lg-4 jumbotron">
                <SampleApiCalls
                    selectedCrudOperation={ props.selectedCrudOperation }
                    setCrudOperation={ props.actions.setCrudOperation }
                    fetchModelsActionDispatcher={ props.actions.fetchModels }
                    addModelActionDispatcher={ props.actions.addModel }
                    updateModelActionDispatcher={ props.actions.updateModel }
                    deleteModelActionDispatcher={ props.actions.deleteModel }
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 jumbotron">
                { props.status }
                {
                    props.status === FULFILLED
                        ? <div className="success">
                            success message
                        </div>
                        : null
                }
                {
                    props.status === PENDING ? <Loader /> : null
                }
                {
                    props.status === REJECTED
                        ? <Error
                            error={ props.errorMessage }
                        />
                        : null
                }
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 jumbotron">
                <ModelList
                    models={ props.models }
                />
            </div>
        </div>
    </div>

export default ApiDemo;