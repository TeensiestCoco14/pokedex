import React from "react";
import Catch from "../../components/Catch/Catch";

const fieldType = (props) => {

	const style = {
		backgroundImage: "url(" + props.background +")",
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		width: "675px",
		height: "634px",
		margin: "auto",
		border: "1px solid black",
		zIndex: "0"
	}

	return(
		<div style = {style}>
			{props.spawned ? <Catch clicked = {props.clicked} notification = "A Wild Pokemon has Appeared!!" text = "Capture Pokemon!"/> : null}
			{props.captured ? <Catch clicked = {props.confirm} notification = {"You caught a wild " + props.pokemon + "!!"} text = "Confirm Capture!" sprite = {props.sprite}/> : null}
		</div>
	);
}

export default fieldType;