import React from "react";
import DexEntry from "./DexEntry/DexEntry";

const selector = (props) => {
	
	const style = {
		width: "350px",
		height: "350px",
		backgroundColor: "rgb(159, 194, 249)",
		borderRadius: "5%",
		margin: "auto",
		marginTop: "50px",
		overflow: "auto",
		zIndex: 100
	}

	return(
		<div style = {style}>
			<DexEntry pokedex = {props.pokedex} clicked = {(entry) => props.clicked(entry)}/>
		</div>
	);
};

export default selector;