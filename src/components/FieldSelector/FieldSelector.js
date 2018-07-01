import React from "react";

import "./FieldSelector.css";

const fieldSelector = (props) => {
	return (
		<div className = "FieldSelector" onClick = {props.clicked}>
			<h2>{props.field}</h2>
			<p>{props.desciption}</p>
		</div>
	);
}

export default fieldSelector;