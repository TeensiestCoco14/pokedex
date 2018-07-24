import React from "react";

import "./InfoCard.css";

const infoCard = (props) => {
	return (
		<div onClick = {props.clicked} className = "InfoCard">
			<h3>{props.infoType}</h3>
		</div>
	);
}

export default infoCard;