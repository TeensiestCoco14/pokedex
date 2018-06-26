import React, { Component } from 'react';
import './App.css';
import CatchingArea from "./containers/CatchingArea/CatchingArea";
import Pokedex from "./containers/Pokedex/Pokedex";

class App extends Component {
	render() {
		return (
			<div className="App">
				<CatchingArea />
				<Pokedex />
				<br/>
			</div>
		);
	}
}

export default App;
