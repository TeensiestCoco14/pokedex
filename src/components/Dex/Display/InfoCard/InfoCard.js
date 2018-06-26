import React from "react";

const infoCard = (props) => {
	return (
		<div onClick = {props.clicked} style = {{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: "0.3s", padding: "5px", margin: "2px", borderRadius: "3%"}}>
			<h3>{props.infoType}</h3>
		</div>
	);
}

export default infoCard;