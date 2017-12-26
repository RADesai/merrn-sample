import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import LandingPage from '../components/LandingPage';
import '../assets/scss/App.scss';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <LandingPage
                    status={ this.props.status }
                    fetchModelsActionDispatcher={ this.props.actions.fetchModels }
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
    const { status, models } = state.appReducer;
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