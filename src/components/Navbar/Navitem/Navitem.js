import React from "react";
import {Link} from "react-router-dom";

import "./Navitem.css";

const navitem = (props) => {
	return(
		<Link className = "Navitem" to = {props.path}><h3>{props.nav}</h3></Link>
	);
}

export default navitem;