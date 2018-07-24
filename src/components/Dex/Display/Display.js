import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import General from "./General/General";
import Button from "../../UI/Button/Button";
import Description from "./Description/Description";

import "./Display.css";

const display = (props) => {
	
	const style = {
		
	}

	let button = null;

	return(
		<div className = "Display">
			<div>
				{props.showPageOptions ? <InfoCard infoType = "Capture Info" clicked = {props.toCaptureInfo}/> : null}
				{props.showPageOptions ? <InfoCard infoType = "Description Info" clicked = {props.toDescription}/> : null}
				{props.showPageOptions ? <InfoCard infoType = "Region Info"/> : null}
			</div>
			{props.showPage.captureInfo ? <General 
				name = {props.displayed.name} 
				count = {props.displayed.count} 
				id = {props.displayed.id} 
				captured = {props.displayed.captured}
				shinyCaptured = {props.displayed.shinyCaptured}
				sprite = {props.displayed.sprite}
				shinySprite = {props.displayed.shinySprite}
				clicked = {props.backToOptions}/> : null}
			{props.showPage.description ? <Description 
				name = {props.displayed.name} 
				description = {props.displayed.description}
				species = {props.displayed.species}
				type1 = {props.displayed.type1}
				type2 = {props.displayed.type2}
				id = {props.displayed.id} 
				sprite = {props.displayed.sprite}
				clicked = {props.backToOptions}/> : null}
		</div>
	);
};

export default display;