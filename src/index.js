import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger))

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
                
serviceWorker.unregister();