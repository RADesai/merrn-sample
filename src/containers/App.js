import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import LandingPageHeader from '../components/LandingPageHeader';
import ApiDemo from '../components/ApiDemo';
import '../assets/scss/App.scss';

class App extends Component {
    render() {
        return (
            <div className="container">
                <LandingPageHeader />
                <ApiDemo
                    { ...this.props }
                />
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object,
    selectedCrudOperation: PropTypes.string,
    models: PropTypes.array,
    status: PropTypes.string
};

function mapStateToProps(state) {
    const { selectedCrudOperation, models } = state.sampleReducer;
    const { status } = state.statusReducer;
    return { selectedCrudOperation, models, status };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);