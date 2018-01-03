import React from 'react';
import SampleApiCalls from '../components/SampleApiCalls';
import ModelList from '../components/ModelList';

const ApiDemo = (props) =>
    <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-6">
            <SampleApiCalls
                status={ props.status }
                selectedCrudOperation={ props.selectedCrudOperation }
                setCrudOperation={ props.actions.setCrudOperation }
                fetchModelsActionDispatcher={ props.actions.fetchModels }
                addModelActionDispatcher={ props.actions.addModel }
                updateModelActionDispatcher={ props.actions.updateModel }
                deleteModelActionDispatcher={ props.actions.deleteModel }
            />
        </div>
        <div className="col-sm-12 col-md-10 col-lg-6">
            <ModelList
                models={ props.models }
            />
        </div>
    </div>

export default ApiDemo;