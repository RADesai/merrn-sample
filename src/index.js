import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={App}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);