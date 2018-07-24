import React from "react";
import Button from "../../../UI/Button/Button";

import "./Description.css";

const description = (props) => {

	return(
		<div>
			<div>
				<h2 style = {{display: "inline"}}>#{props.id}, {props.name}: </h2>
				<h4 style = {{display: "inline"}}>{props.species}</h4>
			</div>
			<div style = {{margin: "3px"}}>
				<h3 style = {{display: "inline"}}>Types: </h3>
				<h4 className = {props.type1} style = {{display: "inline", margin: "2px"}}>{props.type1} </h4>
				<h4 className = {props.type2} style = {{display: "inline", margin: "2px"}}> {props.type2}</h4>
			</div>
			<div>
				<p style = {{textAlign: "left", padding: "5px"}}>{props.description}</p>
				<Button clicked = {props.clicked} text = "Back" />
			</div>
			
		</div>
	);
}

export default description;