import React from 'react';
import ReactDOM from 'react-dom';
import catchingReducer from "./store/reducers/catching";
import pokedexReducer from "./store/reducers/pokedex";
import {Provider} from "react-redux";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	catching: catchingReducer,
	pokedex: pokedexReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

const app =(
	<Provider store = {store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
