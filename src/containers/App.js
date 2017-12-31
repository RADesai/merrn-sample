import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import LandingPage from '../components/LandingPage';
import SampleApiCalls from '../components/SampleApiCalls';
import '../assets/scss/App.scss';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <LandingPage />
                <SampleApiCalls
                    status={ this.props.status }
                    fetchModelsActionDispatcher={ this.props.actions.fetchModels }
                    addModelActionDispatcher={ this.props.actions.addModel }
                />
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object,
    reduxState: PropTypes.object
};

function mapStateToProps(state) {
    const { models } = state.sampleReducer;
    const { status } = state.statusReducer;
    return { status, models };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);