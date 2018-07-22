import React from "react";

const description = (props) => {
	return(
		<div>
			<div>
				{props.sprite ? <img src = {props.sprite} alt = "" style = {{width: "40px", height: "auto", display: "inline-block"}}/> : null}
				{props.name ? <h2 style = {{display: "inline"}}>#{props.id}, {props.name}</h2> : null}
				{props.species ? <h3 style = {{display: "inline"}}>{props.species}</h3> : null}
			</div>
			<div>
				{props.type1 ? <h4 style = {{display: "inline"}}>{props.type1}</h4> : null}
				{props.type2 ? <h4 style = {{display: "inline"}}> {props.type2}</h4> : null}
			</div>
			<div>
				{props.description ? <p style = {{textAlign: "left", padding: "5px"}}>{props.description}</p> : null}
			</div>
		</div>
	);
}

export default description;