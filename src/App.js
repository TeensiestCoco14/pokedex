import React, { Component } from 'react';
import {Route} from "react-router-dom";

import './App.css';

import CatchingArea from "./containers/CatchingArea/CatchingArea";
import Pokedex from "./containers/Pokedex/Pokedex";
import Navbar from "./components/Navbar/Navbar";


class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Route path = "/catch" component = {CatchingArea} />
				<Route path = "/" exact component = {Pokedex} />
			</div>
		);
	}
}

export default App;
