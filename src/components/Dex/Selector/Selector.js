import React from "react";
import DexEntry from "./DexEntry/DexEntry";

import "./Selector.css";

const selector = (props) => {
	return(
		<div className = "Selector">
			<DexEntry pokedex = {props.pokedex} clicked = {(entry) => props.clicked(entry)}/>
		</div>
	);
};

export default selector;