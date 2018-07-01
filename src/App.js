import React, { Component } from 'react';
<<<<<<< HEAD
import {Route} from "react-router-dom";

import './App.css';
import CatchingArea from "./containers/CatchingArea/CatchingArea";
import Pokedex from "./containers/Pokedex/Pokedex";
import Navbar from "./components/Navbar/Navbar";
=======
import './App.css';
import CatchingArea from "./containers/CatchingArea/CatchingArea";
import Pokedex from "./containers/Pokedex/Pokedex";
>>>>>>> f8055c1fcbbd5e3af08ba1a8615c789f9a5d73b0

class App extends Component {
	render() {
		return (
			<div className="App">
<<<<<<< HEAD
				<Navbar />
				<br/>
				<Route path = "/catch" component = {CatchingArea} />
				<Route path = "/" exact component = {Pokedex} />
=======
				<CatchingArea />
				<Pokedex />
				<br/>
>>>>>>> f8055c1fcbbd5e3af08ba1a8615c789f9a5d73b0
			</div>
		);
	}
}

export default App;
