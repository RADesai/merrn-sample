import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import store from './store'
import App from './containers/App'

render(
    <Provider store={store}>
        <AppContainer>
            <BrowserRouter>
                <Route exact path="/" component={App}/>
            </BrowserRouter>
        </AppContainer>
    </Provider>,
    document.getElementById('app')
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module
        .hot
        .accept()
}