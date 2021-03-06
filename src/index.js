import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from './store/reducers/reducer'
import thunk from 'redux-thunk'
import "semantic-ui-css/semantic.min.css"
import {ActionCableProvider} from 'react-actioncable-provider'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <div id='bg' >
        <ActionCableProvider url='ws://localhost:3000/cable' >
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                    
                </BrowserRouter>   
            </Provider> 
        </ActionCableProvider>    
    </div>
   
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
