import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import General from "./General/General";
import Button from "../../UI/Button/Button";
import Description from "./Description/Description";

const display = (props) => {
	
	const style = {
		width: "350px",
		height: "250px",
		backgroundColor: "rgb(104, 161, 249)",
		borderRadius: "3%",
		margin: "auto",
		zIndex: 100
	}

	let button = null;

	if (props.showPage.captureInfo || props.showPage.description) {
		button = (
			<Button clicked = {props.backToOptions} text = "Back" />
		);
	}

	return(
		<div style = {style}>
			{props.showPageOptions ? <InfoCard infoType = "Capture Info" clicked = {props.toCaptureInfo}/> : null}
			{props.showPageOptions ? <InfoCard infoType = "Description Info" clicked = {props.toDescription}/> : null}
			{props.showPageOptions ? <InfoCard infoType = "Region Info"/> : null}
			{props.showPage.captureInfo ? <General 
				name = {props.displayed.name} 
				count = {props.displayed.count} 
				id = {props.displayed.id} 
				sprite = {props.displayed.sprite}/> : null}
			{props.showPage.description ? <Description 
				name = {props.displayed.name} 
				description = {props.displayed.description} 
				id = {props.displayed.id} 
				sprite = {props.displayed.sprite}/> : null}
			{button}
		</div>
	);
};

export default display;