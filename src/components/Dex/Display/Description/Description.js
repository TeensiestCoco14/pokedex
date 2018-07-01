import React from "react";

const description = (props) => {
	return(
		<div>
			{props.sprite ? <img src = {props.sprite} alt = "" style = {{width: "40px", height: "auto", display: "inline-block"}}/> : null}
			{props.name ? <h2 style = {{display: "inline"}}>#{props.id}, {props.name}</h2> : null}
			{props.description ? <p style = {{textAlign: "left", padding: "5px"}}>{props.description}</p> : null}
			
		</div>
	);
}

export default description;