//Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackData = (state = { feeling: 0, understanding: 0, support: 0, comments: '' }, action) => {
    switch (action.type) {
        case 'FEELING':
            return {
                ...state,
                feeling: action.payload,
            }
        case 'UNDERSTANDING':
            return {
                ...state,
                understanding: action.payload
            }
        case 'SUPPORT':
            return {
                ...state,
                support: action.payload
            }
        case 'COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state;
    }
  
}

const storeInstance = createStore(
    combineReducers({
        feedbackData

    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
