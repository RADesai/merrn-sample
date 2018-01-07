import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import Header from '../components/Header';
import ApiDemo from '../components/ApiDemo';
import Footer from '../components/Footer';
import '../assets/scss/App.scss';

class App extends Component {
    render() {
        return (
            <div className="contain">
                <Header />
                <ApiDemo
                    { ...this.props }
                />
                <Footer />
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object,
    selectedCrudOperation: PropTypes.string,
    models: PropTypes.array,
    errorMessage: PropTypes.object,
    status: PropTypes.string
};

function mapStateToProps(state) {
    const { selectedCrudOperation, models } = state.sampleReducer;
    const { status, errorMessage } = state.statusReducer;
    return { selectedCrudOperation, models, status, errorMessage };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);