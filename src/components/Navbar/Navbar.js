import React from "react";
import Navitem from "./Navitem/Navitem";

import "./Navbar.css";

const navbar = (props) => {
	return(
		<div className = "Navbar">
			<Navitem path = "/" nav = "Pokedex" />
			<Navitem path = "/catch" nav = "Catch Pokemon" />
		</div>
	);
}

export default navbar;