import React from "react";

const general = (props) => {
	return(
		<div>
			{props.name ? <h2>#{props.id}, {props.name}</h2> : null}
			<img src = {props.sprite} alt = "" style = {{width: "100px", height: "auto"}}/>
			{props.count ? <h4>Captured: {props.count}</h4> : null}
			
		</div>
	);
}

export default general;