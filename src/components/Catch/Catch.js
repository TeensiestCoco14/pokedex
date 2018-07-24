import React from "react";
import Button from "../UI/Button/Button";
import QuestionMark from "../../assets/images/utility/questionmark.png";

const Catch = (props) => {

	const style = {
		backgroundColor: "rgba(182, 189, 198, 0.75)",
		border: "2px solid rgba(169, 178, 188, 0.75)",
		borderRadius: "5%",
		width: "50%",
		height: "200px",
		padding: "25px",
		margin: "auto",
		marginTop: "25%",
		zIndex: "100"
	}

	return(
		<div style ={style}>
			<h3>{props.notification}</h3>
			{props.sprite ? <img src = {props.sprite} alt = "" /> : <img src = {QuestionMark} alt = "" />}
			<br/>
			<Button clicked = {props.clicked} text = {props.text} />
		</div>
	);
}

export default Catch