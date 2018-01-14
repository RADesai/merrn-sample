import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import AppHeader from '../components/AppHeader';
import ApiDemo from '../components/ApiDemo';
import AppFooter from '../components/AppFooter';
import '../assets/scss/App.scss';

class App extends Component {
    render() {
        return (
            <div className="contain">
                <AppHeader />
                <ApiDemo
                    { ...this.props }
                />
                <AppFooter />
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object,
    selectedCrudOperation: PropTypes.string,
    models: PropTypes.array,
    serviceMessage: PropTypes.string,
    status: PropTypes.string
};

function mapStateToProps(state) {
    const { selectedCrudOperation, models } = state.sampleReducer;
    const { status, serviceMessage } = state.statusReducer;
    return { selectedCrudOperation, models, status, serviceMessage };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);