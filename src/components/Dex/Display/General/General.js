import React from "react";
import Button from "../../../UI/Button/Button";

import "./General.css";

const general = (props) => {
	return(
		<div className = "General">
			<div>
				<h2>#{props.id}, {props.name}</h2>
			</div>
			<div>
				<img src = {props.sprite} alt = "" style = {{height: "100px"}}/>
				{props.shinyCaptured ? <img src = {props.shinySprite} alt = "" style = {{height: "100px"}}/> : null}
			</div>
			<div className = "Count">
				<h4 style = {{display: "inline"}}>Captured: {props.count}</h4>
				<Button clicked = {props.clicked} text = "Back" />
			</div>
		</div>
	);
}

export default general;