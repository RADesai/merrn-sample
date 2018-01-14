import React from 'react'
import SampleApiCalls from '../components/SampleApiCalls'
import ModelList from '../components/ModelList'
import ApiStatus from '../components/ApiStatus'
import '../assets/scss/ApiDemo.scss'

const ApiDemo = props =>
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
                <ApiStatus
                    status={ props.status }
                    serviceMessage={ props.serviceMessage }
                />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 jumbotron">
                <ModelList
                    models={ props.models }
                />
            </div>
        </div>
    </div>

export default ApiDemo;