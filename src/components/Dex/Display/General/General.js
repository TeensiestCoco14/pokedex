import React from "react";

const general = (props) => {
	return(
		<div>
			{props.name ? <h2>#{props.id}, {props.name}</h2> : null}
			{props.captured ? <img src = {props.sprite} alt = "" style = {{width: "100px", height: "auto"}}/> : null}
			{props.shinyCaptured ? <img src = {props.shinySprite} alt = "" style = {{width: "100px", height: "auto"}}/> : null}
			{props.count ? <h4>Captured: {props.count}</h4> : null}
			
		</div>
	);
}

export default general;